import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  ArrowLeftOutlined,
  BookOutlined,
  CloseOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  ExperimentOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LanguageSelect from '../components/LanguageSelect';


const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const adminItems = [
  getItem('Asosiy', '/panel', <PieChartOutlined />),
  getItem('Yangiliklar', '/panel/news', <DesktopOutlined />),
  getItem('O`qituvchilar', '/panel/teachers', <TeamOutlined />),
];

const teacherItems = [
  getItem('Asosiy', '/panel', <PieChartOutlined />),
  getItem('Fan resurslari', '/panel/subject',
    <FileOutlined />, [getItem('1-kurs', '/panel/subject/info/1'), getItem('2-kurs', '/panel/subject/info/2'), getItem('3-kurs', '/panel/subject/info/3'), getItem('4-kurs', '/panel/subject/info/4')]),
  getItem('Maruzalar', '/panel/subject/lectures', <BookOutlined />),
  getItem('Amaliyotlar', '/panel/subject/practices', <BookOutlined />),
  getItem('Labaratoriyalar', '/panel/subject/laboratories', <BookOutlined />),
  // getItem('Qo`shimcha', '/panel/subject/additional', <BookOutlined />),
];

const generalItems = [
  getItem('Asosiy sahifa', '/panel', <HomeOutlined />),
  getItem('Kafedra haqida', '/panel/about', <InfoCircleOutlined />),
  getItem('Laboratory ishlari', '/panel/laboratory', <ExperimentOutlined />),
  getItem('Fanlar', '/panel/subject', <BookOutlined />),
  getItem('Yangiliklar', '/panel/news', <DesktopOutlined />),
  getItem('O`qituvchilar', '/panel/teachers', <TeamOutlined />),
];


const App = () => {
  const navigate = useNavigate();
  const { permissions } = useSelector(state => state.auth);
  const location = useLocation();

  const handleMenu = (evt) => {
    navigate(evt.key);
  };

  const sortItems = () => {
    if (permissions?.includes('superadmin')) return adminItems;
    else return teacherItems;
  };

  const handleExit = () => {
    navigate('/');
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('PERMISSIONS');
  };


  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu onClick={handleMenu} theme="dark" mode="inline" defaultSelectedKeys={location.pathname}
              items={generalItems} />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          className="site-layout-background"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 20px',
          }}
        >
          <Button onClick={() => navigate(-1)} icon={<ArrowLeftOutlined />} style={{ marginRight: 'auto' }}
                  type="primary">Ortga</Button>
          <LanguageSelect />
          <Button
            onClick={handleExit}
            style={{ marginLeft: 50 }}
            size="middle"
            type="primary"
            icon={<CloseOutlined />} danger>Chiqish</Button>
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              textAlign: 'center',
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;