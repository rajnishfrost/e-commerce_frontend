import {React , useEffect , useState} from 'react';
import axios from "axios";
import { useSelector } from "react-redux";

export default function Ordered() {
  const myState2 = useSelector((state) => state.cartData);
  const [product , setProduct] = useState([]);

  useEffect(() => {
    axios({url : "https://e-commerce-bakend-ejqb.onrender.com/orderDetails" , method :"POST" , data :  {email : myState2.user.email}}).then(d=>setProduct([d.data.data]))
  }, [myState2])
  

  return (
    <div  style={{ height : "100%" , width : "100%" , display : "flex" , flexWrap : "wrap" , marginBottom : "5%" }}>
      {
        product && product.map((data , i) => {
          return(
            <div className="returnMainDiv" key={i} style={{height: "420px", width: "400px" , display : "block" , margin : "auto" , marginTop : "1%" , border : "2px solid grey" , borderRadius : "100px"}} >
              <img src={data.image} alt="noImage" style={{ height: "250px", width: "250px" , margin : "auto" , display : "block" , marginTop : "4%" ,}}/>
          <p style={{textAlign : "center"}}>{data.title}</p>
          <p style={{textAlign : "center" , fontWeight : "bold"}}>Price ₹{data.price} </p>
              </div>
          )
        })
   }
    </div>
  )
}
