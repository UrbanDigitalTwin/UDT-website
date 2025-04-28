import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #FFC904;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #000000;
  font-weight: 600;
  font-size: 1.25rem;
  transition: all 0.3s ease;

  &:hover {
    color: #BA9B37;
    transform: translateY(-1px);
  }

  img {
    height: 40px;
    transition: transform 0.3s ease;
    filter: brightness(1.2) contrast(1.1);
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background: #FFC904;
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }
`;

const NavLink = styled(RouterNavLink)`
  color: #000000;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background: #BA9B37;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #BA9B37;
    transform: translateY(-1px);
    &:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  &.active {
    color: #BA9B37;
    font-weight: 600;
    &:after {
      transform: scaleX(1);
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #000000;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #BA9B37;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  return (
    <Nav>
      <NavContainer>
        <LogoContainer to="/">
          <img src="/images/UDT_Logo-V01.png" alt="UDT Lab Logo" />
          Urban Digital Twin Lab
        </LogoContainer>
        <MenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
        <NavLinks $isOpen={isOpen}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/people" onClick={() => setIsOpen(false)}>
            People
          </NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/teaching" onClick={() => setIsOpen(false)}>
            Teaching
          </NavLink>
          <NavLink to="/news" onClick={() => setIsOpen(false)}>
            News
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </NavLinks>
      </NavContainer>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </Nav>
  );
};

export default Navbar;