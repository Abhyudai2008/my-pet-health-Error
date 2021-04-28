import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import WelcomeScreen from './Screen.js/WelcomeScreen'
import ConsultationScreen from './Screen.js/Consultation'




export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  ConsultationScreen:{screen: ConsultationScreen}
})

const AppContainer =  createAppContainer(switchNavigator);

// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from "react-navigation-tabs";

// import { createSwitchNavigator,} from 'react-navigation';
// import WelcomeScreen from './Screen.js/WelcomeScreen';
// import ConsultationScreen from './Screen.js/Consultation';
// export default function App() {
//   return (
//     <AppContainer/>
//   );
// }
// const TabNavigator = createBottomTabNavigator({
//   WelcomeScreen:{screen: WelcomeScreen},
//   ConsultationScreen:{screen: ConsultationScreen},
// });

// const switchNavigator = createSwitchNavigator({
//   WelcomeScreen:{screen: WelcomeScreen},
// })

// const AppContainer =  createAppContainer(switchNavigator);



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "red",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });