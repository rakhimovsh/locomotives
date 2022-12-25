import styled from 'styled-components';
import { NavLink, Link as Links} from 'react-router-dom';
import { Drawer, Select } from 'antd';

const NavEl = styled.nav`
  max-width: 800px;
  width: 100%;
  @media screen and (max-width: 950px) {
    display: none;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  list-style: none;
  width: 100%;
  justify-content: space-between;

`;

const Navlink = styled(NavLink)`
  color: var(--main-bg-color);
  text-decoration: none;
  font-size: 20px;
  @media screen and (max-width: 1030px) {
    font-size: 16px;
  }

  &.atived {
    border-bottom: 1px solid var(--main-bg-color);
  }

  &:hover {
    color: var(--main-bg-color) !important;
    opacity: 0.8;
  }
`;
const Link = styled.a`
  color: var(--main-bg-color);
  text-decoration: none;
  font-size: 20px;
  @media screen and (max-width: 1030px) {
    font-size: 16px;
  }

  &:hover {
    color: var(--main-bg-color) !important;
    opacity: 0.8;
  }
`;


const NavMobile = styled.nav`
  display: none;
  @media screen and (max-width: 950px) {
    display: block;
  }
`;

const HamburgerBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const MobileNavLink = styled(Links)`
  color: var(--main-bg-color);
`;

const MobileNavList = styled.ul`
  padding: 0;
  list-style: none;

  & li {
    margin-bottom: 20px;
  }
`;
const CustomDrawer = styled(Drawer)`
  & .ant-drawer-content-wrapper {
    @media screen and (max-width: 768px) {
      width: 80% !important;
    }
  }
`;

export { NavEl, NavList, Navlink, NavMobile, HamburgerBtn, MobileNavList, MobileNavLink, CustomDrawer, Link };