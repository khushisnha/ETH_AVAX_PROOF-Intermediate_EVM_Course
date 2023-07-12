// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract MyContract {
  uint public cryptocurrency;

  function incrementCryptocurrency() public {
    cryptocurrency += 1;
  }

  function getCryptocurrency() public view returns (uint) {
    return cryptocurrency;
  }
}
