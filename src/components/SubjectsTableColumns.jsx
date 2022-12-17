import { Button, Popconfirm, Space } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSearchParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { deleteSubject } from '../redux/actions/subject';


const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default function (setModalOpen, setSubject, navigate) {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.subject);
  return [
    {
      title: 'Fan nomi',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => {
        return <Link to={`/panel/laboratory/${record['_id']}`}>{record.name}</Link>;
      },
    },
    {
      title: 'Kurs',
      dataIndex: 'course_id',
      key: 'course_id',
      render: (_, record) => {
        return `${record.course_id} - kurs`;
      },
    },
    // {
    //   title: 'Qo\'shimcha',
    //   width: '150px',
    //   render: (_, record) => {
    //     return <Button icon={<PlusOutlined />}></Button>;
    //   },
    // },
    {
      title: 'Amallar',
      key: 'action',
      render: (_, record) => {
        const confirm = () => {
          dispatch(deleteSubject(record['_id']));
        };

        const handleEditBtn = () => {
          setModalOpen(true);
          setSubject(record);
        };
        return (
          <Space size="middle">
            <Button type="primary" icon={<EditOutlined />} ghost onClick={handleEditBtn}></Button>
            <Popconfirm placement="leftTop" title="O`chirishni tasdiqlaysizmi?"
                        onConfirm={confirm} okText="Ha"
                        cancelText="Yo`q">
              <Button loading={loading.deleteSubject} type="primary" danger ghost icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </Space>
        );
      },
      width: '130px',
    },
  ];
}