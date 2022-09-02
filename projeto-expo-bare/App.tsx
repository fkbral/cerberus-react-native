import { StatusBar } from "expo-status-bar";
import { GithubProfile } from "./application/components/GithubProfile";
import { StudyModule } from "./application/components/StudyModule";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ProductList } from "./application/components/ProductList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { Alert, BackHandler, StyleSheet, Text, View } from "react-native";
import { Home } from "./application/components/Home";
import FontAwesomeIcons from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { DefaultTheme, ThemeProvider } from "styled-components/native";
import { lightTheme } from "./application/theme/light";

export type RootStackParamList = {
  Home: undefined;
  Produtos: undefined;
  "Módulos de Estudo": undefined;
};

export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = useFonts({
    PatuaOneRegular: require("./assets/fonts/PatuaOne-Regular.ttf"),
  });

  const currentTheme = lightTheme;

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      Alert.alert("Informação", "Você já está na tela inicial");
      return true;
    });

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", () => {
        return false;
      });
    };
  }, []);

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={lightTheme}>
        <StatusBar style="dark" />

        <NavigationContainer>
          {/* <GithubProfile /> */}
          {/* <StudyModule /> */}
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                header: () => (
                  <View style={styles.customHeader}>
                    <View style={styles.logoContainer}>
                      <FontAwesomeIcons
                        name="google-plus"
                        color={"red"}
                        size={22}
                        style={{ marginRight: 6 }}
                      />
                      <Text style={styles.customHeaderText}>Meu App</Text>
                    </View>
                  </View>
                ),
              }}
            />
            <Stack.Screen name="Módulos de Estudo" component={StudyModule} />
            <Stack.Screen name="Produtos" component={ProductList} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  customHeader: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  customHeaderText: {
    fontFamily: "PatuaOneRegular",
    fontSize: 32,
  },
});
