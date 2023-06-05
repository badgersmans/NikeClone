import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from './styles'
import { Image } from 'expo-image';
import { useDispatch } from 'react-redux';
import { cartSlice } from "../../store/cartSlice";

const CartListItem = ({ cartItem }) => {
  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(
      cartSlice.actions.changeQuantity({
        productId: cartItem.item._id, 
        amount: 1
      }));
  };

  const decreaseQuantity = () => {
    dispatch(
      cartSlice.actions.changeQuantity({
        productId: cartItem.item._id, 
        amount: -1
      }));
  };
  // console.log(cartItem.item)

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={cartItem.item.image}
        placeholder={blurhash}
        contentFit="cover"
        transition={300}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.item.name}</Text>
        <Text style={styles.size}>Size {cartItem.item.size}</Text>

        <View style={styles.quantityContainer}>
          <Feather
            onPress={decreaseQuantity}
            name="minus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.quantity}>{cartItem.quantity}</Text>

          <Feather
            onPress={increaseQuantity}
            name="plus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.itemTotal}>RM {cartItem.item.price * cartItem.quantity}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartListItem;
