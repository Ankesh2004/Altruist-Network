const {expect} = require("chai");

describe("campaign", function () {
    let Campaign,campaign,DonorRegistry,donorRegistry, owner, donor1,donor2,ngo;

    beforeEach(async function(){
        [owner, donor1, donor2, ngo] = await ethers.getSigners();

        DonorRegistry = await ethers.getContractFactory("DonorRegistry");
        donorRegistry = await DonorRegistry.deploy();
        await donorRegistry.waitForDeployment();

        Campaign = await ethers.getContractFactory("Campaign");
        campaign = await Campaign.deploy("Helpful Campaign", "Campaign Description", 1000, ngo.address, donorRegistry.target);
        await campaign.waitForDeployment();

        await donorRegistry.connect(donor1).registerDonor("Donor 1");
        await donorRegistry.connect(donor2).registerDonor("Donor 2");
    })
    it("Should register donors", async function(){
        expect(await donorRegistry.isRegisteredDonor(donor1.address)).to.equal(true);
        expect(await donorRegistry.isRegisteredDonor(donor2.address)).to.equal(true);
    });

    it("Should allow donors to contribute to campaign", async function(){
        await campaign.connect(donor1).contribute({value : 100});
        expect (await campaign.raisedAmount()).to.equal(100);
        expect (await campaign.contributions(donor1.address)).to.equal(100);

        await campaign.connect(donor2).contribute({value : 200});
        expect (await campaign.raisedAmount()).to.equal(300);
        expect (await campaign.contributions(donor2.address)).to.equal(200);
    })
    it("Should not allow unregistered donors to contribute", async function () {
        await expect(campaign.connect(owner).contribute({ value: 500 }))
          .to.be.revertedWith("Only registered donors can contribute");
    });
    it("Should allow the NGO to withdraw funds once the goal is reached", async function () {
        //  the initial NGO balance is 10000000000000000000000n (BigInt) in testnet ( hence failing the test)
        const initialNGOBalance = BigInt(10000000000000000000000);
        
        await campaign.connect(donor1).contribute({ value: 700 });
        await campaign.connect(donor2).contribute({ value: 400 });
    
        expect(await campaign.raisedAmount()).to.equal(1100);

        expect(await campaign.isActive()).to.equal(true);
        await campaign.connect(ngo).withdraw();
        expect(await campaign.isActive()).to.equal(false);

        const ngoBalance = await ethers.provider.getBalance(ngo.address);
        expect(ngoBalance).to.equal(BigInt(initialNGOBalance + BigInt(1100)));
    });
    
    it("Should not allow withdrawal if the goal is not reached", async function () {
        await campaign.connect(donor1).contribute({ value: 50 });
        await expect(campaign.connect(ngo).withdraw())
          .to.be.revertedWith("Campaign goal has not been reached yet");
    });
    
    it("Should return correct campaign summary", async function () {
        await campaign.connect(donor1).contribute({ value: 500 });
        const summary = await campaign.getCampaignSummary();
    
        expect(summary[0]).to.equal("Helpful Campaign");
        expect(summary[1]).to.equal("Campaign Description");
        expect(summary[2]).to.equal(1000);
        expect(summary[3]).to.equal(500);
        expect(summary[4]).to.equal(ngo.address);
        expect(summary[5]).to.equal(true);
    });
    
    it("Should return correct user contribution", async function () {
        await campaign.connect(donor1).contribute({ value: 500 });
        const contribution = await campaign.getUserContribution(donor1.address);
    
        expect(contribution).to.equal(500);
    });
    
      it("Should return the list of contributors", async function () {
        await campaign.connect(donor1).contribute({ value: 500 });
        await campaign.connect(donor2).contribute({ value: 300 });
    
        const contributors = await campaign.getContributors();
    
        expect(contributors).to.deep.equal([donor1.address, donor2.address]);
      });
});