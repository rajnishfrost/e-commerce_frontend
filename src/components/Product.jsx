import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { savingAPI , increaseQty , savingCartData} from "../redux/actions/index";
import apiData from "../apiData/apiData.json"
import "./CSS/product.css";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsopen] = useState(false);
  const [temp , setTemp] = useState([]);

  const model = {
    position : "absolute" ,
    zIndex : 1,
  }
  
  useEffect(() => {
    const fetchProducts = async () => {
      // const res = await fetch("https://fakestoreapi.com/products");
      const data = apiData;
      setProduct(data);
      dispatch(savingAPI(data));
    };
    fetchProducts();

  }, );

  function handleBuyOne(){
    navigate("/buyone");
  }
  function handleSkin(){
    navigate("/skin");
  }
  function handleHdecoration(){
    navigate("hdecoration");
  }
  function handleLaptop(){
    navigate("/laptop");
  }
  function smart(){
    navigate("/smartphones");
  }

  return (
    <div  style={{ height : "100%" , width : "100%" , display : "flex" , flexWrap : "wrap" }}>
      <div style={model}>
      <Modal open={isOpen} onClose ={() => setIsopen(false)} data ={temp}></Modal>
      </div>
      <div className="bgImage" style={{width : "100%" ,height : "900px" }}>
        <h1 style={{fontSize : "50px" , color : "white" , marginLeft : "10%" , marginTop : "10%"}}>SUMMER SALE</h1>
        <p style={{color : "grey" , marginLeft : "10% " }}>DON'T COMPROMISE ON STYLE ! FET FLAT 30% OFF</p>
        <p style={{color : "grey" , marginLeft : "10% " }}>FOR NEW ARRIVALS</p>
        <br />
        <h1 style={{color : "rgb(0, 185, 185)" , marginLeft : "10%"}}> Shop Now</h1>
      </div>
      <div style={{height : "180px" , width : "100%" , display : "block" }}>
        <h1 style={{textAlign : "center" , fontSize : "50px" , color : "rgb(0, 185, 185)"}}>Featuring Products</h1>
        <h2 style={{textAlign : "center" , color : "grey"}}>Women's & Men's Collection New Mordern Design </h2>
        <hr />
        <br />
      </div>
      <div style={{ height : "100%" , width : "100%" , display : "flex" , flexWrap : "wrap" }}>
      {
        product && product.filter(d=>d.category === "women's clothing"  || d.category === "men's clothing").map((data , index) => {
          return (
            <div className="returnMainDiv" key={index} style={{height: "400px", width: "400px" , display : "block" , margin : "auto" , marginTop : "1%" , border : "2px solid grey" , borderRadius : "100px"}} >
            <img onClick={() => {setIsopen(true) ; setTemp(data)}} src={data.image} alt="noImage" style={{ height: "250px", width: "250px" , margin : "auto" , display : "block" , marginTop : "4%" ,}}/>
            <p style={{textAlign : "center"}}>{data.title}</p>
            <p style={{textAlign : "center" , fontWeight : "bold"}}>Price ₹{data.price} </p>
            <button id="addtocart" style={{fontWeight : "bold" , display : "block" , margin : "auto" ,borderRadius : "10px" , border : "none" , backgroundColor : "rgb(0, 185, 185)" , height : "25px"}} onClick={()=>{dispatch(savingCartData(data)); dispatch(increaseQty(data));}}  >Add To Cart</button>
          </div>
        );
      })
      }
      </div>
      <div className="banner" style={{width : "100%" ,height : "100%" , marginTop : "1%"}}>
        <h3 style={{textAlign : "center" , color : "white"}}>Repair Services</h3>
        <h1 style={{textAlign : "center" , color : "red"}}>Up to 70% - All t-shirt & Accessories</h1>
        <p style={{textAlign : "center" , color : "rgb(0, 185, 185)" , fontSize : "50px"}}>Explore More</p>
      </div>
      <div style={{height : "180px" , width : "100%" , display : "block" }}>
        <h1 style={{textAlign : "center" , fontSize : "50px" , color : "rgb(0, 185, 185)"}}>New Arrivals</h1>
      </div>
      <div style={{ height : "100%" , width : "100%" , display : "flex" , flexWrap : "wrap" }}>
      {
        product && product.filter(d=>d.category === "jewelery" || d.category === "electronics").map((data , index) => {
          return (
            <div className="returnMainDiv" key={index} style={{height: "400px", width: "400px" , display : "block" , margin : "auto" , marginTop : "1%" , border : "2px solid grey" , borderRadius : "100px"}} >
            <img onClick={() => {setIsopen(true) ; setTemp(data)}} src={data.image} alt="noImage" style={{ height: "250px", width: "250px" , margin : "auto" , display : "block" , marginTop : "4%" ,}}/>
            <p style={{textAlign : "center" , fontWeight : "bold"}}>Price ₹{data.price} </p>
            <button id="addtocart" style={{fontWeight : "bold" , display : "block" , margin : "auto" ,borderRadius : "10px" , border : "none" , backgroundColor : "rgb(0, 185, 185)" , height : "25px"}} onClick={()=>{dispatch(savingCartData(data)); dispatch(increaseQty(data));}}  >Add To Cart</button>
          </div>
        );
      })}
      </div>
      <div className="banner2" onClick={handleBuyOne} style={{width : "600px" , height : "330px" , marginTop : "1%" , marginLeft : "13%"}}>
        <br />
        <h3 style={{marginLeft : "3%" ,  color : "white" , fontFamily : "initial"}}>Crazy Deal</h3>
        <h1 style={{marginLeft : "3%" ,  color : "white"}}>Buy 1 Get One Free</h1>
        <p style={{marginLeft : "3%" , color : "white"}}>The Best Classic Perfume Is On Sale</p>
        <p style={{marginLeft : "3%" ,  backgroundColor : "rgb(0, 185, 185)" , color : "white" , fontSize : "50px" , width : "300px"}}>Learn More</p>
      </div>
      <div className="banner3" onClick={handleSkin} style={{width : "600px" , height : "400px" , marginTop : "1%" , marginLeft : "10%"}}>
        <br />
        <h3 style={{marginLeft : "3%" , color : "white" , fontFamily : "initial"}}>Skincare / Groceries</h3>
        <h1 style={{marginLeft : "3%" , color : "white"}}>Upcoming Season</h1>
        <p style={{marginLeft : "3%" ,color : "white"}}>The Best Classic Skincare / Groceries Is On Sale</p>
        <p style={{marginLeft : "3%" , border : "2px solid white" , width : "100px" , color : "white" , padding : "3px"}}>Collection</p>
      </div>
      <div onClick={handleHdecoration} className="banner4" style={{width : "500px" , height : "300px" , marginLeft : "5%"}}>
        <br />
        <h1 style={{marginLeft : "3%" , color : "white"}}>Home Decoration</h1>
        <h3 style={{marginLeft : "3%" ,color : "RED"}}> 50% OFF</h3>
      </div>
      <div onClick={handleLaptop} className="banner5" style={{width : "500px" , height : "280px" ,  marginLeft : "5%" }}>
        <br />
        <h1 style={{marginLeft : "3%" , color : "white"}}>NEW LAPTOP COLLECTION</h1>
        <h3 style={{marginLeft : "3%" ,color : "red"}}>2022</h3>
        
      </div>
      <div onClick={smart} className="banner6" style={{width : "500px" , height : "280px" , marginLeft : "5%" }}>
        <br />
        <h1 style={{marginLeft : "3%" , color : "white"}}>Smartphones</h1>
        <h3 style={{marginLeft : "3%" ,color : "red"}}> On Trending</h3>
      </div>
      
    </div>
  );
}
