import React, { useState, useEffect } from "react";
import millify from "millify";
import { Row, Card, Col, Input } from "antd";
import { Link } from "react-router-dom";
import { useGetCoinsQuery } from "../services/coinsApi";

const CryptoCurrencies = () => {
  // const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCoinsQuery();
  const coinsList = data?.data;
  // console.log(coinsList);

  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = coinsList.filter((coin) =>
      coin.name.includes(searchTerm)
    );
    setCoins(filteredData);
    if (!filteredData) {
      setCoins("No data Found");
    }
  }, [coinsList, searchTerm]);

  if (isFetching) return "Loading...";

  return (
    <>
      <div className="search-crypto">
        <Input
          placeholder="Search Cryptocu... (Search in Caps)"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Row gutter={[32, 32]} className="crypto-card-data">
        {coins?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img className="crypto-image" src={currency.symbol} alt=" " />
                }
                hoverable
              >
                <p>Price: {millify(currency.price_usd)}</p>
                <p>Market Cap: {millify(currency.market_cap_usd)}</p>
                <p>Daily change: {millify(currency.percent_change_24h)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CryptoCurrencies;
