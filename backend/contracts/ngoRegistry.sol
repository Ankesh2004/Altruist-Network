// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./donorRegistry.sol";

contract NGORegistry {
    event NGORegistered(
        uint256 indexed ngoId,
        string name,
        string description,
        string ngoIcon,
        address indexed ngoManager
    );
    event NGODocumentUpdated(uint256 indexed ngoId, string cid);

    struct NGO {
        uint256 id;
        string name;
        string description;
        string ngoIcon;
        address ngoManager;
        string documentCID;
    }

    NGO[] public ngos;
    mapping(address => uint256) public ngoIdByManager;
    uint256 private nextNgoId = 1;

    DonorRegistry public immutable donorRegistry;

    constructor(address donorRegistryAddress) {
        donorRegistry = DonorRegistry(donorRegistryAddress);
    }

    function registerNGO(
        string memory name,
        string memory description,
        string memory ngoIcon
    ) public {
        require(ngoIdByManager[msg.sender] == 0, "NGO already registered");
        require(
            !donorRegistry.isRegisteredDonor(msg.sender),
            "Donor cannot register as NGO"
        );

        uint256 ngoId = nextNgoId++;
        NGO memory newNGO = NGO(ngoId, name, description, ngoIcon, msg.sender, "");
        ngos.push(newNGO);
        ngoIdByManager[msg.sender] = ngoId;
        emit NGORegistered(ngoId, name, description, ngoIcon, msg.sender);
    }

    function updateNGODocument(string memory cid) public {
        uint256 ngoId = ngoIdByManager[msg.sender];
        require(ngoId != 0, "Only registered NGOs can update documents");
        ngos[ngoId - 1].documentCID = cid;
        emit NGODocumentUpdated(ngoId, cid);
    }

    function getNGODocument(uint256 ngoId) public view returns (string memory) {
        require(ngoId > 0 && ngoId <= ngos.length, "Invalid NGO ID");
        return ngos[ngoId - 1].documentCID;
    }

    function getNGOs() public view returns (NGO[] memory) {
        return ngos;
    }

    function getNGOById(uint256 ngoId) public view returns (NGO memory) {
        require(ngoId > 0 && ngoId <= ngos.length, "Invalid NGO ID");
        return ngos[ngoId - 1];
    }

    function getNGOByManager(address manager) public view returns (NGO memory) {
        uint256 ngoId = ngoIdByManager[manager];
        require(ngoId != 0, "NGO not found");
        return ngos[ngoId - 1];
    }
}