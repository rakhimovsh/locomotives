import React from 'react';
import { Card } from 'antd';
import { ArrowRightOutlined, CalendarOutlined, EyeOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getEditorImage } from '../utils/api';

const { Meta } = Card;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & .eye {
    margin-bottom: 15px;
  }
`;
const BG = styled.div`
  width: 100%;
  height: 200px;
  background-image: url("${props => getEditorImage(props.image)}");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px 8px 0 0;
`;
const CardWrapper = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 8px;
`;


const CardDesc = (id, time, eye) => {
  return <DescWrapper>
    <span><CalendarOutlined /> {dayjs(time).format('DD.MM.YYYY')}</span>
    <span className="eye"><EyeOutlined /> {eye} </span>
    <Link to={'/news/info/' + id}>Batafsil <ArrowRightOutlined /></Link>
  </DescWrapper>;
};

const NewsCard = ({ news, loading }) => {
  return (
    <CardWrapper>
      <Card
        cover={<BG image={news?.picture}></BG>}
        loading={loading}
      >
        <Meta
          title={news?.title}
          description={CardDesc(news['_id'], news.created_date, news?.views)}
        />
      </Card>
    </CardWrapper>
  );
};

export default NewsCard;