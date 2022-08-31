import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  BackHandler,
  Dimensions,
  PixelRatio,
  useWindowDimensions,
} from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Product } from "../../../domain/types/Product";
import FontAwesomeIcons from "@expo/vector-icons/FontAwesome";
import GoogleLogo from "../../../assets/images/google-logo.png";
// import { PRODUCT_API_URL } from "@env";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();

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

  useEffect(() => {
    async function getProducts() {
      setTimeout(async () => {
        const response = await fetch("http://10.0.2.2:3000/products");

        const data = (await response.json()) as Product[];

        setProducts(data);
      }, 3000);
    }

    getProducts();
  }, []);

  useEffect(() => {
    console.log(Dimensions.get("window"));
    console.log({ windowHeight, windowWidth });
    console.log(Dimensions.get("screen"));
    console.log(PixelRatio.get());
  }, []);

  function handleShowPurchaseAlert() {
    Alert.alert("Informação", "Sua compra será processada");
  }

  return (
    <SafeAreaView style={{ padding: 5 }}>
      <Image
        source={GoogleLogo}
        style={{ height: 120, width: 300 }}
        resizeMode="contain"
      />
      <Text style={styles.text}>Lista de produtos</Text>

      {/* <Text>{PRODUCT_API_URL}</Text> */}

      {products.length === 0 ? (
        <ActivityIndicator color="steelblue" size={42} animating />
      ) : (
        <FlatList
          style={{ height: 500, flex: 0 }}
          data={products}
          renderItem={({ item }) => (
            <View>
              {/* <Image
              source={{ uri: item.imageUrl }}
              style={{ height: 200, width: 200 }}
            /> */}

              <ImageBackground
                source={{ uri: item.imageUrl }}
                style={{
                  height: 200,
                  width: windowWidth - 100,
                  // width: Dimensions.get("window").width - 100,
                }}
              >
                {item.isDiscounted && (
                  <Text style={{ fontWeight: "900", color: "lightgreen" }}>
                    PROMOÇÃO
                  </Text>
                )}
              </ImageBackground>
              <Text>{item.name}</Text>

              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <FontAwesomeIcons
                  name="money"
                  color={"lightgreen"}
                  size={22}
                  style={{ marginRight: 6 }}
                />
                <Text>{item.value}</Text>
              </View>
            </View>
          )}
        />
      )}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "position"}
      >
        <TextInput placeholder="Insira comentários sobre sua experiência em nossa loja"></TextInput>

        <TouchableOpacity
          style={{ backgroundColor: "lightgreen" }}
          onPress={handleShowPurchaseAlert}
        >
          <Text>Finalizar compra</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },
});
