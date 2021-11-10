import React, { useState, useEffect } from "react";
import millify from "millify";
import { Typography, Statistic, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/api";
import axios from "axios";

const { Title } = Typography;

const Homepage = () => {
  const { isFetching } = useGetCryptosQuery();

  // Data Fetch States Variables
  const [globalStats, setGlobalStats] = useState();
  const [cryptoIntheWorld, setCryptoIntheWorld] = useState();

  let options = {
    method: "GET",
    url: "https://coinlore-cryptocurrency.p.rapidapi.com/api/global/",
    headers: {
      "x-rapidapi-host": "coinlore-cryptocurrency.p.rapidapi.com",
      "x-rapidapi-key": "884f46e107msh8e6d0969eccbb16p11a973jsn639998c9fab8",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        const globalStats = response.data[0];
        setGlobalStats(globalStats);
        console.log(globalStats);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (isFetching) return "Loading...";
  const {
    active_markets,
    total_volume,
    total_mcap,
    avg_change_percent,
    coins_count,
  } = globalStats;

  return (
    <>
      <div className="comp_body">
        <Title level={2} className="heading">
          Global Crypto Stats
        </Title>
        <Row>
          <Col span={12}>
            <Statistic title="Total Cryptocurrencies" value={coins_count} />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Exchanges"
              value={millify(avg_change_percent + 213232, {
                precision: 2,
                units: ["k"],
              })}
            />
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
              value={millify(total_volume, { precision: 2 })}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Markets"
              value={millify(active_markets, { precision: 2 })}
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
      </div>
    </>
  );
};

export default Homepage;
export { default as Exchanges } from "./exchanges";
export { default as News } from "./news";
export { default as CryptoDetails } from "./cryptoDetails";
export { default as CryptoCurrencies } from "./cryptoCurrencies";
