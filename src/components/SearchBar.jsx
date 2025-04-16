import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SearchContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.base};
`;

const SearchForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SearchInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.text.muted};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.highlight};
  }
`;

const SearchButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.light};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.base};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.dark};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  transition: ${({ theme }) => theme.transitions.base};

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

const SearchBar = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const searchKeywords = {
    // People-related keywords
    'director': '/people/director',
    'leadership': '/people/director',
    'researchers': '/people/researchers',
    'research': '/people/researchers',
    'graduate': '/people/graduate-students',
    'students': '/people/graduate-students',
    'members': '/people/researchers',
    'team': '/people/researchers',
    'people': '/people/director',

    // Projects-related keywords
    'projects': '/projects',
    'research projects': '/projects',
    'development': '/projects',
    'autonomous': '/projects',
    'digital twin': '/projects',

    // Teaching-related keywords
    'teaching': '/teaching',
    'courses': '/teaching',
    'education': '/teaching',
    'learning': '/teaching',
    'class': '/teaching',

    // News-related keywords
    'news': '/news',
    'updates': '/news',
    'events': '/news',

    // Contact-related keywords
    'contact': '/contact',
    'location': '/contact',
    'address': '/contact',
    'email': '/contact',
    'reach': '/contact',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();
    
    // Check for exact matches first
    if (searchKeywords[query]) {
      navigate(searchKeywords[query]);
      onClose();
      return;
    }

    // Check for partial matches
    for (const [keyword, path] of Object.entries(searchKeywords)) {
      if (query.includes(keyword) || keyword.includes(query)) {
        navigate(path);
        onClose();
        return;
      }
    }

    // If no match found, navigate to home with a message
    navigate('/', { state: { searchMessage: 'No results found for: ' + searchQuery } });
    onClose();
  };

  return (
    <SearchContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <CloseButton onClick={onClose}>×</CloseButton>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search for people, projects, courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchBar; 