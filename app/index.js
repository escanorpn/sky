/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

 import React from "react";
 import { StatusBar } from "react-native";
 import { createAppContainer, createSwitchNavigator } from "react-navigation";
 import { configureFonts, DefaultTheme, Provider as PaperProvider } from "react-native-paper";
//  import { fromRight } from "react-navigation-transitions";
 
 import { SECONDARY_COLOR, PRIMARY_COLOR } from "./app.config";
 
 
 const fontConfig = {
   default: {
     regular: {
       fontFamily: "ProximaNovaReg",
       fontWeight: "normal",
     },
     medium: {
       fontFamily: "ProximaNovaReg",
       fontWeight: "normal",
     },
     light: {
       fontFamily: "ProximaNovaReg",
       fontWeight: "normal",
     },
     thin: {
       fontFamily: "ProximaNovaReg",
       fontWeight: "normal",
     },
   },
 };
 
 const theme = {
   ...DefaultTheme,
   colors: {
     ...DefaultTheme.colors,
     primary: PRIMARY_COLOR,
     accent: SECONDARY_COLOR,
   },
   fonts: configureFonts(fontConfig),
 };

 import Home from "./screens/Home";
 
 const App = createSwitchNavigator(
   {
    Home: { screen: Home },
    //  Home1: { screen: Home1 },
   },
   {
     initialRouteName: "Home",
     headerMode: "none",
     backBehavior: "initialRoute",
     gesturesEnabled: true,
    //  transitionConfig: () => fromRight(600),
   }
 );
 
 const AppContainer = createAppContainer(App);
 
 export default () => (
     <PaperProvider theme={theme}>
             <AppContainer />
     </PaperProvider>
 );
 