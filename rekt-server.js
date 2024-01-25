const {CEP18Client} = require('casper-cep18-js-client');
const {Keys, CLPublicKey} = require('casper-js-sdk');
const WebSocket = require('ws')

// Config
const NODE_URL = 'https://event-store-api-clarity-testnet.make.services/rpc';
const NETWORK_NAME = 'casper-test';
const CEP18_CONTRACT_PACKAGE_HASH = '693a9f4c4b3025b6eafa2ce31aadb5c609d31e3479a72f036a792bde7d691623';
const CEP18_CONTRACT_HASH = '9a5808029f14656dc9f26a3f2b7e5de03356b86f01b1f08cd37fc416d3d8ca3f';
const PAYMENT_CONTRACT_HASH = '2b681cad1330242184aee163940ce073f169e06986f64a5e6709616fba955b28';
const CSPR_CLOUD_KEY = 'INSERT CSPR CLOUD KEY HERE';
const CSPR_CLOUD_STREAMING_URL = 'wss://streaming.testnet.cspr.cloud';
const CSPR_CLOUD_REST_API_URL = 'https://api.testnet.cspr.cloud';

const owner = Keys.Ed25519.parseKeyFiles(
    `/Users/mssteuer/Desktop/public_key.pem`,
    `/Users/mssteuer/Desktop/secret_key.pem`
);
const cep18 = new CEP18Client(NODE_URL, NETWORK_NAME);
cep18.setContractHash(
    'hash-'+CEP18_CONTRACT_HASH
);

// WebSocket Client
const ws = new WebSocket(CSPR_CLOUD_STREAMING_URL + '/contract-events?contract_hash=' + PAYMENT_CONTRACT_HASH + '&includes=raw_data')
ws.on('open', function open() {
    ws.on('message', function message(data) {
        console.log(data);
        if(data==="Ping") {
            return;
        }
        try {
            let event = JSON.parse(data);
            let eventType = event.data.name;
            console.log(eventType + " Event Received...");
            if(eventType==="Payment") {
                let recipient = event.data.data.recipient;
                console.log("Recipient: " + recipient);
                console.log("CSPR Paid: " + Math.round(event.data.data.amount/1000000000) + " CSPR");

                // create a mint deploy to deliver the Rekt tokens
                const deploy = cep18.mint(
                    {
                        owner: CLPublicKey.fromHex(recipient),
                        amount: 50000000
                    },
                    350_000_000,
                    owner.publicKey,
                    NETWORK_NAME,
                    [owner]
                );
                deploy.send(NODE_URL);
                console.log("Tokens sent to recipient");
            }
        } catch (e) {
            console.log(e);
        }
    });
});

// API Server
const cors = require('cors');
const express = require('express')
const e = require("express");
const app = express()
const port = 3001
app.use(cors({ origin: 'http://localhost:3000' , methods: 'GET,PUT,POST,OPTIONS'}));


app.get('/token-activity', (req, res) => {

    const url =  CSPR_CLOUD_REST_API_URL +
        '/contract-packages/' +
        CEP18_CONTRACT_PACKAGE_HASH +
        '/ft-token-actions?includes=to_public_key';

    fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'authorization': CSPR_CLOUD_KEY
        },
    }).then(response => response.json())
    .then(data => {
        res.type('json');
        res.send(JSON.stringify(data));
    }).catch(error => {
        res.send(error);
    });
})

app.listen(port, () => {
    console.log(`REKT Server App listening on port ${port}`)
})