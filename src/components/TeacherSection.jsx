import React, { useEffect } from "react";
import styled from "styled-components";
import { Col, Image, List, Row } from "antd";
import { useSelector, useDispatch } from "react-redux";

import Container from "./Container.jsx";
import { getUserSingleTeacher } from "../redux/actions/teacher.js";
import { getTeacherImage } from "../utils/api.js";

const Wrapper = styled.div`
  margin-bottom: 40px;

  & .title {
    text-align: center;
    margin: 0;
    font-size: 35px;
  }
  & .gutter-row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    & .title {
      font-size: 28px;
      
    }
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

  @media screen and (max-width: 768px) {
    font-size: 20px;
    & span {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 576px) {
    font-size: 16px;
    & span {
      font-size: 16px;
    }
  }
`;

const TeacherSection = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.teacher);

  useEffect(() => {
    dispatch(getUserSingleTeacher("63a53e2641eab24e19c4ffad"));
  }, []);
  const teacher = user.singleTeacher;

  return (
    <>
      {teacher ? (
        <Container>
          <Wrapper>
            <h2 className="title" style={{ margin: "30px 0" }}>
              Kafedra mudiri
            </h2>
            <Row gutter={20}>
              <Col className="gutter-row" span={{ xs: 24, sm: 24, md: 10 }}>
                <Image src={getTeacherImage(teacher?.picture)} width={300} />
              </Col>
              <Col className="gutter-row" span={{ xs: 24, sm: 24, md: 12 }}>
                <List itemLayout="horizontal">
                  <Item>
                    <Title>
                      F.I.Sh:{" "}
                      <span>
                        {teacher.lastName +
                          " " +
                          teacher.firstName +
                          " " +
                          teacher.midName}
                      </span>
                    </Title>
                  </Item>
                  <Item>
                    <Title>
                      Email: <span>{teacher.email}</span>
                    </Title>
                  </Item>
                  <Item>
                    <Title>
                      Tel.: <span>+998 {teacher.phone}</span>
                    </Title>
                  </Item>
                </List>
              </Col>
            </Row>
          </Wrapper>
        </Container>
      ) : (
        <>Data not found</>
      )}
    </>
  );
};

export default TeacherSection;
