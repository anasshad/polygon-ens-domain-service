import fs from 'fs';
import { config, ethers, run } from 'hardhat';

async function main() {
  const YourContract = await ethers.getContractFactory('Domains');
  const contract = await YourContract.deploy('lit');
  await contract.deployed();
  console.log('Domains Contract deployed to:', contract.address);

  // wait for 5 block transactions to ensure deployment before verifying

  await contract.deployTransaction.wait(5);

  // verify

  await run("verify:verify", {
    address: contract.address,
    contract: "contracts/Domain.sol:Domains", //Filename.sol:ClassName
    constructorArguments: ['lit'],
  });

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
  console.log(contractAddress)
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
