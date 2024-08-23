import { configureStore } from "@reduxjs/toolkit";

import cartReducer from  "./features/cart/cartSlice"
import actionsReducer from "./features/actions/actionsSlice"

export const store = configureStore({
    reducer: {
      cart: cartReducer,
      actions: actionsReducer,
    }
})


