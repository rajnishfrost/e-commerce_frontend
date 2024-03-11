import {React , useState , useEffect} from 'react';
import { useSelector , useDispatch} from "react-redux";
import {decNum, deleteCartData , increaseQty ,decreaseQty} from "../redux/actions/index";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./CSS/cart.css"


export default function Cart() {
    const myState = useSelector((state) => state);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();
    
    async function handleCheckout(){
      let qty =  myState.cartData.rj.map(d=>d.qty);
      let price = myState.cartData.rj.map(d=>d.price);
      let totalPriceOfEachItem = [] ; 
      for(let i=0;i<qty.length;i++){
        totalPriceOfEachItem[i]=qty[i]*price[i];
      }
      let total = 0 ;
      for(let i=0;i<totalPriceOfEachItem.length;i++){
        total = total + totalPriceOfEachItem[i];
      }
      total = Math.floor(total);
      await setAmount(total);
      
    }
    
    useEffect(() => {
      axios({url : "https://e-commerce-bakend-ejqb.onrender.com/cartData" , method : "POST" , data : {orderDetails : myState.cartData.rj , email : myState.cartData.user.email}});
      handleCheckout();
      // eslint-disable-next-line
    }, [myState]);

    const checkoutHandler = async() => {
      try{
      const {data:{key}} =await axios.get("https://e-commerce-bakend-ejqb.onrender.com/api/getkey")

      const {data : {order}} = await axios.post("https://e-commerce-bakend-ejqb.onrender.com/api/checkout", {amount})
  

  const options = {
      key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Frost Software Private Ltd.",
      description: "Test Transaction",
      image: "https://avatars.githubusercontent.com/u/89183490?s=400&u=23842d1ac14138d25e8771096739851360f54243&v=4",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "https://e-commerce-bakend-ejqb.onrender.com/api/paymentVerification",
      prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999"
      },
      notes: {
          address: "Razorpay Corporate Office"
      },
      theme: {
          color: "#121212"
      },
      msg : "hello peter"
  };
  const razor = new window.Razorpay(options);
  razor.open(); 
}
catch(err){
 navigate("/servernotres")
}
  
}

    
  
    
    return (
        <div style={{height: "100%",width: "94%" , marginBottom : "31.5%"}}>
        {
          myState.cartData.rj.length === 0 ? <h1 style={{textAlign : "center"}}>No Items In Cart</h1>:
          <div>{
            myState.cartData.rj.map((d,i)=>{
                return(
              <div key={i} style={{marginLeft : "3%" , marginTop : "1%" , display : "flex"}}>
                <img  src={d.image} alt="noImage" style={{ height: "500px", width: "500px"}} />
                <div style={{width:"20%"  , marginLeft: "30%"}}>
                <h1 style={{marginTop : "5%"}}>{d.title}</h1>
                <p>{d.description}</p>
                <p>Category : {d.category}</p>
                <p>Price ₹{d.price}  </p>
                <div style={{display : "flex" , flexDirection : "row"}}>
                <h2 className='hover' onClick={()=>dispatch(decreaseQty(d))} style={{ width : "28px" , textAlign : "center" , borderRadius : "50px" , backgroundColor : "rgb(0,185,185)" , color : "white"}}>-</h2>
                <h2 style={ {marginLeft : "1%" , marginRight : "1%"}}>{d.qty}</h2>
                <h2 className='hover' onClick={()=>dispatch(increaseQty(d))} style={{ width : "28px" , textAlign : "center" , borderRadius : "50px" , backgroundColor : "rgb(0,185,185)" , color : "white"}}>+</h2>
                </div>
                <h2> ₹{d.price*d.qty}</h2>
                <button className='hover' style={{backgroundColor : "red" , color : "white" , border : "none" , fontSize : "15px" , padding  : "5px" , borderRadius : "10px"}} onClick={()=>{dispatch(deleteCartData(d.id));dispatch(decNum())}}>Delete</button>
                </div>
              </div>
            )
          })}
          <h1 style={{textAlign : "center"}}>Total =  ₹{amount}</h1>
        <button className='hover' onClick={checkoutHandler} style={{ display : "block" , margin : "auto" , border : "none" , backgroundColor : "green" , color : "white" , borderRadius : "10px" , fontSize : "15px" , padding  : "5px" }}>Check Out</button>
        </div>
        }
         </div>
  )
}
