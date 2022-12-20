import { Button, Popconfirm, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React from 'react';
import { deleteLaboratory } from '../redux/actions/laboratory';

export default function (page, navigate, dispatch) {
  return [
    {
      title: 'No.',
      key: '_id',
      width: 50,
      render: (text, record, index) => (page - 1) * 10 + index + 1,
    },
    {
      title: 'Sarlavha',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Fan',
      dataIndex: 'subjectName',
      key: 'subjectId',
    },
    {
      title: 'Kurs',
      key: 'courseId',
      render: (text) => `${text.courseId}-kurs`,
    },
    {
      title: 'Amallar',
      key: 'action',
      render: (_, record) => {
        const confirmDelete = () => {
          dispatch(deleteLaboratory(record['_id']));
        };
        return (
          <Space size="middle">
            <Button type="primary" icon={<EditOutlined />} ghost
                    onClick={() => navigate(`/panel/laboratory/add/${record['_id']}`)}></Button>
            <Popconfirm onConfirm={confirmDelete} placement="leftTop" title="O`chirishni tasdiqlaysizmi?" okText="Ha"
                        cancelText="Yo`q">
              <Button type="primary" danger ghost icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </Space>
        );
      },
      width: '130px',
    },
  ];
}