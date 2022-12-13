import React from 'react';
import styled from 'styled-components';
import Search from 'antd/es/input/Search';
import { Button } from 'antd';

import Container from './Container';
import { InfoCircleOutlined } from '@ant-design/icons';


const Section = styled.section`
  padding: 70px 0;
`;

const CustomSearch = styled(Search)`
  max-width: 70%;
  margin-bottom: 50px;

  & .ant-btn {
    background-color: var(--main-bg-color);
    border-color: var(--main-bg-color);
  }

  @media only screen and (max-width: 425px) {
    max-width: 90%;
  }
`;

const TeachersList = styled.ul`
  padding: 0;
  list-style: none;

  & li {
    padding-bottom: 20px;
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid black;
  }

  & img {
    border: 0.5px solid #6c6767;
    margin-right: 20px;
  }

  & h2 {
    margin-bottom: 8px;
    font-size: 20px;
  }

  & h3 {
    font-size: 18px;
  }

  & p {
    margin-bottom: 5px;
  }
`;

const TeachersSection = () => {
  const onSearch = (value) => console.log(value);
  return (
    <Section>
      <Container>
        <CustomSearch
          placeholder="Ism bo`yicha izlash"
          allowClear
          enterButton="Izlash"
          size="large"
          onSearch={onSearch}
        />
        <TeachersList>
          <li>
            <img src="https://picsum.photos/150/180" alt="" />
            <div>
              <h2>John Doe</h2>
              <h3>Professor</h3>
              <p>Tel: +998908565338</p>
              <p>Email: <a href="mailto:your@gmail.com">shukurulloh.com@gamil.com</a></p>
              <p>Qabul vaqtlari: 24/7</p>
              <Button icon={<InfoCircleOutlined />}>Batafsil </Button>
            </div>
          </li>
        </TeachersList>
      </Container>
    </Section>
  );
};

export default TeachersSection;