import {React , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {userFirstName} from "../redux/actions/index";
import { useDispatch } from 'react-redux';

export default function LogIn() {
    const[input , setInput] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handlingInputs(e){
        setInput((p)=>({...p ,[e.target.name] : e.target.value , }));
    }

    function handlingSubmitButton(){
        axios({url : "https://e-commerce-bakend-ejqb.onrender.com/data/logIn" , method :"POST" , data : input}).then(d=>{if(d.data.found === true){navigate("/");dispatch(userFirstName({firstName : d.data.firstName.firstName , email : d.data.firstName.email}))}else{alert("Email or Password Wrong")}});
    }


  return (
    <div>
            <h1 style={{textAlign : "center" , marginTop : "9%"}}> Log In</h1>
            <Form method='POST' className="mx-auto" style={{width: '400px' , marginBottom : "15%"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control onChange={handlingInputs} name = "email" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlingInputs} name = "password" type="password" placeholder="Password" />
                </Form.Group>
                <Button style={{display : "block" , margin : "auto"}} variant="success" onClick={handlingSubmitButton}>
                    Log In
                </Button>
                <a href="/signUp">Not Registered Yet ?</a>
            </Form>
        </div>
  )
}
