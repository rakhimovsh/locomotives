import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { getUserSingleLaboratory } from '../redux/actions/laboratory.js';
import Container from '../components/Container.jsx';

const LaboratoryInfo = () => {
  const { laboratoryId } = useParams();
  const dispatch = useDispatch();
  const { userSingleLaboratory } = useSelector(state => state.laboratory);

  useEffect(() => {
    dispatch(getUserSingleLaboratory(laboratoryId));
  }, [laboratoryId]);

  return (
    <Container>
      <h1>{userSingleLaboratory?.title}</h1>
      <div>{userSingleLaboratory ? parse(userSingleLaboratory.context) : ''}</div>
    </Container>
  );
};

export default LaboratoryInfo;