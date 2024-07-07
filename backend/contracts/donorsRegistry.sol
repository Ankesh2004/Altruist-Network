// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract DonorRegistry {
    event DonorRegistered(address donorAddress);

    struct Donor {
        string name;
        uint totalDonatedAmount;
    }

    mapping(address => bool) public isRegisteredDonor;
    Donor[] public donors;

    function registerDonor(string memory name) public {
        Donor memory newDonor = Donor(name, 0);
        donors.push(newDonor);
        isRegisteredDonor[msg.sender] = true;
        emit DonorRegistered(msg.sender);
    }

    function getTopDonors() public view returns (Donor[] memory) {
        return donors;
    }
}
