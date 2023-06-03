import { View, Text } from 'react-native'
import React from 'react'
import { FlashList } from "@shopify/flash-list";
import CartListItem from '../src/components/CartList/CartListItem';
import cart from '../assets/data/cart';

const ShoppingCart = () => {

  return (
    <FlashList
      data={cart}
      renderItem={({ item }) => (
        <CartListItem cartItem={item} />
      )}
      estimatedItemSize={20}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default ShoppingCart