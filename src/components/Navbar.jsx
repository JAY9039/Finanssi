import React from "react";
import { Button, Menu, Typography, Avatar, Divider } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  DollarTwoTone,
  BulbOutlined,
  FundTwoTone,
  InfoCircleTwoTone,
  HomeTwoTone,
  FundOutlined,
  MenuOutlined,
  FallOutlined,
  RiseOutlined,
  MonitorOutlined,
  StockOutlined,
  PhoneTwoTone,
  BookOutlined
} from "@ant-design/icons";
import icon from "../images/stock.png";
const { SubMenu } = Menu;
const Navbar = () => {
  const [mode, setMode] = React.useState("inline");

  const changeMode = (value) => {
    setMode(value ? "vertical" : "inline");
  };
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size={64} shape="square" />
        <Typography.Title level={2} className="logo">
          <Link to="/">FINANSSI</Link>
        </Typography.Title>
      </div>
     
      <Divider type="vertical" />

      <Menu
        style={{ width: 320 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={mode}
        theme="dark"
      >
        <Menu.Item icon={<HomeTwoTone />}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <SubMenu key="sub1" icon={<DollarTwoTone />} title="Cryptocurencies">
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Top Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/details">Excahnges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/cryptonews">Crypto News</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<FundTwoTone />} title="Stocks">
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/currentIPO">Current IPO Issued</Link>
          </Menu.Item>

          <Menu.Item icon={<RiseOutlined />}>
            <Link to="/topgainers">Top Gainers</Link>
          </Menu.Item>
          <Menu.Item icon={<FallOutlined />}>
            <Link to="/toplosers">Top Losers</Link>
          </Menu.Item>
          <Menu.Item icon={<MonitorOutlined />}>
            <Link to="/near52weekHigh">Near 52 week high</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/niftyFifty">Nifty Fifty companies</Link>
          </Menu.Item>
          
          <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">Stock News</Link>
          </Menu.Item>

          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">Stock News</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item icon={<BookOutlined /> }>
          <Link to="/knowledge">Knowledge</Link>
        </Menu.Item>
        <Menu.Item icon={<InfoCircleTwoTone />}>
          <Link to="/aboutus">About Us</Link>
        </Menu.Item>
        <Menu.Item icon={<PhoneTwoTone />}>
          <Link to="/contactus">Contact Us</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
