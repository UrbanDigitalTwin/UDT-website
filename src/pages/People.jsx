import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const NavContainer = styled.nav`
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  padding: 1rem 0;
  color: ${({ theme }) => theme.mode === 'dark' ? '#CCCFDC' : theme.colors.text.primary};
  text-decoration: none;
  position: relative;
  font-weight: 500;
  opacity: ${({ theme }) => theme.mode === 'dark' ? 0.8 : 1};

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.mode === 'dark' ? '#FFFFFF' : theme.colors.accent};
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover:after,
  &.active:after {
    transform: scaleX(1);
  }

  &.active {
    opacity: 1;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Section = styled(motion.section)`
  margin-bottom: 3rem;
`;

const DirectorSection = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  align-items: start;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const DirectorImage = styled.img`
  width: 300px;
  height: 360px;
  object-fit: cover;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
`;

const DirectorInfo = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.mode === 'dark' ? '#FFFFFF' : theme.colors.text.primary};
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const SubTitle = styled.h2`
  color: ${({ theme }) => theme.mode === 'dark' ? '#FFFFFF' : theme.colors.text.primary};
  margin-bottom: 1.5rem;
  font-size: 2rem;
`;

const Text = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.mode === 'dark' ? '#FFFFFF' : theme.colors.text.primary};
`;

const ResearcherGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const ResearcherCard = styled(motion.div)`
  background: white;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  overflow: hidden;
  
  &:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  }
`;

const ResearcherImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ResearcherInfo = styled.div`
  padding: 1.5rem;
`;

const ResearcherName = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const ResearcherRole = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
`;

const GraduateList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const GraduateItem = styled.li`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  
  &:hover {
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }
`;

const PeopleContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: ${({ theme }) => theme.spacing.md};
`;

const PersonCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: ${({ theme }) => theme.transitions.base};

  &:hover {
    transform: translateY(-4px);
  }
`;

const PersonName = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  opacity: 1;
`;

const PersonTitle = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const PersonBio = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const PersonImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.accent};
`;

const PersonLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const PersonLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: ${({ theme }) => theme.transitions.base};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const GraduateStudentImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.accent};
`;

const Director = () => {
  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <DirectorSection>
        <DirectorImage src="/images/soheil-sabri.jpeg" alt="Dr. Soheil Sabri" />
        <DirectorInfo>
          <SubTitle>Dr. Soheil Sabri</SubTitle>
          <Text>
            Dr. Soheil Sabri is an Assistant Professor at the School of Modeling, Simulation and Training, Knights Digital Twin Initiative at the University of Central Florida (UCF). He is an Urban Planner and Geospatial Scientist focused on advancing urban development through research, practical work, and education. His main interests include Urban Digital Twins, Multi-dimensional Planning Support Systems, and analytical tools that provide data-driven insights for urban planning.
          </Text>
          <Text>
            Dr. Sabri leads pioneering research and education in Urban Digital Twins, covering areas like Development Envelope Control, Rule-Based Compliance Assessment, and Environmentally Sustainable Design (ESD). He significantly influences digital urban planning through his roles in various scientific and professional organizations, including IEEE Digital Twin and Parallel Intelligence, IEEE Systems, Man, Cybernetics Society, Co-chairing and Ambassadorship of the Academia and Research within the Digital Twin Consortium and contributing to the Metaverse and Urban Digital Twin working groups at Open Geospatial Consortium.
          </Text>
        </DirectorInfo>
      </DirectorSection>
    </Section>
  );
};

const Researchers = () => {
  const researchers = [
    {
      name: 'Dr. Mahdi Aghaabbasi',
      role: 'Post-Doc in Transportation Planning',
      image: '/images/mahdi.jpeg'
    },
    {
      name: 'Benjamin Lee',
      role: 'Research Assistant Geospatial Engineering',
      image: '/images/benjamin.jpeg'
    },
    {
      name: 'Dr. Reza Mortaheb',
      role: 'Researcher in Geospatial Analysis and Urban Planning',
      image: '/images/reza-morhateb.jpeg'
    },
    {
      name: 'Naga Vaishnavi Marupaka',
      role: 'Research Assistant Visualization',
      image: '/images/vaish_lab.jpg'
    },
    {
      name: 'Kalp Devangbhai Thakkar',
      role: 'Research Assistant IoT/Software Eng',
      image: '/images/kalp.jpeg'
    },
    {
      name: 'Kyle Shervington',
      role: 'Research Assistant AI/Software Eng',
      image: '/images/kyle.jpeg'
    }
  ];

  const pastResearchers = [
    {
      name: 'Dr. Amir Mahdiyar',
      role: 'Post-Doc in Decision Support Systems',
      image: '/images/amir.jpeg'
    },
    {
      name: 'Dr. Hesam Tahami',
      role: 'Post-Doc in Optimization',
      image: '/images/hesam.jpeg'
    },
    {
      name: 'Janani Nagaraj',
      role: 'Research Assistant Visualization',
      image: '/images/janani.jpeg'
    }
  ];

  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <SubTitle>Current Researchers</SubTitle>
      <ResearcherGrid>
        {researchers.map((researcher) => (
          <ResearcherCard
            key={researcher.name}
            whileHover={{ y: -5 }}
          >
            <ResearcherImage src={researcher.image} alt={researcher.name} />
            <ResearcherInfo>
              <ResearcherName>{researcher.name}</ResearcherName>
              <ResearcherRole>{researcher.role}</ResearcherRole>
            </ResearcherInfo>
          </ResearcherCard>
        ))}
      </ResearcherGrid>

      <SubTitle>Past Research Associates</SubTitle>
      <ResearcherGrid>
        {pastResearchers.map((researcher) => (
          <ResearcherCard
            key={researcher.name}
            whileHover={{ y: -5 }}
          >
            <ResearcherImage src={researcher.image} alt={researcher.name} />
            <ResearcherInfo>
              <ResearcherName>{researcher.name}</ResearcherName>
              <ResearcherRole>{researcher.role}</ResearcherRole>
            </ResearcherInfo>
          </ResearcherCard>
        ))}
      </ResearcherGrid>
    </Section>
  );
};

const GraduateStudents = () => {
  const students = [
    {
      name: 'Kwabena Anane-Nsiah',
      topic: 'Digital Transformation and Digital Twin',
      image: '/images/Kwabena.jpg'
    },
    {
      name: 'Nasim Yeganeh',
      topic: 'Hurricane Damage and Rental Housing Affordability Fluctuation',
      image: '/images/Nasim.jpg'
    },
    {
      name: 'Nikoo Mirhosseini',
      topic: 'Utilization of Building Information Modeling to Streamline the Process of Building Permit Systems in Line with the Parametric Design Principles',
      image: '/images/Nikoo-Fatemeh-Mirhosseini.jpg'
    },
    {
      name: 'Ensiyeh Javaherian Pour',
      topic: 'Developing 3D Spatial graph database',
      image: '/images/Ensiyeh-Javaherian-Pour.jpg'
    }
  ];

  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <SubTitle>Graduate Students</SubTitle>
      <ResearcherGrid>
        {students.map((student) => (
          <ResearcherCard key={student.name} whileHover={{ y: -5 }}>
            <ResearcherImage src={student.image} alt={student.name} />
            <ResearcherInfo>
              <ResearcherName>{student.name}</ResearcherName>
              <ResearcherRole>{student.topic}</ResearcherRole>
            </ResearcherInfo>
          </ResearcherCard>
        ))}
      </ResearcherGrid>
    </Section>
  );
};

const People = () => {
  const location = useLocation();
  
  const getPageTitle = () => {
    const path = location.pathname.split('/').pop();
    switch (path) {
      case 'director':
        return 'Director';
      case 'researchers':
        return 'Researchers';
      case 'graduate-students':
        return 'Graduate Students';
      default:
        return 'People';
    }
  };

  return (
    <PageContainer>
      <Title>{getPageTitle()}</Title>
      <NavContainer>
        <NavLinks>
          <NavLink to="/people/director" className={location.pathname.includes('director') ? 'active' : ''}>
            Director
          </NavLink>
          <NavLink to="/people/researchers" className={location.pathname.includes('researchers') ? 'active' : ''}>
            Researchers
          </NavLink>
          <NavLink to="/people/graduate-students" className={location.pathname.includes('graduate-students') ? 'active' : ''}>
            Graduate Students
          </NavLink>
        </NavLinks>
      </NavContainer>
      <Routes>
        <Route index element={<Director />} />
        <Route path="director" element={<Director />} />
        <Route path="researchers" element={<Researchers />} />
        <Route path="graduate-students" element={<GraduateStudents />} />
      </Routes>
    </PageContainer>
  );
};

export default People; 