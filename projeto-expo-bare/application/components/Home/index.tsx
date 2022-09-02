import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootStackParamList } from "../../../App";
import { Anchor } from "../Anchor";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "Home">;

type HomeProps = {
  navigation: NavigationProps["navigation"];
};

export const Home = ({ navigation }: HomeProps & NavigationProps) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Anchor
        navigation={navigation}
        onPress={() => navigation.navigate("Produtos")}
      >
        Acessar tela de Produtos
      </Anchor>
      <TouchableOpacity
        onPress={() => navigation.navigate("Módulos de Estudo")}
        style={styles.link}
      >
        <Text style={styles.linkText}>Acessar tela de Módulos de Estudo</Text>
      </TouchableOpacity>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  link: {
    backgroundColor: "steelblue",
    marginBottom: 10,
    borderRadius: 4,
    height: 42,

    justifyContent: "center",
    alignItems: "center",
  },
  linkText: {
    fontSize: 16,
    color: "#fff",
  },
});
