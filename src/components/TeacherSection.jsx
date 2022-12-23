import React from 'react';
import styled from 'styled-components';
import { Col, Image, Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import Container from './Container.jsx';


const Wrapper = styled.div`
  & h2 {
    text-align: center;
    margin: 0;
    font-size: 35px;
  }
`;

const TeacherSection = () => {
  const dispatch = useDispatch()
  const {} = useSelector(state => state.teacher)
  return (
    <Container>
      <Wrapper>
        <h2>Kafedra mudiri</h2>
        <Row gutter={20}>
          <Col className="gutter-row" span={10}>
            <Image />
          </Col>
          <Col className="gutter-row" span={12}>

          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default TeacherSection;