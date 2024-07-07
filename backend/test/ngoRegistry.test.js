const { expect } = require("chai");

describe("ngoRegistry", function () {
  let NGORegistry, DonorRegistry, ngoRegistry, donorsRegistry, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    DonorRegistry = await ethers.getContractFactory("donorsRegistry");
    donorsRegistry = await DonorRegistry.deploy();
    await donorsRegistry.deployed();

    NGORegistry = await ethers.getContractFactory("ngoRegistry");
    ngoRegistry = await NGORegistry.deploy(donorsRegistry.address);
    await ngoRegistry.deployed();
  });

  it("Should register an NGO", async function () {
    await ngoRegistry.connect(addr1).registerNGO("Helpful NGO", "NGO Description");
    expect(await ngoRegistry.isRegisteredNGO(addr1.address)).to.equal(true);
  });

  it("Should emit NGORegistered event", async function () {
    await expect(ngoRegistry.connect(addr1).registerNGO("Helpful NGO", "NGO Description"))
      .to.emit(ngoRegistry, 'NGORegistered')
      .withArgs("Helpful NGO", "NGO Description", addr1.address);
  });
});
