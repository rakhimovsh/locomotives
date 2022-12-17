import { Button, Popconfirm, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React from 'react';

export default function (page) {
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
      title: 'Amallar',
      key: 'action',
      render: (_, record) => {

        return (
          <Space size="middle">
            <Button type="primary" icon={<EditOutlined />} ghost></Button>
            <Popconfirm placement="leftTop" title="O`chirishni tasdiqlaysizmi?" okText="Ha"
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