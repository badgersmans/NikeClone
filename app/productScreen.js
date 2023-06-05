import { StyleSheet, Text, Pressable, ActivityIndicator } from 'react-native';
import React from 'react'
import { FlashList } from "@shopify/flash-list";
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../src/store/productsSlice';
import { selectNumberOfItems } from '../src/store/cartSlice';
import {Stack} from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useGetAllProductsQuery } from '../src/store/apiSlice'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const ProductsScreen = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  const cartCount = useSelector(selectNumberOfItems);
  const router = useRouter();

  const { data, isLoading, error } = useGetAllProductsQuery();

  if(isLoading) return <ActivityIndicator />
  if(error) return <Text>Error loading products</Text>

  console.log(data);

  return (
    <>
    <Stack.Screen 
      options={{
        headerTitle: 'Store',
        headerRight: () => (
          <Pressable style={({ pressed }) => [
              {flexDirection: 'row', padding: 6},
              { opacity: pressed ? 0.5 : 1 },
          ]}
              onPress={() => router.push('/shoppingCart')}
          >
              <FontAwesome5 name="shopping-cart" 
                  size={18}
                  color="black"
              />
              <Text 
                  style={{
                      marginLeft: 5,
                      fontSize: 18,
                      fontWeight: '500'
                  }}
              >
                  {cartCount}
              </Text>
          </Pressable>
      ),
      }}
    />

    <FlashList
        data={products}
        renderItem={({ item }) => (
          <Link 
            style={styles.imageContainer} 
            href={{pathname: `/${item.id}`}}
            onPress={() => {
              dispatch(productsSlice.actions.setSelectedProduct(item.id))
            }}
          >
            <Image
              style={styles.image}
              source={item.image}
              placeholder={blurhash}
              contentFit="cover"
              transition={300}
            />
          </Link>
          )
        }
        estimatedItemSize={50}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </>
  )
};

const styles = StyleSheet.create({
    imageContainer: {
      padding: 2,
    },
    image: {
      width: '100%',
      aspectRatio: 1,
    }
});

export default ProductsScreen