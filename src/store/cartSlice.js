import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    deliveryFee: 20,
    freeDeliveryFrom: 500
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newItem = action.payload.product;
            // console.log(JSON.stringify(newItem));
            // console.log(JSON.stringify(state.items));
            const existingItem = state.items.find((i) => i.item._id === newItem._id);

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
            const cartItem = state.items.find(i => i.item._id === productId)

            if(cartItem) {
                cartItem.quantity += amount;
            }

            if(cartItem.quantity <= 0) {
                state.items = state.items.filter(i => i !== cartItem);
            }
        },
        clearCart: (state) => {
            state.items = []
        }
    },
});

export const selectNumberOfItems = (state) => state.cart.items.length;

export const selectSubtotal = (state) => state.cart.items.reduce((sum, curVal) => sum + curVal.item.price * curVal.quantity, 0);

const selectCart = (state) => state.cart;

export const selectDeliveryPrice = createSelector(
    selectCart,
    selectSubtotal,
    (cart, subtotal) => subtotal >= cart.freeDeliveryFrom ? 0 : cart.deliveryFee
);

export const selectTotal = createSelector(
    selectSubtotal,
    selectDeliveryPrice,
    (subtotal, deliveryPrice) => subtotal + deliveryPrice
);