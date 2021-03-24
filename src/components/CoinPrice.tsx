import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";

function CoinPrice() {
  interface Coin {
    acc_trade_price: number;
    acc_trade_price_24h: number;
    acc_trade_volume: number;
    acc_trade_volume_24h: number;
    change: string;
    change_price: number;
    change_rate: number;
    high_price: number;
    highest_52_week_date: string;
    highest_52_week_price: number;
    low_price: number;
    lowest_52_week_date: string;
    lowest_52_week_price: number;
    market: string;
    opening_price: number;
    prev_closing_price: number;
    signed_change_price: number;
    signed_change_rate: number;
    timestamp: number;
    trade_date: string;
    trade_date_kst: string;
    trade_price: number;
    trade_time: string;
    trade_time_kst: string;
    trade_timestamp: number;
    trade_volume: number;
    
  }
  const [btc, setBtc] = useState(new Array<Coin>());

  const getBTC = () => {
    Axios.get("https://api.upbit.com/v1/ticker?markets=krw-BTC").then(
      (response) => {
        setBtc(response.data);
        console.log(response.data);
      }
    );
  };

  useEffect(() => {
    setInterval(getBTC, 1000);
  }, []);

  return (
    <div>
      {btc[0] ? btc[0].acc_trade_price : 'wait'}
    </div>
  )
}

export default CoinPrice;
