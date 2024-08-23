import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productImages } from "../../components/productImages";


const initialState = {
    products: [],
    total: 0,
    isLoading: true,
}

const apiUrl = `${import.meta.env.VITE_API_URL}`;



export const getProducts = createAsyncThunk(
    'cart/getProducts',
    async (_, thunkAPI) => {
      try {
         const res =  await axios.get(apiUrl, {
            headers : {
                "Content-Type" : "application/json",
                "x-api-key" : `${import.meta.env.VITE_API_KEY}`,
            }
         });
    
         const allProductData = res.data;

   
         const updatedData = allProductData.map(item => {
              return {
                ...item, 
                imagePath: productImages[item.name]
              }
         })

         return updatedData;
        


  
      }catch(err){
        return thunkAPI.rejectWithValue('failed to fetch products', err.message);

            
      }

    }
)







const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const idNum = action.payload;
            const cartItem = state.products.find(item => item._id === idNum);
             if (!cartItem) return 
                cartItem.qtyBought = cartItem.qtyBought + 1; 
              
            
        },
        clearCart: (state) => {
             state.products.map(item => item.qtyBought = 0);
            

        },
        removeItemFromCart: (state, action) => {
              const idNum = action.payload;
              const cartItem = state.products.find(item => item._id === idNum);
              if (!cartItem) return;
              cartItem.qtyBought = 0;
          

        },
        increaseQty: (state, { payload }) => {
            const idNum = payload;
            const cartItem = state.products.find(item => item._id === idNum);
            if(!cartItem) return;
            cartItem.qtyBought = cartItem.qtyBought + 1
        


        },
        decreaseQty: (state, {payload}) => {
            const idNum = payload;
            const cartItem = state.products.find(item => item._id === idNum);
            if(!cartItem) return;
            if(cartItem.qtyBought > 0) {
               cartItem.qtyBought = cartItem.qtyBought - 1
            }
                 

             
        },
        calculateTotal: (state) => {
            let total = 0;

            state.products.forEach((item => {
                 total += item.qtyBought * item.price;
            }))

            state.total = total;

        },
       
    },extraReducers: (builder) => {
        builder
          .addCase(getProducts.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
          })
          .addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
          });
          
      }

})


export const {addToCart, clearCart, increaseQty, decreaseQty, removeItemFromCart, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer
