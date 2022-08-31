import { StatusBar } from "expo-status-bar";
import { GithubProfile } from "./application/components/GithubProfile";
import { StudyModule } from "./application/components/StudyModule";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ProductList } from "./application/components/ProductList";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      {/* <GithubProfile /> */}
      {/* <StudyModule /> */}
      <ProductList />
    </SafeAreaProvider>
  );
}
