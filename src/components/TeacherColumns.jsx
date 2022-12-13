import React, { useEffect } from 'react';
import { Button, message, Popconfirm, Space } from 'antd';
import { DeleteOutlined, EditOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTeacher } from '../redux/actions/teacher';


export default function (setIsDeleted, setIsInfoModalOpen, page, singleTeacherInfo) {
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.teacher);


  useEffect(() => {
    if (error) {
      if (error.updateTeacher === 'serverError') message.warn('Serverda xatolarik yuz berdi. \n Keyinroq urunib ko`ring.');
      if (error.updateTeacher === 'clientError') message.warn('Ma\'lumot o`chirishning imkoni bo`lmadi');
    }
  }, [error]);
  return [
    {
      title: 'No.',
      key: 'index',
      render: (text, record, index) => (page - 1) * 10 + index + 1,
    },
    {
      title: 'Ism',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Familiya',
      dataIndex: 'lastName',
      key: 'firstName',
    },
    {
      title: 'Lavozim',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Tel. raqam',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Boshqarish',
      key: 'action',
      width: '150px',
      render: (_, record) => {
        const confirm = () => {
          dispatch(deleteTeacher(record['_id']));
          message.success('Hodim o`chirildi');
          setIsDeleted(prev => !prev);
        };
        return (
          <Space size="large">
            <Button icon={<InfoCircleOutlined />} onClick={() => {
              setIsInfoModalOpen(true);
              singleTeacherInfo(record);
            }}></Button>
            <Popconfirm placement="leftTop" title="O`chirishni tasdiqlaysizmi?" onConfirm={confirm} okText="Ha"
                        cancelText="Yo`q">
              <Button danger icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
}