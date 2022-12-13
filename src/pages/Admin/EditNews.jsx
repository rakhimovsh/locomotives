import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Button, Form, Image, Input, Spin, Upload } from 'antd';

import { getSingleNews, updateNews } from '../../redux/actions/news';
import CkEditor from '../../components/CKEditor';
import { getEditorImage } from '../../utils/api';


const { Item } = Form;

const EditorWrapper = styled.div`
  border-radius: 3px;
  border: 1px solid ${props => props.isVisible ? '#ff4d4f' : 'transparent'};
`;
const EditorError = styled.p`
  display: ${props => props.isVisible ? 'block' : 'none'};
  color: #ff4d4f;
  text-align: center;
`;

const ImageWrapper = styled.div`
  display: ${props => props.isVisible ? 'flex' : 'none'};
  flex-direction: column;
  width: 400px;
`;

const EditNews = () => {
  const { newsId } = useParams();
  const dispatch = useDispatch();
  const { loading, singleNews, updatedNews } = useSelector(state => state.news);
  const [isEditorEmpty, setIsEditorEmpty] = useState(false);
  const [uploadImage, setUploadImage] = useState(null);
  const [editorValue, setEditorValue] = useState('');
  const [isImageDeleted, setIsImageDeleted] = useState(false);

  const [form] = Form.useForm();


  useEffect(() => {
    dispatch(getSingleNews(newsId));
  }, []);
  useEffect(() => {
    if (!loading.singleNews) {
      form.setFieldsValue({ title: singleNews?.title });
    }
  }, [singleNews]);

  const handleEditorChange = (_, data) => {
    let value = data.getData();
    if (value.length) {
      setIsEditorEmpty(false);
    }
    setEditorValue(value);
  };

  const handleFinishForm = (data) => {
    if (uploadImage) data.picture = uploadImage;
    if (editorValue) data.text = editorValue;
    dispatch(updateNews(newsId, data));
  };

  return (
    <>
      {
        loading.singleNews ? <Spin /> :
          <>
            <Form layout="vertical" autoComplete="off" onFinish={handleFinishForm} form={form}>
              <Item rules={[{ required: true, message: 'Maydaon to`ldirilishi shart' }]} label="Sarlavha" name="title">
                <Input.TextArea rows={1} />
              </Item>
              <Item label="Asosiy rasm" style={{ display: isImageDeleted ? 'none' : 'block' }}>
                <ImageWrapper isVisible={true}>
                  <Image src={getEditorImage(singleNews?.picture)} width={400} />
                  <Button icon={<DeleteOutlined />} type="primary" danger htmlType="button"
                          onClick={() => setIsImageDeleted(true)}>O'chirish</Button>
                </ImageWrapper>
              </Item>
              <Item label="Rasm yuklash" style={{ display: !isImageDeleted ? 'none' : 'block' }}>
                <Upload
                  listType="picture-card"
                  maxCount="1"
                  showUploadList={false}
                  beforeUpload={file => {
                    setUploadImage(file);
                    // Prevent upload
                    return false;
                  }}>
                  {uploadImage ? '' : <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>}
                </Upload>
                <ImageWrapper isVisible={uploadImage}>
                  <Image src={uploadImage ? URL.createObjectURL(uploadImage) : ''} width={400} />
                  <Button icon={<DeleteOutlined />} type="primary" danger htmlType="button"
                          onClick={() => setUploadImage(null)}>O'chirish</Button>
                </ImageWrapper>
              </Item>
              <Item label="Ma`lumot qo`shish">
                <EditorWrapper isVisible={isEditorEmpty}>
                  <CkEditor handleChange={handleEditorChange} defaultValue={singleNews.text} />
                </EditorWrapper>
                <EditorError isVisible={isEditorEmpty}>Maydon to`ldirilishi shart</EditorError>
              </Item>
              <Item>
                <Button type="primary" icon={<PlusOutlined />} htmlType="submit">Yangilash</Button>
              </Item>
            </Form>
          </>
      }
    </>
  );
};

export default EditNews;