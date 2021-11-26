const { ethers } = require("hardhat");

describe("Comparison", function () {
  it("test", async function () {
    const gasPrice = 0;

    var before;
    {
      var contractFactory = await ethers.getContractFactory("Unoptimized");

      const operator = await contractFactory.deploy(overrides = {gasPrice: gasPrice});
      await operator.deployed();

      const tx = await operator.run(overrides = {gasPrice: gasPrice});
      const receipt = await tx.wait();

      before = receipt.gasUsed._hex;
    }

    var after;
    {
      var contractFactory = await ethers.getContractFactory("Optimized");

      const operator = await contractFactory.deploy(overrides = {gasPrice: gasPrice});
      await operator.deployed();

      const tx = await operator.run(overrides = {gasPrice: gasPrice});
      const receipt = await tx.wait();

      after = receipt.gasUsed._hex;
    }

    console.log("Gas Difference:", after - before);
  });
});
