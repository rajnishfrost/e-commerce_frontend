import React from 'react'
import {Link} from "react-router-dom";

export default function SeverNotRes() {
  return (
    <div style={{marginBottom : "25.5%"}}>
      <br />
      <br />
      <br />
        <h1 style={{textAlign : "center" , fontWeight : "bolder" , fontsize : "50px"}}> Sever Not Responding </h1>
        <Link to="/cart" ><p style={{textAlign : "center"}}> Try Again</p> </Link>
    </div>
  )
}
