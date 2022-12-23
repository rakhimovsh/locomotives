import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import {
  NavEl,
  NavList,
  Navlink,
  NavMobile,
  HamburgerBtn,
  MobileNavList,
  MobileNavLink,
  CustomDrawer,
  Link,
} from './styles';

import { MenuOutlined } from '@ant-design/icons';
import LanguageSelect from '../LanguageSelect';


const Index = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const location = useLocation();


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <NavEl>
        <NavList>
          <li><Navlink className={location.pathname == '/' ? 'atived' : ''} to="/">{t('header.nav.home')}</Navlink></li>
          <li><Navlink className={location.pathname == '/about' ? 'atived' : ''}
                       to="/about">{t('header.nav.about')}</Navlink></li>
          <li><Navlink className={location.pathname == '/news' ? 'atived' : ''}
                       to="/news">{t('header.nav.news')}</Navlink></li>
          <li><Link href="https://student.tstu.uz/">HEMIS</Link></li>
          <li><Navlink className={location.pathname == '/teachers' ? 'atived' : ''}
                       to="/teachers">{t('header.nav.teachers')}</Navlink></li>
          <li><Navlink className={location.pathname == '/subjects' ? 'atived' : ''}
                       to="/subjects">Laboratoriya</Navlink></li>
          <li><LanguageSelect /></li>
        </NavList>
      </NavEl>
      <NavMobile>
        <LanguageSelect />
        <HamburgerBtn onClick={showDrawer}> <MenuOutlined style={{ fontSize: 30, color: '#191934' }} /> </HamburgerBtn>

        <CustomDrawer title="" placement="right" onClose={onClose} open={open}>

          <MobileNavList>
            <li><MobileNavLink to="/">{t('header.nav.home')}</MobileNavLink></li>
            <li><MobileNavLink to="/about">{t('header.nav.about')}</MobileNavLink></li>
            <li><MobileNavLink to="/news">{t('header.nav.news')}</MobileNavLink></li>
            <li><MobileNavLink to="/teachers">{t('header.nav.teachers')}</MobileNavLink></li>
            <li><Link href="https://student.tstu.uz/">HEMIS</Link></li>
          </MobileNavList>
        </CustomDrawer>
      </NavMobile>
    </>
  );
};

export default Index;