async function main() {
    const Token = await ethers.getContractFactory("Token")
    const token = await Token.deploy('Dapp University', 'DAPP', 1000000)
    await token.deployed()
    console.log(`Token Deployed to: ${token.address}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
});