import React from 'react';
import { Link } from 'react-router-dom';

export default function Registered() {
  return (
    <div style={{margin : "15%"}}>
        <h1 style={{textAlign : "center"}}>Succeessfully Registered</h1>
        <Link to="/logIn" ><p style={{textAlign : "center"}}>Goto LogIn Page</p></Link>
    </div>
  )
}
