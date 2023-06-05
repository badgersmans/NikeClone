import { Text, Pressable, SafeAreaView, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './styles'

const AddToCart = ({text, buttonPressed, isLoading}) => {

  return (
    <SafeAreaView>
        <Pressable style={({ pressed }) => [
            styles.cartButtonContainer,
            { opacity: pressed ? 0.5 : 1 },
            ]}
            onPress={buttonPressed}
        >
            {/* <AntDesign name="shoppingcart" style={styles.cartButton}/> */}
            {
            isLoading ? <ActivityIndicator />
            : (
              <Text style={styles.cartButton}>{text}</Text>
            )
            }
        </Pressable>
    </SafeAreaView>
  )
};

AddToCart.defaultProps = {
    text: "add to cart",
    isLoading: false,
};

export default AddToCart