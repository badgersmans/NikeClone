import { createSlice } from "@reduxjs/toolkit";
import products from '../../assets/data/products'

const initialState = {
    products,
    selectedProduct: null,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            // the action looks like {"payload": "1", "type": "products/setSelectedProduct"}
            const productId = action.payload;
            state.selectedProduct = state.products.find((p) => p.id === productId);
            // console.log(`state`, state.selectedProduct);
            // console.log(`action`, action);
        }
    },
});