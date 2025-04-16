import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.$isOpen ? '0' : '-100%'};
  width: 80%;
  max-width: 400px;
  height: 100vh;
  background: #003135;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
  transition: right 0.3s ease;
  z-index: 999;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 998;

  @media (min-width: 768px) {
    display: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.75rem;
  cursor: pointer;
  color: #ffffff;
  padding: 0.5rem;

  &:hover {
    opacity: 0.8;
  }
`;

const MobileLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 400;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <MobileMenuContainer $isOpen={isOpen}>
        <CloseButton onClick={onClose}>×</CloseButton>

        <MobileLink to="/" onClick={onClose}>
          Home
        </MobileLink>
        <MobileLink to="/people" onClick={onClose}>
          People
        </MobileLink>
        <MobileLink to="/projects" onClick={onClose}>
          Projects
        </MobileLink>
        <MobileLink to="/teaching" onClick={onClose}>
          Teaching
        </MobileLink>
        <MobileLink to="/news" onClick={onClose}>
          News
        </MobileLink>
        <MobileLink to="/contact" onClick={onClose}>
          Contact
        </MobileLink>
      </MobileMenuContainer>
    </>
  );
};

export default MobileMenu; 