import { Contract, ethers } from "ethers";
import { lzData, poolIds } from "./constants.js";
import { LayerZero_abi } from "./abi.js";
import { sendTx } from "./helpers.js";

async function sendBridgeTx(signer, fromChain, toChain, amount) {
    let leerziraContract = new Contract(lzData[fromChain].address, LayerZero_abi, signer);
    let value = await leerziraContract.quoteLayerZeroFee(
        lzData[toChain].chainId,
        2,
        signer.address,
        "0x",
        [0, 0, "0x"],
    );
    // console.log(value);
    let tx = {
        from: signer.address,
        to: await leerziraContract.getAddress(),
        data: leerziraContract.interface.encodeFunctionData("swap", [
            lzData[toChain].chainId,
            poolIds[fromChain].srcPoolId,
            poolIds[fromChain][toChain].dstPoolId,
            signer.address,
            amount,
            (amount * 99n) / 100n,
            [0, 0, "0x"],
            signer.address,
            "0x",
        ]),
        value: (value[0] * 110n) / 100n,
    };
    // console.log(tx)
    return sendTx(signer, tx);
}

export { sendBridgeTx };
