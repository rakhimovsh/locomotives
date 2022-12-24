import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Col, Image, List, Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import Container from './Container.jsx';
import { getUserSingleTeacher } from '../redux/actions/teacher.js';
import { getTeacherImage } from '../utils/api.js';


const Wrapper = styled.div`
  margin-bottom: 40px;

  & .title {
    text-align: center;
    margin: 0;
    font-size: 35px;
  }
`;

const { Item } = List;

const Title = styled.h2`
  margin: 0;
  color: #949494;
  font-size: 30px;

  & span {
    color: black;
    font-weight: 500;
  }
`;

const TeacherSection = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.teacher);

  useEffect(() => {
    dispatch(getUserSingleTeacher('63a53e2641eab24e19c4ffad'));
  }, []);
  const teacher = user.singleTeacher;

  return (
    <>
      {
        teacher ?
          <Container>
            <Wrapper>
              <h2 className="title" style={{ margin: '30px 0' }}>Kafedra mudiri</h2>
              <Row gutter={20}>
                <Col className="gutter-row" span={10}>
                  <Image src={getTeacherImage(teacher?.picture)} width={300} />
                </Col>
                <Col className="gutter-row" span={12}>
                  <List itemLayout="horizontal">
                    <Item><Title>F.I.Sh: <span>{teacher.lastName + ' ' + teacher.firstName + ' ' + teacher.midName}</span>
                    </Title></Item>
                    <Item><Title>Email: <span>{teacher.email}</span></Title></Item>
                    <Item><Title>Tel.: <span>+998 {teacher.phone}</span></Title></Item>
                  </List>
                </Col>
              </Row>
            </Wrapper>
          </Container>
          : <></>
      }</>
  );
};

export default TeacherSection;