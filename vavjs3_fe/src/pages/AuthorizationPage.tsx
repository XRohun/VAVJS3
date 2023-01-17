import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

export type AuthorizationPageProps = {
    setUser: (user: any) => void;
    user: any;
}

export const AuthorizationPage: FC<AuthorizationPageProps> = (props) => {
  const navigate = useNavigate();
  const [form, setForm] = React.useState("Login");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/");
      }
    }, []);
  

  return (
    <div className="authPage">
      {form === "Login" && <Login setForm={setForm} setUser={props.setUser}/>}
      {form === "Register" && <Register setForm={setForm} setUser={props.setUser}/>}
    </div>
  );
};


export default AuthorizationPage;