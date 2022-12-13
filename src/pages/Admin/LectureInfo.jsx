import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Table } from 'antd';
import LecturesInfoColumns from '../../components/LecturesInfoColumns';


const data = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const LectureInfo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const subjectName = searchParams.get('name');
  const subjectId = searchParams.get('id');
  const columns = LecturesInfoColumns();
  return (
    <>
      <h2>Ma'ruza: {subjectName}</h2>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default LectureInfo;