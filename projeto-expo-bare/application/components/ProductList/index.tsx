import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Product } from "../../../domain/types/Product";
// import { PRODUCT_API_URL } from "@env";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("http://10.0.2.2:3000/products");

      const data = (await response.json()) as Product[];

      setProducts(data);
    }

    getProducts();
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.text}>Lista de produtos</Text>

      {/* <Text>{PRODUCT_API_URL}</Text> */}

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.value}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },
});
