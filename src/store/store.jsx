import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
// import Productslice from './Productslice'
const store = configureStore({
    reducer: {
        cart: cartSlice,


    }
})


export default store