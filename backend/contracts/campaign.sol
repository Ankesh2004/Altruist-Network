// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./donorRegistry.sol";

contract Campaign {
    event Contributed(address contributor, uint amount, address benefitedNGO);
    event Withdrawn(address campaign, address benefitedNGO, uint amount);

    string public name;
    string public description;
    uint public goal;
    uint public raisedAmount;
    bool public isActive;
    address payable public benefitedNGO;
    mapping(address => uint) public contributions;
    address[] public contributors;

    DonorRegistry public donorRegistry;

    constructor(string memory _name, string memory _description ,uint256 campaignGoal, address payable ngoAddress, address donorRegistryAddress) {
        name = _name;
        description = _description;
        goal = campaignGoal;
        benefitedNGO = ngoAddress;
        raisedAmount = 0;
        isActive = true;
        donorRegistry = DonorRegistry(donorRegistryAddress);
    }

    function contribute() public payable {
        require(isActive, "Campaign is not active");
        require(donorRegistry.isRegisteredDonor(msg.sender), "Only registered donors can contribute");
        require(msg.value > 0, "Contribution amount should be greater than 0");
        
        uint contributedAmount = msg.value;
        raisedAmount += contributedAmount;
        
        if (contributions[msg.sender] == 0) {
            contributors.push(msg.sender);
        }
        contributions[msg.sender] += contributedAmount;
        emit Contributed(msg.sender, contributedAmount, benefitedNGO);
    }

    function withdraw() public{
        require(raisedAmount >= goal, "Campaign goal has not been reached yet");
        require(msg.sender == benefitedNGO, "Only NGO can withdraw the funds");
        
        benefitedNGO.transfer(raisedAmount);
        isActive = false;
        emit Withdrawn(address(this), benefitedNGO, raisedAmount);
    }

    function getUserContribution(address user) public view returns (uint) {
        return contributions[user];
    }

    function getContributors() public view returns (address[] memory) {
        return contributors;
    }

    function getCampaignSummary() public view returns (string memory,string memory, uint, uint, address payable, bool) {
        return (name, description, goal, raisedAmount, benefitedNGO, isActive);
    }
}
