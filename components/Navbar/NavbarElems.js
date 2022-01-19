import styled from 'styled-components';
import { Link } from 'next/link';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: #212427;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-bottom: 4px;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  color: #fdfdfd;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100vw;
  padding: 0 24px;
  max-width: 1100px;
`;

// Link with routing
export const NavLogo = styled.a`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 820px) {
    display: block;
    position: absolute;
    bottom: 30px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fdfdfd;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  padding-top: 32px;
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1em;
  height: 100%;
  cursor: pointer;
  position: relative;

  display: inline-block;

  &:after {
    display: block;
    content: '';
    border-bottom: solid 5px #2dac66;
    margin-top: 15px;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 100% 50%;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0 50%;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
