import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ProductsScreen from "./productList";
import ProductDetails from "./productDetails";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <ProductDetails />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
