import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";



function CoinPrice() {
  
  const [btc, setBtc] = useState([]);

  const getBTC = () => {
    Axios.get('https://api.upbit.com/v1/ticker?markets=krw-BTC').then((response) => {
      setBtc(response.data)
      console.log(response.data)
    })
  }

  useEffect(() => {
    setInterval(getBTC, 10000);
  }, []);

  return <div>

  </div>;
}

export default CoinPrice;
