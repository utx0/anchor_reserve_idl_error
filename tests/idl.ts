export type AnchorVanilla = {
    "version": "0.1.0",
    "name": "anchor_vanilla",
    "instructions": [
        {
            "name": "initialize",
            "accounts": [],
            "args": []
        }
    ],
    "accounts": [
        {
            "name": "poolState",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "authority",
                        "type": "publicKey"
                    },
                    {
                        "name": "tokenAVault",
                        "type": "publicKey"
                    },
                    {
                        "name": "tokenBVault",
                        "type": "publicKey"
                    },
                    {
                        "name": "tokenAMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "tokenBMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "lpTokenMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "poolStateBump",
                        "type": "u8"
                    },
                    {
                        "name": "tokenAVaultBump",
                        "type": "u8"
                    },
                    {
                        "name": "tokenBVaultBump",
                        "type": "u8"
                    },
                    {
                        "name": "debug",
                        "type": "bool"
                    }
                ]
            }
        }
    ]
};

export const anchorVanillaIDL: AnchorVanilla = {
    "version": "0.1.0",
    "name": "anchor_vanilla",
    "instructions": [
        {
            "name": "initialize",
            "accounts": [],
            "args": []
        }
    ],
    "accounts": [
        {
            "name": "poolState",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "authority",
                        "type": "publicKey"
                    },
                    {
                        "name": "tokenAVault",
                        "type": "publicKey"
                    },
                    {
                        "name": "tokenBVault",
                        "type": "publicKey"
                    },
                    {
                        "name": "tokenAMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "tokenBMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "lpTokenMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "poolStateBump",
                        "type": "u8"
                    },
                    {
                        "name": "tokenAVaultBump",
                        "type": "u8"
                    },
                    {
                        "name": "tokenBVaultBump",
                        "type": "u8"
                    },
                    {
                        "name": "debug",
                        "type": "bool"
                    }
                ]
            }
        }
    ]
};
