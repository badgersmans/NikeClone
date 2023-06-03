import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ProductsScreen from "./productList";
import ProductDetails from "./productDetails";
import ShoppingCart from "./shoppingCart";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <ShoppingCart />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
