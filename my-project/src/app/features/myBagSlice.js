import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMyBag = createAsyncThunk("/mybag", async () => {
  let response = await fetch("http://localhost:5013/my-bag");
  let data = response.json();
  return data;
});

let initialState = {
  myBag: [],
  myBagFiltered : [],
  myBagSorted : false,
};

let myBagSlice = createSlice({
  name: "myBagSlice",
  initialState,
  reducers: {
    addGoodsToMyBag:(state,action)=>{
        fetch("http://localhost:5013/add-mybag",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(action.payload)
        })
        .then(res=> res.text())
        .then(data => console.log(data));
    },
    deleteGoodsFromMyBag:(state,action)=>{
        fetch(`http://localhost:5013/delete-mybag/${action.payload.id}`,{
            method:"DELETE"
        })
        .then(res =>res.text())
        .then(data => console.log(data))

    },
    sortMyBag:(state)=>{
        let newProducts = [...state.myBagFiltered];
        state.myBagSorted? newProducts.sort((a,b)=>a.product_price - b.product_price):newProducts.sort((a,b)=>b.product_price - a.product_price);
        state.myBagSorted = !state.myBagSorted;
        state.myBagFiltered = [...newProducts]
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMyBag.fulfilled, (state, action) => {
      state.myBag = action.payload;
    });
  },
});

export const { addGoodsToMyBag,deleteGoodsFromMyBag ,sortMyBag} = myBagSlice.actions;

export default myBagSlice.reducer;
