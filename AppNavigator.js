import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import HomeScreen from "./components/HomeScreen";
import ForgotPassword from "./components/ForgotPassword";
import ReportCrime from "./components/ReportCrime";
import ContinueReportCrime from "./components/ContinueReportCrime";
import CallPoliceScreen from "./components/CallPoliceScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />

        <Stack.Screen name="Call" component={CallPoliceScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Forgot" component={ForgotPassword} />
        <Stack.Screen name="Report" component={ReportCrime} />
        <Stack.Screen name="ContinueReport" component={ContinueReportCrime} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
registerRootComponent(AppNavigator);
// i think the main component is AppNavigator

export default AppNavigator;
