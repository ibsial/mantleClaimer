import { Contract, JsonRpcProvider, Wallet, ethers } from "ethers";
import { claim } from "./requests.js";
import { appendResultsToFile, importETHWallets, writeToFile } from "./accs.js";
import { delay, explorer, rpc } from "./config.js";
import { getRandomIntFromTo, sleep } from "./helpers.js";

async function sendClaimTx(signer, claimData) {
    const claimContract = new Contract(claimData.contractAddress, claimData.abi, signer);
    try {
        let txData = claimContract.interface.encodeFunctionData(
            claimData.callMethod,
            claimData.contractParameters,
        );
        let tx = {
            to: claimContract.target,
            data: txData,
        };
        let txReceipt = await signer.sendTransaction(tx);
        console.log(explorer + txReceipt.hash);
        return txReceipt.hash;
    } catch (e) {
        console.log(e);
        return "";
    }
}
async function claimWallet(wallet) {
    let claimData = await claim(wallet);
    if (claimData == 0) {
        return "already claimed";
    }
    if (claimData == -1) {
        return "not eligible";
    }
    return sendClaimTx(wallet, claimData);
}
async function runThroughWallets() {
    const ts = new Date().getTime();
    const provider = new JsonRpcProvider(rpc);
    let wallets = await importETHWallets("./privates.txt");
    for (let i = 0; i < wallets.length; i++) {
        let wallet = new Wallet(wallets[i], provider);
        console.log(`[${i + 1}/${wallets.length}] ${wallet.address}`);
        let res = await claimWallet(wallet);
        let pasta = res.length == 0 ? "fail" : res;
        if (i == 0) {
            await writeToFile(`./results/${ts}.csv`, `${wallet.address},${pasta}`);
        } else {
            await appendResultsToFile(`./results/${ts}.csv`, `${wallet.address},${pasta}`);
        }
        await sleep(getRandomIntFromTo(delay[0], delay[1]));
    }
}
runThroughWallets();
