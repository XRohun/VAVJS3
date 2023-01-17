import axios from "axios";
import React, { FC, useEffect } from "react";
import { API_HOST } from "../config";

export type AddMeasurementProps = {
  }

export const AddMeasurement: FC<AddMeasurementProps> = (props) => {
  const [activity, setActivity] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [weightDate, setWeightDate] = React.useState("");
  const [upPressure, setUpPressure] = React.useState("");
  const [upPressureDate, setUpPressureDate] = React.useState("");
  const [bottomPressure, setBottomPressure] = React.useState("");
  const [bottomPressureDate, setBottomPressureDate] = React.useState("");
  const [activityId, setActivityId] = React.useState("");

  const submitMeasurement = (type: string) => {
    console.log(activityId)
    switch (type) {
      case "weight":
        axios.post(`${API_HOST}/weight/${activityId}`, {
          weight: parseInt(weight),
          date: weightDate,
          activityId: activityId
        }).then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        })
        break;
      case "upPressure":
        axios.post(`${API_HOST}/upperpressure/${activityId}`, {
          upperpressure: parseInt(upPressure),
          date: upPressureDate,
          activityId: activityId
        }).then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        })
        break;
      case "bottomPressure":
        axios.post(`${API_HOST}/bottompressure/${activityId}`, {
          bottompressure: parseInt(bottomPressure),
          date: bottomPressureDate,
          activityId: activityId
        }).then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        })
        break;
    }
  };

  return (
    <div className="addMeasurement">
      Method ID:
      <input type="text" onChange={(e) => setActivityId(e.target.value)}/>
      <div className="measurementParamBox">
        <h4>Weight</h4>
        <input type="text" onChange={(e) => setWeight(e.target.value)}/>
        <h4>Date</h4>
        <input type="text" onChange={(e) => setWeightDate(e.target.value)}/>
        <button onClick={() => submitMeasurement("weight")}>Add weight</button>
      </div>
      <div className="measurementParamBox">
        <h4>Up pressure</h4>
        <input type="text" onChange={(e) => setUpPressure(e.target.value)}/>
        <h4>Date</h4>
        <input type="text" onChange={(e) => setUpPressureDate(e.target.value)}/>
        <button onClick={() => submitMeasurement("upPressure")}>Add up pressure</button>
      </div>
      <div className="measurementParamBox">
        <h4>Bottom pressure</h4>
        <input type="text" onChange={(e) => setBottomPressure(e.target.value)}/>
        <h4>Date</h4>
        <input type="text" onChange={(e) => setBottomPressureDate(e.target.value)}/>
        <button onClick={() => submitMeasurement("bottomPressure")}>Add bottom pressure</button>
      </div>
    </div>
  );
};


export default AddMeasurement;