const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const Curator = await hre.ethers.getContractFactory("Catalog");

  const zoraAskV1_1 = "0xCe6cEf2A9028e1C3B21647ae3B4251038109f42a";
  const zoraTransferHelper = "0x909e9efE4D87d1a6018C2065aE642b6D0447bc91";
  const zoraModuleManager = "0x850A7c6fE2CF48eea1393554C8A3bA23f20CC401";

  const implementation = await hre.upgrades.deployProxy(Curator, [
    "Music NFT",
    "music",
    zoraAskV1_1,
    zoraTransferHelper,
    zoraModuleManager,
  ]);

  await implementation.deployed();

  console.log("Catalog deployed to:", implementation.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
