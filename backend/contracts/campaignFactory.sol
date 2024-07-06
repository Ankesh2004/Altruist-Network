// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "./Campaign.sol";

contract CampaignFactory  {
    event CampaignCreated(address manager,uint goal, address benefitedNGO);
    address [] public campaigns;
    mapping (address => bool) activeCampaign;

    function createCampaign(uint goal, address ngo) public {
        Campaign newCampaign = new Campaign(goal, ngo);
        campaigns.push(address(newCampaign));
        activeCampaign[address(newCampaign)] = true;
        emit CampaignCreated(msg.sender,goal,ngo);
    }

    function getActiveCampaigns() public view returns (address[] memory) {
        address[] memory temp = new address[](campaigns.length);
        uint activeCampaignsCount = 0;
        for(uint i=0;i<campaigns.length;i++) {
            if(activeCampaign[campaigns[i]]) {
                temp[activeCampaignsCount] = campaigns[i];
                activeCampaignsCount++;
            }
        }
        address[] memory activeCampaigns = new address[](activeCampaignsCount);
        for(uint i=0;i<activeCampaignsCount;i++) {
            activeCampaigns[i] = temp[i];
        }
        return activeCampaign;
    }
}