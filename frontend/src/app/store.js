import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../feature/ProductSlice";
import cartReducer from "../feature/cart/cartSlice";
import orderReducer from "../feature/cart/orderSlice";

const store = configureStore({
    reducer : {
        products : ProductReducer,
        cart : cartReducer,
        order : orderReducer
    }
})

export default store