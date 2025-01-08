import { registerRootComponent } from "expo";
import AppNavigator from "./AppNavigator";

export default function App() {
  return <AppNavigator />;
}
registerRootComponent(HomeScreen);
