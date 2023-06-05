import { Stack, useRouter } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../src/store";

export default () => {
    const router = useRouter();
    return (
        <Provider store={store}>
            <Stack 
                screenOptions={{
                    // headerStyle: { backgroundColor: '#FFE030' },
                    // headerTintColor: 'black',
                    // headerTitleStyle: {
                    //     fontWeight: 'bold'
                    // },
                    contentStyle: {
                        backgroundColor: 'white'
                    }
                }}
            >
                {/* <Stack.Screen 
                    name="index" 
                    options={{
                        title: 'Store',
                    }}
                /> */}

                <Stack.Screen 
                    name="[productId]" 
                    options={{
                        title: "Details",
                        // headerStyle: { backgroundColor: 'green' },
                        // headerTintColor: 'white',
                        // headerTitleStyle: {
                        //     fontWeight: 'bold',
                        // }
                    }}
                />

                <Stack.Screen 
                    name="shoppingCart" 
                    options={{
                        presentation: 'modal',
                        title: 'Your Cart'
                        // headerStyle: { backgroundColor: 'pink' },
                        // headerTintColor: 'white',
                        // headerTitleStyle: {
                        //     // fontWeight: 'bold',
                        // }
                    }}
                />

                <Stack.Screen 
                    name="trackOrder"
                    options={{
                        title: 'Track Order'
                        // headerShown: false
                    }}
                />
            </Stack>
        </Provider>
    )
}