const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NGORegistry", function () {
  let NGORegistry, DonorRegistry, ngoRegistry, donorRegistry, owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    
    DonorRegistry = await ethers.getContractFactory("DonorRegistry");
    donorRegistry = await DonorRegistry.deploy();
    await donorRegistry.waitForDeployment();

    NGORegistry = await ethers.getContractFactory("NGORegistry");
    ngoRegistry = await NGORegistry.deploy(await donorRegistry.getAddress());
    await ngoRegistry.waitForDeployment();
  });

  describe("NGO Registration", function () {
    it("Should register an NGO", async function () {
      await ngoRegistry.connect(addr1).registerNGO("Helpful NGO", "NGO Description", "0x");
      const ngo = await ngoRegistry.getNGOByManager(addr1.address);
      expect(ngo.name).to.equal("Helpful NGO");
      expect(ngo.description).to.equal("NGO Description");
      expect(ngo.ngoIcon).to.equal("0x");
      expect(ngo.ngoManager).to.equal(addr1.address);
    });

    it("Should emit NGORegistered event", async function () {
      await expect(ngoRegistry.connect(addr1).registerNGO("Helpful NGO", "NGO Description", "0x"))
        .to.emit(ngoRegistry, 'NGORegistered')
        .withArgs(1, "Helpful NGO", "NGO Description", "0x", addr1.address);
    });

    it("Should not allow duplicate registration", async function () {
      await ngoRegistry.connect(addr1).registerNGO("Helpful NGO", "NGO Description", "0x");
      await expect(ngoRegistry.connect(addr1).registerNGO("Another NGO", "Description", "0x"))
        .to.be.revertedWith("NGO already registered");
    });
  });

  describe("NGO Document Management", function () {
    beforeEach(async function () {
      await ngoRegistry.connect(addr1).registerNGO("Helpful NGO", "NGO Description", "0x");
    });

    it("Should update NGO document", async function () {
      await ngoRegistry.connect(addr1).updateNGODocument("QmTest123");
      const ngo = await ngoRegistry.getNGOByManager(addr1.address);
      expect(ngo.documentCID).to.equal("QmTest123");
    });

    it("Should emit NGODocumentUpdated event", async function () {
      await expect(ngoRegistry.connect(addr1).updateNGODocument("QmTest123"))
        .to.emit(ngoRegistry, 'NGODocumentUpdated')
        .withArgs(1, "QmTest123");
    });

    it("Should not allow non-registered NGOs to update documents", async function () {
      await expect(ngoRegistry.connect(addr2).updateNGODocument("QmTest123"))
        .to.be.revertedWith("Only registered NGOs can update documents");
    });
  });

  describe("NGO Retrieval", function () {
    beforeEach(async function () {
      await ngoRegistry.connect(addr1).registerNGO("Helpful NGO", "NGO Description", "0x");
      await ngoRegistry.connect(addr1).updateNGODocument("QmTest123");
    });

    it("Should get NGO by ID", async function () {
      const ngo = await ngoRegistry.getNGOById(1);
      expect(ngo.name).to.equal("Helpful NGO");
      expect(ngo.documentCID).to.equal("QmTest123");
    });

    it("Should get NGO by manager address", async function () {
      const ngo = await ngoRegistry.getNGOByManager(addr1.address);
      expect(ngo.name).to.equal("Helpful NGO");
      expect(ngo.documentCID).to.equal("QmTest123");
    });

    it("Should get NGO document by ID", async function () {
      const documentCID = await ngoRegistry.getNGODocument(1);
      expect(documentCID).to.equal("QmTest123");
    });

    it("Should get all NGOs", async function () {
      await ngoRegistry.connect(addr2).registerNGO("Another NGO", "Description", "0x");
      const ngos = await ngoRegistry.getNGOs();
      expect(ngos.length).to.equal(2);
      expect(ngos[0].name).to.equal("Helpful NGO");
      expect(ngos[1].name).to.equal("Another NGO");
    });
  });
});