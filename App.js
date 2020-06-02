//Main entry point for this application.
import React, { useEffect, useState } from "react";
import HomeScreen from "./src/screens/HomeScreen";
import DeviceInfo from "react-native-device-info";
//import "./shim.js";
//import wallet from ("eth-wallet-light")
//or
//const wallet = require("eth-wallet-light");

export default function App() {
  //hooks to track state
  const [uniqueID, setUniqueID] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  // run this upon intial upload of the application
  useEffect(() => {
    getDeviceID();
    getKeyPair();
  }, []);

  //Obtain the device's id using the lib, react-native-device-info
  async function getDeviceID() {
    //get device ID as a unique identifier
    const deviceID = await DeviceInfo.getUniqueId();
    console.log(deviceID);

    setUniqueID(deviceID);
  }

  //TO DO: Complete eth-wallet-light installation
  //rn-nodeify install and shimming did not seem to work
  //Using placeholder code for now

  function getKeyPair() {
    /*   
    const deviceID = uniqueID 

    //TODO: when using await turn this function into an ASYNC function
    let keystore = await new wallet.Keystore().initializeFromEntropy('entropy', deviceID)
    
    console.log('Public Address: ', keystore.getAddress())
    console.log('Private Key: ', keystore.getPrivateKey(deviceID))

    //set state of keys
    setPublicKey(keystore.getAddress());
    setPrivateKey(keystore.getPrivateKey(deviceID));

   */

    // PLACEHOLDER CODE:
    const initialPublicKey = "public key";
    const initialPrivateKey = "private key";
    setPublicKey(initialPublicKey);
    setPrivateKey(initialPrivateKey);
  }

  //BONUS: allow users to generate key pairs on the fly
  //TODO: Complete this function
  const generateNewKeyPair = () => {
    //PLACEHOLDER CODE
    console.log("generating new key pair....");

    const newPublicKey = "new public key";
    const newPrivateKey = "new private key";

    setPublicKey(newPublicKey);
    setPrivateKey(newPrivateKey);
  };

  return (
    <HomeScreen
      uniqueID={uniqueID}
      publicKey={publicKey}
      privateKey={privateKey}
      generateNewKeyPair={generateNewKeyPair}
    />
  );
}
