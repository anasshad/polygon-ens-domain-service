import '@nomicfoundation/hardhat-toolbox';
import { HardhatUserConfig } from 'hardhat/config';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config({ path: __dirname + '/.env' });

/** @type import('hardhat/config').HardhatUserConfig */
const config: HardhatUserConfig = {
  solidity: '0.8.9',
  paths: {
    artifacts: './frontend/artifacts',
  },
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/kc_kMYAElsdk6LhEkCV-Yyq4wIOLt-nz",
      accounts: [process.env.PRIVATE_KEY]
    },
    hardhat: {
      chainId: 31337, // We set 1337 to make interacting with MetaMask simpler
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGON_API
    }
  },
  typechain: {
    outDir: './frontend/types/typechain',
  },
};

export default config;
