import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const CustomizerContainer = styled(motion.div)`
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  min-width: 250px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const CustomizerTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const ControlGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

const Button = styled(motion.button)`
  background: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.background};
  color: ${({ active, theme }) => active ? 'white' : theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 0.5rem;
  font-size: 0.9rem;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}22;
  }
`;

const ThemeToggle = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  font-size: 0.9rem;
  margin-top: 1rem;

  &:hover {
    background: ${({ theme }) => `${theme.colors.primary}dd`};
  }
`;

const ThemeCustomizer = () => {
  const { isDarkMode, fontSize, toggleDarkMode, changeFontSize } = useTheme();

  return (
    <CustomizerContainer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <CustomizerTitle>Customize Theme</CustomizerTitle>
      
      <ControlGroup>
        <Label>Font Size</Label>
        <div>
          <Button
            active={fontSize === 'small'}
            onClick={() => changeFontSize('small')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Small
          </Button>
          <Button
            active={fontSize === 'medium'}
            onClick={() => changeFontSize('medium')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Medium
          </Button>
          <Button
            active={fontSize === 'large'}
            onClick={() => changeFontSize('large')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Large
          </Button>
        </div>
      </ControlGroup>

      <ThemeToggle
        onClick={toggleDarkMode}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </ThemeToggle>
    </CustomizerContainer>
  );
};

export default ThemeCustomizer; 