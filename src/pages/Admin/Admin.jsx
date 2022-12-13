import { Button, Form, Input, message } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/actions/auth';

import locomotive from '../../assets/images/locomotive.jpg';
import { ReactComponent as Logo } from '../../assets/images/singleLogo.svg';

const { Item } = Form;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  border-radius: 10px;
  height: 70%;
  overflow: hidden;


  & .left {
    width: 55%;
    height: 100%;
    position: relative;

    & .bg {
      height: 100%;
      background-image: url("${locomotive}");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      filter: blur(2px);
      -webkit-filter: blur(2px);
    }

    & .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;

      & h1 {
        text-align: center;
        color: white;
        font-weight: 700;
      }

      & h2 {
        text-align: center;
        color: white;
        font-weight: 400;
      }
    }

  }

  & .right {
    display: flex;
    align-items: center;
    height: 100%;
    width: 45%;
    padding: 0 25px;
    background-color: #fff;
  }
`;


const Admin = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);


  const handleFinish = (values) => {
    dispatch(signIn(values));
  };

  useEffect(() => {
    if (error) {
      if (error === 'serverError') message.error('Serverda xatolarik yuz berdi. \n Keyinroq urunib ko`ring.');
      if (error === 'clientError') message.error('Username yoki parol xato kiritildi. \n Tekshirib qaytadan kiriting.');
    }
  }, [error]);
  return (
    <FormContainer>
      <FormWrapper>
        <div className="left">
          <div className="bg">

          </div>
          <div className="text">
            <Logo />
            <h1>
              Toshkent davlat transport <br /> universiteti
            </h1>
            <h2>Lokomotivlar va lokomotiv xo'jaligi <br /> kafedrasi</h2>
          </div>
        </div>
        <div className="right">
          <Form
            initialValues={{ remember: true }}
            autoComplete="off"
            layout="vertical"
            style={{ width: '100%' }}
            onFinish={handleFinish}
          >
            <Item>
              <h1>Tizimga kirish</h1>
            </Item>
            <Item name="login" label="Login"
                  rules={[{ required: true, message: 'Maydon bo\'sh bo\'lishi mumkin emas!' }]}>
              <Input />
            </Item>
            <Item name="password" label="Password"
                  rules={[{ required: true, message: 'Maydon bo\'sh bo\'lishi mumkin emas!' }]}>
              <Input.Password />
            </Item>
            <Item>
              <Button loading={loading.login} type="primary" htmlType="submit">Tizimga kirish</Button>
            </Item>
          </Form>
        </div>
      </FormWrapper>
    </FormContainer>
  );
};

export default Admin;