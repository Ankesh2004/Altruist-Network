const { expect } = require("chai");

describe("donorsRegistry", function () {
  let DonorRegistry, donorsRegistry, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    DonorRegistry = await ethers.getContractFactory("donorsRegistry");
    donorsRegistry = await DonorRegistry.deploy();
    await donorsRegistry.deployed();
  });

  it("Should register a donor", async function () {
    await donorsRegistry.connect(addr1).registerDonor("John Doe");
    expect(await donorsRegistry.isRegisteredDonor(addr1.address)).to.equal(true);
  });

  it("Should emit DonorRegistered event", async function () {
    await expect(donorsRegistry.connect(addr1).registerDonor("John Doe"))
      .to.emit(donorsRegistry, 'DonorRegistered')
      .withArgs(addr1.address);
  });
});
