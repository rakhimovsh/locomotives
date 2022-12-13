import { Button, Popconfirm, Space } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { deleteSubject } from '../redux/actions/subject';


const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default function (setIsSubjectUpdate, setModalOpen, setSubject, navigate) {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.subject);
  return [
    {
      title: 'Fan nomi',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Kurs',
      dataIndex: 'course_id',
      key: 'course_id',
      render: (_, record) => {
        return `${record.course_id} - kurs`;
      },
    },
    {
      title: 'Ma\'ruza',
      width: '150px',
      render: (_, record) => {
        const handleClick = () => {
          navigate({
            pathname: '/panel/subject/lecture/info',
            search: `?${createSearchParams({ id: record['_id'], name: record.name })}`,
          });
        };
        return <BtnWrapper><Button icon={<PlusOutlined />} onClick={handleClick}></Button></BtnWrapper>;
      },
    },
    {
      title: 'Amaliyot',
      width: '150px',
      render: (_, record) => {
        const handleClick = () => {
          navigate({
            pathname: '/panel/subject/practice/add',
            search: `?${createSearchParams({ id: record['_id'], name: record.name })}`,
          });
        };
        return <BtnWrapper><Button icon={<PlusOutlined />} onClick={handleClick}></Button></BtnWrapper>;
      },
    },
    {
      title: 'Labaratoriya',
      width: '150px',
      render: (_, record) => {
        const handleClick = () => {
          navigate({
            pathname: '/panel/subject/laboratory/add',
            search: `?${createSearchParams({ id: record['_id'], name: record.name })}`,
          });
        };
        return <BtnWrapper><Button icon={<PlusOutlined />} onClick={handleClick}></Button></BtnWrapper>;
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
          setIsSubjectUpdate(prev => !prev);
        };

        const handleEditBtn = () => {
          setModalOpen(true);
          setSubject(record);
        };
        return (
          <Space size="middle">
            <Button icon={<EditOutlined />} onClick={handleEditBtn}></Button>
            <Popconfirm placement="leftTop" title="O`chirishni tasdiqlaysizmi?"
                        onConfirm={confirm} okText="Ha"
                        cancelText="Yo`q">
              <Button loading={loading.deleteSubject} type="danger" icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </Space>
        );
      },
      width: '130px',
    },
  ];
}