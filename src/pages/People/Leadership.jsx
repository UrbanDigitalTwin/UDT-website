import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const ProfileCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ProfileHeader = styled.div`
  display: flex;
  gap: 3rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.light};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

const ProfileImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Role = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ProfileContent = styled.div`
  padding: 2rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.black};

  p {
    margin-bottom: 1.5rem;
  }
`;

const Leadership = () => {
  return (
    <Container>
      <ProfileCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ProfileHeader>
          <ProfileImage src="/images/soheil-sabri.jpeg" alt="Dr. Soheil Sabri" />
          <ProfileInfo>
            <Title>Dr. Soheil Sabri</Title>
            <Role>Director</Role>
          </ProfileInfo>
        </ProfileHeader>
        <ProfileContent>
          <p>
            Dr. Soheil Sabri is an Assistant Professor at the School of Modeling, Simulation and Training, 
            Knights Digital Twin Initiative at the University of Central Florida (UCF). He is an Urban Planner 
            and Geospatial Scientist focused on advancing urban development through research, practical work, 
            and education. His main interests include Urban Digital Twins, Multi-dimensional Planning Support 
            Systems, and analytical tools that provide data-driven insights for urban planning.
          </p>
          <p>
            Dr. Sabri leads pioneering research and education in Urban Digital Twins, covering areas like 
            Development Envelope Control, Rule-Based Compliance Assessment, and Environmentally Sustainable 
            Design (ESD). He significantly influences digital urban planning through his roles in various 
            scientific and professional organizations, including IEEE Digital Twin and Parallel Intelligence, 
            IEEE Systems, Man, Cybernetics Society, Co-chairing and Ambassadorship of the Academia and Research 
            within the Digital Twin Consortium and contributing to the Metaverse and Urban Digital Twin working 
            groups at Open Geospatial Consortium.
          </p>
        </ProfileContent>
      </ProfileCard>
    </Container>
  );
};

export default Leadership; 