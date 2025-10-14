import { configureStore } from "@reduxjs/toolkit";
import itemreducer from "./itemslice"
const appStore=configureStore({
    reducer:{
        itemSlice:itemreducer
    }
});
export default appStore;