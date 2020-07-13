import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const Signup = () => {
  const [firtsName, setFirtsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");

  //Deshabilitar el refresh a la pagina
  const handleForm = async (e) => {
    //Deshabilitar el refresh a la pagina
    e.preventDeafult();
    const jsonSend = {
      first_name: firtsName,
      last_name: lastName,
      email,
      password,
    };
    const SIGNUP_URI = `${process.env.REACT_APP_BACKEND_BASE_URL}/signup`
    try {
      const res = await axios.post(SIGNUP_URI, jsonSend);
      //Limpiar los datos
      setFirtsName('');
      setLastName('');
      setEmail('');
      setPasssword('');
      if (res.status === 201) alert('Successful signup');
    } catch (error) {
      alert('Error on signup');
    }

    console.log(jsonSend);

  }
  return (
    <React.Fragment>
      <h1 className="mb-4">Signup on Maui App</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label>First Name</Label>
          <Input
            value={firtsName}
            onChange={(e) => { setFirtsName(e.target.value) }}
            type="text"
            id="firstName"
            name="inputFirstName"
            placeholder="type your first name" />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            value={lastName}
            onChange={(e) => { setLastName(e.target.value) }}
            type="text"
            name="lastName"
            id="inputLastname"
            placeholder="type your last name" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="type your email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            value={password}
            onChange={(e) => { setPasssword(e.target.value) }}
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

export default Signup;