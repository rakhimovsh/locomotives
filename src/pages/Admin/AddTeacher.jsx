import React, { useEffect, useState } from 'react';
import { Image, Row, Col, Form, Input, Select, Button, Modal, message } from 'antd';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';


import { PlusOutlined } from '@ant-design/icons';
import DefaultUser from '../../assets/images/default_user.png';
import CKEditor from '../../components/CKEditor';
import CropEasy from '../../components/Crop/CropeEasy';
import { addTeacher } from '../../redux/actions/teacher';

const { Item } = Form;
const { TextArea } = Input;
const { Option } = Select;

const ImgWrapper = styled.div`
  border: 0.5px #191934 solid;
  border-radius: 50%;
  overflow: hidden;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;

  & input {
    display: none !important;
  }

  & label {
    padding: 4px 15px;
    margin-top: 20px;
    background-color: #1890ff;
    color: #fff;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const InputValidation = [{ required: true, message: 'Maydon to`ldirilishi shart!' }];
const EmailInputValidation = [{ required: true, message: 'Maydon to`ldirilishi shart!' }, {
  type: 'email',
  message: 'Maydon email qoidalariga mos to`ldirilishi shart!',
}];

const AddTeacher = () => {
  const [file, setFile] = useState(null);
  const [photoURL, setPhotoURL] = useState();
  const [openCrop, setOpenCrop] = useState(false);
  const [editorValue, setEditorValue] = useState('');
  const dispatch = useDispatch();

  const handleFinish = (values) => {
    values.additionalInfo = editorValue;
    if (editorValue.trim() && file) {
      dispatch(addTeacher(values, file));
    } else message.warn('Rasm yoki qo`shimcha ma\'lumotlar kiritilmadi. Tekshirib qaytatdan yuboring.');
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setPhotoURL(URL.createObjectURL(file));
      setOpenCrop(true);
    }
  };


  return (
    <div>
      <Form
        name="basic"
        autoComplete="off"
        layout="vertical"
        onFinish={handleFinish}
      >
        <Row gutter={30}>
          <Col className="gutter-row" span={6}>
            <ImageContainer>
              <ImgWrapper> <Image src={photoURL ? photoURL : DefaultUser} /></ImgWrapper>
              <input id="image" type="file" accept="image/*" onChange={handleChange} />
              <label htmlFor="image"><PlusOutlined /> Rasm yuklash</label>
              <Modal title="Rasm qirqish" open={openCrop} footer={null} width={700} onCancel={() => setOpenCrop(false)}>
                <CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile }} />
              </Modal>
            </ImageContainer>
          </Col>
          <Col className="gutter-row" span={9}>
            <Item label="Ism" name="firstName" labelAlign="left" rules={InputValidation}>
              <Input />
            </Item>
            <Item label="Sharif" name="midName" labelAlign="left" rules={InputValidation}>
              <Input />
            </Item>
            <Item label="Tel. (998901234567)" name="phone" labelAlign="left" rules={InputValidation}>
              <Input />
            </Item>
          </Col>
          <Col className="gutter-row" span={9}>
            <Item label="Familiya" name="lastName" labelAlign="left" rules={InputValidation}>
              <Input />
            </Item>
            <Item label="Lavozim" name="position" labelAlign="left" rules={InputValidation}>
              <Input />
            </Item>
            <Item label="Email" name="email" labelAlign="left" rules={EmailInputValidation}>
              <Input />
            </Item>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col className="gutter-row" span={12}>
            <Item label="Qabul vaqtlar" name="visit_time" labelAlign="left" rules={InputValidation}>
              <TextArea rows={1} />
            </Item>
          </Col>
        </Row>
        <Item label="Qo`shimcha ma'lumot">
          <CKEditor handleChange={(_, editor) => setEditorValue(editor.getData())} />
        </Item>
        <Item>
          <Button type="primary" htmlType="submit">
            Yuborish
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default AddTeacher;