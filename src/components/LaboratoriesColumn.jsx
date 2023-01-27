import { Button, Popconfirm, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React from 'react';
import { deleteLaboratory } from '../redux/actions/laboratory';
import { createSearchParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";


export default function (page, navigate, dispatch) {
  const {t} = useTranslation()

  return [
    {
      title: 'No.',
      key: '_id',
      width: 50,
      render: (text, record, index) => (page - 1) * 10 + index + 1,
    },
    {
      title: t("labsInfo.heading"),
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: t("labsInfo.subject"),
      dataIndex: 'subjectName',
      key: 'subjectId',
    },
    {
      title: t("labsInfo.course"),
      key: 'courseId',
      render: (text) => `${text.courseId}-${t("labsInfo.course").toLocaleLowerCase()}`,
    },
    {
      title: t("labsInfo.actions"),
      key: 'action',
      render: (_, record) => {
        const confirmDelete = () => {
          dispatch(deleteLaboratory(record['_id']));
        };
        const handleNavigate = () => {
          navigate({
            pathname: '/panel/laboratory/add',
            search: `?${createSearchParams({
              subjectId: record.subjectId,
              laboratoryId: record['_id'],
            })}`,
          });
        };
        return (
          <Space size="middle">
            <Button type="primary" icon={<EditOutlined />} ghost
                    onClick={handleNavigate}></Button>
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