const hre = require("hardhat");

async function main() {
  // Get the Points smart contract
  const Points = await hre.ethers.getContractFactory("Points");

  // Deploy it
  const points = await Points.deploy();
  await points.deployed();

  // Display the contract address
  console.log(`Points token deployed to ${points.address}`);
}

// Hardhat recommends this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
