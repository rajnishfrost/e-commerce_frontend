import React from 'react';
import {useSearchParams} from "react-router-dom";

export default function PaymentSuccessful() {
    const searchQuery = useSearchParams()[0];
    const referenceNum = searchQuery.get("reference");
  return (
    <div style={{marginBottom : "29.5%"}}>
        <h1 style={{textAlign : "center"}}>Payment Successful</h1>
        <p style={{textAlign : "center"}}>Reference No. {referenceNum}</p>
    </div>
  )
}
