import axios from "axios";
import { c, defaultSleep } from "./helpers.js";
import { formatEther } from "ethers"
const urls = {
    loginText: "https://mdi-quests-api-production.up.railway.app/auth/web3/signature",
    login: "https://mdi-quests-api-production.up.railway.app/auth/web3/login",
    claim: "https://mdi-quests-api-production.up.railway.app/reward-claim/claim/params?index=0",
};
async function getLoginText(signer) {
    try {
        let resp = await axios.get(urls.loginText, { params: { address: signer.address } });
        // console.log(resp.data.message);
        return resp.data.message;
    } catch (e) {
        console.log(e);
        await defaultSleep(5);
        return getLoginText(signer);
    }
}
async function loginMantle(signer, text) {
    let signedText = await signer.signMessage(text);
    try {
        let resp = await axios.post(urls.login, {
            address: signer.address,
            signature: signedText,
            inviteCode: null,
            walletType: "metamask",
        });
        // console.log(resp.data.web3Token);
        return resp.data.web3Token;
    } catch (e) {
        console.log(e);
        await defaultSleep(5);
        return loginMantle(signer, text);
    }
}
async function getClaimData(signer, jwt) {
    const claimHeaders = {
        Authorization: "Bearer null",
        "Mdi-Jwt": jwt,
    };
    try {
        let resp = await axios.get(urls.claim, { headers: claimHeaders });
        console.log(c.blue(`to claim: ${formatEther(resp.data.contractParameters[2])}`));
        return resp.data;
    } catch (e) {
        if (e.response.data.message.includes("You have claimed token")) {
            console.log(c.bgGrey(`already claimed`));
            return 0
        }
        console.log(e);
        await defaultSleep(5);
        return getClaimData(signer, jwt);
    }
}

async function claim(wallet) {
    let text = await getLoginText(wallet);
    let jwt = await loginMantle(wallet, text);
    let claimData = await getClaimData(wallet, jwt);
    return claimData;
}

export { claim };
