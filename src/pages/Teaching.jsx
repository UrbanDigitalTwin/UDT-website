import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-align: center;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const CourseCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
`;

const CourseImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CourseContent = styled.div`
  padding: 2rem;
`;

const CourseTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const CourseDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const SyllabusTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const SyllabusImage = styled.img`
  width: 100%;
  max-height: 600px;
  object-fit: contain;
  margin: 1rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${props => props.expanded ? 'flex-end' : 'center'};
  width: 100%;
  margin-top: 1rem;
  margin-bottom: ${props => props.expanded ? '2rem' : '0'};
`;

const ExpandButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  width: ${props => props.expanded ? '120px' : '100%'};
  
  &:hover {
    background: ${({ theme }) => `${theme.colors.primary}dd`};
  }
`;

const LinkButton = styled(motion.a)`
  display: inline-block;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 1rem;
  text-align: center;
  width: 100%;
  
  &:hover {
    background: ${({ theme }) => `${theme.colors.accent}dd`};
  }
`;

const Teaching = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <PageContainer>
      <Title>Teaching</Title>

      <CourseGrid>
        <CourseCard
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <CourseImage src="/images/teaching.png" alt="Digital Transformation Course" />
          <CourseContent>
            <CourseTitle>Introduction to Digital Transformation and Digital Twins</CourseTitle>
            <CourseDescription>
              Our journey begins with an overview of Digital Twins, understanding where they came from and what makes them such a powerful concept in today's digital landscape.
            </CourseDescription>
            <LinkButton
              href="https://player.vimeo.com/video/931229319"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Watch Introductory Video
            </LinkButton>
            <ButtonContainer expanded={expandedCourse === 1}>
              <ExpandButton
                expanded={expandedCourse === 1}
                onClick={() => setExpandedCourse(expandedCourse === 1 ? null : 1)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {expandedCourse === 1 ? 'Show Less' : 'Learn More'}
              </ExpandButton>
            </ButtonContainer>
            
            {expandedCourse === 1 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CourseDescription>
                  We'll dive into enabling technologies and trends propelling the rapid growth of Digital Twin adoption in diverse industries. From IoT sensors to advanced analytics, we'll explore how these technologies reshape how we perceive and interact with the physical world.
                </CourseDescription>
                <SyllabusTitle>Course Syllabus</SyllabusTitle>
                <SyllabusImage 
                  src="/images/IDS6938-Introduction-to-Digital-Transformations-and-Digital-Twins_flyer.png" 
                  alt="Course Syllabus" 
                />
              </motion.div>
            )}
          </CourseContent>
        </CourseCard>

        <CourseCard
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <CourseImage src="/images/teaching-2.png" alt="Modeling and Simulation Course" />
          <CourseContent>
            <CourseTitle>Perspectives in Modeling and Simulation</CourseTitle>
            <CourseDescription>
              This course explores the core principles and applications of modeling and simulation (M&S) through a structured, multi-module approach.
            </CourseDescription>
            <ButtonContainer expanded={expandedCourse === 2}>
              <ExpandButton
                expanded={expandedCourse === 2}
                onClick={() => setExpandedCourse(expandedCourse === 2 ? null : 2)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {expandedCourse === 2 ? 'Show Less' : 'Learn More'}
              </ExpandButton>
            </ButtonContainer>
            
            {expandedCourse === 2 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CourseDescription>
                  Beginning with an introduction to the basics of M&S and its evolution, the course progresses to cover key frameworks, including the use of simulations for experimentation, skill enhancement, and the assurance of reliability and quality. You will learn to navigate both discrete and continuous systems, as well as hybrid models, gaining insights into how simulations can be used to simulate real-time processes and develop digital twins.
                </CourseDescription>
                <CourseDescription>
                  The course also emphasizes practical and non-functional aspects, such as visualization techniques and the ethical considerations inherent in M&S. Through weekly modules, you will acquire hands-on experience with research in M&S and methodologies, preparing to tackle complex problems and make informed decisions based on simulation data.
                </CourseDescription>
                <ExpandButton
                  as="a"
                  href="https://drive.google.com/file/d/1eDJFv7q2TNmub1e753Oal2_pH7bItlmU/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ textDecoration: 'none', textAlign: 'center', display: 'block' }}
                >
                  View Course Syllabus
                </ExpandButton>
              </motion.div>
            )}
          </CourseContent>
        </CourseCard>
      </CourseGrid>
    </PageContainer>
  );
};

export default Teaching; 