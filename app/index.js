import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ProductsScreen from "./productScreen";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <ProductsScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
