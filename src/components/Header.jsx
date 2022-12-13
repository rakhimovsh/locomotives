import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';

import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as MobilLogo } from '../assets/images/LogoMobile.svg';

const HeaderWrapper = styled.header`
  padding-top: 100px;
  @media screen and (max-width: 630px) {
    padding-top: 75px;
  }
`;

const HeaderEl = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 15px 0;
  background-color: var(--main-content-color);
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  z-index: 100;
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`

  & svg path {
    fill: var(--main-bg-color) !important;
  }
`;

const LogoDesktop = styled(Logo)`
  @media screen and (max-width: 630px) {
    display: none;
  }
`;

const LogoMobile = styled(MobilLogo)`
  display: none;
  @media screen and (max-width: 630px) {
    display: block;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderEl>
        <HeaderContainer>
          <LogoWrapper>
            <LogoDesktop />
            <LogoMobile />
          </LogoWrapper>
          <Nav />
        </HeaderContainer>
      </HeaderEl>
    </HeaderWrapper>
  );
};

export default Header;