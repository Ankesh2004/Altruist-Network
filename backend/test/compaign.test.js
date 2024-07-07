const {expect} = require("chai");

describe("campaign", function () {
    let Campaign,campaign,DonorRegistry,donorRegistry, manager, owner, donor1,donor2,ngo;

    beforeEach(async function(){
        [owner, manager, donor1, donor2, ngo] = await ethers.getSigners();

        DonorRegistry = await ethers.getContractFactory("DonorRegistry");
        donorRegistry = await DonorRegistry.deploy();
        await donorRegistry.waitForDeployment();

        Campaign = await ethers.getContractFactory("Campaign");
        campaign = await Campaign.deploy("Helpful Campaign", "Campaign Description", 1000, ngo.target, donorRegistry.target);
        await campaign.waitForDeployment();
    })
    it("Should register donors", async function(){
        await donorRegistry.connect(donor1).registerDonor("Donor 1");
        await donorRegistry.connect(donor2).registerDonor("Donor 2");
        expect(await donorRegistry.isRegisteredDonor(donor1.target)).to.equal(true);
        expect(await donorRegistry.isRegisteredDonor(donor2.target)).to.equal(true);
    });

    it("Should allow donors to contribute to campaign", async function(){
        await campaign.connect(donor1).contribute({value : 100});
        expect (await campaign.raisedAmount()).to.equal(100);
        expect (await campaign.contributions(donor1.target)).to.equal(100);

        await campaign.connect(donor2).contribute({value : 200});
        expect (await campaign.raisedAmount()).to.equal(300);
        expect (await campaign.contributions(donor2.target)).to.equal(200);
    })
    it("Should not allow unregistered donors to contribute", async function () {
        await expect(campaign.connect(manager).contribute({ value: 500 }))
          .to.be.revertedWith("Only registered donors can contribute");
    });
    it("Should allow the manager to donate to the NGO once the goal is reached", async function () {
        await campaign.connect(donor1).contribute({ value: 700 });
        await campaign.connect(donor2).contribute({ value: 400 });
    
        expect(await campaign.raisedAmount()).to.equal(1100);
    
        // Manager tries to donate to the NGO
        await campaign.connect(manager).donate();
    
        // Check that the campaign is no longer active
        expect(await campaign.isActive()).to.equal(false);
    
        // Check the NGO balance
        const ngoBalance = await ethers.provider.getBalance(ngo.target);
        expect(ngoBalance).to.equal(1100);
    });
    
    it("Should not allow donations if the goal is not reached", async function () {
        await campaign.connect(donor1).contribute({ value: 50 });
        await expect(campaign.connect(manager).donate())
          .to.be.revertedWith("Campaign goal has not been reached yet");
    });
    
    it("Should return correct campaign summary", async function () {
        await campaign.connect(donor1).contribute({ value: 500 });
        const summary = await campaign.getCampaignSummary();
    
        expect(summary[0]).to.equal(manager.target);
        expect(summary[1]).to.equal(1000);
        expect(summary[2]).to.equal(500);
        expect(summary[3]).to.equal(ngo.target);
        expect(summary[4]).to.equal(true);
    });
    
    it("Should return correct user contribution", async function () {
        await campaign.connect(donor1).contribute({ value: 500 });
        const contribution = await campaign.getUserContribution(donor1.target);
    
        expect(contribution).to.equal(500);
    });
    
      it("Should return the list of contributors", async function () {
        await campaign.connect(donor1).contribute({ value: 500 });
        await campaign.connect(donor2).contribute({ value: 300 });
    
        const contributors = await campaign.getContributors();
    
        expect(contributors).to.deep.equal([donor1.target, donor2.target]);
      });
});