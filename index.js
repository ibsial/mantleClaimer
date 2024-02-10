import { Contract, JsonRpcProvider, Wallet, ethers, parseEther } from "ethers";
import { appendResultsToFile, importETHWallets, writeToFile } from "./accs.js";
import { delay, explorer, rpc, swapAndSendConfig } from "./config.js";
import {
    approve,
    c,
    defaultSleep,
    getBalance,
    getRandomBigInt,
    getRandomIntFromTo,
    sleep,
} from "./helpers.js";
import { swap } from "./fusionx.js";
import { lzData, tokenAddresses } from "./constants.js";
import { sendBridgeTx } from "./leerzira.js";

async function swapMNTToUSDT(signer) {
    try {
        let tier;
        if (swapAndSendConfig.allBalance) {
            let balance = await getBalance(signer, signer.address);
            let amountToLeave = {
                from: parseEther(swapAndSendConfig.amountToLeave.from.toFixed(2)),
                to: parseEther(swapAndSendConfig.amountToLeave.to.toFixed(2)),
            };
            if (balance - amountToLeave.from <= 0) {
                console.log(c.red(`${signer.address} balance is below "to leave from"`));
                return {status: true, log: ""};
            }
            tier = { from: balance - amountToLeave.from, to: balance - amountToLeave.to };
        } else {
            let balance = await getBalance(signer, signer.address);
            let amountToSend = {
                from: parseEther(swapAndSendConfig.amountFromTo.from.toFixed(2)),
                to: parseEther(swapAndSendConfig.amountFromTo.to.toFixed(2)),
            };
            if (balance - amountToSend.from <= 0) {
                console.log(c.red(`${signer.address} balance is below "to send from"`));
                return {status: false, log: `balance is below "to send from"`};
            }
            tier = amountToSend;
        }
        let amount = getRandomBigInt(tier);
        let hash = await swap(signer, "MNT", "USDT", amount);
        console.log("swapped", explorer + hash);
        return {status: true, log: ""};
    } catch (e) {
        console.log(e?.message);
        return {status: false, log: `swap error:   ${e?.message}`};
    }
}
async function bridgeUSDT(signer) {
    try {
        let amount = await getBalance(signer, signer.address, tokenAddresses.USDT);
        let approveHash = await approve(signer, tokenAddresses.USDT, lzData.mantle.address, amount);
        console.log(c.blue("approved:", explorer + approveHash));
        await defaultSleep(getRandomIntFromTo(3, 8));
        let bridgeHash = await sendBridgeTx(signer, "mantle", "polygon", amount);
        console.log(c.green("bridged:", explorer + bridgeHash));
        return {status: true, log: ""};
    } catch (e) {
        console.log(e?.message);
        return {status: false, log: `bridge error:   ${e?.message}`};
    }
}

async function runWallet(signer) {
    let result = {status: true, log: ""};
    if (swapAndSendConfig.needSwap) {
        result = await swapMNTToUSDT(signer);
    }
    if (swapAndSendConfig.needBridge && result.status) {
        result = await bridgeUSDT(signer);
    }
    return result;
}
async function runThroughWallets() {
    const ts = new Date().getTime();
    const provider = new JsonRpcProvider(rpc);
    let wallets = await importETHWallets("./privates.txt");
    for (let i = 0; i < wallets.length; i++) {
        let wallet = new Wallet(wallets[i], provider);
        console.log(`[${i + 1}/${wallets.length}] ${wallet.address}`);
        let res = await runWallet(wallet);
        let pasta = res.status ? "success" : res.log;
        if (i == 0) {
            await writeToFile(`./results/${ts}.csv`, `${wallet.address},${pasta}`);
        } else {
            await appendResultsToFile(`./results/${ts}.csv`, `${wallet.address},${pasta}`);
        }
        await sleep(getRandomIntFromTo(delay[0], delay[1]));
    }
}
runThroughWallets();