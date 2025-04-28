import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const Main = styled.main`
  min-height: 100vh;
  padding-top: 80px;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s ease;
`;

const Layout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout; 