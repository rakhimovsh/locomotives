import React, {useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Editor from '../../components/RichEditor.jsx';
import { createLaboratory } from '../../redux/actions/laboratory.js';

const { Item } = Form;

const Wrapper = styled.div`
  margin-top: 25px;
`;

const AddLaboratory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const subjectId = searchParams.get('subjectId');
  const laboratoryId = searchParams.get('laboratoryId');
  const dispatch = useDispatch();

  const [editorValue, setEditorValue] = useState('');

  const handleFinish = (value) => {
    value.context = editorValue;
    value.subject_id = subjectId
    dispatch(createLaboratory(value));
  };

  useEffect(()=>{

  }, [laboratoryId])

  return (
    <Wrapper>
      <Form
        layout="vertical"
        onFinish={handleFinish}
      >
        <Item name="title" label="Sarlavha" rules={[{ required: true, message: 'Maydon to\'ldirilishi shart' }]}>
          <Input placeholder="Sarlavha..." />
        </Item>
        <Item label="Asosiy ma'lumot" rules={[{ required: true }]}>
          <Editor setValue={setEditorValue} />
        </Item>

        <Item>
          <Button type="primary" htmlType="submit">Yuborish</Button>
        </Item>
      </Form>
    </Wrapper>
  );
};

export default AddLaboratory;