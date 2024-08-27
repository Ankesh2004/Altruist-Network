// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract DonorRegistry {
    event DonorRegistered(address donorAddress);

    struct Donor {
        string name;
        address donorAddress;
        uint totalDonatedAmount;
    }

    struct Donation {
        uint amount;
        uint timestamp;
    }

    mapping(address => bool) public isRegisteredDonor;
    Donor[] public donors;

    mapping(address => Donation[]) public donorDonations;

    function recordDonation(address donor, uint amount) internal {
        donorDonations[donor].push(Donation(amount, block.timestamp));
    }

    function getDonorDonations(address donor) public view returns (Donation[] memory) {
        return donorDonations[donor];
    }

    function registerDonor(string memory name) public {
        require(!isRegisteredDonor[msg.sender], "Donor already registered");
        Donor memory newDonor = Donor(name, msg.sender, 0);
        donors.push(newDonor);
        isRegisteredDonor[msg.sender] = true;
        emit DonorRegistered(msg.sender);
    }

    function checkRegistration() public view returns (bool) {
        return isRegisteredDonor[msg.sender];
    }

    function getDonorDetails(address donor) public view returns (Donor memory) {
        require(isRegisteredDonor[donor], "Donor not registered");
        Donor memory donorDetails = Donor("", address(0), 0);
        for (uint i = 0; i < donors.length; i++) {
            if (donors[i].donorAddress == donor) {
                donorDetails = donors[i];
            }
        }
        return donorDetails;
    }
    
    function getTopDonors() public view returns (Donor[] memory) {
        return donors;
    }
    function getNumberOfUniqueDonors() public view returns (uint) {
        return donors.length;
    }
}
