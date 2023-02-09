import React, { useEffect } from "react";
import styled from "styled-components";
import { Col, Image, List, Row } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import Container from "./Container.jsx";
import { getUserSingleTeacher } from "../redux/actions/teacher.js";
import { getTeacherImage } from "../utils/api.js";
import NotFound from "./NotFound.jsx";

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

const tr = {
  "uz": "63e53d4ca6e91135b33588bc",
  "ru": "63e53f1ba6e91135b33588da",
  "en": "63e543c02ddec0416dddc106"
}

const TeacherSection = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.teacher);
  const {i18n, t} = useTranslation()

  useEffect(() => {
    dispatch(getUserSingleTeacher(tr[i18n.language]));
  }, []);
  const teacher = user.singleTeacher;

  return (
    <>
      {teacher ? (
        <Container>
          <Wrapper>
            <h2 className="title" style={{ margin: "30px 0" }}>
            {t("teacherHead.title")}
            </h2>
            <Row gutter={20}>
              <Col className="gutter-row" span={{ xs: 24, sm: 24, md: 10 }}>
                <Image src={getTeacherImage(teacher?.picture)} width={300} />
              </Col>
              <Col className="gutter-row" span={{ xs: 24, sm: 24, md: 12 }}>
                <List itemLayout="horizontal">
                  <Item>
                    <Title>
                      {t("teacherHead.nameInfo")}:{" "}
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
        <NotFound/>
      )}
    </>
  );
};

export default TeacherSection;
