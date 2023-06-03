import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from './styles'
import { Image } from 'expo-image';


const CartListItem = ({ cartItem }) => {
  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  const increaseQuantity = () => {};

  const decreaseQuantity = () => {};

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={cartItem.product.image}
        placeholder={blurhash}
        contentFit="cover"
        transition={300}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>Size {cartItem.size}</Text>

        <View style={styles.quantityContainer}>
          <Feather
            onPress={increaseQuantity}
            name="minus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.quantity}>{cartItem.quantity}</Text>

          <Feather
            onPress={decreaseQuantity}
            name="plus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.itemTotal}>RM 320.0</Text>
        </View>
      </View>
    </View>
  );
};

export default CartListItem;
