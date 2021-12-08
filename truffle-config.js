module.exports = {
  networks:
  {
    development: {  //development network that is connected to ganache
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    }
  },
  solc:{
    version: "0.5.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
