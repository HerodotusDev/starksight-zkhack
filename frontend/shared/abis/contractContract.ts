export const contractContract = {
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract IWorldID",
          "name": "_worldId",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_appId",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_actionId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "InvalidNullifier",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "signal",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "root",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "nullifierHash",
          "type": "uint256"
        },
        {
          "internalType": "uint256[8]",
          "name": "proof",
          "type": "uint256[8]"
        }
      ],
      "name": "verifyAndExecute",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x60e0604052600160c05234801561001557600080fd5b5060405161058a38038061058a83398101604081905261003491610103565b6001600160a01b0383166080526040516100889061006f9061005a9085906020016101da565b60408051601f19818403018152919052610094565b604080516020810192909252810183905260600161005a565b60a052506101f6915050565b60006008826040516020016100a991906101da565b60408051601f198184030181529190528051602090910120901c92915050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156100fa5781810151838201526020016100e2565b50506000910152565b60008060006060848603121561011857600080fd5b83516001600160a01b038116811461012f57600080fd5b60208501519093506001600160401b038082111561014c57600080fd5b818601915086601f83011261016057600080fd5b815181811115610172576101726100c9565b604051601f8201601f19908116603f0116810190838211818310171561019a5761019a6100c9565b816040528281528960208487010111156101b357600080fd5b6101c48360208301602088016100df565b8096505050505050604084015190509250925092565b600082516101ec8184602087016100df565b9190910192915050565b60805160a05160c051610368610222600039600060a70152600060f101526000607701526103686000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806373475b4814610030575b600080fd5b61004361003e3660046101e3565b610045565b005b60008281526020819052604090205460ff161561007557604051632ec8265960e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633bc778e3847f00000000000000000000000000000000000000000000000000000000000000006100ee886040516020016100da91906102de565b604051602081830303815290604052610180565b867f0000000000000000000000000000000000000000000000000000000000000000876040518763ffffffff1660e01b8152600401610132969594939291906102fa565b60006040518083038186803b15801561014a57600080fd5b505afa15801561015e573d6000803e3d6000fd5b50505060009283525050602081905260409020805460ff191660011790555050565b600060088260405160200161019591906102de565b60408051601f198184030181529190528051602090910120901c92915050565b634e487b7160e01b600052604160045260246000fd5b8061010081018310156101dd57600080fd5b92915050565b60008060008061016085870312156101fa57600080fd5b843567ffffffffffffffff8082111561021257600080fd5b818701915087601f83011261022657600080fd5b813581811115610238576102386101b5565b604051601f8201601f19908116603f01168101908382118183101715610260576102606101b5565b816040528281528a602084870101111561027957600080fd5b82602086016020830137600060208483010152809850505050505060208501359250604085013591506102af86606087016101cb565b905092959194509250565b60005b838110156102d55781810151838201526020016102bd565b50506000910152565b600082516102f08184602087016102ba565b9190910192915050565b60006101a0820190508782528660208301528560408301528460608301528360808301526101008360a084013797965050505050505056fea2646970667358221220d04f4efad3d529a0272551cb61f85fc000a75bc7c8b31e9868cb7b3001a0c87964736f6c63430008130033",
    "sourceMap": "164:2707:29:-:0;;;845:1;808:38;;1173:235;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;1255:18:29;;;;1324:24;;1294:107;;1324:38;;:24;;1341:6;;1324:24;;;:::i;:::-;;;;-1:-1:-1;;1324:24:29;;;;;;;;;:36;:38::i;:::-;1294:80;;;;;;2000:19:34;;;;2035:12;;2028:28;;;2072:12;;1294:80:29;1843:247:34;1294:107:29;1283:118;;-1:-1:-1;164:2707:29;;-1:-1:-1;;164:2707:29;302:145:31;366:7;439:1;427:5;410:23;;;;;;;;:::i;:::-;;;;-1:-1:-1;;410:23:31;;;;;;;;;400:34;;410:23;400:34;;;;392:48;;;302:145;-1:-1:-1;;302:145:31:o;14:127:34:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:250;231:1;241:113;255:6;252:1;249:13;241:113;;;331:11;;;325:18;312:11;;;305:39;277:2;270:10;241:113;;;-1:-1:-1;;388:1:34;370:16;;363:27;146:250::o;401:1143::-;517:6;525;533;586:2;574:9;565:7;561:23;557:32;554:52;;;602:1;599;592:12;554:52;628:16;;-1:-1:-1;;;;;673:31:34;;663:42;;653:70;;719:1;716;709:12;653:70;791:2;776:18;;770:25;742:5;;-1:-1:-1;;;;;;844:14:34;;;841:34;;;871:1;868;861:12;841:34;909:6;898:9;894:22;884:32;;954:7;947:4;943:2;939:13;935:27;925:55;;976:1;973;966:12;925:55;1005:2;999:9;1027:2;1023;1020:10;1017:36;;;1033:18;;:::i;:::-;1108:2;1102:9;1076:2;1162:13;;-1:-1:-1;;1158:22:34;;;1182:2;1154:31;1150:40;1138:53;;;1206:18;;;1226:22;;;1203:46;1200:72;;;1252:18;;:::i;:::-;1292:10;1288:2;1281:22;1327:2;1319:6;1312:18;1367:7;1362:2;1357;1353;1349:11;1345:20;1342:33;1339:53;;;1388:1;1385;1378:12;1339:53;1401:68;1466:2;1461;1453:6;1449:15;1444:2;1440;1436:11;1401:68;:::i;:::-;1488:6;1478:16;;;;;;;1534:2;1523:9;1519:18;1513:25;1503:35;;401:1143;;;;;:::o;1549:289::-;1680:3;1718:6;1712:13;1734:66;1793:6;1788:3;1781:4;1773:6;1769:17;1734:66;:::i;:::-;1816:16;;;;;1549:289;-1:-1:-1;;1549:289:34:o;2095:287::-;164:2707:29;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b506004361061002b5760003560e01c806373475b4814610030575b600080fd5b61004361003e3660046101e3565b610045565b005b60008281526020819052604090205460ff161561007557604051632ec8265960e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633bc778e3847f00000000000000000000000000000000000000000000000000000000000000006100ee886040516020016100da91906102de565b604051602081830303815290604052610180565b867f0000000000000000000000000000000000000000000000000000000000000000876040518763ffffffff1660e01b8152600401610132969594939291906102fa565b60006040518083038186803b15801561014a57600080fd5b505afa15801561015e573d6000803e3d6000fd5b50505060009283525050602081905260409020805460ff191660011790555050565b600060088260405160200161019591906102de565b60408051601f198184030181529190528051602090910120901c92915050565b634e487b7160e01b600052604160045260246000fd5b8061010081018310156101dd57600080fd5b92915050565b60008060008061016085870312156101fa57600080fd5b843567ffffffffffffffff8082111561021257600080fd5b818701915087601f83011261022657600080fd5b813581811115610238576102386101b5565b604051601f8201601f19908116603f01168101908382118183101715610260576102606101b5565b816040528281528a602084870101111561027957600080fd5b82602086016020830137600060208483010152809850505050505060208501359250604085013591506102af86606087016101cb565b905092959194509250565b60005b838110156102d55781810151838201526020016102bd565b50506000910152565b600082516102f08184602087016102ba565b9190910192915050565b60006101a0820190508782528660208301528560408301528460608301528360808301526101008360a084013797965050505050505056fea2646970667358221220d04f4efad3d529a0272551cb61f85fc000a75bc7c8b31e9868cb7b3001a0c87964736f6c63430008130033",
    "sourceMap": "164:2707:29:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1988:881;;;;;;:::i;:::-;;:::i;:::-;;;2226:15;:30;;;;;;;;;;;;;2222:61;;;2265:18;;-1:-1:-1;;;2265:18:29;;;;;;;;;;;2222:61;2384:7;-1:-1:-1;;;;;2384:19:29;;2417:4;2435:7;2456:38;2473:6;2456:24;;;;;;;;:::i;:::-;;;;;;;;;;;;;:36;:38::i;:::-;2508:13;2535:8;2557:5;2384:188;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;2680:15:29;:30;;;-1:-1:-1;;2680:30:29;;;;;;;:37;;-1:-1:-1;;2680:37:29;2713:4;2680:37;;;-1:-1:-1;;1988:881:29:o;302:145:31:-;366:7;439:1;427:5;410:23;;;;;;;;:::i;:::-;;;;-1:-1:-1;;410:23:31;;;;;;;;;400:34;;410:23;400:34;;;;392:48;;;302:145;-1:-1:-1;;302:145:31:o;14:127:34:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:160;240:6;273:3;261:16;;258:25;-1:-1:-1;255:45:34;;;296:1;293;286:12;255:45;146:160;;;;:::o;311:1192::-;432:6;440;448;456;509:3;497:9;488:7;484:23;480:33;477:53;;;526:1;523;516:12;477:53;566:9;553:23;595:18;636:2;628:6;625:14;622:34;;;652:1;649;642:12;622:34;690:6;679:9;675:22;665:32;;735:7;728:4;724:2;720:13;716:27;706:55;;757:1;754;747:12;706:55;793:2;780:16;815:2;811;808:10;805:36;;;821:18;;:::i;:::-;896:2;890:9;864:2;950:13;;-1:-1:-1;;946:22:34;;;970:2;942:31;938:40;926:53;;;994:18;;;1014:22;;;991:46;988:72;;;1040:18;;:::i;:::-;1080:10;1076:2;1069:22;1115:2;1107:6;1100:18;1157:7;1150:4;1145:2;1141;1137:11;1133:22;1130:35;1127:55;;;1178:1;1175;1168:12;1127:55;1238:2;1231:4;1227:2;1223:13;1216:4;1208:6;1204:17;1191:50;1285:1;1278:4;1273:2;1265:6;1261:15;1257:26;1250:37;1306:6;1296:16;;;;;;;1359:4;1348:9;1344:20;1331:34;1321:44;;1412:2;1401:9;1397:18;1384:32;1374:42;;1435:62;1489:7;1484:2;1473:9;1469:18;1435:62;:::i;:::-;1425:72;;311:1192;;;;;;;:::o;1508:250::-;1593:1;1603:113;1617:6;1614:1;1611:13;1603:113;;;1693:11;;;1687:18;1674:11;;;1667:39;1639:2;1632:10;1603:113;;;-1:-1:-1;;1750:1:34;1732:16;;1725:27;1508:250::o;1763:289::-;1894:3;1932:6;1926:13;1948:66;2007:6;2002:3;1995:4;1987:6;1983:17;1948:66;:::i;:::-;2030:16;;;;;1763:289;-1:-1:-1;;1763:289:34:o;2057:597::-;2337:4;2379:3;2368:9;2364:19;2356:27;;2410:6;2399:9;2392:25;2453:6;2448:2;2437:9;2433:18;2426:34;2496:6;2491:2;2480:9;2476:18;2469:34;2539:6;2534:2;2523:9;2519:18;2512:34;2583:6;2577:3;2566:9;2562:19;2555:35;2641:6;2633;2627:3;2616:9;2612:19;2599:49;2057:597;;;;;;;;;:::o",
    "linkReferences": {},
    "immutableReferences": {
      "30203": [
        {
          "start": 119,
          "length": 32
        }
      ],
      "30206": [
        {
          "start": 241,
          "length": 32
        }
      ],
      "30210": [
        {
          "start": 167,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "verifyAndExecute(string,uint256,uint256,uint256[8])": "73475b48"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract IWorldID\",\"name\":\"_worldId\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_appId\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_actionId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"InvalidNullifier\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"signal\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"root\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"nullifierHash\",\"type\":\"uint256\"},{\"internalType\":\"uint256[8]\",\"name\":\"proof\",\"type\":\"uint256[8]\"}],\"name\":\"verifyAndExecute\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_actionId\":\"The action ID for your application\",\"_worldId\":\"The WorldID instance that will verify the proofs\"}},\"verifyAndExecute(string,uint256,uint256,uint256[8])\":{\"details\":\"Feel free to rename this method however you want! We've used `claim`, `verify` or `execute` in the past.\",\"params\":{\"nullifierHash\":\"The nullifier hash for this proof, preventing double signaling (returned by the JS widget).\",\"proof\":\"The zero-knowledge proof that demonstrates the claimer is registered with World ID (returned by the JS widget).\",\"root\":\"The root of the Merkle tree (returned by the JS widget).\",\"signal\":\"An arbitrary input from the user, usually the user's wallet address (check README for further details)\"}}},\"stateVariables\":{\"actionId\":{\"details\":\"The application's action ID\"},\"groupId\":{\"details\":\"The World ID group ID (always 1)\"},\"nullifierHashes\":{\"details\":\"Whether a nullifier hash has been used already. Used to guarantee an action is only performed once by a single person\"},\"worldId\":{\"details\":\"The World ID instance that will be used for verifying proofs\"}},\"version\":1},\"userdoc\":{\"errors\":{\"InvalidNullifier()\":[{\"notice\":\"Thrown when attempting to reuse a nullifier\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/Contract.sol\":\"Contract\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/=lib/openzeppelin-contracts/\",\":@zk-kit/=lib/zk-kit/packages/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":semaphore/=lib/semaphore/contracts/\",\":zk-kit/=lib/zk-kit/\"]},\"sources\":{\"src/Contract.sol\":{\"keccak256\":\"0x890b043cea8c28c503bd1c3a628c3352ee5e94dceb09ceee41fbc911b1c0eedc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4c5cee3ebd192c59511dbcedb6857eaa1a1cb2a1c5b9a42eadf7fa36ecc4cb3c\",\"dweb:/ipfs/QmPZbiYm2zm7aShiJUvZX8G2WcSWi3VmL8nqxMRYBc9DJK\"]},\"src/helpers/ByteHasher.sol\":{\"keccak256\":\"0x9babc4cb75d5feb3fa056655aff29f83cb8e11173bfe2c08b4c713b1b497c25f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ec0ae99f6f5ff5ca4693573a7b1d32d19ac98802029424ff6b9d8717ade65b6a\",\"dweb:/ipfs/QmYc9KqAkSiE3TPoEjxAnu5fGpuZkF2rax89JjnNep2HDd\"]},\"src/interfaces/IWorldID.sol\":{\"keccak256\":\"0xfebbcd0951dd0c4ca4c8018a5619e24a6c70af3d72364bc7ebbd8bf74fe77a72\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d57e65b766e8836789d22d5b43770a0a8d96e1090087d485c0450da5583b74d9\",\"dweb:/ipfs/QmeRursRUU4qwtK1TyJqXt8fhz5h7trxeL1sqoWCKcBHYu\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "contract IWorldID",
              "name": "_worldId",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "_appId",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_actionId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidNullifier"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "signal",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "root",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "nullifierHash",
              "type": "uint256"
            },
            {
              "internalType": "uint256[8]",
              "name": "proof",
              "type": "uint256[8]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "verifyAndExecute"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "constructor": {
            "params": {
              "_actionId": "The action ID for your application",
              "_worldId": "The WorldID instance that will verify the proofs"
            }
          },
          "verifyAndExecute(string,uint256,uint256,uint256[8])": {
            "details": "Feel free to rename this method however you want! We've used `claim`, `verify` or `execute` in the past.",
            "params": {
              "nullifierHash": "The nullifier hash for this proof, preventing double signaling (returned by the JS widget).",
              "proof": "The zero-knowledge proof that demonstrates the claimer is registered with World ID (returned by the JS widget).",
              "root": "The root of the Merkle tree (returned by the JS widget).",
              "signal": "An arbitrary input from the user, usually the user's wallet address (check README for further details)"
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        ":@openzeppelin/=lib/openzeppelin-contracts/",
        ":@zk-kit/=lib/zk-kit/packages/",
        ":ds-test/=lib/forge-std/lib/ds-test/src/",
        ":forge-std/=lib/forge-std/src/",
        ":openzeppelin-contracts/=lib/openzeppelin-contracts/",
        ":semaphore/=lib/semaphore/contracts/",
        ":zk-kit/=lib/zk-kit/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "src/Contract.sol": "Contract"
      },
      "libraries": {}
    },
    "sources": {
      "src/Contract.sol": {
        "keccak256": "0x890b043cea8c28c503bd1c3a628c3352ee5e94dceb09ceee41fbc911b1c0eedc",
        "urls": [
          "bzz-raw://4c5cee3ebd192c59511dbcedb6857eaa1a1cb2a1c5b9a42eadf7fa36ecc4cb3c",
          "dweb:/ipfs/QmPZbiYm2zm7aShiJUvZX8G2WcSWi3VmL8nqxMRYBc9DJK"
        ],
        "license": "MIT"
      },
      "src/helpers/ByteHasher.sol": {
        "keccak256": "0x9babc4cb75d5feb3fa056655aff29f83cb8e11173bfe2c08b4c713b1b497c25f",
        "urls": [
          "bzz-raw://ec0ae99f6f5ff5ca4693573a7b1d32d19ac98802029424ff6b9d8717ade65b6a",
          "dweb:/ipfs/QmYc9KqAkSiE3TPoEjxAnu5fGpuZkF2rax89JjnNep2HDd"
        ],
        "license": "MIT"
      },
      "src/interfaces/IWorldID.sol": {
        "keccak256": "0xfebbcd0951dd0c4ca4c8018a5619e24a6c70af3d72364bc7ebbd8bf74fe77a72",
        "urls": [
          "bzz-raw://d57e65b766e8836789d22d5b43770a0a8d96e1090087d485c0450da5583b74d9",
          "dweb:/ipfs/QmeRursRUU4qwtK1TyJqXt8fhz5h7trxeL1sqoWCKcBHYu"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "src/Contract.sol",
    "id": 30292,
    "exportedSymbols": {
      "ByteHasher": [
        30710
      ],
      "Contract": [
        30291
      ],
      "IWorldID": [
        30731
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:2840:29",
    "nodes": [
      {
        "id": 30189,
        "nodeType": "PragmaDirective",
        "src": "32:24:29",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".13"
        ]
      },
      {
        "id": 30191,
        "nodeType": "ImportDirective",
        "src": "58:52:29",
        "nodes": [],
        "absolutePath": "src/helpers/ByteHasher.sol",
        "file": "./helpers/ByteHasher.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 30292,
        "sourceUnit": 30711,
        "symbolAliases": [
          {
            "foreign": {
              "id": 30190,
              "name": "ByteHasher",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 30710,
              "src": "66:10:29",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 30193,
        "nodeType": "ImportDirective",
        "src": "111:51:29",
        "nodes": [],
        "absolutePath": "src/interfaces/IWorldID.sol",
        "file": "./interfaces/IWorldID.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 30292,
        "sourceUnit": 30732,
        "symbolAliases": [
          {
            "foreign": {
              "id": 30192,
              "name": "IWorldID",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 30731,
              "src": "119:8:29",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 30291,
        "nodeType": "ContractDefinition",
        "src": "164:2707:29",
        "nodes": [
          {
            "id": 30196,
            "nodeType": "UsingForDirective",
            "src": "188:27:29",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 30194,
              "name": "ByteHasher",
              "nameLocations": [
                "194:10:29"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 30710,
              "src": "194:10:29"
            },
            "typeName": {
              "id": 30195,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "209:5:29",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            }
          },
          {
            "id": 30199,
            "nodeType": "ErrorDefinition",
            "src": "532:25:29",
            "nodes": [],
            "documentation": {
              "id": 30197,
              "nodeType": "StructuredDocumentation",
              "src": "472:55:29",
              "text": "@notice Thrown when attempting to reuse a nullifier"
            },
            "errorSelector": "5d904cb2",
            "name": "InvalidNullifier",
            "nameLocation": "538:16:29",
            "parameters": {
              "id": 30198,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "554:2:29"
            }
          },
          {
            "id": 30203,
            "nodeType": "VariableDeclaration",
            "src": "637:35:29",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 30200,
              "nodeType": "StructuredDocumentation",
              "src": "563:69:29",
              "text": "@dev The World ID instance that will be used for verifying proofs"
            },
            "mutability": "immutable",
            "name": "worldId",
            "nameLocation": "665:7:29",
            "scope": 30291,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IWorldID_$30731",
              "typeString": "contract IWorldID"
            },
            "typeName": {
              "id": 30202,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 30201,
                "name": "IWorldID",
                "nameLocations": [
                  "637:8:29"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 30731,
                "src": "637:8:29"
              },
              "referencedDeclaration": 30731,
              "src": "637:8:29",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IWorldID_$30731",
                "typeString": "contract IWorldID"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 30206,
            "nodeType": "VariableDeclaration",
            "src": "720:35:29",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 30204,
              "nodeType": "StructuredDocumentation",
              "src": "679:36:29",
              "text": "@dev The application's action ID"
            },
            "mutability": "immutable",
            "name": "actionId",
            "nameLocation": "747:8:29",
            "scope": 30291,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 30205,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "720:7:29",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 30210,
            "nodeType": "VariableDeclaration",
            "src": "808:38:29",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 30207,
              "nodeType": "StructuredDocumentation",
              "src": "762:41:29",
              "text": "@dev The World ID group ID (always 1)"
            },
            "mutability": "immutable",
            "name": "groupId",
            "nameLocation": "835:7:29",
            "scope": 30291,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 30208,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "808:7:29",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31",
              "id": 30209,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "845:1:29",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "value": "1"
            },
            "visibility": "internal"
          },
          {
            "id": 30215,
            "nodeType": "VariableDeclaration",
            "src": "984:49:29",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 30211,
              "nodeType": "StructuredDocumentation",
              "src": "853:126:29",
              "text": "@dev Whether a nullifier hash has been used already. Used to guarantee an action is only performed once by a single person"
            },
            "mutability": "mutable",
            "name": "nullifierHashes",
            "nameLocation": "1018:15:29",
            "scope": 30291,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
              "typeString": "mapping(uint256 => bool)"
            },
            "typeName": {
              "id": 30214,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 30212,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "992:7:29",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "984:24:29",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                "typeString": "mapping(uint256 => bool)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 30213,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1003:4:29",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 30246,
            "nodeType": "FunctionDefinition",
            "src": "1173:235:29",
            "nodes": [],
            "body": {
              "id": 30245,
              "nodeType": "Block",
              "src": "1245:163:29",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 30228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 30226,
                      "name": "worldId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30203,
                      "src": "1255:7:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IWorldID_$30731",
                        "typeString": "contract IWorldID"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 30227,
                      "name": "_worldId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30219,
                      "src": "1265:8:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IWorldID_$30731",
                        "typeString": "contract IWorldID"
                      }
                    },
                    "src": "1255:18:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IWorldID_$30731",
                      "typeString": "contract IWorldID"
                    }
                  },
                  "id": 30229,
                  "nodeType": "ExpressionStatement",
                  "src": "1255:18:29"
                },
                {
                  "expression": {
                    "id": 30243,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 30230,
                      "name": "actionId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30206,
                      "src": "1283:8:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "arguments": [
                                    {
                                      "id": 30235,
                                      "name": "_appId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 30221,
                                      "src": "1341:6:29",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    ],
                                    "expression": {
                                      "id": 30233,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -1,
                                      "src": "1324:3:29",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 30234,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "1328:12:29",
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "src": "1324:16:29",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 30236,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1324:24:29",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                },
                                "id": 30237,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "1349:11:29",
                                "memberName": "hashToField",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 30709,
                                "src": "1324:36:29",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$attached_to$_t_bytes_memory_ptr_$",
                                  "typeString": "function (bytes memory) pure returns (uint256)"
                                }
                              },
                              "id": 30238,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1324:38:29",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 30239,
                              "name": "_actionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 30223,
                              "src": "1364:9:29",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 30231,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1294:3:29",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 30232,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1311:12:29",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "1294:29:29",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 30240,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1294:80:29",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 30241,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1388:11:29",
                        "memberName": "hashToField",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 30709,
                        "src": "1294:105:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$attached_to$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) pure returns (uint256)"
                        }
                      },
                      "id": 30242,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1294:107:29",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1283:118:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 30244,
                  "nodeType": "ExpressionStatement",
                  "src": "1283:118:29"
                }
              ]
            },
            "documentation": {
              "id": 30216,
              "nodeType": "StructuredDocumentation",
              "src": "1040:128:29",
              "text": "@param _worldId The WorldID instance that will verify the proofs\n @param _actionId The action ID for your application"
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 30224,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30219,
                  "mutability": "mutable",
                  "name": "_worldId",
                  "nameLocation": "1194:8:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 30246,
                  "src": "1185:17:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IWorldID_$30731",
                    "typeString": "contract IWorldID"
                  },
                  "typeName": {
                    "id": 30218,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 30217,
                      "name": "IWorldID",
                      "nameLocations": [
                        "1185:8:29"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 30731,
                      "src": "1185:8:29"
                    },
                    "referencedDeclaration": 30731,
                    "src": "1185:8:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IWorldID_$30731",
                      "typeString": "contract IWorldID"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 30221,
                  "mutability": "mutable",
                  "name": "_appId",
                  "nameLocation": "1218:6:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 30246,
                  "src": "1204:20:29",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30220,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1204:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 30223,
                  "mutability": "mutable",
                  "name": "_actionId",
                  "nameLocation": "1234:9:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 30246,
                  "src": "1226:17:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30222,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1226:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1184:60:29"
            },
            "returnParameters": {
              "id": 30225,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1245:0:29"
            },
            "scope": 30291,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 30290,
            "nodeType": "FunctionDefinition",
            "src": "1988:881:29",
            "nodes": [],
            "body": {
              "id": 30289,
              "nodeType": "Block",
              "src": "2145:724:29",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "baseExpression": {
                      "id": 30260,
                      "name": "nullifierHashes",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30215,
                      "src": "2226:15:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                        "typeString": "mapping(uint256 => bool)"
                      }
                    },
                    "id": 30262,
                    "indexExpression": {
                      "id": 30261,
                      "name": "nullifierHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30253,
                      "src": "2242:13:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2226:30:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 30266,
                  "nodeType": "IfStatement",
                  "src": "2222:61:29",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 30263,
                        "name": "InvalidNullifier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30199,
                        "src": "2265:16:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 30264,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2265:18:29",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 30265,
                    "nodeType": "RevertStatement",
                    "src": "2258:25:29"
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 30270,
                        "name": "root",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30251,
                        "src": "2417:4:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 30271,
                        "name": "groupId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30210,
                        "src": "2435:7:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "arguments": [
                              {
                                "id": 30274,
                                "name": "signal",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 30249,
                                "src": "2473:6:29",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "expression": {
                                "id": 30272,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "2456:3:29",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 30273,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "2460:12:29",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "2456:16:29",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 30275,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2456:24:29",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 30276,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2481:11:29",
                          "memberName": "hashToField",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 30709,
                          "src": "2456:36:29",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$attached_to$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes memory) pure returns (uint256)"
                          }
                        },
                        "id": 30277,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2456:38:29",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 30278,
                        "name": "nullifierHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30253,
                        "src": "2508:13:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 30279,
                        "name": "actionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30206,
                        "src": "2535:8:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 30280,
                        "name": "proof",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30257,
                        "src": "2557:5:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$8_calldata_ptr",
                          "typeString": "uint256[8] calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$8_calldata_ptr",
                          "typeString": "uint256[8] calldata"
                        }
                      ],
                      "expression": {
                        "id": 30267,
                        "name": "worldId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30203,
                        "src": "2384:7:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IWorldID_$30731",
                          "typeString": "contract IWorldID"
                        }
                      },
                      "id": 30269,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2392:11:29",
                      "memberName": "verifyProof",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 30730,
                      "src": "2384:19:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_array$_t_uint256_$8_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256[8] memory) view external"
                      }
                    },
                    "id": 30281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2384:188:29",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 30282,
                  "nodeType": "ExpressionStatement",
                  "src": "2384:188:29"
                },
                {
                  "expression": {
                    "id": 30287,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 30283,
                        "name": "nullifierHashes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30215,
                        "src": "2680:15:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                          "typeString": "mapping(uint256 => bool)"
                        }
                      },
                      "id": 30285,
                      "indexExpression": {
                        "id": 30284,
                        "name": "nullifierHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30253,
                        "src": "2696:13:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2680:30:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 30286,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2713:4:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2680:37:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 30288,
                  "nodeType": "ExpressionStatement",
                  "src": "2680:37:29"
                }
              ]
            },
            "documentation": {
              "id": 30247,
              "nodeType": "StructuredDocumentation",
              "src": "1414:569:29",
              "text": "@param signal An arbitrary input from the user, usually the user's wallet address (check README for further details)\n @param root The root of the Merkle tree (returned by the JS widget).\n @param nullifierHash The nullifier hash for this proof, preventing double signaling (returned by the JS widget).\n @param proof The zero-knowledge proof that demonstrates the claimer is registered with World ID (returned by the JS widget).\n @dev Feel free to rename this method however you want! We've used `claim`, `verify` or `execute` in the past."
            },
            "functionSelector": "73475b48",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "verifyAndExecute",
            "nameLocation": "1997:16:29",
            "parameters": {
              "id": 30258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30249,
                  "mutability": "mutable",
                  "name": "signal",
                  "nameLocation": "2037:6:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 30290,
                  "src": "2023:20:29",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30248,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2023:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 30251,
                  "mutability": "mutable",
                  "name": "root",
                  "nameLocation": "2061:4:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 30290,
                  "src": "2053:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30250,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2053:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 30253,
                  "mutability": "mutable",
                  "name": "nullifierHash",
                  "nameLocation": "2083:13:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 30290,
                  "src": "2075:21:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30252,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2075:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 30257,
                  "mutability": "mutable",
                  "name": "proof",
                  "nameLocation": "2126:5:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 30290,
                  "src": "2106:25:29",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$8_calldata_ptr",
                    "typeString": "uint256[8]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 30254,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2106:7:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 30256,
                    "length": {
                      "hexValue": "38",
                      "id": 30255,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2114:1:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_8_by_1",
                        "typeString": "int_const 8"
                      },
                      "value": "8"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2106:10:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$8_storage_ptr",
                      "typeString": "uint256[8]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2013:124:29"
            },
            "returnParameters": {
              "id": 30259,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2145:0:29"
            },
            "scope": 30291,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Contract",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          30291
        ],
        "name": "Contract",
        "nameLocation": "173:8:29",
        "scope": 30292,
        "usedErrors": [
          30199
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 29
}