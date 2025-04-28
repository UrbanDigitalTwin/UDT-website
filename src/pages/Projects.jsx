import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 3rem;
  font-size: 3rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 28px rgba(0,0,0,0.1);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  background: #f5f5f5;
  padding: 1rem;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProjectType = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const DetailContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  margin-top: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  padding: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};

  &:hover {
    text-decoration: underline;
  }
`;

const DetailTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
`;

const VideoContainer = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto 3rem;
  padding-bottom: 39.375%; // 16:9 aspect ratio for 70% width
  height: 0;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 90%;
    padding-bottom: 50.625%;
  }
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const ProjectText = styled.p`
  line-height: 1.8;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.1rem;
`;

const InfoSection = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background.light};
  border-radius: 12px;
`;

const InfoTitle = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SearchContainer = styled.div`
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 49, 53, 0.1);
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const DetailImage = styled.img`
  width: 70%;
  height: auto;
  display: block;
  margin: 0 auto 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 90%;
  }
`;

const projectsData = [
  {
    id: 'udt-interoperability',
    title: 'Urban Digital Twin Interoperability Pilot',
    type: 'Research & Development',
    image: '/images/udt-path.png',
    videoUrl: 'https://www.youtube.com/embed/2EEXQFLJ408?si=bOkCPeSrF8AE883p',
    description: 'This project develops an Urban Digital Twin (UDT) framework using OGC standards to improve data interoperability and system integration.',
    team: 'Dr. Soheil Sabri (PI), Benjamin Lee, Kyle Shervington, Kalp Thakar',
    fullDescription: 'This project develops an Urban Digital Twin (UDT) framework using OGC standards to improve data interoperability and system integration. It focuses on noise modeling (using 3D city models and sensor data) and Geo-AI analysis (using camera imagery and machine learning for object detection). The project aims to create prototype APIs and tools, demonstrating how OGC standards can enable a robust and interoperable UDT ecosystem.',
    funding: 'Ministry of Land and Housing South Korea, Open Geospatial Consortium',
    collaborators: 'Pusan University, Gaia 3D, Wuhan University, Witech, Helyx, University of Southern California, HSR',
    link: 'https://www.ogc.org/initiatives/ogc-urban-digital-twin-interoperability/'
  },
  {
    id: 'urban-freight',
    title: 'Sustainable Urban Freight Systems',
    type: 'Research & Development',
    image: '/images/Conceptual Framework.jpg',
    description: 'A modelling framework for designing more sustainable urban freight systems and improving city logistics.',
    team: 'Prof. Russell Thompson (Lead CI), Dr. Soheil Sabri (PI), Prof. Michael Kirley (CI), Dr. Lele Zhang (CI)',
    fullDescription: 'How to improve the sustainability of goods movement in cities is a major challenge for society. City logistics involves numerous stakeholders, including carriers that are small and independent and have difficulty achieving high levels of efficiency. This project aims to develop an integrated modelling framework to facilitate the exploration of novel urban logistics initiatives that are more connected, collaborative, and open.',
    funding: 'Australian Research Council (ARC), Discovery Program, Grant # DP240103054',
    collaborators: 'The University of Melbourne, Australia',
    link: 'https://findanexpert.unimelb.edu.au/project/109080-a-modelling-framework-for-designing-more-sustainable-urban-freight-systems'
  },
  {
    id: 'autonomous-vehicles',
    title: 'Autonomous Vehicles & Environment',
    type: 'Research & Development',
    image: '/images/Concept.jpg',
    description: 'Understanding AV shuttle bus impact on the built environment and pedestrian interactions.',
    team: 'Dr. Soheil Sabri (PI), Dr. Mahdi Aghaabassi, Kyle Shervington, Kalp Thakar',
    fullDescription: 'This project builds on the City of Altamonte Spring\'s CarneRIDES initiative and develops an innovative framework to understand the AV shuttle bus\'s impact on the built environment from five dimensions (5Ds): Density, Diversity, Design, Destination accessibility, and Distance to transit.',
    funding: 'City of Altamonte Springs',
    collaborators: 'City of Altamonte Springs, Florida',
    link: '#'
  },
  {
    id: 'virtual-nyc-vr',
    title: 'Virtual Tour of New York City in VR',
    type: 'Research & Development',
    image: '/images/newyork-1.jpeg',
    videoUrl: 'https://www.youtube.com/embed/_Xuye3dXzt0',
    description: "A fully immersive VR experience of New York City, built with Unity and Cesium Ion's photorealistic 3D tiles. Running on the Oculus Meta Quest 2 and powered by Unity's XR Rig and Interaction Toolkit, users can seamlessly 'walk' through detailed cityscapes, inspect landmark architectures, and explore the urban environment in real time.",
    team: 'Dr. Soheil Sabri (PI), Naga Vaishnavi Marupaka, Kyle Shervington',
    fullDescription: "A fully immersive VR experience of New York City, built with Unity and Cesium Ion's photorealistic 3D tiles. Running on the Oculus Meta Quest 2 and powered by Unity's XR Rig and Interaction Toolkit, users can seamlessly 'walk' through detailed cityscapes, inspect landmark architectures, and explore the urban environment in real time.",
    funding: 'Institute of Simulation and Training, UCF',
    collaborators: 'Knights Digital Twin, Smart Cities Group',
    link: ''
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <PageContainer>
      <Title>Our Projects</Title>
      <DetailContainer>
        <BackButton onClick={() => navigate('/projects')}>
          ← Back to Projects
        </BackButton>
        <DetailTitle>{project.title}</DetailTitle>
        
        {project.videoUrl ? (
          <VideoContainer>
            <iframe
              src={project.videoUrl}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoContainer>
        ) : project.image && (
          <DetailImage src={project.image} alt={project.title} />
        )}
        
        <ProjectText>{project.fullDescription}</ProjectText>
        
        <InfoSection>
          <InfoTitle>Project Team</InfoTitle>
          <ProjectText>{project.team}</ProjectText>
          
          {project.funding && (
            <>
              <InfoTitle>Source of Funding</InfoTitle>
              <ProjectText>{project.funding}</ProjectText>
            </>
          )}
          
          {project.collaborators && project.collaborators.trim() !== '' && (
            <>
              <InfoTitle>Collaborators</InfoTitle>
              <ProjectText>{project.collaborators}</ProjectText>
            </>
          )}
          
          {project.link && project.link !== '#' && (
            <>
              <InfoTitle>More Information</InfoTitle>
              <StyledLink href={project.link} target="_blank" rel="noopener noreferrer">
                Project Website
              </StyledLink>
            </>
          )}
        </InfoSection>
      </DetailContainer>
    </PageContainer>
  );
};

const ProjectsOverview = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Title>Our Projects</Title>
      <VideoContainer>
        <iframe
          src="https://www.youtube.com/embed/1IgQOZlN83U"
          title="Urban Digital Twin Lab Overview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoContainer>
      <ProjectGrid>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            onClick={() => navigate(`/projects/${project.id}`)}
            whileHover={{ y: -5 }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <CardContent>
              <CardTitle>{project.title}</CardTitle>
              <CardText>{project.description}</CardText>
              <ProjectType>{project.type}</ProjectType>
            </CardContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </PageContainer>
  );
};

const Projects = () => {
  const { id } = useParams();
  return id ? <ProjectDetail /> : <ProjectsOverview />;
};

export default Projects;