// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import fs from 'fs';
import { config, ethers, run } from 'hardhat';

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // fs.unlinkSync(`${config.paths.artifacts}/contracts/contractAddress.ts`);

  // We get the contract to deploy
  const YourContract = await ethers.getContractFactory('Domains');
  const contract = await YourContract.deploy('lit');
  await contract.deployed();
  console.log('Domains deployed to:', contract.address);

  //wait for 5 block transactions to ensure deployment before verifying

  // await contract.deployTransaction.wait(5);

  //verify

  // await run("verify:verify", {
  //   address: contract.address,
  //   contract: "contracts/Domain.sol:Domains", //Filename.sol:ClassName
  //   constructorArguments: ['lit'],
  // });

  saveFrontendFiles(
    contract.address,
    'Domains'
  );


}

// https://github.com/nomiclabs/hardhat-hackathon-boilerplate/blob/master/scripts/deploy.js
function saveFrontendFiles(
  contractAddress: string,
  contractName: string
) {
  fs.writeFileSync(
    `${config.paths.artifacts}/contracts/contractAddress.ts`,
    `export const ${contractName} = '${contractAddress}'`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
