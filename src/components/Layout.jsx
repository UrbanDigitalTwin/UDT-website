import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';

const Main = styled.main`
  min-height: 100vh;
  padding-top: 80px;
  padding-bottom: 80px; // Add padding to prevent content from being hidden behind fixed footer
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s ease;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing.xl};
  background-color: transparent; // Make background transparent
  z-index: 100; // Ensure it stays above content
`;

const UCFLogo = styled.img`
  height: 50px;
  width: auto;
  opacity: 0.85;
  transition: opacity 0.3s ease;
  filter: ${({ theme }) => theme.theme === 'dark' ? 'brightness(2)' : 'brightness(0.9)'};

  &:hover {
    opacity: 1;
    filter: ${({ theme }) => theme.theme === 'dark' ? 'brightness(2.2)' : 'brightness(1)'};
  }
`;

const Layout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <a href="https://www.cecs.ucf.edu/smst/" target="_blank" rel="noopener noreferrer">
          <UCFLogo src="/images/ucf-logo.png" alt="University of Central Florida" />
        </a>
      </Footer>
    </>
  );
};

export default Layout; 