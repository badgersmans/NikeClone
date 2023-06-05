import { View, Text, StyleSheet, useWindowDimensions, Pressable, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image';
import { FlashList } from "@shopify/flash-list";
import AddToCart from '../src/components/AddToCart/AddToCart';
import { useSelector, useDispatch } from 'react-redux';
import { cartSlice } from '../src/store/cartSlice';
import { useSearchParams } from 'expo-router';
import { useGetProductQuery } from '../src/store/apiSlice'


const ProductDetails = () => {
    const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const { width } = useWindowDimensions();
    const [readMore, setReadMore] = useState(false);
    // const product = useSelector(state => state.products.selectedProduct);
    const dispatch = useDispatch();
    const { id } = useSearchParams();
    const { data: product, isLoading, error } = useGetProductQuery(id);

    // console.log(id);

    const onCartPressed = () => {
        dispatch(cartSlice.actions.addCartItem({product}));
    }

    // if(!product) return null;
    if(isLoading) return <ActivityIndicator />
    if(error) return <Text>Error loading product</Text>

    return (
        <View style={styles.mainContainer}>
        {/* <Stack.Screen 
            options={{
            title: `${id}`,
            }}
        /> */}
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* Image Carousel */}
            <FlashList
                data={product.images}
                renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                    <Image
                    style={{ width, aspectRatio: 1 }}
                    source={item}
                    placeholder={blurhash}
                    contentFit="cover"
                    transition={300}
                    />
                </View>
                )
                }
                estimatedItemSize={20}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
            />

            <View style={styles.textContainer}>
                {/* Title */}
                <Text style={styles.title}>{product.name}</Text>

                {/* Price */}
                <Text style={styles.price}>RM {product.price.toFixed(2)}</Text>

                {/* Description */}
                <Text 
                    numberOfLines={readMore ? null : 3} 
                    style={styles.desc}>{product.description}
                </Text>

                {/* Read More/Show Less */}
                <Pressable style={({ pressed }) => [
                    styles.readMoreContainer,
                    { opacity: pressed ? 0.5 : 1 },
                ]}
                    onPress={() => setReadMore(!readMore)}
                >
                    <Text style={styles.readMore}>{readMore ? `Show Less` : `Read More`}</Text>
                </Pressable>
            </View>
        </ScrollView>


        {/* Add to cart button */}
        <AddToCart buttonPressed={onCartPressed}/>

        {/* Navigation Icon */}

    </View>
  )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // backgroundColor: 'red'
    },
    imageContainer: {

    },
    textContainer: {
        margin: 20,
        gap: 20,
        // backgroundColor: 'red'
    },
    title: {
        fontSize: 35,
        fontWeight: '500',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18
    },
    desc: {
        lineHeight: 30,
        fontSize: 18,
        fontWeight: '300',
        letterSpacing: 1.2
    },
    readMoreContainer: {
        // backgroundColor: 'red',
        padding: 15,
        paddingLeft: 0,
        alignSelf: 'flex-start'
    },
    readMore: {
        color: '#007AFF'
    },
});

export default ProductDetails