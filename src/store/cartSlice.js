import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    deliveryFee: 5,
    freeDeliveryFrom: 100
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newItem = action.payload.product;
            // console.log(JSON.stringify(state.items));
            const existingItem = state.items.find((i) => i.item.id === newItem.id);

            if(existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    item: newItem,
                    quantity: 1
                });
            }
        },
        changeQuantity: (state, action) => {
            const { productId, amount } = action.payload;
            const cartItem = state.items.find(i => i.item.id === productId)

            if(cartItem) {
                cartItem.quantity += amount;
            }

            if(cartItem.quantity <= 0) {
                state.items = state.items.filter(i => i !== cartItem);
            }
        },
    },
});

export const selectNumberOfItems = (state) => state.cart.items.length;