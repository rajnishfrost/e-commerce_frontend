import React from 'react';
import apiData from "../apiData/products.json"
import { useEffect, useState } from "react";

export default function Skin() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          const data = apiData;
          setProduct(data);
        };
        fetchProducts();
    
      }, );
      
  return (
    <div style={{ height : "100%" , width : "100%" , display : "flex" , flexWrap : "wrap" , marginBottom : "5%"}}>
<div style={{ height : "100%" , width : "100%" , display : "flex" , flexWrap : "wrap" }}>
      {
        product && product.filter(d=>d.category === "skincare" || d.category === "groceries").map((data , index) => {
          
          return (
            <div className="returnMainDiv" key={index} style={{height: "400px", width: "400px" , display : "block" , margin : "auto" , marginTop : "1%" , border : "2px solid grey" , borderRadius : "100px"}} >
            <img  src={data.images[0]} alt="noImage" style={{ height: "250px", width: "250px" , margin : "auto" , display : "block" , marginTop : "4%" ,}}/>
            <p style={{textAlign : "center"}}>{data.title}</p>
            <p style={{textAlign : "center" , fontWeight : "bold"}}>Price ₹{data.price} </p>
            <button id="addtocart" style={{fontWeight : "bold" , display : "block" , margin : "auto" ,borderRadius : "10px" , border : "none" , backgroundColor : "rgb(0, 185, 185)" , height : "25px"}}    >Add To Cart</button>
          </div>
        );
      })
      }
      </div>
    </div>
  )
}
