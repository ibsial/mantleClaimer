export const ERC20_abi = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
]

export const FusionX_abi = [{"type":"constructor","inputs":[{"type":"address","name":"_factoryV2","internalType":"address"},{"type":"address","name":"_deployer","internalType":"address"},{"type":"address","name":"_factoryV3","internalType":"address"},{"type":"address","name":"_positionManager","internalType":"address"},{"type":"address","name":"_stableFactory","internalType":"address"},{"type":"address","name":"_stableInfo","internalType":"address"},{"type":"address","name":"_WETH9","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"WETH9","inputs":[]},{"type":"function","stateMutability":"payable","outputs":[],"name":"approveMax","inputs":[{"type":"address","name":"token","internalType":"address"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"approveMaxMinusOne","inputs":[{"type":"address","name":"token","internalType":"address"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"approveZeroThenMax","inputs":[{"type":"address","name":"token","internalType":"address"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"approveZeroThenMaxMinusOne","inputs":[{"type":"address","name":"token","internalType":"address"}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"bytes","name":"result","internalType":"bytes"}],"name":"callPositionManager","inputs":[{"type":"bytes","name":"data","internalType":"bytes"}]},{"type":"function","stateMutability":"view","outputs":[],"name":"checkOracleSlippage","inputs":[{"type":"bytes[]","name":"paths","internalType":"bytes[]"},{"type":"uint128[]","name":"amounts","internalType":"uint128[]"},{"type":"uint24","name":"maximumTickDivergence","internalType":"uint24"},{"type":"uint32","name":"secondsAgo","internalType":"uint32"}]},{"type":"function","stateMutability":"view","outputs":[],"name":"checkOracleSlippage","inputs":[{"type":"bytes","name":"path","internalType":"bytes"},{"type":"uint24","name":"maximumTickDivergence","internalType":"uint24"},{"type":"uint32","name":"secondsAgo","internalType":"uint32"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"deployer","inputs":[]},{"type":"function","stateMutability":"payable","outputs":[{"type":"uint256","name":"amountOut","internalType":"uint256"}],"name":"exactInput","inputs":[{"type":"tuple","name":"params","internalType":"struct IV3SwapRouter.ExactInputParams","components":[{"type":"bytes"},{"type":"address"},{"type":"uint256"},{"type":"uint256"}]}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"uint256","name":"amountOut","internalType":"uint256"}],"name":"exactInputSingle","inputs":[{"type":"tuple","name":"params","internalType":"struct IV3SwapRouter.ExactInputSingleParams","components":[{"type":"address"},{"type":"address"},{"type":"uint24"},{"type":"address"},{"type":"uint256"},{"type":"uint256"},{"type":"uint160"}]}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"uint256","name":"amountOut","internalType":"uint256"}],"name":"exactInputStableSwap","inputs":[{"type":"address[]","name":"path","internalType":"address[]"},{"type":"uint256[]","name":"flag","internalType":"uint256[]"},{"type":"uint256","name":"amountIn","internalType":"uint256"},{"type":"uint256","name":"amountOutMin","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"}],"name":"exactOutput","inputs":[{"type":"tuple","name":"params","internalType":"struct IV3SwapRouter.ExactOutputParams","components":[{"type":"bytes"},{"type":"address"},{"type":"uint256"},{"type":"uint256"}]}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"}],"name":"exactOutputSingle","inputs":[{"type":"tuple","name":"params","internalType":"struct IV3SwapRouter.ExactOutputSingleParams","components":[{"type":"address"},{"type":"address"},{"type":"uint24"},{"type":"address"},{"type":"uint256"},{"type":"uint256"},{"type":"uint160"}]}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"}],"name":"exactOutputStableSwap","inputs":[{"type":"address[]","name":"path","internalType":"address[]"},{"type":"uint256[]","name":"flag","internalType":"uint256[]"},{"type":"uint256","name":"amountOut","internalType":"uint256"},{"type":"uint256","name":"amountInMax","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"factory","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"factoryV2","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"fusionXV3SwapCallback","inputs":[{"type":"int256","name":"amount0Delta","internalType":"int256"},{"type":"int256","name":"amount1Delta","internalType":"int256"},{"type":"bytes","name":"_data","internalType":"bytes"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint8","name":"","internalType":"enum IApproveAndCall.ApprovalType"}],"name":"getApprovalType","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"bytes","name":"result","internalType":"bytes"}],"name":"increaseLiquidity","inputs":[{"type":"tuple","name":"params","internalType":"struct IApproveAndCall.IncreaseLiquidityParams","components":[{"type":"address"},{"type":"address"},{"type":"uint256"},{"type":"uint256"},{"type":"uint256"}]}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"bytes","name":"result","internalType":"bytes"}],"name":"mint","inputs":[{"type":"tuple","name":"params","internalType":"struct IApproveAndCall.MintParams","components":[{"type":"address"},{"type":"address"},{"type":"uint24"},{"type":"int24"},{"type":"int24"},{"type":"uint256"},{"type":"uint256"},{"type":"address"}]}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"bytes[]","name":"","internalType":"bytes[]"}],"name":"multicall","inputs":[{"type":"uint256","name":"deadline","internalType":"uint256"},{"type":"bytes[]","name":"data","internalType":"bytes[]"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"positionManager","inputs":[]},{"type":"function","stateMutability":"payable","outputs":[],"name":"pull","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"value","internalType":"uint256"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"refundETH","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"payable","outputs":[],"name":"selfPermit","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"value","internalType":"uint256"},{"type":"uint256","name":"deadline","internalType":"uint256"},{"type":"uint8","name":"v","internalType":"uint8"},{"type":"bytes32","name":"r","internalType":"bytes32"},{"type":"bytes32","name":"s","internalType":"bytes32"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"selfPermitAllowed","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"nonce","internalType":"uint256"},{"type":"uint256","name":"expiry","internalType":"uint256"},{"type":"uint8","name":"v","internalType":"uint8"},{"type":"bytes32","name":"r","internalType":"bytes32"},{"type":"bytes32","name":"s","internalType":"bytes32"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"selfPermitAllowedIfNecessary","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"nonce","internalType":"uint256"},{"type":"uint256","name":"expiry","internalType":"uint256"},{"type":"uint8","name":"v","internalType":"uint8"},{"type":"bytes32","name":"r","internalType":"bytes32"},{"type":"bytes32","name":"s","internalType":"bytes32"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"selfPermitIfNecessary","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"value","internalType":"uint256"},{"type":"uint256","name":"deadline","internalType":"uint256"},{"type":"uint8","name":"v","internalType":"uint8"},{"type":"bytes32","name":"r","internalType":"bytes32"},{"type":"bytes32","name":"s","internalType":"bytes32"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setStableSwap","inputs":[{"type":"address","name":"_factory","internalType":"address"},{"type":"address","name":"_info","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"stableSwapFactory","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"stableSwapInfo","inputs":[]},{"type":"function","stateMutability":"payable","outputs":[{"type":"uint256","name":"amountOut","internalType":"uint256"}],"name":"swapExactTokensForTokens","inputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"},{"type":"uint256","name":"amountOutMin","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"}],"name":"swapTokensForExactTokens","inputs":[{"type":"uint256","name":"amountOut","internalType":"uint256"},{"type":"uint256","name":"amountInMax","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"sweepToken","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"amountMinimum","internalType":"uint256"},{"type":"address","name":"recipient","internalType":"address"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"sweepToken","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"amountMinimum","internalType":"uint256"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"sweepTokenWithFee","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"amountMinimum","internalType":"uint256"},{"type":"uint256","name":"feeBips","internalType":"uint256"},{"type":"address","name":"feeRecipient","internalType":"address"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"sweepTokenWithFee","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"amountMinimum","internalType":"uint256"},{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"feeBips","internalType":"uint256"},{"type":"address","name":"feeRecipient","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"unwrapWETH9","inputs":[{"type":"uint256","name":"amountMinimum","internalType":"uint256"},{"type":"address","name":"recipient","internalType":"address"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"unwrapWETH9WithFee","inputs":[{"type":"uint256","name":"amountMinimum","internalType":"uint256"},{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"feeBips","internalType":"uint256"},{"type":"address","name":"feeRecipient","internalType":"address"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"unwrapWETH9WithFee","inputs":[{"type":"uint256","name":"amountMinimum","internalType":"uint256"},{"type":"uint256","name":"feeBips","internalType":"uint256"},{"type":"address","name":"feeRecipient","internalType":"address"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"wrapETH","inputs":[{"type":"uint256","name":"value","internalType":"uint256"}]},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","indexed":true},{"type":"address","name":"newOwner","indexed":true}],"anonymous":false},{"type":"event","name":"SetStableSwap","inputs":[{"type":"address","name":"factory","indexed":true},{"type":"address","name":"info","indexed":true}],"anonymous":false},{"type":"receive"}]

export const LayerZero_abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "chainId",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "srcAddress",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountLD",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "payload",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "reason",
          "type": "bytes"
        }
      ],
      "name": "CachedSwapSaved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "srcChainId",
          "type": "uint16"
        },
        {
          "indexed": true,
          "internalType": "bytes",
          "name": "srcAddress",
          "type": "bytes"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "srcPoolId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "dstPoolId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountSD",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "mintAmountSD",
          "type": "uint256"
        }
      ],
      "name": "RedeemLocalCallback",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "bridgeFunctionType",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "chainId",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "srcAddress",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        }
      ],
      "name": "Revert",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "srcChainId",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_srcPoolId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_dstPoolId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "to",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "redeemAmountSD",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "mintAmountSD",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "bytes",
          "name": "srcAddress",
          "type": "bytes"
        }
      ],
      "name": "RevertRedeemLocal",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_poolId",
          "type": "uint256"
        },
        {
          "internalType": "uint16",
          "name": "_dstChainId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "_dstPoolId",
          "type": "uint256"
        }
      ],
      "name": "activateChainPath",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_poolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amountLD",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "addLiquidity",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "bridge",
      "outputs": [
        {
          "internalType": "contract Bridge",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "cachedSwapLookup",
      "outputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amountLD",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "payload",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_poolId",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_fullMode",
          "type": "bool"
        }
      ],
      "name": "callDelta",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_srcChainId",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "_srcAddress",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "_nonce",
          "type": "uint256"
        }
      ],
      "name": "clearCachedSwap",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_poolId",
          "type": "uint256"
        },
        {
          "internalType": "uint16",
          "name": "_dstChainId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "_dstPoolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_weight",
          "type": "uint256"
        }
      ],
      "name": "createChainPath",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_poolId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "_sharedDecimals",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "_localDecimals",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        }
      ],
      "name": "createPool",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_dstChainId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "_dstPoolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_srcPoolId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "credits",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "idealBalance",
              "type": "uint256"
            }
          ],
          "internalType": "struct Pool.CreditObj",
          "name": "_c",
          "type": "tuple"
        }
      ],
      "name": "creditChainPath",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "factory",
      "outputs": [
        {
          "internalType": "contract Factory",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_srcPoolId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "_amountLP",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "instantRedeemLocal",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountSD",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "mintFeeOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "protocolFeeOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_dstChainId",
          "type": "uint16"
        },
        {
          "internalType": "uint8",
          "name": "_functionType",
          "type": "uint8"
        },
        {
          "internalType": "bytes",
          "name": "_toAddress",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "_transferAndCallPayload",
          "type": "bytes"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "dstGasForCall",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dstNativeAmount",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "dstNativeAddr",
              "type": "bytes"
            }
          ],
          "internalType": "struct IStargateRouter.lzTxObj",
          "name": "_lzTxParams",
          "type": "tuple"
        }
      ],
      "name": "quoteLayerZeroFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_dstChainId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "_srcPoolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_dstPoolId",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "_refundAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amountLP",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_to",
          "type": "bytes"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "dstGasForCall",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dstNativeAmount",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "dstNativeAddr",
              "type": "bytes"
            }
          ],
          "internalType": "struct IStargateRouter.lzTxObj",
          "name": "_lzTxParams",
          "type": "tuple"
        }
      ],
      "name": "redeemLocal",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_srcChainId",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "_srcAddress",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "_nonce",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_srcPoolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_dstPoolId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amountSD",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_mintAmountSD",
          "type": "uint256"
        }
      ],
      "name": "redeemLocalCallback",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_srcChainId",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "_srcAddress",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "_nonce",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_srcPoolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_dstPoolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amountSD",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_to",
          "type": "bytes"
        }
      ],
      "name": "redeemLocalCheckOnRemote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_dstChainId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "_srcPoolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_dstPoolId",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "_refundAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amountLP",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minAmountLD",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_to",
          "type": "bytes"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "dstGasForCall",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dstNativeAmount",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "dstNativeAddr",
              "type": "bytes"
            }
          ],
          "internalType": "struct IStargateRouter.lzTxObj",
          "name": "_lzTxParams",
          "type": "tuple"
        }
      ],
      "name": "redeemRemote",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_srcChainId",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "_srcAddress",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "_nonce",
          "type": "uint256"
        }
      ],
      "name": "retryRevert",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "revertLookup",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_dstChainId",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "_srcAddress",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "_nonce",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "_refundAddress",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "dstGasForCall",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dstNativeAmount",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "dstNativeAddr",
              "type": "bytes"
            }
          ],
          "internalType": "struct IStargateRouter.lzTxObj",
          "name": "_lzTxParams",
          "type": "tuple"
        }
      ],
      "name": "revertRedeemLocal",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_dstChainId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "_srcPoolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_dstPoolId",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "_refundAddress",
          "type": "address"
        }
      ],
      "name": "sendCredits",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract Bridge",
          "name": "_bridge",
          "type": "address"
        },
        {
          "internalType": "contract Factory",
          "name": "_factory",
          "type": "address"
        }
      ],
      "name": "setBridgeAndFactory",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_poolId",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_batched",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "_swapDeltaBP",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_lpDeltaBP",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_defaultSwapMode",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_defaultLPMode",
          "type": "bool"
        }
      ],
      "name": "setDeltaParam",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_poolId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_feeLibraryAddr",
          "type": "address"
        }
      ],
      "name": "setFeeLibrary",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_poolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_mintFeeBP",
          "type": "uint256"
        }
      ],
      "name": "setFees",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "setMintFeeOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "setProtocolFeeOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_poolId",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_swapStop",
          "type": "bool"
        }
      ],
      "name": "setSwapStop",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_poolId",
          "type": "uint256"
        },
        {
          "internalType": "uint16",
          "name": "_dstChainId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "_dstPoolId",
          "type": "uint256"
        },
        {
          "internalType": "uint16",
          "name": "_weight",
          "type": "uint16"
        }
      ],
      "name": "setWeightForChainPath",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_dstChainId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "_srcPoolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_dstPoolId",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "_refundAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amountLD",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minAmountLD",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "dstGasForCall",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dstNativeAmount",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "dstNativeAddr",
              "type": "bytes"
            }
          ],
          "internalType": "struct IStargateRouter.lzTxObj",
          "name": "_lzTxParams",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "_to",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "_payload",
          "type": "bytes"
        }
      ],
      "name": "swap",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_srcChainId",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "_srcAddress",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "_nonce",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_srcPoolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_dstPoolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_dstGasForCall",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "eqFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "eqReward",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lpFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "protocolFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lkbRemove",
              "type": "uint256"
            }
          ],
          "internalType": "struct Pool.SwapObj",
          "name": "_s",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "_payload",
          "type": "bytes"
        }
      ],
      "name": "swapRemote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_poolId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "withdrawMintFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_poolId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "withdrawProtocolFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]