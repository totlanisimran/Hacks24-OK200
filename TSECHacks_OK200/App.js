import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigators/RootNavigator";
import { CompanyProvider } from "./context/CompanyContext";

export default function App() {
  return (
    <CompanyProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </CompanyProvider>
  );
}
