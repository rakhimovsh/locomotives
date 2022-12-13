import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Form, Image, Input, Upload } from 'antd';
import { ArrowLeftOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import CkEditor from '../../components/CKEditor';
import { createNews } from '../../redux/actions/news';

const { Item } = Form;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 25px;
`;

const EditorError = styled.p`
  display: ${props => props.isVisible ? 'block' : 'none'};
  color: #ff4d4f;
  text-align: center;
`;

const EditorWrapper = styled.div`
  border-radius: 3px;
  border: 1px solid ${props => props.isVisible ? '#ff4d4f' : 'transparent'};
`;

const ImageWrapper = styled.div`
  display: ${props => props.isVisible ? 'flex' : 'none'};
  flex-direction: column;
  width: 400px;
`;

const AddNews = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editorValue, setEditorValue] = useState('');
  const [image, setImage] = useState(null);
  const [isEditorEmpty, setIsEditorEmpty] = useState(false);


  const handleEditorChange = (_, data) => {
    let value = data.getData();
    if (value.length) {
      setIsEditorEmpty(false);
    }
    setEditorValue(value);
  };
  const handleChange = (evt) => {
    setImage(evt.target.files[0]);
  };

  const handleFinish = (values) => {
    if (editorValue) {
      dispatch(createNews(values.title, image, editorValue));
    } else {
      setIsEditorEmpty(true);
    }
  };


  return (
    <div>
      <BtnWrapper>
        <Button type="primary" icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>Ortga</Button>
      </BtnWrapper>
      <Form layout="vertical" autoComplete="off" onFinish={handleFinish}>
        <Item rules={[{ required: true, message: 'Maydaon to`ldirilishi shart' }]} label="Sarlavha" name="title">
          <Input.TextArea rows={1} />
        </Item>
        <Item label="Rasm yuklash">
          <Upload
            listType="picture-card"
            maxCount="1"
            showUploadList={false}
            beforeUpload={file => {
              setImage(file);
              // Prevent upload
              return false;
            }}>
            {image ? '' : <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>}
          </Upload>
          <ImageWrapper isVisible={image}>
            <Image src={image ? URL.createObjectURL(image) : ''} width={400} />
            <Button icon={<DeleteOutlined />} type="primary" danger htmlType="button"
                    onClick={() => setImage(null)}>O'chirish</Button>
          </ImageWrapper>
        </Item>
        <Item label="Ma`lumot qo`shish">
          <EditorWrapper isVisible={isEditorEmpty}>
            <CkEditor handleChange={handleEditorChange} />
          </EditorWrapper>
          <EditorError isVisible={isEditorEmpty}>Maydon to`ldirilishi shart</EditorError>
        </Item>
        <Item>
          <Button type="primary" icon={<PlusOutlined />} htmlType="submit">Qo`shish</Button>
        </Item>
      </Form>
    </div>
  );
};

export default AddNews;