// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import {ByteHasher} from "../src/helpers/ByteHasher.sol";
import "../src/Contract.sol";
import "../src/Semaphore.sol";

contract VerifyTest is Test {
    using ByteHasher for bytes;
    Contract public c;

    function setUp() public {
        Semaphore c_semaphore = new Semaphore();
        c = new Contract(IWorldID(address(c_semaphore)), "my_action");
    }

    function verify() public {
        c.verifyAndExecute(
            0x41cd2913EAC124b5cd8D6AA70bf0b303e0180872,
            740482069349139776921624198437647156280643844010284436402311164051934337839,
            5759946051551880877365043236365351516617434008768373140920402385034674394476,
            [
                18176290194006325302717489875195068962901836850031765293551803017495829069820,
                6707225784411238762988358064545711978354332593591129355142931322529170109526,
                9505869374180607188408310236721138547815781040808083030416501429663533394071,
                8342648259743115442653910305771878907106503752381072678598696366809632133341,
                389396081820886492936080009954655505524428765023203627945301145271986271525,
                17404973689600674401666831587757284536055037722317019594973565842052559922407,
                10641120773445072693085566522858726164744420134925586625282672895236176030953,
                21359360295518902042932999195003903804271239461571546472020986439416611239417
            ]
        );
    }
}
