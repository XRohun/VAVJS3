import axios from "axios";
import React, { FC, useEffect } from "react";
import { API_HOST } from "../config";
import Activity from "./Activity";

export type ActivitiesProps = {
    setActivityId: (id: string) => void;
    activities: any[];
  }

export const Activities: FC<ActivitiesProps> = (props) => {
  const {activities} = props;
  const [count, setCount] = React.useState(0);
  const [user, setUser] = React.useState<any>(null);

  return (
    <div>
      Your activities
      {activities && activities.map((activity: any) => {
        return (
          <Activity activity={activity}/>
        )
      })}
    </div>
  );
};


export default Activities;