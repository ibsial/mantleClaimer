export const explorer = "https://1.routescan.io/tx/"
export const rpc = "https://mantle.drpc.org"
export const delay = [5 * 60, 15 * 60]      // deplay between wallets in sec

export const swapAndSendConfig = {
    needSwap: true,
    needBridge: true,

    /// swap
    allBalance: true,
    amountToLeave: {from: 2, to: 2.5}, // LzBridge ~ 1.5 MNT; swap ~ 0.3 MNT

    // если не весь баланс (allBalance: false)
    amountFromTo: {from: 0.1, to: 0.2}
}