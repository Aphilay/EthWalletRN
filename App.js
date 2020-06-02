//Main entry point for this application.
//import React, { Component } from "react";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";

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
  return <HomeScreen />;
}
