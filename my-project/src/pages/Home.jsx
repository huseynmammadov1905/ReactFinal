
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../app/features/productSlice";
import {sortProducts} from "../app/features/productSlice";
import { addGoodsToMyBag } from "../app/features/myBagSlice";
import { FaBagShopping } from "react-icons/fa6";
import { FaSort } from "react-icons/fa";


function Home() {

    const {products} = useSelector((state)=> state.productReducer);
    const dispatch = useDispatch();
    const [flag, setFlag] = useState(false);
    
    const sortGooods = ()=>{
        dispatch(sortProducts())
    }

    useEffect(()=>{
        dispatch(fetchProducts());
        
    },[dispatch])

    const addToMyBag =(product)=>{
        dispatch(addGoodsToMyBag(product))
    }

    const searchGoods=(s)=>{
        fetch(`http://localhost:5013/search-goods/${s}`)
        .then((res) => res.json())
        // .then((data) => setGoods(data))
      }
  
  return (
    <div className="home">
        
        <div className="searchInput">
      <input onChange={(e)=>{
        e.target.value === ''? setFlag(!flag):searchGoods(e.target.value);
      }} placeholder="search"/>
      <FaSort onClick={sortGooods}/>
     
      </div>
      {products.map((pr,index)=>{
        return(
            
            <div key={index}  className="card">
               {/* <p></p> */}
               <FaBagShopping  onClick={()=>addToMyBag(pr)}/>
               <div> <img src="https://www.alexandra.co.uk/media/catalog/product/n/u/nu126_bk_front.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700" alt='Logo'></img>
               <p> {pr.product_price} AZN </p></div>
              
               <div className="title">
                <title >{pr.product_name}</title>
                    <p> {pr.product_description}  </p>
                    
                    <br></br>
                    {/* <button className="btn" >MB</button> */}
                    
                </div>
                    
                
            </div>
        )

      })}
     
    </div>
  );
}

export default Home;
