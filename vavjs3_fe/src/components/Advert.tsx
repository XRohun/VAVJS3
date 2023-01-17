import axios from "axios";
import React, { FC, useEffect } from "react";
import { API_HOST } from "../config";

export type AdvertProps = {
  /* insert props */
}

export const Advert: FC<AdvertProps> = (props) => {
  const [adUrl, setAdUrl] = React.useState("");
  const [adImageUrl, setAdImageUrl] = React.useState("");
  const [displayAd, setDisplayAd] = React.useState(false);

  const addClicktoAd = (e: any) => {
    window.open(adUrl);
    axios.get(`${API_HOST}/advertisement/click`).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
    axios.get(`${API_HOST}/advertisement`).then((res) => {
      setAdUrl(res.data.adUrl);
      setAdImageUrl(res.data.adImageUrl);
    }).catch((err: any) => {
      console.log(err);
    })
    setInterval(() => {
      setDisplayAd(true);
      setTimeout(() => {
        setDisplayAd(false);
      }
        , 5000)
    }, 10000);
  }, []);

  return (
    <div onClick={(e) => addClicktoAd(e)} className="advert" style={{ display: displayAd ? "block" : "none" }}>
      <img src={adImageUrl} alt="ad" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};


export default Advert;