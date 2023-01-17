import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

export type NavigationProps = {
    user: any;
    setUser: (user: any) => void;
  }

export const Navigation: FC<NavigationProps> = (props) => {
  const navigate = useNavigate();

  const logout = () => {
    props.setUser(null)
    localStorage.removeItem("user");
    navigate("/auth");
  }

  return (
    <div className="navigation">
      <h3>Logged as {props.user?.login}</h3>
      <button onClick={() => logout()}>Logout</button>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/measurements")}>Methods</button>
      {(props.user?.login === "admin") && <button onClick={() => navigate("/admin")}>admin</button>}
    </div>
  );
};


export default Navigation;