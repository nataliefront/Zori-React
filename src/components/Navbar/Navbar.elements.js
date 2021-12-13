import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
  background: black;
  color: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 20;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  $(Container)
`;

export const NavLogo = styled(Link)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 32px;
  display: flex;
  align-items: center;

  &:hover {
    color: burlywood;
    transition: all 0.3s ease-out;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 991px) {
    display: block;
    position: absolute;
    top: 6px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 28px;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;

  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: black;
  }
`;

export const NavItem = styled.li`
   height: 100%;

   @media screen and (max-width: 991px) {
    height: 18%;
  }
`;

export const NavLinks = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-size: 28px;

  &:hover {
    color: burlywood;
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 991px) {
    text-align: center;
    padding: 10px;
    width: 100%;
  }
`;

