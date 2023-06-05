import { View, Text, StyleSheet, Alert} from 'react-native'
import React from 'react'
import { FlashList } from "@shopify/flash-list";
import CartListItem from '../src/components/CartList/CartListItem';
import AddToCart from '../src/components/AddToCart/AddToCart';
import { useSelector, useDispatch } from 'react-redux';
import { selectDeliveryPrice, selectSubtotal, selectTotal, cartSlice } from '../src/store/cartSlice';
import { useCreateOrderMutation } from '../src/store/apiSlice'

const ShoppingCart = () => {
  
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items)
  const deliveryFee = useSelector(selectDeliveryPrice);
  const subtotal = useSelector(selectSubtotal);
  const total = useSelector(selectTotal);
  const [createOrder, {data, isLoading, error}] = useCreateOrderMutation();
  // console.log(data)
  const CartTotals = () => (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.subtotal}>Subtotal</Text>
        <Text style={styles.price}>{`RM ${subtotal}`}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.subtotal}>Delivery</Text>
        <Text style={styles.price}>{deliveryFee === 0 ? `FREE` : `RM ${deliveryFee}`}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>RM {total}</Text>
      </View>
    </View>
  );

  const EmptyCart = () => (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text style={styles.emptyCartText}>Your cart is empty</Text>
    </View>
  );

  const onCheckout = async () => {
    const result = await createOrder({
      items: cart,
      subtotal,
      deliveryFee,
      total,
      customer: {
        "name": "Shawn Law",
        "email": "shawnlaw6669@gmail.com",
        "address": "bandar sri damansara"
      },
    });

    // console.log(result)
    if(result) {
      Alert.alert(
        'Order has been made',
        `Your order tracking number is: ${result.data.orderRef}`,
        [
          {text: 'OK', onPress: () => dispatch(cartSlice.actions.clearCart())},
        ]
      )
    }
  };

  if(error) return <Text>Error creating order</Text>
  if(cart.length === 0) return <EmptyCart />
  
  return (
    <>
      <FlashList
        data={cart}
        renderItem={({ item }) => (
          <CartListItem cartItem={item} />
        )}
        estimatedItemSize={20}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<CartTotals />}
      />

      <AddToCart text={'checkout'} buttonPressed={onCheckout} isLoading={isLoading}/>
    </>
  )
};

const styles = StyleSheet.create({
  totalsContainer: {
    marginHorizontal: 20,
    marginTop: '5%',
    paddingTop: '5%',
    borderTopWidth: 1,
    borderColor: 'grey',
    // backgroundColor: 'green'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    marginEnd: 0
    // backgroundColor: 'red',
  },
  subtotal: {
    fontSize: 20,
    // color: 'grey',
  },
  price: {
    fontSize: 18,
    // color: 'grey'
  },
  textBold: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  emptyCartText: {
    fontSize: 26,
    fontWeight: '300'
  },
});

export default ShoppingCart