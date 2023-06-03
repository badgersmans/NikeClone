import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      margin: 20,
      marginBottom: 5,
      // paddingHorizontal: 20,
      flexDirection: "row",
      borderWidth: 1,
      borderColor: 'lightgrey',
      borderRadius: 10,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      // backgroundColor: 'green'
    },
    contentContainer: {
      flex: 1,
      marginLeft: 10,
      // backgroundColor: 'red',
    },
    image: {
      width: "40%",
      aspectRatio: 1,
      
      // borderWidth: 1,
      // borderColor: 'black'
    },
    name: {
      fontWeight: "500",
      fontSize: 18,
      marginBottom: 8,
    },
    size: {
      fontSize: 16,
      color: "gray",
    },
    quantity: {
      marginHorizontal: 10,
      fontWeight: "bold",
      color: "grey",
    },
    quantityContainer: {
      marginTop: "auto",
      flexDirection: "row",
      alignItems: 'center',
      marginBottom: '2.5%',
      // backgroundColor: 'yellow',
      // justifyContent: 'space-between'
    },
    itemTotal: {
      fontSize: 16,
      // marginTop: 15,
      fontWeight: "500",
      marginLeft: 'auto',
      marginRight: '5%'
    },
});

export default styles;