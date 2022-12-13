import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Search from 'antd/lib/input/Search';
import { Button, Form, message, Modal, Table, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

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
  const [isDeleted, setIsDeleted] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [singleTeacherInfo, setSingleTeacherInfo] = useState('');
  const [isAddTeacherModalOpen, setIsAddTeacherOpen] = useState(false);
  const dispatch = useDispatch();
  const { loading, allTeachers, totalPages, updatedTeacher, error } = useSelector(state => state.teacher);
  const { loading: AuthLoading, error: AuthError, data } = useSelector(state => state.auth);
  const { i18n } = useTranslation();
  const columns = TeacherColumns(setIsDeleted, setIsInfoModalOpen, currentPage, setSingleTeacherInfo);


  useEffect(() => {
    dispatch(getAllTeachers(+currentPage, searchValue));
  }, [isDeleted, i18n.language, currentPage, updatedTeacher, searchValue]);


  const handleAddFrom = (value) => {
    dispatch(registerTeacher(value));
  };

  useEffect(() => {
    if (AuthLoading.register) {
      setIsAddTeacherOpen(false);
    }
    if (data.registeredUser) {
      message.success('O`qituchvi yaratildi!', 5);
    }
  }, [AuthLoading.register, data.registeredUser]);
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
        <Button type="primary" size="large" onClick={() => setIsAddTeacherOpen(true)}>Qo`shish</Button>
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
      <Modal
        title="O`qituvchi qo`shish"
        open={isAddTeacherModalOpen} footer={null}
        onCancel={() => setIsAddTeacherOpen(false)}
      >
        <Form layout="vertical" onFinish={handleAddFrom} autoComplete="off">
          <Item label="F.I.Sh" name="fullName" rules={[{ required: true, message: 'Maydon to`ldirilishi shart!' }]}
                labelAlign="left">
            <Input />
          </Item>
          <Item label="Login" name="login" rules={[{ required: true, message: 'Maydon to`ldirilishi shart!' }]}
                labelAlign="left">
            <Input />
          </Item>
          <Item label="Parol" name="password" rules={[{ required: true, message: 'Maydon to`ldirilishi shart!' }]}
                labelAlign="left">
            <Input />
          </Item>
          <Item>
            <Button loading={AuthLoading.register} type="primary" htmlType="submit">Qo`shish</Button>
          </Item>
        </Form>
      </Modal>
    </Wrapper>
  )
    ;
};

export default Teachers;