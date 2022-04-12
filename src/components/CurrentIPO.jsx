import React,{ useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col,Input,Typography } from 'antd'
import { useGetStocksQuery } from '../services/stockApi';
import Loader from './Loader';
const { Title, Text } = Typography;
const CurrentIPO = () => {
    //const {data: stockList, isFetching} = useGetStocksQuery();
    //const [stocks, setstocks] = useState(stockList?.data?.current_ipo_issue);
   // console.log(setstocks);
  //  if(isFetching){
  //    return <Loader />
  //  }
  // var stockInfo = stockList.body.dataLtpGreater20;
  // console.log(stockInfo);
  const {data : stockList, isFetching} = useGetStocksQuery();
  const [stocks, setstocks] = useState(stockList?.body);
  if(isFetching) return <Loader />
  console.log(stocks);
  



  
   
  return (
   <>
   <Col className="coin-heading-container">
    <div className="nifty-logo-container">
    
        <Title level={2} className="coin-name">
                Current IPO Issued
        </Title>
        </div>
        <p>
        The Nifty index was launched on April 22, 1996, with a base value of 1,000 counted from November 3, 1995.
         Here you can check the prices, value and much more..
         
        </p>
    </Col>

   <Row gutter={[32,32]} className="crypto-card-container">
   {stocks?.map((stock)=> (
       <Col xs={24} sm={12} lg={6} className="crypto-card" key={stock.id}>
           
               <Card
                   title={`${stock.companyName}`}
                   //extra={<img className='crypto-image' src={stock.iconUrl} />}
                   hoverable
               >
                   <p>Symbol: {(stock.symbol)}</p>
                   <p>Number of shares Bid: {millify(stock.noOfshareBid)}</p>
                   <p>Start Date: {(stock.issueStartDate)}</p>
                   <p>End Date: {(stock.issueEndDate)}</p>
                   <p>Status: {(stock.status)}</p>
               
               </Card>
          
   </Col>
   


   ))}
   </Row>
   

   </>
  )
}


export default CurrentIPO