import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Search from 'antd/lib/input/Search';
import { Button, Form, message, Modal, Table, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { getAllTeachers } from '../../redux/actions/teacher';
import TeacherColumns from '../../components/TeacherColumns';
import TeacherInfoModal from '../../components/TeacherInfoModal';
import { registerTeacher } from '../../redux/actions/auth';


const { Item } = Form;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Teachers = () => {
  const navigate = useNavigate();
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [singleTeacherInfo, setSingleTeacherInfo] = useState('');
  const dispatch = useDispatch();
  const { loading, allTeachers, totalPages, updatedTeacher, deletedTeacher } = useSelector(state => state.teacher);
  const columns = TeacherColumns(setIsInfoModalOpen, currentPage, setSingleTeacherInfo, dispatch, navigate);


  useEffect(() => {
    dispatch(getAllTeachers(+currentPage, searchValue));
  }, [deletedTeacher, currentPage, updatedTeacher, searchValue]);

  return (
    <Wrapper>
      <Header>
        <Search
          style={{ width: '300px' }}
          placeholder="Ism bo`yicha izlash"
          allowClear
          enterButton="Izlash"
          size="large"
          onSearch={setSearchValue}
        />
        <Button type="primary" size="large" onClick={() => navigate('/panel/teachers/add2')}>Qo`shish</Button>
      </Header>
      <Table
        style={{ width: '100%' }}
        columns={columns}
        dataSource={allTeachers}
        loading={loading.getAllTeacher}
        rowKey="_id"
        bordered={true}
        size="small"
        pagination={{
          pageSize: 10,
          total: totalPages,
          onChange: (page) => setCurrentPage(page),
        }}
      />
      <TeacherInfoModal isModalOpen={isInfoModalOpen} setIsModalOpen={setIsInfoModalOpen}
                        singleTeacherInfo={singleTeacherInfo} />
    </Wrapper>
  )
    ;
};

export default Teachers;