const { expect } = require("chai");

describe("donorRegistry", function () {
  let DonorRegistry, donorRegistry, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    DonorRegistry = await ethers.getContractFactory("DonorRegistry");
    donorRegistry = await DonorRegistry.deploy();
    await donorRegistry.waitForDeployment();
  });

  it("Should register a donor", async function () {
    await donorRegistry.connect(addr1).registerDonor("Donor");
    expect(await donorRegistry.isRegisteredDonor(addr1.address)).to.equal(true);
  });

  it("Should emit DonorRegistered event", async function () {
    await expect(donorRegistry.connect(addr1).registerDonor("Donor"))
      .to.emit(donorRegistry, 'DonorRegistered')
      .withArgs(addr1.address);
  });
});
