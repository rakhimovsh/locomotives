import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Image, Divider, Button, Skeleton, Form, Input, Modal } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DefaultUser from '../../assets/images/default_user.png';
import { getSingleTeacher, updateTeacher } from '../../redux/actions/teacher';
import { getTeacherImage } from '../../utils/api';
import CkEditor from '../../components/CKEditor';
import CropEasy from '../../components/Crop/CropeEasy';
import Loader from '../../components/Loader';

const { Item } = Form;

const ImageWrapper = styled.div`
  margin-top: 20px;
  width: 200px;
  border: 0.5px solid #191934;
  border-radius: 50%;
  overflow: hidden;
`;

const Info = styled.div`
  display: flex;
  font-size: 22px;

  & .label {
    width: 300px;
    font-weight: 700;
    text-align: left;
  }

`;

const Divid = styled(Divider)`
  margin: 10px 0;
`;

const AdditionalInfo = styled.div`
  font-size: 22px;
  text-align: left;

  & .label {
    font-weight: 700;
  }

  & span {
    margin-top: 10px;
    font-size: 18px;
  }
`;

const CustomCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  & label {
    cursor: pointer;
  }
`;


const InfoComponent = ({ label, loading, name }) => {
  return (
    <Info>
          <span className="label">
            {label}:
          </span>
      {
        loading ?
          <Skeleton.Input active={true} />
          :
          <Item style={{ width: '100%', marginBottom: 0 }} name={name}
                rules={[{ required: true, message: 'Maydon bo`sh bo`lishi mumkin emas!' }]}>
            <Input />
          </Item>
      }
    </Info>
  );
};


const TeacherHome = () => {
  const dispatch = useDispatch();
  const { teacherId } = useParams();
  const [editorValue, setEditorValue] = useState('');
  const [file, setFile] = useState(null);
  const [photoURL, setPhotoURL] = useState();
  const [openCrop, setOpenCrop] = useState(false);
  const { singleTeacherInfo, loading } = useSelector(state => state.teacher);

  useEffect(() => {
    dispatch(getSingleTeacher(teacherId));
  }, [loading.updateTeacher]);

  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(singleTeacherInfo);
  }, [form, singleTeacherInfo]);

  const handleFinish = (values) => {
    values.additionalInfo = editorValue ? editorValue : singleTeacherInfo.additionalInfo;
    dispatch(updateTeacher(values, file, teacherId));
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setPhotoURL(URL.createObjectURL(file));
      setOpenCrop(true);
    }
  };

  if (loading.updateTeacher) {
    return <Loader />;
  }

  return (
    <Form
      form={form}
      onFinish={handleFinish}
    >
      <div style={{ display: 'flex', marginBottom: 15 }}><Button
        type="primary" icon={<EditOutlined />}
        style={{ marginLeft: 'auto' }} htmlType="submit">Tahrirlash</Button>
      </div>
      <Row gutter={20}>
        <CustomCol span={7}>
          <ImageWrapper>
            {
              loading.singleTeacher ?
                <Image src={DefaultUser} /> :
                <Image
                  src={!photoURL ? getTeacherImage(singleTeacherInfo?.picture) : photoURL}
                />
            }
          </ImageWrapper>
          <div>
            <input type="file" id="image" accept="image/*" style={{ display: 'none' }} onChange={handleChange} />
            <Button icon={<PlusOutlined />} type="primary"><label htmlFor="image">Rasm yuklash</label></Button>
            <Modal title="Rasm qirqish" open={openCrop} footer={null} width={700} onCancel={() => setOpenCrop(false)}>
              <CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile }} />
            </Modal>
          </div>

        </CustomCol>
        <Col span={17} style={{ padding: '30 20 0' }}>
          <InfoComponent loading={loading.singleTeacher} label="Ism"
                         description={singleTeacherInfo?.firstName} name="firstName" />
          <Divid />
          <InfoComponent loading={loading.singleTeacher} label="Familiya"
                         description={singleTeacherInfo?.lastName} name="lastName" />
          <Divid />
          <InfoComponent loading={loading.singleTeacher} label="Sharif"
                         description={singleTeacherInfo?.midName} name="midName" />
          <Divid />
          <InfoComponent loading={loading.singleTeacher} label="Lavozim" description={singleTeacherInfo?.position}
                         name="position" />
          <Divid />
          <InfoComponent loading={loading.singleTeacher} label="Tel." description={singleTeacherInfo?.phone}
                         name="phone" />
          <Divid />
          <InfoComponent loading={loading.singleTeacher} label="Email" description={singleTeacherInfo?.email}
                         name="email" />
          <Divid />
          <InfoComponent loading={loading.singleTeacher} label="Qabul vaqtlar"
                         description={singleTeacherInfo?.visit_time} name="visit_time" />
        </Col>
      </Row>
      <AdditionalInfo>
        <Divid />
        <div className="label">
          Qo`shimcha ma'lumot:
        </div>
        <span>
          {
            loading.singleTeacher ?
              <Skeleton active={true} />
              :
              <CkEditor defaultValue={singleTeacherInfo?.additionalInfo}
                        handleChange={(_, editor) => setEditorValue(editor.getData())} />
          }
        </span>
      </AdditionalInfo>
    </Form>
  );
};

export default TeacherHome;