import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.highlight};
`;

const StudentsList = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const StudentCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 28px rgba(0,0,0,0.12);
  }
`;

const StudentName = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`;

const ResearchTopic = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.1rem;
  line-height: 1.5;
`;

const graduateStudents = [
  {
    name: "Kwabena Anane-Nsiah",
    topic: "Digital Transformation and Digital Twin"
  },
  {
    name: "Nasim Yeganeh",
    topic: "Hurricane Damage and Rental Housing Affordability Fluctuation"
  },
  {
    name: "Nikoo Mirhosseini",
    topic: "Utilization of Building Information Modeling to Streamline the Process of Building Permit Systems in Line with the Parametric Design Principles"
  },
  {
    name: "Ensiyeh Javaherian Pour",
    topic: "Developing 3D Spatial graph database"
  }
];

const GraduateStudents = () => {
  return (
    <Container>
      <Title>Graduate Researchers</Title>
      <StudentsList>
        {graduateStudents.map((student, index) => (
          <StudentCard
            key={student.name}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <StudentName>{student.name}</StudentName>
            <ResearchTopic>{student.topic}</ResearchTopic>
          </StudentCard>
        ))}
      </StudentsList>
    </Container>
  );
};

export default GraduateStudents; 