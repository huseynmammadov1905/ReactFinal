import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("/goods", async () => {
  let response = await fetch("http://localhost:5013/goods");
  let data = response.json();
  return data;
});

const initialState = {
    products: [],
    sorted: false,
  };


  const productSlice = createSlice({
    name:"productSlice",
    initialState,
    reducers:{
        // addProduct: (state, action) => {
        //     action.payload = {
        //       ...action.payload,
        //       id: state.products[state.products.length - 1].id + 1,
        //     };
        //     state.products.push(action.payload);
        //   },
        // addProduct:(state,action)=>{
        //     fetch("http://localhost:5012/add-goods",{
        //         method:"POST",
        //         headers:{
        //           'Content-type':"application/json"
        //         },
        //         body:JSON.stringify(action.payload)
          
        //       })
        //       .then(res =>res.text())
        //       .then(data=>console.log(data))
        // },
        sortProducts:(state)=>{
            let newGoods = [...state.products];
            state.sorted? newGoods.sort((a,b)=> a.product_price - b.product_price) : newGoods.sort((a,b)=> b.product_price - a.product_price);
            state.sorted = !state.sorted;
            state.products = newGoods;
        }
        
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.products = action.payload
        });
    }
  })


export const{addProduct,sortProducts} = productSlice.actions;

export default productSlice.reducer;