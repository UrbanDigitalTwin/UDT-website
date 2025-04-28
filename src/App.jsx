import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import theme from './theme';
import Layout from './components/Layout';
import GlobalStyle from './GlobalStyle';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import People from './pages/People';
import Projects from './pages/Projects';
import Teaching from './pages/Teaching';
import News from './pages/News';
import Contact from './pages/Contact';
import Search from './pages/Search';

const ThemedApp = () => {
  const { currentTheme } = useTheme();

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="people/*" element={<People />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Projects />} />
          <Route path="teaching" element={<Teaching />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </StyledThemeProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Helmet>
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" 
            rel="stylesheet" 
          />
        </Helmet>
        <ThemedApp />
      </Router>
    </ThemeProvider>
  );
};

export default App; 