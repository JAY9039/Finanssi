import React, { useState, useEffect } from 'react';
import axios from 'axios';
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col,Input,Typography } from 'antd'
import {useGetTopgainersQuery} from '../services/stockApi';
const { Title, Text } = Typography;


const Topgainers = () => {

const {data : stockList, isFetching} = useGetTopgainersQuery();
const [stocks, setstocks] = useState(stockList?.body?.BANKNIFTY?.data);
console.log(stocks);

return (
    <>
    <Col className="coin-heading-container">
    <div className="nifty-logo-container">
    
        <Title level={2} className="coin-name">
                Top Gainers of Stock Market
        </Title>
        </div>
        <p>
        Gainers are the stocks that tend to close with a higher price than what they opened with/their previous close price in an intraday market. If they are a part of any indices, the market indices shoot up. Conversely, when market indices are rising, the possibility of there being more gainers than losers is higher. NSE India publishes the top gainers and losers of the market categorically and updates it on a real time basis. They are expressed in absolute terms and percentage terms. The gainers are arranged in the list in a descending order. 

        <br />
        <br />
        <br />
        <br />
        The Nifty index was launched on April 22, 1996, with a base value of 1,000 counted from November 3, 1995.
         Here you can check the prices, value and much more..
        </p>
    </Col>
      
    </>
 )
  };
  



export default Topgainers;