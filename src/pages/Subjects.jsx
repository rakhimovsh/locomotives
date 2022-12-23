import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row, Select, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../components/Container.jsx';
import { getSubjects } from '../redux/actions/subject.js';


const Wrapper = styled.div`
  padding: 20px 0;
`;

const Card = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

const Subjects = () => {
  const dispatch = useDispatch();
  const { subjects, loading } = useSelector(state => state.subject);
  const [course, setCourse] = useState(1);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSubjects('', course, page));
  }, [course, page]);

  const handleChange = (value) => {
    setCourse(value);
  };
  return (
    <Container>
      <Wrapper>
        <div>
          <Select
            defaultValue="1"
            style={{ width: 150 }}
            onChange={handleChange}
            options={[
              {
                value: '1',
                label: '1-kurs',
              },
              {
                value: '2',
                label: '2-kurs',
              },
              {
                value: '3',
                label: '3-kurs',
              },
              {
                value: '4',
                label: '4-kurs',
              },
            ]}
          />
        </div>
        {
          loading.getSubjects ?
            <Spin size="large" />
            :
            <Row gutter={20} style={{ marginTop: 35 }}>
              {
                subjects?.map(subject => (
                  <Col span={4} key={subject['_id']}>
                    <Card onClick={() => navigate(`/laboratories/${subject['_id']}`)}>
                      {subject?.name}
                    </Card>
                  </Col>
                ))
              }
            </Row>
        }
      </Wrapper>
    </Container>
  );
};

export default Subjects;