import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import NewsCard from "./NewsCard";

import Container from "./Container";
import { HomeNews } from "../redux/actions/news";

const Section = styled.section`
  padding: 50px 0;
  padding-bottom: 100px;
`;
const CusRow = styled(Row)`
  margin-bottom: 40px;
  @media screen and (max-width: 968px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 40px;
  }
`;

const NewsContainer = styled(Container)``;

const NewsTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 35px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;
const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const Button = styled.button`
  padding: 15px 60px;
  background-color: var(--main-bg-color);
  border-radius: 8px;
  border: none;
  color: var(--main-content-color);
  font-weight: 500;
  cursor: pointer;


  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 968px) {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`;

const NewsSection = () => {
  const dispatch = useDispatch();
  const { newsHomePage, loading } = useSelector((state) => state.news);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(HomeNews());
  }, []);
  return (
    <Section>
      <NewsContainer>
        <NewsTitle>Yangiliklar</NewsTitle>
        <CusRow gutter={[16, 20]}>
          {newsHomePage?.map((news) => {
            return (
              <Col
                className="gutter-row"
                span={{ xs: 24, sm: 24, md: 6 }}
                key={news["_id"]}
              >
                <NewsCard news={news} loading={loading.newsHomePage} />
              </Col>
            );
          })}
        </CusRow>
        <Button onClick={() => navigate("/news")}>Barcha yangiliklar</Button>
      </NewsContainer>
    </Section>
  );
};

export default NewsSection;
