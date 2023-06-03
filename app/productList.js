import { StyleSheet } from 'react-native';
import React from 'react'
import { FlashList } from "@shopify/flash-list";
import { Image } from 'expo-image';
import products from '../assets/data/products'
import { Link } from 'expo-router';


const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const ProductsScreen = () => {

  return (
    <FlashList
        data={products}
        renderItem={({ item }) => (
          <Link style={styles.imageContainer} href={{pathname: `/${item.id}`, params: { product: item }}} >
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