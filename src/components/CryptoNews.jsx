import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';


import { useGetStockNewsQuery } from '../services/stockNewsApi';
import Loader from './Loader';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

const CryptoNews = ({ simplified }) => {
 
    
  const { data: stockNews } = useGetStockNewsQuery({ newsCategory:'Cryptocurrencies', count: simplified ? 3 : 24 });
  if(!stockNews?.value) return <Loader />
 
  return (
      <Row gutter={[24,24]}>
            {stockNews.value.map((news,i) =>(
                <Col xs={24} sm={12} lg={8} key={i} >
                    <Card hoverable className="news-card">
                        <a href={news.url} targer="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.name}</Title>
                                <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                            </div>
                            <p>
                                {news.description>100
                                    ? `${news.description.substring(0, 100)}...`
                                    : news.description
                                }
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt=""/>
                                    <Text className="provider-name">{news.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>

                            
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
      </Row>
    
  )
}

export default CryptoNews;