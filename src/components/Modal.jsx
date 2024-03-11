import React from 'react'
import  ReactDOM  from 'react-dom';
import { useDispatch} from "react-redux";
import {increaseQty , savingCartData} from "../redux/actions/index";

const modal = {
    position : "fixed" ,
    transform : "translate(-50% , -50%)" , 
    top : "50%" ,
    left : "50%" ,
    backgroundColor : "white" ,
    height : "auto" ,
    width : "600px" ,
    zIndex : 1000 ,
    borderRadius : "100px",
    padding : "10px"
}

export default function Modal({open , data , onClose}) {
    const dispatch = useDispatch();

    if(!open) return null
  return ReactDOM.createPortal(
  <>
  <div onClick={onClose} style={{position : "fixed" , top : "0" , left : "0" , bottom : "0" , right : "0" , backgroundColor : "rgba(0,0,0,.7)" , zIndex : 1000}}>
    <div style={modal}>
                    <div>
                        <img style={{height : "400px" , width : "400px" , display : "block" , margin : "auto"}} src={data.image} alt="" />
                        <h2 style={{textAlign : "center"}}>{data.title}</h2>
                        <p style={{textAlign : "center"}}>{data.description}</p>
                        <p style={{textAlign : "center"}}>Category - {data.category}</p>
                        <p style={{textAlign : "center"}}>Rating - {data.rating.rate}</p>
                        <p style={{textAlign : "center"}}>Items Left - {data.rating.count}</p>
                        <h2 style={{textAlign : "center" , fontWeight : "bold"}}>Price ₹{data.price}</h2>
                        <button id="addtocart" style={{ display : "block" , margin : "auto" ,borderRadius : "10px" , border : "none" , backgroundColor : "rgb(0, 185, 185)" , height : "25px"}} onClick={()=>{dispatch(savingCartData(data)); dispatch(increaseQty(data));}}  >Add To Cart</button>
                    </div>
    </div>
  </div>
  </> , document.getElementById('portal')
  )
}
