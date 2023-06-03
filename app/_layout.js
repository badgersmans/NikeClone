import { Pressable, Text } from 'react-native'
import { Stack, useRouter } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons';

export default () => {
    const router = useRouter();
    return (
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
            <Stack.Screen 
                name="index" 
                options={{
                    title: 'Home',
                    headerRight: () => (
                        <Pressable style={({ pressed }) => [
                            {flexDirection: 'row'},
                            { opacity: pressed ? 0.5 : 1 },
                        ]}
                            onPress={() => router.push('/shoppingCart')}
                        >
                            <FontAwesome5 name="shopping-cart" 
                                size={20}
                                color="black"
                            />
                            <Text 
                                style={{
                                    marginLeft: 5,
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}
                            >
                                5
                            </Text>
                        </Pressable>
                    ),
                }}
            />

            <Stack.Screen 
                name="[productId]" 
                // options={{
                //     headerStyle: { backgroundColor: 'green' },
                //     headerTintColor: 'white',
                //     headerTitleStyle: {
                //         fontWeight: 'bold',
                //     }
                // }}
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

            {/* <Stack.Screen 
                name="home"
                options={{
                    headerShown: false
                }}
            /> */}
        </Stack>
    )
}