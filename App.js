//Main entry point for this application.
//import React, { Component } from "react";
import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import DeviceInfo from "react-native-device-info";

// export default class App extends Component<> {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   async componentWillMount() {
//     console.log("app started...");
//     const uniqueID = await DeviceInfo.getUniqueId();
//     console.log(uniqueID);
//     this.setState({ deviceID: DeviceInfo.getUniqueId() });
//   }

export default function App() {
  //upon initial load, get the device id
  //this will be passed to the home screen as a prop
  const [uniqueID, setUniqueID] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  useEffect(() => {
    getDeviceID();
    getKeyPair();
  }, []);

  async function getDeviceID() {
    //get device ID as a unique identifier
    const deviceID = await DeviceInfo.getUniqueId();
    console.log(deviceID);

    setUniqueID(deviceID);
  }

  function getKeyPair() {
    // PLACEHOLDER CODE:
    const initialPublicKey = "public key";
    const initialPrivateKey = "private key";
    setPublicKey(initialPublicKey);
    setPrivateKey(initialPrivateKey);
  }

  const generateNewKeyPair = () => {
    //BONUS: allow users to generate key pairs on the fly
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
