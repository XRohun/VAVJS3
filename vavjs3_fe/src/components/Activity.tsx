import axios from "axios";
import React, { FC } from "react";
import { API_HOST } from "../config";

export type ActivityProps = {
    activity: any;
  }

export const Activity: FC<ActivityProps> = (props) => {
  const [count, setCount] = React.useState(0);
  const [mea, setMea] = React.useState(false);
  const [measurements, setMeasurements] = React.useState<any[]>([]);
  let mykey = 1

  const exportMeasurements = () => {
    // export measurements to csv
    let csvContent = "data:text/csv;charset=utf-8,";
    measurements.forEach(function(rowArray) {
      let row = `${rowArray.type},${rowArray.value},${rowArray.date}`;
      csvContent += row + "\r\n";
  });
  var encodedUri = encodeURI(csvContent);
  window.open(encodedUri);
  }

  const fetchMeasurements = () => {
    axios.get(`${API_HOST}/method/measurements/${props.activity.id}`).then((res) => {
      let ms:any[] =[];
      res.data.upperpressure.forEach((m: any) => {
        ms.push({...m, type: "upperpressure"});
      });
      res.data.weight.forEach((m: any) => {
        ms.push({...m, type: "weight"});
      });
      res.data.bottompressure.forEach((m: any) => {
        ms.push({...m, type: "bottompressure"});
      });
      setMeasurements(ms);
    }
    ).catch((err) => {
      console.log(err);
    })
  }

  const showMeasurements = async () => {
    await setMea(!mea);
    if (mea) {
      fetchMeasurements()
    }
  };

  const deleteMeasurement = (type: string, id: string) => {
    axios.delete(`${API_HOST}/${type}/${id}`).then((res) => {
      setMeasurements(measurements.filter((m: any) => m.id !== id));
    }).catch((err) => {
      console.log(err);
    })
  }


  return (
    <div className={"activity"}>
      <div>
        {props.activity.id + "   " + props.activity.value}
        <button onClick={() => showMeasurements()}>SHOW MEASUREMENTS</button>
        <button onClick={() => exportMeasurements()}>EXPORT MEASUREMENTS TO .CSV</button>
        {mea && <button onClick={() => fetchMeasurements()}>REFRESH</button>}
      </div>
      {mea && measurements.map((measurement: any) => {
        console.log(measurement)
        return (
          <div key={mykey++}>
            {measurement.type + "   " + measurement.value + "   " + measurement.date}
            <button onClick={() => deleteMeasurement(measurement.type, measurement.id)}>Delete</button>
          </div>
        )
      }
      )}
      {(mea && measurements.length === 0) && (<div>No measurements :\</div>)}
    </div>
  );
};


export default Activity;