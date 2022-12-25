import React from 'react';
import styled from 'styled-components';
import { Col, Divider, Row } from 'antd';
import CountUp from 'react-countup';

import Container from './Container';

const InfoSection = styled.section`
  padding: 20px 0;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h2 {
    font-size: 50px;
    margin: 0;
  }

  & p {
    margin: 0;
    font-size: 25px;
    color: var(--main-bg-color);
    font-weight: 700;
  }
  @media screen and (max-width: 768px) {
    & h2 {
      font-size: 28px;
      
    }
    & p{
      font-size: 20px;

    }
  }
`;


const Info = () => {
  return (
    <InfoSection>
      <Container>
        <Divider />
        <Row gutter={[16, 16]}>
          <Col className="gutter-row" xs={12} sm={8} md={8} lg={6} xl={6}>
            <InfoWrapper>
              <h2>
                +<CountUp end={38} />
              </h2>
              <p>O'qituvchilar</p>
            </InfoWrapper>
          </Col>
          <Col className="gutter-row" xs={12} sm={8} md={8} lg={6} xl={6}>
            <InfoWrapper>
              <h2>
                +<CountUp end={1500} />
              </h2>
              <p>Talabalar</p>
            </InfoWrapper>
          </Col>
          <Col className="gutter-row" xs={12} sm={8} md={8} lg={6} xl={6}>
            <InfoWrapper>
              <h2>
                +<CountUp end={200} />
              </h2>
              <p>Magistrlar</p>
            </InfoWrapper>
          </Col>
          <Col className="gutter-row" xs={12} sm={8} md={8} lg={6} xl={6}>
            <InfoWrapper>
              <h2>
                +<CountUp end={300} />
              </h2>
              <p>Bitiruvchilar</p>
            </InfoWrapper>
          </Col>
        </Row>
        <Divider />
      </Container>
    </InfoSection>
  );
};

export default Info;