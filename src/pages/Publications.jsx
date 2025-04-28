import React from 'react';
import styled from 'styled-components';
import { AiFillGoogleCircle } from 'react-icons/ai';

const PublicationsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
`;

const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid ${props => props.theme.colors.primary};
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Name = styled.h2`
  font-size: 1.6rem;
  color: ${props => props.theme.colors.primary};
  margin: 0;
`;

const Title = styled.div`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text};
`;

const ScholarProfileLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  text-decoration: none;
  margin-top: 0.5rem;
  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme.colors.primaryDark};
    text-decoration: underline;
  }
`;

const ScholarButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;

const PublicationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const PublicationTile = styled.div`
  background-color: ${props => props.theme.colors.backgroundLight};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const PublicationTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.1rem;
  line-height: 1.4;
`;

const PublicationLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.border};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primaryDark};
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.text};
  margin: 2rem 0 1rem;
`;

const Publications = () => {
  const publications = [
    {
      title: "Digital Twin Fundamentals and Applications, Book",
      link: "https://link.springer.com/book/10.1007/978-3-031-67778-6"
    },
    {
      title: "Review and assessment of 3D spatial data models for managing underground utility networks",
      link: "https://www.sciencedirect.com/science/article/pii/S0886779824006370"
    },
    {
      title: "Potentials of digital twin system for analyzing travel behavior decisions",
      link: "https://www.sciencedirect.com/science/article/pii/S2214367X24001650"
    },
    {
      title: "Opportunities and Threats of Adopting Digital Twin in Construction Projects: A Review",
      link: "https://www.mdpi.com/2075-5309/14/8/2349"
    },
    {
      title: "Leveraging generative AI for urban digital twins: a scoping review on the autonomous generation of urban data, scenarios, designs, and 3D city models for smart city advancement",
      link: "https://link.springer.com/article/10.1007/s44212-024-00060-w"
    },
    {
      title: "Digital Twins for Assessing the Impact of Autonomous Vehicles on Built-Environment Changes",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-67778-6_6"
    }
  ];

  return (
    <PublicationsContainer>
      <ProfileSection>
        <ProfileImage src="/images/Dr. Soheil Sabri.jpeg" alt="Dr. Soheil Sabri" />
        <ProfileInfo>
          <Name>Dr. Soheil Sabri</Name>
          <Title>Director of Urban Digital Twin Lab at SMST, University of Central Florida</Title>
          <ScholarProfileLink 
            href="https://scholar.google.com/citations?hl=en&user=Mt0UxCsAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGoogleCircle size={22} /> Google Scholar
          </ScholarProfileLink>
        </ProfileInfo>
      </ProfileSection>

      <SectionTitle>Recent Publications</SectionTitle>
      <PublicationGrid>
        {publications.map((pub, index) => (
          <PublicationTile key={index}>
            <PublicationTitle>{pub.title}</PublicationTitle>
            <PublicationLink 
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Publication →
            </PublicationLink>
          </PublicationTile>
        ))}
      </PublicationGrid>
    </PublicationsContainer>
  );
};

export default Publications; 