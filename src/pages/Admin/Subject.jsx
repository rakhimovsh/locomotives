import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Input, Modal, Table, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { createSubject, getSubjects, updateSubject } from '../../redux/actions/subject';
import SubjectsTableColumns from '../../components/SubjectsTableColumns';

import { PlusOutlined, EditOutlined } from '@ant-design/icons';


const { Search } = Input;
const { Item } = Form;

const SubjectTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;
const SubjectBody = styled.div`
`;


const Subject = () => {
  const [searchValue, setSearchValue] = useState('');
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isSubjectUpdated, setIsSubjectUpdated] = useState(false);
  const [subjectToEdit, setSubjectToEdit] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const { i18n } = useTranslation();
  const { courseId } = useParams();
  const [form] = Form.useForm();
  const [updateForm] = Form.useForm();
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const { loading, subjects, totalPages } = useSelector(state => state.subject);


  useEffect(() => {
    dispatch(getSubjects(searchValue, courseId, currentPage));
  }, [searchValue, courseId, isSubjectUpdated, i18n.language]);

  const onFinish = (values) => {
    values.course_id = courseId;
    dispatch(createSubject(values));
    setAddModalOpen(false);
    setIsSubjectUpdated(prev => !prev);
    form.resetFields();
  };

  const columns = SubjectsTableColumns(setIsSubjectUpdated, setIsUpdateModalOpen, setSubjectToEdit, navigate);


  const onUpdateFinish = (values) => {
    dispatch(updateSubject(subjectToEdit['_id'], values));
    setIsSubjectUpdated(prev => !prev);
    setIsUpdateModalOpen(false);
  };
  useEffect(() => {
    if (subjectToEdit) {
      updateForm.setFieldsValue(subjectToEdit);
    }
  }, [subjectToEdit]);


  return (
    <>
      <SubjectTop>
        <Search style={{ width: '50%' }} placeholder="Fan nomi bo'yicha izlash" onSearch={setSearchValue} enterButton />

        <Button type="primary" onClick={() => setAddModalOpen(true)}>Qo`shish</Button>

      </SubjectTop>
      <SubjectBody>
        <Table
          size="small"
          rowKey="_id"
          loading={loading.getSubjects}
          bordered={true}
          dataSource={subjects}
          columns={columns}
          pagination={{
            pageSize: 10,
            total: totalPages,
            onChange: (page) => setCurrentPage(page),
          }}
        />
        <Modal
          title="Fan qo'shish"
          open={addModalOpen}
          footer={null}
          onCancel={() => {
            setAddModalOpen(false);
            form.resetFields();
          }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}>
            <Item name="name" label="Fan nomi"
                  rules={[{ required: true, message: 'Maydon bo\'sh bo\'lishi mumkin emas' }]}>
              <Input />
            </Item>
            <Item>
              <Button htmlType="submit" type="primary" icon={<PlusOutlined />}>Qo'shish</Button>
            </Item>
          </Form>
        </Modal>
        <Modal
          title="Fan tahrirlash"
          open={isUpdateModalOpen}
          footer={null}
          onCancel={() => setIsUpdateModalOpen(false)}
        >
          <Form
            form={updateForm}
            layout="vertical"
            onFinish={onUpdateFinish}
          >
            <Item name="name" label="Fan nomi"
                  rules={[{ required: true, message: 'Maydon bo\'sh bo\'lishi mumkin emas' }]}>
              <Input />
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" icon={<EditOutlined />}>Tahrirlash</Button>
            </Item>
          </Form>
        </Modal>
      </SubjectBody>
    </>
  );
};

export default Subject;