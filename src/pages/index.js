import React, { useState } from "react";
import millify from "millify";
import { Typography, Statistic, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import CryptoCurrencies from "../pages/cryptoCurrencies";
import News from "../pages/news";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const response = data?.data;
  console.log(response);

  const [globalStats, setGlobalStats] = useState([]);

  if (isFetching) {
    return "Loading...";
  } else {
    setGlobalStats(response);
  }

  const {
    markets,
    total_volume,
    total_market_cap,
    ongoing_icos,
    active_cryptocurrencies,
  } = globalStats;
  const total_v = total_volume?.btc;
  const total_mcap = total_market_cap?.btc;

  return (
    <>
      <div className="comp_body">
        <Title level={2} className="heading">
          Global Crypto Stats
        </Title>
        <Row>
          <Col span={12}>
            <Statistic
              title="Total Cryptocurrencies"
              value={active_cryptocurrencies}
            />
          </Col>
          <Col span={12}>
            <Statistic title="Total Exchanges" value={millify(markets)} />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Market Cap"
              value={millify(total_mcap, { precision: 2 })}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total 24h Volume"
              value={millify(total_v, { precision: 2 })}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Markets"
              value={millify(ongoing_icos, {
                units: ["k"],
              })}
            />
          </Col>
        </Row>
        <div className="home-heading-container">
          <Title level={2} className="home-title">
            Top 10 Cryptocurrencies in the World
          </Title>
          <Title level={3} className="show-more">
            <Link to="/cryptocurrencies">Show more</Link>
          </Title>
        </div>
        <CryptoCurrencies simplified />
        <div className="home-heading-container">
          <Title level={2} className="home-title">
            Latest Cryptocurrency News
          </Title>
          <Title level={3} className="show-more">
            <Link to="/news">Show more</Link>
          </Title>
        </div>
        <News simplified />
      </div>
    </>
  );
};

export default Homepage;
export { default as Exchanges } from "./exchanges";
export { default as News } from "./news";
export { default as CryptoDetails } from "./cryptoDetails";
export { default as CryptoCurrencies } from "./cryptoCurrencies";
