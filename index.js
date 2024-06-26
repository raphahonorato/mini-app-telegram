const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'http://127.0.0.1:3000/tonconnect-manifest.json',
    buttonRootId: 'ton-connect'
});

async function connectToWallet() {
    const connectedWallet = await tonConnectUI.connectWallet();
    // Do something with connectedWallet if needed
    console.log(connectedWallet);

    // Convert the connectedWallet object to a string to display it
    const walletInfo = JSON.stringify(connectedWallet, null, 2);

    // Get the div with id 'res'
    const divRes = document.getElementById('res');

    // Set the innerText of the div to the walletInfo
    divRes.innerText = walletInfo;
}

// Call the function
connectToWallet().catch(error => {
    console.error("Error connecting to wallet:", error);
});
