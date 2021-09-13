import React from "react";

import { Card, Col, Row } from "antd";

interface CardCityProps {
  cityName: string;
}

const CardCity: React.FC<CardCityProps> = ({ cityName }) => {
  return (
    <div>
      <Row>
        <Col span={12} offset={6}>
          <Card title={cityName}></Card>
        </Col>
      </Row>
    </div>
  );
};

export default CardCity;
