import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Pagination } from 'antd';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import NewsCard from '../components/NewsCard';
import { getUserAllNews } from '../redux/actions/news';
import { useTranslation } from "react-i18next";


const Title = styled.h1`
  margin-top: 25px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
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

const PWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;


const News = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch();
  const { userAllNews, loading, userTotalPages } = useSelector(state => state.news);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getUserAllNews(page));
  }, [page]);
  return (
    <Container>
      <Title>{t("news.heading")}</Title>
      <CusRow gutter={[16, 20]}>
        {
          userAllNews?.map((news) => {
            return (
            <Col className="gutter-row" span={{ xs: 24, sm: 24, md: 6 }} key={news['_id']}>
              <NewsCard news={news} loading={loading.userAllNews} />
            </Col>);
          })
        }
      </CusRow>
      <PWrapper><Pagination defaultCurrent={1} total={userTotalPages} onChange={(page) => setPage(page)} /></PWrapper>
    </Container>
  );
};

export default News;