

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, fetchProducts } from "../app/features/productSlice";

function AddProduct() {
  const dispatch = useDispatch();
  const [_productName,setProductName] = useState("");
  const [_productDescription,setProductDescription] = useState("");
  const [_productPrice,setProductPrice] = useState("");
  const [message,setMessage] = useState(false);

  

  // const addPr = (e)=>{
  //   e.preventDefault();
  //  let obj = {
  //   productName:_productName,
  //   productDescription:_productDescription,
  //   productPrice:_productPrice
  //  }

  //  dispatch(addProduct(obj));

    

  //     //  dispatch(addProduct(obj))

  // };


  const addPr = (e)=>{
    e.preventDefault();
    let obj = {
      product_name : _productName,
      product_description : _productDescription,
      product_price : _productPrice
  }
  fetch("http://localhost:5013/add-goods",{
      method : "POST",
      headers : {
          'Content-type' : "application/json"
      },
      body : JSON.stringify(obj),
  })
  .then(res => res.text())
  .then(data => console.log(data))
  .then(() => setMessage(_productName))
  .then(() => dispatch(fetchProducts()));
  }

  return (
    <div className="App">
      
        <input onChange={e=>setProductName(e.target.value)} type="text" 
        required placeholder="Name" />
        <input onChange={e=>setProductDescription(e.target.value)} type="text" 
        required placeholder="Description" />
        <input onChange={e=>setProductPrice(e.target.value)} type="text" 
        required placeholder="Price" />

      
      <button onClick={addPr}>Add Product</button>
    </div>
  );
}

export default AddProduct;
