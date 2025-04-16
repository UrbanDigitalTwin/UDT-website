import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

const defaultTheme = {
  colors: {
    primary: '#003135',
    accent: '#004D40',
    text: '#333333',
    background: '#FFFFFF',
    card: '#FFFFFF',
    border: 'rgba(0, 0, 0, 0.1)',
  },
  fontSize: {
    small: {
      body: '0.9rem',
      heading: '1.8rem',
      title: '2.2rem',
    },
    medium: {
      body: '1rem',
      heading: '2rem',
      title: '2.5rem',
    },
    large: {
      body: '1.1rem',
      heading: '2.2rem',
      title: '2.8rem',
    },
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

const darkTheme = {
  ...defaultTheme,
  colors: {
    primary: '#00464B',
    accent: '#00796B',
    text: '#E0E0E0',
    background: '#121212',
    card: '#1E1E1E',
    border: 'rgba(255, 255, 255, 0.1)',
  },
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [colorScheme, setColorScheme] = useState('default');

  const currentTheme = isDarkMode ? darkTheme : defaultTheme;

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const changeFontSize = (size) => {
    setFontSize(size);
  };

  const changeColorScheme = (scheme) => {
    setColorScheme(scheme);
    // Add logic for different color schemes here
  };

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedTheme = localStorage.getItem('theme-preferences');
    if (savedTheme) {
      const { isDark, font, scheme } = JSON.parse(savedTheme);
      setIsDarkMode(isDark);
      setFontSize(font);
      setColorScheme(scheme);
    }
  }, []);

  useEffect(() => {
    // Save preferences to localStorage
    localStorage.setItem('theme-preferences', JSON.stringify({
      isDark: isDarkMode,
      font: fontSize,
      scheme: colorScheme,
    }));
  }, [isDarkMode, fontSize, colorScheme]);

  const value = {
    theme: {
      ...currentTheme,
      fontSize: currentTheme.fontSize[fontSize],
    },
    isDarkMode,
    fontSize,
    colorScheme,
    toggleDarkMode,
    changeFontSize,
    changeColorScheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 