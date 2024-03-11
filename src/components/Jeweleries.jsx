import React from 'react';
import { useSelector , useDispatch} from "react-redux";
import {savingCartData ,increaseQty} from "../redux/actions/index";
import { useEffect, useState } from "react";
import Modal from "./Modal";

export default function Jeweleries() {

  const myState = useSelector((state) => state.savingAPI);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const [isOpen, setIsopen] = useState(false);
  const [temp , setTemp] = useState([]);

  const model = {
    position : "absolute" ,
    zIndex : 1,
  }

  useEffect(() => {
    setProduct(myState.dj[0]);
  }, [myState])
  
  function filtering(d){
    console.log(d.category);
    return(
      d.category === "jewelery"
    );
  }

  return (
    <div  style={{ height : "100%" , width : "100%" , display : "flex" , flexWrap : "wrap", marginBottom : "11%"}}>
    <div style={model}>
    <Modal open={isOpen} onClose ={() => setIsopen(false)} data ={temp}></Modal>
    </div>
    {
    product && product.filter(filtering).map((data , index) => {
      return (
        <div className="returnMainDiv" key={index} style={{height: "400px", width: "400px" , display : "block" , margin : "auto" , marginTop : "1%" , border : "2px solid grey" , borderRadius : "100px"}} >
          <img onClick={() => {setIsopen(true) ; setTemp(data)}} src={data.image} alt="noImage" style={{ height: "250px", width: "250px" , margin : "auto" , display : "block" , marginTop : "4%" ,}}/>
          <p style={{textAlign : "center"}}>{data.title}</p>
          <p style={{textAlign : "center" , fontWeight : "bold"}}>Price ₹{data.price} </p>
          <button id="addtocart" style={{fontWeight : "bold" , display : "block" , margin : "auto" ,borderRadius : "10px" , border : "none" , backgroundColor : "rgb(0, 185, 185)" , height : "25px"}} onClick={()=>{dispatch(savingCartData(data)); dispatch(increaseQty(data));}}  >Add To Cart</button>
        </div>
      );
    })}
  </div>
  );
}
