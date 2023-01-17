import axios from "axios";
import React, { FC } from "react";
import { API_HOST } from "../config";

export type RegisterAdminProps = {
  fetchUsers: () => void;
  }

export const RegisterAdmin: FC<RegisterAdminProps> = (props) => {
  const [ login, setLogin ] = React.useState("");
  const [ password, setPassword ] = React.useState("");
  const [ password2, setPassword2 ] = React.useState("");
  const [ email, setEmail ] = React.useState("");
  const [ height, setHeight ] = React.useState(0);
  const [ age, setAge ] = React.useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post(`${API_HOST}/user/register`,{
      login,
      password,
      password2,
      email,
      age,
      height
    }).then((res) => {
      props.fetchUsers()
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>
      <h2>Login</h2>
      <input type="text" onChange={(e) => setLogin(e.target.value)}/>
      <h2>Email</h2>
      <input type="text" onChange={(e) => setEmail(e.target.value)}/>
      <h2>Password</h2>
      <input type="password" onChange={(e) => setPassword(e.target.value)}/>
      <h2>Confirm password</h2>
      <input type="password" onChange={(e) => setPassword2(e.target.value)}/>
      <h2>Height</h2>
      <input type="number" onChange={(e) => setHeight(parseInt(e.target.value))}/>
      <h2>Age</h2>
      <input type="number" onChange={(e) => setAge(parseInt(e.target.value))}/>
      <br/>
      <button style={{margin: "8px", width: "100px"}} onClick={(e) => handleSubmit(e)}>Create new account</button>
    </div>
  );
};


export default RegisterAdmin;