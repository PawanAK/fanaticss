// import { useEffect, useState } from "react";
// import ConnectWallet from "./ConnectWallet";
// import Web3 from 'web3';
// import { ethers } from 'ethers';
// import { PushAPI } from '@pushprotocol/restapi';


const Everydayscreen = () => {
//     const [account, setAccount] = useState('');
//     const [artist, setArtist] = useState('');
//     let provider;
//     const connectWallet = async () => {
//         try {
//             if (window.ethereum) {
//                 // Requesting access to the MetaMask wallet
//                 await window.ethereum.request({ method: 'eth_requestAccounts' });

//                 // Creating a Web3 instance using the MetaMask provider
//                 const web3 = new Web3(window.ethereum);

//                 // Retrieving the current account connected to MetaMask
//                 const accounts = await web3.eth.getAccounts();

//                 // Set the account in state
//                 setAccount(accounts[0])
//                 console.log('Connected');
//             } else {
//                 console.log('MetaMask extension not detected');
//             }
//         } catch (error) {
//             console.error('Error connecting to wallet:', error);
//         }
//     };

//     const createArtist = async() => {
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         console.log(signer)
//         const userArtist = await PushAPI.initialize(signer, { env: 'staging' });
//         setArtist(userArtist);
//     }
//     const createCommunity = async () => {
//         await connectWallet();
//         await createArtist();
//         const createTokenGatedGroup = await artist.chat.group.create('Push Community', {
//             description: 'Token gated web3 native chat example', // provide short description of group
//             image: 'data:image/png;base64,iVBORw0K...', // provide base64 encoded image
//             members: [], // not needed, rules define this, can omit
//             admins: [], // not needed as per problem statement, can omit
//             private: true,
//             rules: {
//               "entry": { // entry is based on conditions
//                 "conditions": {
//                   "any": [ // any of the decider should allow entry
//                     { // decider 1 - If admin or owner invites someone
//                       "any": [ 
//                         { // criteria 1
//                           "type": "PUSH",
//                           "category": "INVITE",
//                           "subcategory": "DEFAULT",
//                           "data": {
//                               "inviterRoles": [
//                                   "ADMIN",
//                                   "OWNER"
//                               ]
//                           }
//                         }
//                       ]
//                     },
//                     { // decicder 2 - If wallet holds 1 NFT on polygon testnet
//                       "any": [
//                         { // criteria 1
//                           type: "PUSH", // define type that rules engine should go for
//                           category: "ERC721", // define it's ERC20 token that you want to check, supports ERC721 as well
//                           subcategory: "holder", // define if you are checking 'holder'
//                           data: { 
//                             "contract": "eip155:80001:0x9105D95577575116948F5afcF479254f49F27939",
//                             "comparison": ">=", // what comparison needs to pass
//                             "amount": 1, // amount that needs to passed
//                             "decimals": 18,
//                           }
//                         }
//                       ]
//                     }
//                   ]
//                 }
//               }
//             }
//           });
//     }
    return (
        <>
            <ConnectWallet />
            <button style={{marginTop:"50px"}}onClick={createCommunity}>Create Community</button>
        </>
    )
}
export default Everydayscreen;