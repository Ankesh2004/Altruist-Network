const hre = require("hardhat");

async function main() {
  // Deploy DonorRegistry
  const DonorRegistry = await hre.ethers.getContractFactory("DonorRegistry");
  const donorRegistry = await DonorRegistry.deploy();
  await donorRegistry.waitForDeployment();
  console.log("DonorRegistry deployed to:", await donorRegistry.getAddress());

  // Deploy NGORegistry
  // const NGORegistry = await hre.ethers.getContractFactory("NGORegistry");
  // const ngoRegistry = await NGORegistry.deploy("0xda2AAfB3656fb98398D29873E7dBD82d5153311C");
  // await ngoRegistry.waitForDeployment();
  // console.log("NGORegistry deployed to:",await ngoRegistry.getAddress());

  // // Deploy Campaign
  // const Campaign = await hre.ethers.getContractFactory("Campaign");
  // const campaign = await Campaign.deploy("0xda2AAfB3656fb98398D29873E7dBD82d5153311C");
  // await campaign.waitForDeployment();
  // console.log("Campaign deployed to:", await campaign.getAddress());

  // // Deploy CampaignFactory
  // const CampaignFactory = await hre.ethers.getContractFactory("CampaignFactory");
  // const campaignFactory = await CampaignFactory.deploy("0x4F41000aAEE8F08922fffedc5DA40cFc0ac0111d","0xda2AAfB3656fb98398D29873E7dBD82d5153311C");
  // await campaignFactory.waitForDeployment();
  // console.log("CampaignFactory deployed to:", await campaignFactory.getAddress());

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });