import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import HomeScreen from "./components/HomeScreen";
import ForgotPasswordScreen from "./components/ForgotPasswordScreen";
import ReportCrimeScreen from "./components/ReportCrimeScreen";
import ContinueReportCrimeScreen from "./components/ContinueReportCrimeScreen";
import CallPoliceScreen from "./components/CallPoliceScreen";
import SearchScreen from "./components/SearchScreen";
import ExploreScreen from "./components/ExploreScreen";
import LatestUpdatesScreen from "./components/LatestUpdatesScreen";
import MissingPersonScreen from "./components/MissingPersonScreen";
import MissingPropertyScreen from "./components/MissingPropertyScreen";
import ProfileScreen from "./components/ProfileScreen";
import ReportCase from "./components/ReportCaseScreen";
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Latest" component={LatestUpdatesScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Call" component={CallPoliceScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
        <Stack.Screen name="Report" component={ReportCrimeScreen} />
        <Stack.Screen name="Person" component={MissingPersonScreen} />
        <Stack.Screen name="Property" component={MissingPropertyScreen} />
        <Stack.Screen name="ReportCase" component={ReportCase} />
        <Stack.Screen
          name="ContinueReport"
          component={ContinueReportCrimeScreen}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
registerRootComponent(AppNavigator);
// i think the main component is AppNavigator

export default AppNavigator;
