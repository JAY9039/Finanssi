import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Typography, Avatar } from "antd";
import { useGetNiftyStockQuery } from "../services/stockApi";
import Loader from "./Loader";
import axios from "axios";
import { render } from "@testing-library/react";
import icon from "../images/Nifty.jpg";
const { Title, Text } = Typography;

const NiftyFifty = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data: niftyStocks, isFetching } = useGetNiftyStockQuery(count);
  const [nifty, setNifty] = useState(niftyStocks?.body?.data);
  //console.log(nifty);
  //console.log("This is nifty file");

  //const {data , isFetching} = useGetNiftyStockQuery();
  //niftyStocks?.body?.data
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setNifty(niftyStocks?.body?.data);

    const filteredData = niftyStocks?.body?.data.filter((item) =>
      item.symbol.toLowerCase().includes(searchTerm)
    );

    setNifty(filteredData);
  }, [niftyStocks, searchTerm]);

  if (isFetching) {
    return <Loader />;
  }
  console.log(nifty);

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Stocks"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}
      <Col className="coin-heading-container">
        <div className="nifty-logo-container">
          <Title level={2} className="coin-name">
            Nifty Fifty Companies
          </Title>
        </div>
        <p>
          The Nifty index was launched on April 22, 1996, with a base value of
          1,000 counted from November 3, 1995. Here you can check the prices,
          value and much more..
        </p>
        <p>
          The Nifty 50 refers to the fifty most popular large-cap stocks that
          traded at high valuations in the 1960s and 1970s. They included
          household names such as Xerox (XRX), IBM, Polaroid and Coca-Cola (KO).
          Due to their proven growth records and continual increases in
          dividends, the Nifty Fifty were viewed as "one-decision" picks:
          investors were told to buy and never sell. 1 Many Nifty 50 stocks
          sported price-to-earnings (P/E) ratios as high as 100 times earnings.
          They propelled the bull market of the early 1970s, only to come
          crashing down in the 1973-74 bear market. 1 2 That period was marked
          by political scandal and rising oil prices and interest rates. In
          1996, the Nifty 50 gained an additional meaning in the financial
          industry. It refers to the NIFTY 50 Index on the National Stock
          Exchange of India.
        </p>
      </Col>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {nifty?.map((stock) => (
          <Col
            xs={28}
            sm={18}
            lg={12}
            className="crypto-card"
            key={stock.identifier}
          >
            <Link
              key={stock.identifier}
              to={`/niftydetails/${stock.identifier}`}
            >
              <Card
                title={`${stock.symbol}`}
                //extra={<img className='crypto-image' src={stock.iconUrl} />}
                hoverable
              >
                <p>Identifier: {stock.identifier}</p>
                <p>Opening Price: {millify(stock.open)}</p>

                <p>Daily High: {millify(stock.dayHigh)}</p>
                <p>Daily Low: {millify(stock.dayLow)}</p>
                <p>30 Day Change: {millify(stock.perChange30d)}%</p>
                <p>1 Year Change: {millify(stock.perChange365d)}%</p>
                <p>
                  Total Traded Value(Shares): {millify(stock.totalTradedValue)}
                </p>
                <p>Total Traded Volume: {millify(stock.totalTradedVolume)}</p>
                <p>Lowest price in 1 Year:{millify(stock.yearLow)}</p>
                <p>Highest price in 1 Year:{millify(stock.yearHigh)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default NiftyFifty;
