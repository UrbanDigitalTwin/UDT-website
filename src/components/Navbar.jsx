import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: 1000;
`;

const NavContent = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.light};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  img {
    height: 45px;
    width: auto;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

const DesktopNav = styled.div`
  display: none;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.light};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  padding: ${({ theme }) => theme.spacing.sm};
  transition: ${({ theme }) => theme.transitions.base};

  &:hover {
    opacity: 0.8;
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.light};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  transition: ${({ theme }) => theme.transitions.base};

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const SearchIcon = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 1.2rem;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  opacity: 0.9;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const SearchWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  return (
    <NavContainer>
      <NavContent>
        <Logo to="/">
          <img src="/images/UDT_Logo-V01.png" alt="UDT Lab Logo" />
          Urban Digital Twin Lab
        </Logo>

        <DesktopNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/people">People</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/teaching">Teaching</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <SearchIcon onClick={() => setIsSearchOpen(!isSearchOpen)}>
            🔍
          </SearchIcon>
        </DesktopNav>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </MobileMenuButton>
      </NavContent>

      <SearchWrapper>
        <AnimatePresence>
          {isSearchOpen && <SearchBar onClose={handleSearchClose} />}
        </AnimatePresence>
      </SearchWrapper>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </NavContainer>
  );
};

export default Navbar; 