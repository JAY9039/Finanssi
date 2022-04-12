import React, { useState, useEffect } from 'react';
import axios from 'axios';
import millify from 'millify';
import { Typography,Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import {useGetStocksQuery} from '../services/stockApi'
import { Cryptocurrencies, News, Near52weeklow, CurrentIPO, Topgainers , CryptoNews,NiftyFifty } from '../components';
import { useGetCryptosQuery } from '../services/cryptoApi';


const { Title } = Typography;



const Homepage = () => {
  


  const { data,isFetching } = useGetCryptosQuery(8);
  

  const globalStats = data?.data?.stats;
  if(isFetching) return 'Loading... ';
  console.log(data);
  
 

  return (
    
    <>
    <Title level={2} className="heading">Global Crypto Stats</Title>
        <Row>
            
            <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
            <Col span={12}><Statistic title="Total Excahnges" value={millify(globalStats.totalExchanges)}/></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
            <Col span={12}><Statistic title="Total 24h volume" value={millify(globalStats.total24hVolume)}/></Col>
            <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
        </Row>
      <Title level={2} className="heading">Nifty 50 Stats</Title>
        <Row>
            
            <Col span={12}><Statistic title="Day High" value="5"/></Col>
            <Col span={12}><Statistic title="Day Low" value="5"/></Col>
            <Col span={12}><Statistic title="Total trade value" value="5"/></Col>
            <Col span={12}><Statistic title="Total trade volume" value="5"/></Col>
            <Col span={12}><Statistic title="Total Markets" value="5"/></Col>
        </Row>

        <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
  <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <CryptoNews simplified />
  

       
    <div className="home-heading-container">
    <Title level={2} className="home-title">Current IPO Issued</Title>
    <Title level={3} className="show-more"><Link to="/topgainers">Show more</Link></Title>
  </div>
  <CurrentIPO simplified />

  

  
  
  <div className="home-heading-container">
    <Title level={2} className="home-title">Latest Stock Market News</Title>
    <Title level={3} className="show-more"><Link to="/news">Show more</Link></Title>
  </div>
  <News simplified />

 
   </>
    
  )
}

export default Homepage