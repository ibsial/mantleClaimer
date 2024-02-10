import { Contract, ZeroAddress } from "ethers";
import { FusionX_abi } from "./abi.js";
import { fusionXAddress, tokenAddresses } from "./constants.js";
import { sendTx } from "./helpers.js";

async function getAmountOut(
    signerOrProvider,
    exactInputSingleParams,
    nativeInput = true,
    nativeOutput = false,
) {
    const fusionXRouter = new Contract(fusionXAddress, FusionX_abi, signerOrProvider);
    let res = await fusionXRouter.multicall.staticCall(
        (new Date().getTime() / 1000 + 3600).toFixed(0),
        buildMulticallData(exactInputSingleParams, nativeOutput),
        {
            value: nativeInput ? exactInputSingleParams[4] : 0,
        },
    );
    return res;
}
const buildMulticallData = (exactInputSingleParams, nativeOutput = false) => {
    let calls = [];
    const fusionXRouter = new Contract(ZeroAddress, FusionX_abi);
    let swapCall = fusionXRouter.interface.encodeFunctionData("exactInputSingle", [
        exactInputSingleParams,
    ]);
    calls.push(swapCall);
    if (nativeOutput) {
        let uwrapCall = fusionXRouter.interface.encodeFunctionData("unwrapWETH9", [
            exactInputSingleParams.amountOutMinimum,
            exactInputSingleParams.recipient,
        ]);
        calls.push(uwrapCall);
    }
    return calls;
};
async function swap(signer, fromCurrency, toCurrencyName, value) {
    let toCurrency = fromCurrency == "MNT" ? toCurrencyName : "WMNT";
    let exactInputSingleParams = {
        tokenIn: tokenAddresses[fromCurrency],
        tokenOut: tokenAddresses[toCurrency],
        fee: 500n,
        recipient: signer.address,
        amountIn: value,
        amountOutMinimum: 1n,
        sqrtPriceLimitX96: 0n,
    };
    let amountOut = await getAmountOut(
        signer,
        Object.values(exactInputSingleParams),
        fromCurrency == "MNT",
        toCurrencyName == "MNT",
    );
    exactInputSingleParams.amountOutMinimum = amountOut[0];
    const fusionXRouter = new Contract(fusionXAddress, FusionX_abi, signer);
    let tx = {
        from: await signer.getAddress(),
        to: await fusionXRouter.getAddress(),
        data: fusionXRouter.interface.encodeFunctionData("multicall(uint256,bytes[])", [
            (new Date().getTime() / 1000 + 3600).toFixed(0),
            buildMulticallData(Object.values(exactInputSingleParams), toCurrencyName == "MNT"),
        ]),
        value: fromCurrency == "MNT" ? value : 0,
    };
    return sendTx(signer, tx);
}

export { swap };
