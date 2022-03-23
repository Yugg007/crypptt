require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/7aVChxWI_c72JTGs7TZymF3853ncT-hL',
      accounts: ['e820e413ccda5073b7997a35cd9973d6a991a4d981408aa52f09222f39f6ec3e'],
    },
  },
};