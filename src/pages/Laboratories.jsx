import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getUserAllLaboratories } from '../redux/actions/laboratory.js';
import Container from '../components/Container.jsx';
import { Spin, Table } from 'antd';
import { render } from 'react-dom';
import { useTranslation } from "react-i18next";


const Wrapper = styled.div`
  margin-top: 30px;
`;

const columns = [
  {
    title: 'No.',
    key: '_id',
    width: 60,
    render: (text, record, index) => {
      return index + 1;
    },
  },
  {
    title: 'Sarlavha',
    key: 'title',
    render: (text, record, index) => {
      return <Link to={`/laboratories/info/${record['_id']}`}>{record.title}</Link>;
    },
  },
  {
    title: 'Kurs',
    key: 'courseId',
    render: (text, record, index) => {
      return `${record.courseId}-kurs`;
    },
  },
];

const Laboratories = () => {
  const dispatch = useDispatch();
  const { userAllLaboratories, loading } = useSelector(state => state.laboratory);
  const [searchParams, setSearchParams] = useSearchParams();
  const subjectId = searchParams.get('id');
  const subjectName = searchParams.get('name');

  useEffect(() => {
    dispatch(getUserAllLaboratories(subjectId));
  }, [subjectId]);


  return (
    <Container>
      <Wrapper>
        {
          loading.userAllLaboratories ?
            <Spin size="large" /> :
            <div>
              <h1>{subjectName}</h1>
              <Table columns={columns} dataSource={userAllLaboratories} />
            </div>
        }
      </Wrapper>
    </Container>
  );
};

export default Laboratories;