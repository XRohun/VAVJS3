import React, { FC, useEffect } from "react";
import { User } from "../types/User";
import { useNavigate } from "react-router-dom";

export type LandingPageProps = {
    user: User | null;
    setUser: (user: any) => void;
}

export const LandingPage: FC<LandingPageProps> = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/auth");
    } else {
      props.setUser(JSON.parse(user));
    }
  }, []);

  return (
    <div className={"landingPage"}>
      LANDING PAGE
    </div>
  );
};


export default LandingPage;