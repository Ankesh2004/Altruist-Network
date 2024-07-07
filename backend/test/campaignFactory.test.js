const { expect } = require("chai");

describe("campaignFactory", function () {
  let CampaignFactory, NGORegistry, DonorRegistry, Campaign, campaignFactory, ngoRegistry, donorRegistry, owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    DonorRegistry = await ethers.getContractFactory("donorRegistry");
    donorRegistry = await DonorRegistry.deploy();
    await donorRegistry.deployed();

    NGORegistry = await ethers.getContractFactory("ngoRegistry");
    ngoRegistry = await NGORegistry.deploy(donorRegistry.address);
    await ngoRegistry.deployed();

    CampaignFactory = await ethers.getContractFactory("campaignFactory");
    campaignFactory = await CampaignFactory.deploy(ngoRegistry.address, donorRegistry.address);
    await campaignFactory.deployed();

    Campaign = await ethers.getContractFactory("campaign");
  });

  it("Should create a new campaign", async function () {
    await ngoRegistry.connect(addr1).registerNGO("Helpful NGO", "NGO Description");

    await campaignFactory.connect(addr1).createCampaign("Helpful Campaign", "Campaign Description",100);
    const campaigns = await campaignFactory.getActiveCampaigns();
    expect(campaigns.length).to.equal(1);
  });

  it("Should emit CampaignCreated event", async function () {
    await ngoRegistry.connect(addr1).registerNGO("Helpful NGO", "NGO Description");

    await expect(campaignFactory.connect(addr1).createCampaign("Helpful Campaign", "Campaign Description",100))
      .to.emit(campaignFactory, 'CampaignCreated')
      .withArgs("Helpful Campaign", "Campaign Description",100, addr1.address, campaigns[0]);
  });

  it("Should not allow non-registered NGO to create a campaign", async function () {
    await expect(campaignFactory.connect(addr2).createCampaign(1000))
      .to.be.revertedWith("NGO not registered");
  });
});
