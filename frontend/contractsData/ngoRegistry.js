export const abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "donorRegistryAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "ngoId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "cid",
          "type": "string"
        }
      ],
      "name": "NGODocumentUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "ngoId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ngoIcon",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "ngoManager",
          "type": "address"
        }
      ],
      "name": "NGORegistered",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "donorRegistry",
      "outputs": [
        {
          "internalType": "contract DonorRegistry",
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
          "internalType": "uint256",
          "name": "ngoId",
          "type": "uint256"
        }
      ],
      "name": "getNGOById",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "ngoIcon",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "ngoManager",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "documentCID",
              "type": "string"
            }
          ],
          "internalType": "struct NGORegistry.NGO",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "manager",
          "type": "address"
        }
      ],
      "name": "getNGOByManager",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "ngoIcon",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "ngoManager",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "documentCID",
              "type": "string"
            }
          ],
          "internalType": "struct NGORegistry.NGO",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ngoId",
          "type": "uint256"
        }
      ],
      "name": "getNGODocument",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getNGOs",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "ngoIcon",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "ngoManager",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "documentCID",
              "type": "string"
            }
          ],
          "internalType": "struct NGORegistry.NGO[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "ngoIdByManager",
      "outputs": [
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "ngos",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ngoIcon",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "ngoManager",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "documentCID",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ngoIcon",
          "type": "string"
        }
      ],
      "name": "registerNGO",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "cid",
          "type": "string"
        }
      ],
      "name": "updateNGODocument",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

  export const address = '0x4F41000aAEE8F08922fffedc5DA40cFc0ac0111d';