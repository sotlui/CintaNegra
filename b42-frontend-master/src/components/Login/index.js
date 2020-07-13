import React, {useState} from 'react';
import axios from 'axios';
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
} from 'reactstrap';

const Login = () => {
const [email, setEmail]=useState('');
const [password, setPassword]=useState('');

const hendleForm= async (e)=>{
  e.preventDefault();
  const jsonSend={
    email, password,
  }
  const LOGIN_URI = `${process.env.REACT_APP_BACKEND_BASE_URL}/login`
  try {
    const res = await axios.post(LOGIN_URI, jsonSend);
    console.log(res);
    //Almacenamos en local storage
    localStorage.setItem('lui_token',res.data.token);
      alert('Successful login')
  } catch (error) {
    alert('Error on login')
  }
  
}
  return (
    <React.Fragment>
      <h1 className="mb-4">Login to Maui App</h1>
      <Form onSubmit={hendleForm}>
        <FormGroup>
          <Label>Email</Label>
          <Input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="type your email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="type your password here" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </React.Fragment>
  );
}
 
export default Login;
 