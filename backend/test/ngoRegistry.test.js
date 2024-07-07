const { expect } = require("chai");

describe("ngoRegistry", function () {
  let NGORegistry, DonorRegistry, ngoRegistry, donorRegistry, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    DonorRegistry = await ethers.getContractFactory("DonorRegistry");
    donorRegistry = await DonorRegistry.deploy();
    await donorRegistry.waitForDeployment();

    NGORegistry = await ethers.getContractFactory("NGORegistry");
    ngoRegistry = await NGORegistry.deploy(donorRegistry.target);
    await ngoRegistry.waitForDeployment();
  });

  it("Should register an NGO", async function () {
    await ngoRegistry.connect(addr1).registerNGO("Helpful NGO", "NGO Description", "0x");
    expect(await ngoRegistry.isRegisteredNGO(addr1.address)).to.equal(true);
  });

  it("Should emit NGORegistered event", async function () {
    await expect(ngoRegistry.connect(addr1).registerNGO("Helpful NGO", "NGO Description", "0x"))
      .to.emit(ngoRegistry, 'NGORegistered')
      .withArgs("Helpful NGO", "NGO Description", "0x", addr1.address);
  });
});
