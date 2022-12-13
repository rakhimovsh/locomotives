import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Divider, Skeleton, Image } from 'antd';
import { CalendarOutlined, EyeOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import dayjs from 'dayjs';
import Container from '../components/Container';
import { getSingleUserNews, getUserAllNews } from '../redux/actions/news';
import { getEditorImage } from '../utils/api';

const List = styled.ul`
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  & span {
    margin-bottom: 10px;
  }

  & h3 {
    margin: 0;
  }

  & a {
    color: black;

    &:hover {
      color: blue;
    }
  }
`;
const ContentWrapper = styled.div`
  margin-bottom: 50px;

  & h2 {
    margin-bottom: 25px;
    font-weight: 700;
  }

  & img {
    margin-bottom: 40px;
  }
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 20px;

  & div {
    color: darkgray;
  }
`;

const RecentlyTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NewsInfo = () => {
  const { newsId } = useParams();
  const dispatch = useDispatch();
  const { userSingleNews, loading, userAllNews } = useSelector(state => state.news);

  useEffect(() => {
    dispatch(getSingleUserNews(newsId));
  }, [newsId]);
  useEffect(() => {
    dispatch(getUserAllNews());
  }, []);
  return (
    <Container>
      <Row gutter={30} style={{ marginTop: 25 }}>
        <Col className="gutter-row" span={17}>
          {
            loading.userSingleNews ? <Skeleton /> :
              <ContentWrapper>
                <h2>{userSingleNews.title}</h2>
                <Subtitle>
                  <div><CalendarOutlined /> {dayjs(userSingleNews.created_date).format('DD.MM.YYYY')}</div>
                  <div><EyeOutlined /> {userSingleNews.views}</div>
                </Subtitle>
                <Image src={getEditorImage(userSingleNews.picture)}
                       alt={userSingleNews.title} />
                <div>
                  {
                    parse(userSingleNews.text)
                  }
                </div>
              </ContentWrapper>
          }
        </Col>
        <Col className="gutter-row" span={7}>
          <h2>So‘nggi yangiliklar</h2>
          <List>
            {
              userAllNews?.map(news => <Item key={news['_id']}>
                <RecentlyTop>
                  <div><CalendarOutlined /> {dayjs(news.created_date).format('DD.MM.YYYY')}</div>
                  <div><EyeOutlined /> {news.views}</div>
                </RecentlyTop>
                <h3><Link to={'/news/info/' + news['_id']}>{news.title}</Link></h3>
                <Divider />
              </Item>)
            }
          </List>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsInfo;