import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { InfoOutlined } from '@ant-design/icons';

import Container from './Container';

const InfoSection = styled.section`
  padding: 50px 0;
`;


const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 15px;
  border: 1px solid var(--main-bg-color);
  background: rgba(25, 25, 52, 0.1);
  cursor: pointer;
  @media only screen and (max-width: 425px) {
    padding: 15px 10px;
  }

  & svg {
    margin-bottom: 15px;
    font-size: 90px;
    color: var(--main-bg-color);
    @media only screen and (max-width: 425px) {
      font-size: 36px;
    }
  }

  & h3 {
    margin: 0;
    color: var(--main-bg-color);
    text-align: center;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Info = () => {
  return (
    <InfoSection>
      <Container>
        <Row gutter={[16, 16]}>
          <Col className="gutter-row" xs={12} sm={8} md={8} lg={6} xl={6}>
            <InfoCard>
              <InfoOutlined />
              <h3>Ma'lumot olish</h3>
            </InfoCard>
          </Col>
          <Col className="gutter-row" xs={12} sm={8} md={8} lg={6} xl={6}>
            <InfoCard>
              <InfoOutlined />
              <h3>Ma'lumot olish</h3>
            </InfoCard>
          </Col>
          <Col className="gutter-row" xs={12} sm={8} md={8} lg={6} xl={6}>
            <InfoCard>
              <InfoOutlined />
              <h3>Ma'lumot olish</h3>
            </InfoCard>
          </Col>
          <Col className="gutter-row" xs={12} sm={8} md={8} lg={6} xl={6}>
            <InfoCard>
              <InfoOutlined />
              <h3>Ma'lumot olish</h3>
            </InfoCard>
          </Col>
        </Row>
      </Container>
    </InfoSection>
  );
};

export default Info;