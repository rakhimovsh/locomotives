import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';

import Container from './Container';
import AppealForm from './AppealForm';

import YandexMap from './YandexMap';

import instagram from '../assets/images/instagram.png';
import facebook from '../assets/images/facebook.png';
import telegram from '../assets/images/telegram.png';
import Gerb from '../assets/images/gerbs.png';


const CustomFooter = styled.footer`
  padding: 30px 0;
  background-color: var(--main-bg-color);
  background-image: url(${Gerb});
  overflow-x: hidden;
  background-repeat: no-repeat;
  background-position: right;
`;

const Header = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--main-content-color);

  &::after {
    margin: 10px 0;
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background-color: var(--main-content-color);
  }
`;

const ConnectionList = styled.ul`
  padding: 0;
  list-style: none;
  margin-bottom: 30px;

  & li, & a {
    color: var(--main-content-color);
  }

  & li {
    margin-top: 15px;
    font-weight: 700;
  }

  & a {
    text-decoration: underline;
    font-weight: 400;

  }
`;

const NetworkList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin-top: 20px;

  & li {
    margin-right: 20px;
  }
`;

const Apdress = styled.p`
  color: var(--main-content-color);
  font-weight: 700;

  & span {
    font-weight: 400;
  }
`;

const Footer = () => {
  const { t } = useTranslation();
  return (
    <CustomFooter>
      <Container>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <Header>{t('footer.contact')}</Header>
            <ConnectionList>
              <li>
                {t('footer.tel')}: <a href="#">+998 90 856 53 38</a>
              </li>
              <li>
                {t('footer.fax')}: <a href="#">+998 90 856 53 38</a>
              </li>
              <li>
                {t('footer.email')}: <a href="#">shukurulloh.com@gmail.com</a>
              </li>
            </ConnectionList>
            <Header>{t('footer.networks')}</Header>
            <NetworkList>
              <li><a href="#"><img alt="instagram icon" src={instagram} width={32} /></a></li>
              <li><a href="#"><img alt="facebook icon" src={facebook} width={32} /></a></li>
              <li><a href="#"><img alt="telegram icon" src={telegram} width={32} /></a></li>
            </NetworkList>
          </Col>
          <Col xs={24} sm={24} md={12} lg={10} xl={10}>
            <Header>{t('footer.address')}</Header>
            <Apdress>{t('footer.address')}: <span>Toshkent shahar Mirobod tumani Temiryo’lchilar ko’chasi 1-uy</span></Apdress>
            <Apdress>{t('footer.transport')}: <span>12, 40, 46, 52, 61, 66, 106</span></Apdress>
            <YandexMap />
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Header>{t('footer.appeal')}</Header>
            <AppealForm />
          </Col>
        </Row>
      </Container>
    </CustomFooter>
  );
};

export default Footer;