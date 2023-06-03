import { Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

const AddToCart = ({text}) => {
    const onCartPressed = () => {
        console.warn('cart pressed...')
    }

  return (
    <Pressable style={({ pressed }) => [
        styles.cartButtonContainer,
        { opacity: pressed ? 0.5 : 1 },
        ]}
        onPress={onCartPressed}
    >
        {/* <AntDesign name="shoppingcart" style={styles.cartButton}/> */}
        <Text style={styles.cartButton}>{text}</Text>
    </Pressable>
  )
};

AddToCart.defaultProps = {
    text: "add to cart",
};

export default AddToCart