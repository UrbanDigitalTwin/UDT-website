import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const SearchContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ResultCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ResultTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
`;

const ResultText = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ResultLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ResultCategory = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: ${({ theme }) => theme.colors.background.light};
  color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: 12px;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

// Search data from all pages
const searchableContent = [
  // Projects
  {
    id: 'udt-interoperability',
    title: 'Urban Digital Twin Interoperability Pilot',
    description: 'This project develops an Urban Digital Twin (UDT) framework using OGC standards to improve data interoperability and system integration.',
    category: 'Projects',
    link: '/projects/udt-interoperability',
    keywords: ['digital twin', 'udt', 'ogc', 'interoperability', 'noise modeling', '3d city models', 'sensor data', 'geo-ai']
  },
  {
    id: 'urban-freight',
    title: 'Sustainable Urban Freight Systems',
    description: 'A modelling framework for designing more sustainable urban freight systems and improving city logistics.',
    category: 'Projects',
    link: '/projects/urban-freight',
    keywords: ['urban freight', 'logistics', 'sustainability', 'modelling', 'city logistics']
  },
  {
    id: 'autonomous-vehicles',
    title: 'Autonomous Vehicles & Environment',
    description: 'Understanding AV shuttle bus impact on the built environment and pedestrian interactions.',
    category: 'Projects',
    link: '/projects/autonomous-vehicles',
    keywords: ['autonomous vehicles', 'av', 'shuttle bus', 'built environment', 'pedestrian']
  },
  // People
  {
    id: 'dr-soheil',
    title: 'Dr. Soheil Sabri',
    description: 'Principal Investigator and Lab Director',
    category: 'People',
    link: '/people',
    keywords: ['soheil', 'sabri', 'director', 'pi', 'principal investigator']
  },
  {
    id: 'benjamin-lee',
    title: 'Benjamin Lee',
    description: 'Research Assistant in Geospatial Engineering',
    category: 'People',
    link: '/people',
    keywords: ['benjamin', 'lee', 'geospatial', 'engineering']
  },
  // Teaching
  {
    id: 'ids6938',
    title: 'IDS6938: Introduction to Digital Transformations and Digital Twins',
    description: 'Graduate course covering digital transformation and digital twin technologies.',
    category: 'Teaching',
    link: '/teaching',
    keywords: ['digital twins', 'digital transformation', 'course', 'graduate', 'ids6938']
  }
];

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const searchResults = searchableContent.filter(item => {
    const searchTerms = query.split(' ');
    return searchTerms.every(term => 
      item.title.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(term))
    );
  });

  return (
    <SearchContainer>
      <Title>Search Results for "{query}"</Title>
      <SearchResults>
        {searchResults.map((result) => (
          <ResultCard key={result.id}>
            <ResultCategory>{result.category}</ResultCategory>
            <ResultTitle>{result.title}</ResultTitle>
            <ResultText>{result.description}</ResultText>
            <ResultLink to={result.link}>Learn more →</ResultLink>
          </ResultCard>
        ))}
        {searchResults.length === 0 && (
          <ResultText>No results found for "{query}". Try different keywords.</ResultText>
        )}
      </SearchResults>
    </SearchContainer>
  );
};

export default Search; 