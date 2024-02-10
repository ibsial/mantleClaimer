import { SingleBar, Presets } from "cli-progress";
import { Contract, ethers, parseUnits } from "ethers";
import chalk from "chalk";
import { ERC20_abi } from "./abi.js";
const c = chalk;

async function sleep(sec, reason = "Sleep") {
    let bar = new SingleBar(
        {
            format: `${reason} | ${chalk.gray("{bar}")} | {percentage}% | {value}/{total} sec`,
        },
        Presets.shades_classic,
    );
    bar.start(sec, 0);
    for (let i = 0; i < sec; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        bar.increment();
    }
    bar.stop();
}
async function defaultSleep(sec, needProgress = true) {
    if (needProgress) {
        let newpaste = ["-", `\\`, `|`, `/`];
        for (let i = 0; i < sec * 2; i++) {
            process.stdout.clearLine(); // clear current text
            process.stdout.cursorTo(0);
            process.stdout.write(`${newpaste[i % 4]}`);
            await await new Promise((resolve) => setTimeout(resolve, 500));
        }
        process.stdout.clearLine(); // clear current text
        process.stdout.cursorTo(0);
        return;
    }
    return await new Promise((resolve) => setTimeout(resolve, sec * 1000));
}
function getRandomIntFromTo(min, max) {
    let delta = max - min;
    return Math.round(min + Math.random() * delta);
}

function getRandomBigInt(tier) {
    const delta = tier.to - tier.from;
    const randValue = BigInt((Math.random() * 1000).toFixed(0));
    return tier.from + (randValue * delta) / 1000n;
}

async function approve(signer, tokenAddress, to, amount) {
    const tokenContract = new Contract(tokenAddress, ERC20_abi, signer);
    let tx = {
        from: await signer.getAddress(),
        to: await tokenContract.getAddress(),
        data: tokenContract.interface.encodeFunctionData("approve", [to, amount]),
    };
    return sendTx(signer, tx);
}

async function getNativeBalance(signerOrProvider, address) {
    return signerOrProvider.provider.getBalance(address);
}
async function getTokenBalance(signerOrProvider, tokenAddress, address) {
    const tokenContract = new Contract(tokenAddress, ERC20_abi, signerOrProvider);
    return tokenContract.balanceOf(address);
}
async function getBalance(signerOrProvider, address, tokenAddress = undefined) {
    if (tokenAddress) {
        return getTokenBalance(signerOrProvider, tokenAddress, address);
    } else {
        return getNativeBalance(signerOrProvider, address);
    }
}
async function getTxStatus(signerOrProvider, hash, maxWaitTime = 5 * 60) {
    let time = 0;
    while (time < maxWaitTime) {
        let receipt = await signerOrProvider.provider?.getTransactionReceipt(hash);
        if (receipt?.status == 1) {
            return receipt.hash;
        } else {
            await new Promise((resolve) => setTimeout(resolve, 5 * 1000));
            time += 5;
        }
    }
    console.log(`could not get tx status in ${(maxWaitTime / 60).toFixed(1)} minutes`);
    throw new Error("Tx failed or receipt not found");
}
async function estimateTx(signer, txBody, multiplier = 1.3) {
    return ((await signer.estimateGas(txBody)) * parseUnits(multiplier.toString(), 3)) / 1000n;
}
async function sendTx(
    signer,
    txBody,
    gasMultipliers = { price: 1.3, limit: 1.3 },
    waitConfirmation = true,
) {
    let gasLimit = await estimateTx(signer, txBody, gasMultipliers.limit);
    txBody.gasLimit = gasLimit;
    txBody = { ...txBody };
    let txReceipt = await signer.sendTransaction(txBody);
    if (waitConfirmation) {
        return getTxStatus(signer, txReceipt.hash);
    } else {
        return txReceipt.hash;
    }
}
export { c, sleep, defaultSleep, getRandomIntFromTo, getRandomBigInt, approve, sendTx, getBalance };
