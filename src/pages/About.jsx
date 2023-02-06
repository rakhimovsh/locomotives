import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container.jsx';
import { useTranslation } from 'react-i18next';

import img1 from '../assets/images/about1.jpg';
import img2 from '../assets/images/about2.jpg';
import img3 from '../assets/images/about3.jpg';

const Title = styled.h1`
  text-align: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 30px;
`;

const About = () => {

  const {t} = useTranslation()
  return (
    <Container>
      <Title>{t("department.title")}</Title>
      <Description>
        {t("department.desc1")}
        <img src={img1} />
        {t("department.desc2")}
        <img src={img2} />
        {t("department.desc3")}
        <img src={img3} />
        {t("department.desc4")}
      </Description>
    </Container>
  );
};

export default About;