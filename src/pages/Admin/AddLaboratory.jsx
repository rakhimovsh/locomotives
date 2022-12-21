import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form, Input } from 'antd';
import styled from 'styled-components';

const { Item } = Form;

const Wrapper = styled.div`
  margin-top: 25px;
`;

const AddLaboratory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const subjectId = searchParams.get('subjectId');
  const laboratoryId = searchParams.get('laboratoryId');
  return (
    <Wrapper>
      <Form
        layout="vertical"
      >
        <Item name="title" label="Sarlavha" rules={[{ required: true, message: 'Maydon to\'ldirilishi shart' }]}>
          <Input placeholder="Sarlavha..." />
        </Item>
      </Form>
    </Wrapper>
  );
};

export default AddLaboratory;