const { expect } = require("chai");

describe("campaignFactory", function () {
  let CampaignFactory, NGORegistry, DonorRegistry, Campaign, campaignFactory, ngoRegistry, donorRegistry, owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    DonorRegistry = await ethers.getContractFactory("DonorRegistry");
    donorRegistry = await DonorRegistry.deploy();
    await donorRegistry.waitForDeployment();

    NGORegistry = await ethers.getContractFactory("NGORegistry");
    ngoRegistry = await NGORegistry.deploy(donorRegistry.target);
    await ngoRegistry.waitForDeployment();
    

    CampaignFactory = await ethers.getContractFactory("CampaignFactory");
    campaignFactory = await CampaignFactory.deploy(ngoRegistry.target, donorRegistry.target);
    await campaignFactory.waitForDeployment();

    Campaign = await ethers.getContractFactory("Campaign");
  });

  it("Should create a new campaign", async function () {
    await ngoRegistry.connect(addr1).registerNGO("Helpful NGO", "NGO Description","0x");

    await campaignFactory.connect(addr1).createCampaign("Helpful Campaign", "Campaign Description",100);
    const campaigns = await campaignFactory.getActiveCampaigns();
    expect(campaigns.length).to.equal(1);
  });

  it("Should emit CampaignCreated event", async function () {
    await ngoRegistry.connect(addr1).registerNGO("Helpful NGO", "NGO Description","0x");

    await expect(campaignFactory.connect(addr1).createCampaign("Helpful Campaign", "Campaign Description",100))
      .to.emit(campaignFactory, 'CampaignCreated')
      .withArgs("Helpful Campaign", "Campaign Description",100, addr1.address);
  });

  it("Should not allow non-registered NGO to create a campaign", async function () {
    await expect(campaignFactory.connect(addr2).createCampaign("Helpful Campaign", "Campaign Description",100))
      .to.be.revertedWith("NGO not registered");
  });
});
