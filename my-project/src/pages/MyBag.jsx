

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyBag,sortMyBag } from "../app/features/myBagSlice";
import { deleteGoodsFromMyBag } from "../app/features/myBagSlice";
// import {sortProducts} from "../app/features/productSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa"



function MyBag() {
  const dispatch = useDispatch();
  const {myBag} = useSelector((state)=>state.myBagReducer);
  const ref = useRef(null);
//   let [myBagFiltered,setMyBagFiltered] = useState([...myBag])
//   let [myBagSorted,setMyBagSorted] = useState(false)
// //  let myBagFiltered : [];
//   myBagSorted : false,
  useEffect(()=>{
    dispatch(fetchMyBag())
  },[dispatch])

  const sortGooods = ()=>{
    console.log("salam");
    dispatch(sortMyBag())
    // let newProducts = [...myBagFiltered];
    //     myBagSorted? newProducts.sort((a,b)=>a.product_price - b.product_price):newProducts.sort((a,b)=>b.product_price - a.product_price);
    //     setMyBagSorted(!myBagSorted);
    //     setMyBagFiltered([...newProducts])
    //     // myBag = [...myBagFiltered]

}
  const deleteFromMyBag =(product)=>{
    dispatch(deleteGoodsFromMyBag(product))
  }
  const BuyFunction = ()=>{
    fetch("http://localhost:5013/empty-mybag",{
      method:"DELETE"
    })
    .then(res=>res.text())
    .then(()=>ref.current.reset());
  }
  return (
    <div className="MB">
      <div>
        <form ref={ref} >
          <input type="text" placeholder="Name" required  className="inputAdmin"/>
          <br></br>
          <br></br>
          <input type="text" placeholder="Surname" required className="inputAdmin" />
          <br></br>
          <br></br>
          <input type="number" placeholder="Number" required  className="inputAdmin"/>
          <br></br>
          <br></br>
          <input type="text" placeholder="Mail" required  className="inputAdmin"/>
          <br></br>
          <br></br>
          {/* <button >Buy</button> */}
          <FaMoneyCheck className="buy"  onClick={BuyFunction}/>
        </form>
      </div>
      <FaSort onClick={()=>sortGooods()}/>
      {/* // <button }>sort</button> */}
      <ul style={{listStyle:'none'}}>
        {myBag.map((item,index)=>{
          return(
            <div key={index} className="card">
             <FaRegTrashAlt onClick={()=>deleteFromMyBag(item)} />
               <div> <img src="https://www.alexandra.co.uk/media/catalog/product/n/u/nu126_bk_front.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700" alt='Logo'></img>
               <p> {item.product_price} AZN </p></div>
              
               
                <title >{item.product_name}</title>
                    <p> {item.product_description}  </p>
           
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default MyBag;
