import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FieldTimeOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { Button, Popconfirm, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getEditorImage } from '../utils/api';
import { deleteNews } from '../redux/actions/news';

const NewsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  width: 300px;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  & img {
    margin-bottom: auto;
    border-radius: 5px;
  }

  & h2 {
    --max-lines: 3;

    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--max-lines);
  }
`;

const BtnCol = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  width: 100%;
`;

const AdminNewsCard = ({ singleNews }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConfirm = () => {
    dispatch(deleteNews(singleNews['_id']));
    message.info('Yangilik o`chirildi');
  };
  return (
    <NewsItem>
      <img src={getEditorImage(singleNews.picture)} alt={singleNews.title} width={360} />
      <h2>{singleNews.title}</h2>
      <span><FieldTimeOutlined /> Yaratilgan: {dayjs(singleNews.created_date).format('DD.MM.YYYY')}</span>
      <span><FieldTimeOutlined /> Yangilangan: {dayjs(singleNews.last_updated_date).format('DD.MM.YYYY')}</span>
      <span><EyeOutlined /> Ko'rilgan: {singleNews.views}</span>
      <BtnCol>
        <Button
          onClick={() => navigate('/panel/news/edit/' + singleNews['_id'])}
          icon={<EditOutlined />}
          type="primary">Taxrirlash</Button>
        <Popconfirm onConfirm={handleConfirm} title={'O\'chirishni tasdiqlaysizmim?'}>
          <Button
            icon={<DeleteOutlined />}
            type="primary"
            danger>
            O'chirish
          </Button>
        </Popconfirm>
      </BtnCol>
    </NewsItem>
  );
};

export default AdminNewsCard;