import axios from "axios";
import React, { FC } from "react";
import { API_HOST } from "../config";

export type CreateActivityProps = {
    fetchActivities: () => void;
  }

export const CreateActivity: FC<CreateActivityProps> = (props) => {
  const [activityName, setActivityName] = React.useState("");

  const createActivity = () => {
    const user = JSON.parse(localStorage.getItem("user")!);

    axios.post(`${API_HOST}/method/${user.id}`, {
      activityName: activityName
      }).then((res) => {
        props.fetchActivities();
      }
      ).catch((err) => {
        console.log(err);
      }
      )
  };

  return (
    <div>
      newActivity name
      <input type="text" onChange={(e) => setActivityName(e.target.value)}/>
      <button onClick={() => createActivity()}>Create</button>
    </div>
  );
};


export default CreateActivity;