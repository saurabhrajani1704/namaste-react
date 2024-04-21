import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    //Pure bade store ka ek reducer jiske andar hamne har ek slice ka reducer daaal diya hai
    reducer:{
        cart:cartReducer,

    },
});

export default appStore;