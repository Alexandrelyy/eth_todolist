//Create an app
App = {
    load : async () => {
        //load app
        console.log("app loading...")
        await App.loadWeb3()
        await App.loadAccount()
    },
    //loaded our blockchain connection, use our brower to connect with metamask
    loadWeb3: async () => {
        if (typeof web3 !== 'undefined') {
          App.web3Provider = web3.currentProvider
          web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
        } else {
          window.alert("Please connect to Metamask.")
        }
        // Modern dapp browsers...
        if (window.ethereum) {
          window.web3 = new Web3(ethereum)
          try {
            // Request account access if needed
            await ethereum.enable()
            // Acccounts now exposed
            web3.eth.sendTransaction({/* ... */})
          } catch (error) {
            // User denied account access...
          }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
          App.web3Provider = web3.currentProvider
          window.web33 = new Web3(Web3.givenProvider || "ws://localhost:7545");
          // Acccounts always exposed
          web3.eth.sendTransaction({/* ... */})
        }
        // Non-dapp browsers...
        else {
          console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
      },
      loadAccount : async() => {
          App.account = web3.eth.accounts[0]
          console.log(App.account)
      }

}
$(() => {
    $(window).load(() => { //
        App.load()
    })
})