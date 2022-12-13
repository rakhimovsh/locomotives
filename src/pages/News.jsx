import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Pagination } from 'antd';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import NewsCard from '../components/NewsCard';
import { getUserAllNews } from '../redux/actions/news';

const Title = styled.h1`
  margin-top: 25px;
  text-align: center
`;

const PWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;


const News = () => {
  const dispatch = useDispatch();
  const { userAllNews, loading, userTotalPages } = useSelector(state => state.news);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getUserAllNews(page));
  }, [page]);
  return (
    <Container>
      <Title>Yangiliklar</Title>
      <Row gutter={[16, 16]} style={{ marginBottom: 50 }}>
        {
          userAllNews?.map((news) => {
            return <Col className="gutter-row" span={6} key={news['_id']}>
              <NewsCard news={news} loading={loading.userAllNews} />
            </Col>;
          })
        }
      </Row>
      <PWrapper><Pagination defaultCurrent={1} total={userTotalPages} onChange={(page) => setPage(page)} /></PWrapper>
    </Container>
  );
};

export default News;