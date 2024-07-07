// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./donorRegistry.sol";

contract NGORegistry {
    event NGORegistered(string name, string description,string ngoIcon ,address ngoManager );

    struct NGO {
        string name;
        string description;
        string ngoIcon;
        address ngoManager;
    }

    NGO[] public ngos;
    mapping(address => bool) public isRegisteredNGO;

    DonorRegistry public donorRegistry;

    constructor(address donorRegistryAddress) {
        donorRegistry = DonorRegistry(donorRegistryAddress);
    }

    function registerNGO(string memory name, string memory description , string memory ngoIcon) public {
        require(!isRegisteredNGO[msg.sender], "NGO already registered");
        require(!donorRegistry.isRegisteredDonor(msg.sender), "Donor cannot register as NGO");

        NGO memory newNGO = NGO(name, description,ngoIcon, msg.sender);
        ngos.push(newNGO);
        isRegisteredNGO[msg.sender] = true;
        emit NGORegistered(name, description, ngoIcon, msg.sender);
    }

    function getNGOs() public view returns (NGO[] memory) {
        return ngos;
    }
}
