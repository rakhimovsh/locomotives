import React, { useEffect, useState } from 'react';
import { Button, Pagination } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllNews } from '../../redux/actions/news';
import AdminNewsCard from '../../components/AdminNewsCard';


const AddBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 25px;
`;

const NewsList = styled.ul`
  margin-top: 50px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const News = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { allNews, totalPages, deletedNews, updatedNews, createdNews } = useSelector(state => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews(currentPage));
  }, [currentPage, deletedNews, updatedNews, createdNews]);

  return (
    <div>
      <AddBtnWrapper>
        <Button onClick={() => navigate('/panel/news/add')} type="primary" icon={<PlusOutlined />}>Yangilik
          qo`shish</Button>
      </AddBtnWrapper>
      <NewsList>
        {
          allNews?.map(news => <AdminNewsCard key={news['_id']} singleNews={news} />)
        }
      </NewsList>
      <Pagination defaultCurrent={currentPage} total={totalPages} onChange={(page) => setCurrentPage(page)} />
    </div>
  );
};

export default News;