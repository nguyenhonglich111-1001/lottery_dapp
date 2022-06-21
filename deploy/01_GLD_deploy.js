const { getNamedAccounts, deployments, network, run } = require("hardhat")
const { rinkebyConfig } = require("../helper-hardhat-config")

module.exports = async({ getNamedAccount, deployments}) => {
    // const {deploy, log} = deployments
    // const {deployer} = await getNamedAccount
    const chainId = network.config.chainId

    if(chainId == 4) {
        console.log("Rinkeby Network Detected")


    }
}

module.exports.tags = ["all", "GLD"]