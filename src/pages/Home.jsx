import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  position: relative;
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/images/digital-twin.jpg') center/cover no-repeat;
  margin-bottom: 4rem;
  box-shadow: 0 4px 32px rgba(0,0,0,0.10);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 49, 53, 0.7); /* dark overlay */
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 24px rgba(0,0,0,0.25);
  margin: 0;
`;

const AccentBar = styled.div`
  width: 6px;
  height: 2.5rem;
  background: ${({ theme }) => theme.colors.highlight};
  border-radius: 6px;
  margin-right: 1.25rem;
`;

const CardSection = styled(motion.section)`
  background: rgba(255,255,255,0.97);
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(15,164,175,0.10);
  padding: 2.5rem 2rem;
  margin-bottom: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
`;

const CardHeadingRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  letter-spacing: 0.01em;
`;

const Section = styled(motion.section)`
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  background: ${({ theme }) => theme.colors.light};
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  padding: ${({ theme }) => theme.spacing.xl};
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 4px 32px rgba(15,164,175,0.12);
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.black};
`;

const CapabilitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const CapabilityItem = styled(motion.li)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: 1.5rem;
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(15,164,175,0.08);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(120deg, ${({ theme }) => `${theme.colors.primary}10`}, ${({ theme }) => `${theme.colors.highlight}20`});
    box-shadow: 0 4px 20px rgba(15,164,175,0.15);
    transform: translateY(-2px);
  }
`;

const CapabilityTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CapabilityDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.black};
`;

const UCFLogo = styled.img`
  position: fixed;
  bottom: 24px;
  left: 24px;
  height: 56px;
  z-index: 100;
  opacity: 0.85;
  transition: opacity 0.2s, transform 0.2s;
  &:hover {
    opacity: 1;
    transform: scale(1.05) rotate(-2deg);
  }
`;

const SolutionImagesRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 2rem 0 0 0;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

const SolutionImage = styled.img`
  height: 230px;
  width: 340px;
  object-fit: cover;
  border-radius: 0;
  box-shadow: 0 2px 16px rgba(15,164,175,0.10);
  transition: transform 0.25s, box-shadow 0.25s;
  background: #fff;
  margin-bottom: 0.5rem;
  &:hover {
    transform: scale(1.10);
    box-shadow: 0 8px 32px rgba(15,164,175,0.18);
    z-index: 2;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent as={motion.div} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <HeroTitle>Urban Digital Twin Lab</HeroTitle>
        </HeroContent>
      </HeroSection>
      <CardSection
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <CardHeadingRow>
          <AccentBar />
          <CardTitle>About UDT Lab</CardTitle>
        </CardHeadingRow>
        <Paragraph>
          At Urban Digital Twin (UDT) Lab, we are dedicated to driving digital transformation in urban and land planning through strategic consulting, cutting-edge research, and innovative prototype development. Based at the University of Central Florida, our lab specializes in UDT and Planning Support Science, focusing on creating smart and sustainable cities of the future.
        </Paragraph>
      </CardSection>
      <CardSection
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <CardHeadingRow>
          <AccentBar />
          <CardTitle>Context</CardTitle>
        </CardHeadingRow>
        <Paragraph>
          Cities are complex systems and fast-growing, which challenge urban planners and designers to clearly understand the interconnection of their economic, ecological, and demographic changes. Over the past three decades, many technological innovations have been produced to support the process of city planning, design, and management.
        </Paragraph>
        <Paragraph>
          However, these technologies have yet to reflect the reality and complexity of urban systems. The problem is that urban data, modeling, and visualization systems are fragmented, and limited to their data formats with limited interoperability. In addition, most of the current planning support systems provide an abstract representation of cities and lack real-time data, which does not help an evidence-based and data-driven planning, design, and decision-making process.
        </Paragraph>
      </CardSection>
      <CardSection
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <CardHeadingRow>
          <AccentBar />
          <CardTitle>what we do</CardTitle>
        </CardHeadingRow>
        <Paragraph>
          We conduct cutting-edge research and develop Urban Digital Twin, which is an innovative PRODUCT that transforms the PROCESS of Urban Planning and Design. This Digital Infrastructure enables the data and city model interoperability to mirror the process of city changes and provide more realistic insight for decision-makers.
        </Paragraph>
        <SolutionImagesRow>
          <SolutionImage src="/images/Photorealistic_Altamonte Springs-2.jpg" alt="Photorealistic Altamonte Springs" />
          <SolutionImage src="/images/UDT-Disease Transmission.jpg" alt="UDT Disease Transmission" />
          <SolutionImage src="/images/udt-path.png" alt="UDT Path" />
        </SolutionImagesRow>
      </CardSection>
      <CardSection
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <CardHeadingRow>
          <AccentBar />
          <CardTitle>Capabilities</CardTitle>
        </CardHeadingRow>
        <CapabilitiesList>
          <CapabilityItem
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <CapabilityTitle>Planning Support Systems</CapabilityTitle>
            <CapabilityDescription>
              • Automated Development Control Approval<br />
              • 3D modeling and scenario building for Development Envelop Control
            </CapabilityDescription>
          </CapabilityItem>
          <CapabilityItem
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <CapabilityTitle>Urban Data Infrastructure and Analytics</CapabilityTitle>
            <CapabilityDescription>
              • Multi-modal (structured/unstructured) and multi-dimensional (2D, 3D, Real-Time) data integration and analysis<br />
              • Composable and modular urban digital twin system architecture<br />
              • Urban sustainability and resiliency analysis<br />
              • Urban disease transmission analysis<br />
              • Camera imagery and recording location accuracy<br />
              • Geospatial AI applications for sustainable and smart cities
            </CapabilityDescription>
          </CapabilityItem>
          <CapabilityItem
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <CapabilityTitle>Environmentally Sustainable Design</CapabilityTitle>
            <CapabilityDescription>
              • Urban heat and pollution analysis<br />
              • Urban energy modeling and analysis
            </CapabilityDescription>
          </CapabilityItem>
          <CapabilityItem
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <CapabilityTitle>Infrastructure Planning and Development</CapabilityTitle>
            <CapabilityDescription>
              • Autonomous Vehicles (AVs), the built environment and pedestrian interactions<br />
              • Smart airport, metaverse, and digital twins
            </CapabilityDescription>
          </CapabilityItem>
          <CapabilityItem
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <CapabilityTitle>GeoDesign</CapabilityTitle>
            <CapabilityDescription>
              • Extended Reality (XR) for participatory urban planning and design<br />
              • Web-based geospatial platforms and analytics for multi-stakeholder tasks
            </CapabilityDescription>
          </CapabilityItem>
        </CapabilitiesList>
      </CardSection>
      <CardSection
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <CardHeadingRow>
          <AccentBar />
          <CardTitle>UDT's Research & Development Focus</CardTitle>
        </CardHeadingRow>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }}>
          <img src="/images/smart-delivery.png" alt="Smart Delivery" style={{ maxWidth: '650px', width: '100%', height: 'auto', boxShadow: '0 4px 24px rgba(15,164,175,0.10)', borderRadius: '12px', background: '#fff' }} />
        </div>
      </CardSection>
    </HomeContainer>
  );
};

export default Home; 