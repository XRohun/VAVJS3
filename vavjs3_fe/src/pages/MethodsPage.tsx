import axios from "axios";
import React, { FC, useEffect } from "react";
import Activities from "../components/Activities";
import AddMeasurement from "../components/AddMeasurement";
import CreateActivity from "../components/CreateActivity";
import { API_HOST } from "../config";

export type MethodsProps = {
    /* insert props */
  }

export const Methods: FC<MethodsProps> = (props) => {
  const [activityId, setActivityId] = React.useState<null | string>(null);
  const [activities, setActivities] = React.useState<any>(null);
  
  const fetchActivities = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    axios.get(`${API_HOST}/method/${user.id}`).then((res) => {
      setActivities(res.data);
    }).catch((err: any) => {
      console.log(err);
    })
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div className={"measurements"}>
      <CreateActivity fetchActivities={fetchActivities}/>
      <AddMeasurement/>
      <Activities setActivityId={setActivityId} activities={activities} />
    </div>
  );
};


export default Methods;