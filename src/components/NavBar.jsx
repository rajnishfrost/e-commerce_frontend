import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import "./CSS/navBar.css";
import { useEffect, useState } from "react";
import PIC from "../images/shopping-cart-icon-illustration-free-vector.webp";

export default function NavBar() {
  const [first, setfirst] = useState(0);
  const myState2 = useSelector((state) => state.cartData);

  useEffect(() => {
    setfirst(0);
    let a = 0;
    a = myState2.rj.map(d => d.qty);
    let b = 0;
    for (let i = 0; i < a.length; i++) {
      b = b + a[i];
    }
    setfirst(b)

  }, [myState2])


  
  return (
    <>
      <nav className="navmain" >
        <ul style={{ display: "flex", justifyContent: "center" }}>
          {myState2.user.firstName !== "" ?
          <div class="dropdown">
            <button class="dropbtn">{myState2.user.firstName}</button>
            <div class="dropdown-content">
              <a href="#">Profile</a>
              <Link to="/order">Orders</Link>
              <a href="/">Sign Out</a>
            </div>
          </div>
          : 
          <Link style={{ marginLeft: "2%", listStyle: "none", textDecoration: "none", color: "black", fontFamily: "revert" }} to="/logIn"><li className="returnLi">Log In</li></Link>
}
          <Link style={{ marginLeft: "2%", listStyle: "none", textDecoration: "none", color: "black", fontFamily: "revert" }} to="/"><li className="returnLi">Home</li></Link>
          <Link style={{ marginLeft: "2%", listStyle: "none", textDecoration: "none", color: "black", fontFamily: "revert" }} to="/mensClothing"><li className="returnLi">Men's Clothing</li></Link>
          <Link style={{ marginLeft: "2%", listStyle: "none", textDecoration: "none", color: "black", fontFamily: "revert" }} to="/womensClothing"><li className="returnLi">Women's Clothing</li></Link>
          <Link style={{ marginLeft: "2%", listStyle: "none", textDecoration: "none", color: "black", fontFamily: "revert" }} to="/jeweleries"><li className="returnLi">Jeweleries</li></Link>
          <Link style={{ marginLeft: "2%", listStyle: "none", textDecoration: "none", color: "black", fontFamily: "revert" }} to="/electronics"><li className="returnLi">Electronics</li></Link>
          <Link to="/cart" style={{ marginTop: "-0.5%", marginLeft: "1%" }}><img src={PIC} alt="noImage" style={{ height: "40px", width: "50px" }} /></Link>
          <p style={{ backgroundColor: "black", color: "white", width: "20px", height: "20px", borderRadius: "10px", textAlign: "center", marginTop: "-0.5%" }}>{first}</p>
        </ul>
      </nav>
    </>
  );
}
