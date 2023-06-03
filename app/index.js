import { StyleSheet, View } from "react-native";
import ProductsScreen from "./productList";


export default function Page() {
  return (
      <View style={styles.container}>
        <ProductsScreen />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
