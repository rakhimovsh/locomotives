import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Select, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import LaboratoriesColumn from '../../components/LaboratoriesColumn.jsx';
import { getAllLaboratories } from '../../redux/actions/laboratory.js';
import { getSubjects } from '../../redux/actions/subject.js';

const Title = styled.h1`
  margin: 0 0 20px;
  text-align: center;
  font-size: 20px;
`;


const Laboratories = () => {
  const dispatch = useDispatch();
  const { allLaboratories, loading } = useSelector(state => state.laboratory);
  const columns = LaboratoriesColumn();

  useEffect(() => {

    dispatch(getAllLaboratories(subjectId));

  }, []);
  useEffect(() => {
    dispatch(getSubjects());
  });


  return (
    <>
      <Title>Laboratoriya ishlari</Title>

      <Table loading={loading.getLaboratories} columns={columns} dataSource={allLaboratories} />
    </>
  );
};

export default Laboratories;