import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Col, Image, List, Row, Skeleton } from "antd";
import styled from "styled-components";
import parse from "html-react-parser";
import Container from "../components/Container.jsx";
import { getUserSingleTeacher } from "../redux/actions/teacher.js";
import { getTeacherImage } from "../utils/api.js";

const { Item } = List;

const Wrapper = styled.div`
  margin-top: 50px;

  @media screen and (max-width: 968px) {
    font-size: 18px;
    & .jTjUTQ p {
      max-width: 300px;
    }
    & .gutter-row {

      margin: 0 auto;
    }
    & .ant-image-img {
      max-width: 400px !important;
      width: 300px !important;
    }
    & .ant-image{
      max-width: 400px !important;
      width: 300px !important;
    }

  }
`;


const Title = styled.h2`
  margin: 0;
  color: #949494;

  & span {
    color: black;
    font-weight: 500;
  }
`;

const Additional = styled.div`
  margin-top: 50px;
  width: 100%;
`;

const TeacherInfo = () => {
  const { teacherId } = useParams();
  const dispatch = useDispatch();
  const { user, userLoading } = useSelector((state) => state.teacher);
  useEffect(() => {
    dispatch(getUserSingleTeacher(teacherId));
  }, [teacherId]);

  const teacher = user.singleTeacher;
  return (
    <Container>
      {userLoading.singleTeacher ? (
        <Skeleton />
      ) : (
        <Wrapper>
          <Row gutter={20}>
            <Col className="gutter-row" span={{ xs: 24, sm: 24, md: 10 }}>
              <Image width={400} src={getTeacherImage(teacher.picture)} />
            </Col>
            <Col className="gutter-row" span={{ xs: 24, sm: 24, md: 14 }}>
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
                    Lavozim: <span>{teacher.position}</span>
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
                <Item>
                  <Title>
                    Konsultatsiya vaqtlari: <span>{teacher.visit_time}</span>
                  </Title>
                </Item>
              </List>
            </Col>
          </Row>
          <Additional>{parse(teacher.additionalInfo)}</Additional>
        </Wrapper>
      )}
    </Container>
  );
};

export default TeacherInfo;
