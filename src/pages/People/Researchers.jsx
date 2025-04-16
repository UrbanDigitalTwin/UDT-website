import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.highlight};
`;

const ResearchersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ResearcherCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 28px rgba(0,0,0,0.12);
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
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ResearcherRole = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
  line-height: 1.4;
`;

const currentResearchers = [
  {
    name: "Dr. Mahdi Aghaabbasi",
    role: "Post-Doc in Transportation Planning",
    image: "/images/mahdi.jpeg"
  },
  {
    name: "Benjamin Lee",
    role: "Research Assistant Geospatial Engineering",
    image: "/images/benjamin.jpeg"
  },
  {
    name: "Dr. Reza Mortaheb",
    role: "Researcher in Geospatial Analysis and Urban Planning",
    image: "/images/reza-morhateb.jpeg"
  },
  {
    name: "Naga Vaishnavi Marupaka",
    role: "Research Assistant Visualization",
    image: "/images/vaish_lab.jpg"
  },
  {
    name: "Kalp Devangbhai Thakkar",
    role: "Research Assistant IoT/Software Eng",
    image: "/images/kalp.jpeg"
  },
  {
    name: "Kyle Shervington",
    role: "Research Assistant AI/Software Eng",
    image: "/images/kyle.jpeg"
  }
];

const pastResearchers = [
  {
    name: "Dr. Amir Mahdiyar",
    role: "Post-Doc in Decision Support Systems",
    image: "/images/amir.jpeg"
  },
  {
    name: "Dr. Hesam Tahami",
    role: "Post-Doc in Optimization",
    image: "/images/hesam.jpeg"
  },
  {
    name: "Janani Nagaraj",
    role: "Research Assistant Visualization",
    image: "/images/janani.jpeg"
  }
];

const Researchers = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>Current Researchers</SectionTitle>
        <ResearchersGrid>
          {currentResearchers.map((researcher, index) => (
            <ResearcherCard
              key={researcher.name}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ResearcherImage src={researcher.image} alt={researcher.name} />
              <ResearcherInfo>
                <ResearcherName>{researcher.name}</ResearcherName>
                <ResearcherRole>{researcher.role}</ResearcherRole>
              </ResearcherInfo>
            </ResearcherCard>
          ))}
        </ResearchersGrid>
      </Section>

      <Section>
        <SectionTitle>Past Research Associates</SectionTitle>
        <ResearchersGrid>
          {pastResearchers.map((researcher, index) => (
            <ResearcherCard
              key={researcher.name}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ResearcherImage src={researcher.image} alt={researcher.name} />
              <ResearcherInfo>
                <ResearcherName>{researcher.name}</ResearcherName>
                <ResearcherRole>{researcher.role}</ResearcherRole>
              </ResearcherInfo>
            </ResearcherCard>
          ))}
        </ResearchersGrid>
      </Section>
    </Container>
  );
};

export default Researchers; 