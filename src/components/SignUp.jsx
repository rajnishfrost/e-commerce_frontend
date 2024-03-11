import {React , useState ,} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default function SignUp() {
    const[input , setInput] = useState();
    const navigate = useNavigate();

    function handlingInputs(e){
        setInput((p)=>({...p ,[e.target.name] : e.target.value , }));
    }
console.log(input);
    function handlingSubmitButton(){
        const{password , rePassword} = input
        if(password !== rePassword){
            alert("Password Not Match")
        }
        else{
            axios({url : "https://e-commerce-bakend-ejqb.onrender.com/data/userInfo" , method :"POST" , data : input}).then(d=>{if(d.data.found === true){alert("This Email Already Resigter")}else{navigate("/registered")}});
        }
    }


    return (
        <div>
            <h1 style={{textAlign : "center" , margin : "3%"}}> Sign Up</h1>
            <Form method='POST' className="mx-auto" style={{width: '400px' , marginBottom : "7%"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={handlingInputs} name = "firstName" type="text" placeholder="Enter First Name" />
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={handlingInputs} name = "lastName" type="text" placeholder="Enter Last Name" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handlingInputs} name = "email" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlingInputs} name = "password" type="password" placeholder="Password" />
                    <Form.Label>Re-Enter Password</Form.Label>
                    <Form.Control onChange={handlingInputs} name = "rePassword" type="password" placeholder="Re-Enter Password" />
                </Form.Group>
                <Button style={{display : "block" , margin : "auto"}} variant="success" onClick={handlingSubmitButton}>
                    Sign Up
                </Button>
            </Form>
        </div>
    )
}
