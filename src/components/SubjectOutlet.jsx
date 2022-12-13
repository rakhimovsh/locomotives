import React from 'react';
import { Button, Select, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;


const columns = [
  {
    title: 'No.',
    dataIndex: 'name',
    key: 'name',
    render: (_, record, index) => index,
  },
  {
    title: 'Mavzu nomi',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Kurs',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Amallar',
    dataIndex: 'name',
    key: 'name',
  },
];
const SubjectOutlet = ({ subjectOptions, data, setSubjectId }) => {

  // const options = subjectOptions.map(subject => {
  //   return {
  //     value: subject['_id'],
  //     label: subject?.name,
  //   };
  // });
  return (
    <>
      <Hero>
        <Select
          style={{ width: 200 }}
          showSearch
          placeholder="Fan nomi bo'yicha izlash"
          optionFilterProp="children"
          onChange={(value) => setSubjectId(value)}
          filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={subjectOptions}
        />
        <Button icon={<PlusOutlined />} type="primary">Qo'shish</Button>
      </Hero>
      <Table dataSource={data} columns={columns} />
    </>
  );
};

export default SubjectOutlet;