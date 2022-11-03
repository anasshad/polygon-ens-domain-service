import {ethers} from 'hardhat'

const main = async () => {
    const [owner, user] = await ethers.getSigners();
    const domainContractFactory = await ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy('lit');
    await domainContract.deployed();
    console.log('Domain Contract deployed to: ', domainContract.address)
    console.log('Owner address: ', owner.address);

    let txn = await domainContract.register('ens', {value: ethers.utils.parseEther('0.1')});
    await txn.wait();

    txn = await domainContract.getPrice('ens');

    const domainOwner = await domainContract.getAddress('ens');
    console.log('Owner of domain: ', domainOwner);

    try{
        txn = await domainContract.connect(user).withdraw();
        await txn.wait();
    } catch(error){
        console.log('Could not rob')
    }
}

const runMain = async() => {
    try{
        await main();
        process.exit(0);
    } catch(error){
        console.log(error)
        process.exit(1)
    }
}

runMain()