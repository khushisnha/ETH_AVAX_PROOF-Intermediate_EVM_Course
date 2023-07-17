// SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract Cryptocurrency {
    mapping(address => uint256) private balances;

    event Transfer(address indexed from, address indexed to, uint256 value);

    function incrementBalance(uint256 value) public {
        balances[msg.sender] += value;
        emit Transfer(address(0), msg.sender, value);
    }

    function decrementBalance(uint256 value) public {
        require(balances[msg.sender] >= value, "Insufficient balance");
        balances[msg.sender] -= value;
        emit Transfer(msg.sender, address(0), value);
    }

    function getBalance(address account) public view returns (uint256) {
        return balances[account];
    }
}
