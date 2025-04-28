import styled from 'styled-components';
import { motion } from 'framer-motion';

const LeadershipContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

const DirectorCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 4px 24px ${({ theme }) => theme.colors.shadow};
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

const DirectorImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.accent};
  box-shadow: 0 4px 16px ${({ theme }) => theme.colors.shadow};
`;

const DirectorInfo = styled.div`
  flex: 1;
`;

const DirectorName = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const DirectorTitle = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const DirectorBio = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const DirectorLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const DirectorLink = styled.a`
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

const Leadership = () => {
  return (
    <LeadershipContainer>
      <DirectorCard>
        <DirectorImage src="/images/soheil-sabri.jpeg" alt="Dr. Soheil Sabri" />
        <DirectorInfo>
          <DirectorName>Dr. Soheil Sabri</DirectorName>
          <DirectorTitle>Director</DirectorTitle>
          <DirectorBio>
            Dr. Soheil Sabri is an Assistant Professor at the School of Modeling, Simulation and Training, 
            Knights Digital Twin Initiative at the University of Central Florida (UCF). He is an Urban Planner 
            and Geospatial Scientist focused on advancing urban development through research, practical work, 
            and education. His main interests include Urban Digital Twins, Multi-dimensional Planning Support 
            Systems, and analytical tools that provide data-driven insights for urban planning.
          </DirectorBio>
          <DirectorBio>
            Dr. Sabri leads pioneering research and education in Urban Digital Twins, covering areas like 
            Development Envelope Control, Rule-Based Compliance Assessment, and Environmentally Sustainable 
            Design (ESD). He significantly influences digital urban planning through his roles in various 
            scientific and professional organizations, including IEEE Digital Twin and Parallel Intelligence, 
            IEEE Systems, Man, Cybernetics Society, Co-chairing and Ambassadorship of the Academia and Research 
            within the Digital Twin Consortium and contributing to the Metaverse and Urban Digital Twin working 
            groups at Open Geospatial Consortium.
          </DirectorBio>
          <DirectorLinks>
            <DirectorLink href="https://www.linkedin.com/in/soheil-sabri-b5a0a012a/">
              <img src="/icons/linkedin.png" alt="LinkedIn" />
            </DirectorLink>
            <DirectorLink href="https://github.com/soheil-sabri">
              <img src="/icons/github.png" alt="GitHub" />
            </DirectorLink>
          </DirectorLinks>
        </DirectorInfo>
      </DirectorCard>
    </LeadershipContainer>
  );
};

export default Leadership;