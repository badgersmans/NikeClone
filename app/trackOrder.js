import { View, Text, TextInput, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useRef, useState } from 'react'
import { useGetOrderQuery } from '../src/store/apiSlice'


const TrackOrder = () => {
    const [orderRef, setOrderRef] = useState();
    const { data, isLoading, error } = useGetOrderQuery(orderRef);

  return (
    <View>
      <TextInput
        placeholder='Enter tracking number'
        value={orderRef}
        onChangeText={setOrderRef}
        style={styles.input}
      />

        {isLoading && <ActivityIndicator />}
        {error ? <Text>Order not found</Text> : (
            <Text>
                {JSON.stringify(data)}
            </Text>
        )}
    </View>
  )
};

const styles = StyleSheet.create({
    input: {
        margin: 10,
        marginTop: 20,
    }
})

export default TrackOrder