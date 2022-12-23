import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getUserAllLaboratories } from '../redux/actions/laboratory.js';
import Container from '../components/Container.jsx';
import { Spin, Table } from 'antd';

const Wrapper = styled.div`
  margin-top: 30px;
`;

const Laboratories = () => {
  const dispatch = useDispatch();
  const { userAllLaboratories, loading } = useSelector(state => state.laboratory);
  const { subjectId } = useParams();

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
              {
                <Table />
              }
            </div>
        }
      </Wrapper>
    </Container>
  );
};

export default Laboratories;