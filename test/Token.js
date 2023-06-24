const { ethers } = require('hardhat');
const { expect } = require('chai');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Token', () => {

    let token, accounts, deployer
    
    beforeEach(async () => {
        const Token = await ethers.getContractFactory('Token')
        token = await Token.deploy('VERBmi', 'VERB' , '1000000')
        accounts = await ethers.getSigners()
        deployer = accounts[0] 

    })

describe('Deployment', () => {
    const name = 'VERBmi'
    const symbol = 'VERB'
    const decimals = '18'
    const totalSupply = tokens('1000000')


        it('has correct name', async () => { 
            expect(await token.name()).to.equal(name)
        })
        it('has correct symbol', async () => {
            expect(await token.symbol()).to.equal(symbol)
        })
        it('has the correct number of decimals', async () => {
            expect(await token.decimals()).to.equal(decimals)
        })
        it('has the correct total supply' , async () => {
            expect(await token.totalSupply()).to.equal(totalSupply)
        })
        it('assigns total supply to deployer' , async () => {
            expect(await token.balanceOf(deployer.address)).to.equal(totalSupply)
        })
    })  
    
})