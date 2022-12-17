import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Select, Table } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LaboratoriesColumn from '../../components/LaboratoriesColumn.jsx';
import { getAllLaboratories } from '../../redux/actions/laboratory.js';

const Title = styled.h1`
  margin: 0 0 20px;
  text-align: center;
  font-size: 20px;
`;


const Laboratories = () => {
  const dispatch = useDispatch();
  const { subjectId } = useParams();
  const { allLaboratories, loading } = useSelector(state => state.laboratory);
  const [page, setPages] = useState(1);


  const columns = LaboratoriesColumn(page);

  useEffect(() => {
    dispatch(getAllLaboratories(subjectId));
  }, [subjectId]);


  return (
    <>
      <Title>Laboratoriya ishlari</Title>

      <Table loading={loading.getLaboratories}
             columns={columns}
             dataSource={allLaboratories}
             pagination={{
               defaultCurrent: 1,
               onChange: (evt) => {
                 setPages(evt);
               },
             }} />
    </>
  );
};

export default Laboratories;