import axios from "axios";
import React, { FC, useState } from "react";
import { setSourceMapRange } from "typescript";
import { API_HOST } from "../config";

export type LoginProps = {
    setForm: (form: string) => void;
    setUser: (user: any) => void;
  }

export const Login: FC<LoginProps> = (props) => {
  const { setForm } = props;
  const [ login, setLogin ] = useState("");
  const [ password, setPassword ] = React.useState("");
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post(`${API_HOST}/user/login`, {
      login,
      password
      }).then((res) => {
        props.setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      }).catch((err) => {
        console.log(err);
      }
    )}

  return (
    <div>
      <h2>Login</h2>
      <input type="text" onChange={(e) => setLogin(e.target.value)}/>
      <h2>Password</h2>
      <input type="password" onChange={(e) => setPassword(e.target.value)}/>
      <br/>
      <button style={{margin: "8px", width: "100px"}} onClick={(e) => handleSubmit(e)}>Login</button>
      <h3 style={{cursor: "pointer"}} onClick={() => setForm("Register")}>dont have account? register</h3>
    </div>
  );
};


export default Login;