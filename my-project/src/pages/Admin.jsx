

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../app/features/productSlice";
import {sortProducts} from "../app/features/productSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";





function Admin() {
    const {products} = useSelector((state)=> state.productReducer);
    const dispatch = useDispatch();
    const [_productName,setProductName] = useState("");
    const [_productDescription,setProductDescription] = useState("");
    const [_productPrice,setProductPrice] = useState("");
    const [_productImg,setProductImg] = useState("");
    const [message,setMessage] = useState(false);
    const [flag, setFlag] = useState(false);

   
    const ref = useRef(null);

    const addPr = (e)=>{
        // e.preventDefault();
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
          body : JSON.stringify(obj)
      })
      .then(res => res.text())
      .then(data => console.log(data))
      .then((data) => setMessage(data))
      .then(()=>{
        setFlag(!flag)
       })

       ref.current.reset();
      }
    const sortGooods = ()=>{
        dispatch(sortProducts())
    }
  
    const deleteGoods = (item)=>{
        fetch(`http://localhost:5013/delete-goods/${item.id}`,{
            method:"DELETE",
            headers:{
                'Content-type':'application/json'
            }
            
        })
        .then(res =>res.text())
        .then(data => console.log(data));
    }
    useEffect(()=>{
        dispatch(fetchProducts());
        
    },[dispatch,flag])

  return (
    <div className="App">
    
      
      <hr></hr>
      <div>
        <form ref={ref} >
      <input onChange={e=>setProductName(e.target.value)} type="text" 
        required placeholder="Name" className="inputAdmin" />
        <input onChange={e=>setProductDescription(e.target.value)} type="text" 
        required placeholder="Description" className="inputAdmin"/>
        <input onChange={e=>setProductPrice(e.target.value)} type="text" 
        required placeholder="Price" className="inputAdmin"/>
        <input onChange={e=>setProductImg(e.target.value)} type="text" 
        required placeholder="img" className="inputAdmin"/>


          </form>
      {/* <button >Add Product</button> */}
      <IoAddCircle className="buy" onClick={addPr}/>
      </div>
      <hr></hr>
      <div>
      <FaSort onClick={sortGooods}/>
        {/* <button onClick={sortGooods}>Sort</button> */}
      {products.map((pr,index)=>{
        return(
            
            <div key={index} className="card">
               <FaRegTrashAlt onClick={()=>deleteGoods(pr)} />
               <div> <img src="https://www.alexandra.co.uk/media/catalog/product/n/u/nu126_bk_front.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700" alt='Logo'></img>
               <p> {pr.product_price} AZN </p></div>
              
               
                <title >{pr.product_name}</title>
                    <p> {pr.product_description}  </p>
                
                
            </div>
        )

      })}
      </div>
    </div>
  );
}

export default Admin;
