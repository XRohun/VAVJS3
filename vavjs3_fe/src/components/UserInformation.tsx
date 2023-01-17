import axios from "axios";
import React, { FC, useEffect } from "react";
import { API_HOST } from "../config";

export type UserInformationProps = {
    user: any;
    deleteUser: (id: string) => void;
  }

export const UserInformation: FC<UserInformationProps> = (props) => {
  const {user} = props;

  return (
    <div className="userInformation">
      <h4>{user.id}</h4>
      <h4>{user.login}</h4>
      <h4>{user.email}</h4>
      <h4>{user.age}</h4>
      <h4>{user.height}</h4>
      <button onClick={() => props.deleteUser(user.id)}>DeleteUser</button>
    </div>
  );
};


export default UserInformation;