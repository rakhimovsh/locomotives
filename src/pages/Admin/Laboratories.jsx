import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Select, Table } from 'antd';
import { createSearchParams, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import LaboratoriesColumn from '../../components/LaboratoriesColumn.jsx';
import { getAllLaboratories } from '../../redux/actions/laboratory.js';

const Title = styled.h1`
  margin: 0 0 20px;
  text-align: center;
  font-size: 20px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;;
`;


const Laboratories = () => {
  const dispatch = useDispatch();
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const { allLaboratories, loading } = useSelector(state => state.laboratory);
  const [page, setPages] = useState(1);

  const columns = LaboratoriesColumn(page, navigate, dispatch);

  useEffect(() => {
    dispatch(getAllLaboratories(subjectId));
  }, [subjectId]);

  const handleNavigate = () => {
    navigate({
      pathname: '/panel/laboratory/add',
      search: `?${createSearchParams({
        subjectId: subjectId,
      })}`,
    });
  };

  return (
    <>
      <Top>
        <Title>Laboratoriya ishlari</Title>
        {
          subjectId ?
            <Button icon={<PlusOutlined />}
                    type="primary"
                    onClick={handleNavigate}
            >
              Qo'shish
            </Button> : <>  </>
        }
      </Top>

      <Table loading={loading.getLaboratories}
             columns={columns}
             dataSource={allLaboratories}
             size="small"
             bordered
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