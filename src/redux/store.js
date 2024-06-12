// store.js
import { configureStore } from '@reduxjs/toolkit'
import AddtoCart from '../redux/Cart/cartslice'
export const store = configureStore({
  reducer: {
    counter: AddtoCart,
  },
})