import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { FlashList } from "@shopify/flash-list";
import CartListItem from '../src/components/CartList/CartListItem';
import AddToCart from '../src/components/AddToCart/AddToCart';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {

  const cart = useSelector(state => state.cart.items)

  const CartTotals = () => (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.subtotal}>Subtotal</Text>
        <Text style={styles.price}>RM 4000</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.subtotal}>Delivery</Text>
        <Text style={styles.price}>RM 5</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>RM 4005</Text>
      </View>

    </View>
  );

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

      <AddToCart text={'checkout'}/>
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
});

export default ShoppingCart