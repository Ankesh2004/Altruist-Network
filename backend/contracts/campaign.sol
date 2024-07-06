// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Campaign{
    event contributed(address contributor,uint amount, address benefitedNGO);
    event donated(address campaign,address benefitedNGO, uint amount);

    address public manager;
    uint public goal;
    uint public raisedAmount;
    bool public isActive;
    address payable public benefitedNGO;
    mapping(address=>uint) public contributions;
    address[] public contributors;

    constructor(uint256 campaignGoal, address payable ngoAddress) 
    {
        goal = campaignGoal;
        benefitedNGO = ngoAddress;
        manager = msg.sender;
        isActive = true;
    }
    function contribute() public payable
    {
        uint contributedAmount = msg.value;
        raisedAmount+=contributedAmount;
        if(contributions[msg.sender] == 0){
            contributors.push(msg.sender);
        }
        contributions[msg.sender]+=contributedAmount;
        emit contributed(msg.sender,contributedAmount,address(this));
    }
    function donate() public payable{
        require(raisedAmount >= goal,"Campaign goal has not reached yet");
        benefitedNGO.transfer(raisedAmount);
        isActive = false;
        emit donated(address(this), benefitedNGO, raisedAmount);
    }
    function getUserContribution(address user) public view returns(uint){
        return contributions[user];
    }
    function getContributors() public view returns(string[] memory){
        string [] memory contributorsList = new string[](contributors.length);
        string memory temp;

        for(uint i=0;i<contributors.length;i++){
            temp = string(abi.encodePacked("Contributor: ",contributors[i]," Contribution: ",contributions[contributors[i]]));
            contributorsList[i] = temp;
        }
        return contributorsList;
    }
    function getCampaignSummary() public view returns(address,uint,uint,address payable,bool){
        return (manager,goal,raisedAmount,benefitedNGO,isActive);
    }
    
}