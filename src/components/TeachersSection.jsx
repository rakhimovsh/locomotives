import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Search from 'antd/es/input/Search';
import { Avatar, Image, List, Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Container from './Container';
import { getUserAllTeachers } from '../redux/actions/teacher.js';
import { getTeacherImage } from '../utils/api.js';
import { Link } from 'react-router-dom';


const Section = styled.section`
  padding: 70px 0;
`;

const CustomSearch = styled(Search)`
  max-width: 70%;
  margin-bottom: 50px;

  & .ant-btn {
    background-color: var(--main-bg-color);
    border-color: var(--main-bg-color);
  }

  @media only screen and (max-width: 425px) {
    max-width: 90%;
  }
`;
const TitleLink = styled(Link)`
  font-size: 20px;
`;
const DescriptionWrapper = styled.div`
  & p {
    margin: 0 0 10px;
    font-size: 16px;
    font-weight: 500;
    color: black;
  }

  & span {
    color: dimgray;
  }
`;
const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

const Description = (teacher) => (
  <DescriptionWrapper>
    <p>Lavozim: <span>{teacher.position}</span></p>
    <p>Email: <span>{teacher.email}</span></p>
  </DescriptionWrapper>
);

const TeachersSection = () => {
  const dispatch = useDispatch();
  const { user, userLoading } = useSelector(state => state.teacher);
  const [page, setPage] = useState(1);
  const onSearch = (value) => console.log(value);

  useEffect(() => {
    dispatch(getUserAllTeachers(page));
  }, [page]);
  return (
    <Section>
      <Container>
        <CustomSearch
          placeholder="Ism bo`yicha izlash"
          allowClear
          enterButton="Izlash"
          size="large"
          onSearch={onSearch}
        />
        <List
          itemLayout="horizontal"
          loading={userLoading.allTeachers}
          dataSource={user.allTeachers}
          renderItem={(item) => {
            return <List.Item>
              <List.Item.Meta
                avatar={<Image width={200} src={getTeacherImage(item.picture)}
                               style={{ boxShadow: ' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }} />}
                title={<TitleLink
                  to={`/teacher/info/${item['_id']}`}>{item.lastName + ' ' + item.firstName + ' ' + item.midName}</TitleLink>}
                description={Description(item)}
              />
            </List.Item>;
          }}
        />
        <PaginationWrapper><Pagination defaultCurrent={1} total={user.allPages}
                                       onChange={(page) => setPage(page)} /></PaginationWrapper>
      </Container>
    </Section>
  );
};

export default TeachersSection;