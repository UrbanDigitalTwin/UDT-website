import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

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

const YearGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const YearCard = styled(motion.div)`
  background: ${props => props.active ? props.theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : props.theme.colors.primary};
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  transition: all 0.3s ease;
`;

const NewsSection = styled(motion.div)`
  margin-top: 2rem;
`;

const MonthSection = styled.div`
  margin-bottom: 3rem;
`;

const MonthTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
  padding-bottom: 0.5rem;
`;

const NewsCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
`;

const NewsContent = styled.div`
  padding: 2rem;
`;

const NewsTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

const NewsImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: contain;
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;
`;

const NewsText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  margin-bottom: 1rem;
`;

const newsData = {
  2025: {
    April: [
      {
        title: "Next-Generation Sustainability: Advancing the Future with Geospatial Intelligence",
        image: "/images/NextGenerationUnimelb.jpg",
        content: "Dr. Sabri delivered a talk in an executive panel discussion titled \"Navigate the Future of Geospatial Technology\" at the 2025 Geospatial Leadership Training and Global Forum for the Next Generation of the Sustainability Agenda, held in Melbourne from April 1–3, 2025.\n\nAddressing a global audience of geospatial professionals and thought leaders, the panel explored transformative trends shaping the future of the field. Topics included GeoAI, Digital Twins, on-demand geospatial ecosystems, and machine-actionable data—all critical components for driving innovation in sustainable development and smart decision-making."
      }
    ],
    March: [
      {
        title: "Podcast on Digital Twin Book",
        image: "/images/podcast.jpeg",
        AudioUrl: 'https://digitaltwinconsortium.podbean.com/e/new-book-digital-twin-fundamentals-and-applications/',
        content: "A new episode of the Digital Twin Consortium podcast features an engaging conversation with Dr. Sabri, and Dr. Kostas Alexandridis, as they discuss their newly edited volume, Digital Twin Fundamentals and Applications, recently published by Springer Nature.\n\nHosted by Bill Hoffman, Chairman & CEO of the Object Management Group (OMG), the podcast brings together the two co-chairs of the Digital Twin Consortium's Academia and Research Working Group. The discussion explores the growing significance of digital twin technology and the book's potential impact across academia, industry, and government sectors.\n\nThe episode offers insights into the foundational concepts and real-world applications covered in the book, highlighting its value as a comprehensive resource for anyone working in or studying the field of digital twins."
      },
      {
        title: "Osaka high school students experiencing 3D urban visualization and analytics on video wall",
        image: "/images/udt-lab-1.jpeg",
        content: "UDT hosted the STEM high school students from Osaka, Japan. Our team, comprising Dr. Sabri and Graduate Researchers, Kyle Shervington, Kalp Thakkar, and Naga Vaishnavi Marupaka, demonstrated some of the UDT research projects and engaged with the students."
      },
      {
        title: "STEM students learning how extended reality (XR) improve urban planning and design processes",
        image: "/images/UDT_LAB.jpg",
        content: "Osaka high-school students engaged with the Urban Digital Twin technologies including analytic tools, and different visualization platforms to understand the value of UDT for better understanding urban phenomena and community engagement."
      }
    ],
    February: [
      {
        title: "Guest Lecture",
        content: "UDT hosted Mr. Pieter van Schalkwyk, CEO of XMPro, for his interesting and engaging guest lecture in the course: \"Introduction to Digital Transformation and Digital Twins\" at the School of Modeling, Simulation, & Training. As part of collaborations, UDT and XMPro agreed to use their educational license for the students to make sense of the capabilities periodical table (CPT) toolkit developed at the Digital Twin Consortium."
      }
    ],
    January: [
      {
        title: "Developing the Next Generation of Systems and Enabling Technologies Using Digital Twin Testbeds",
        content: "Dr. Soheil Sabri was invited to the Technical Advisory Committee (TAC) of the Digital Twin Consortium's new initiative for Digital Twin Testbeds. The Digital Twin Testbeds initiative is a member-driven effort aimed at advancing digital twin systems and their enabling technologies. It offers a collaborative and comprehensive approach for DTC members to develop, test, verify, validate, and implement digital twin systems while driving progress in digital twin-enabling technologies. For more information see the DTC's website."
      }
    ]
  },
  2024: {
    December: [
      {
        title: "Guest Lecture",
        image: "/images/december-2024.png",
        content: "On December 18th, UDT hosted Prof. Dr. Oliver Rose from Universität der Bundeswehr (German Armed Forces) München as a speaker in the Modeling and Simulation and Digital Twin Seminar series."
      },
      {
        title: "Panel Discussion",
        image: "/images/novemenr.png",
        content: "On December 11th, UDT hosted a panel session at the IRF Global RT2 Conference and Exhibition, in Orlando, FL. This panel discussion brought together experts, thought leaders, and practitioners from the fields of digital twin technology, transportation engineering, planning, modeling and simulation, city management, and the AV industry. The panelists shared innovative solutions that highlight the convergence of Urban Digital Twins and GeoAI to optimize and enhance the decision maker's understanding of the implication of Avs deployment for the built environment change."
      }
    ],
    October: [
      {
        title: "Meets",
        image: "/images/october.png",
        content: "Dr. Soheil Sabri participated in the 2024 Modeling and Simulation Program (MSP) Taskforce Meeting in the Department of Education, Washington, DC, October 1 - 2, 2024. Dr. Sabri presented the outcomes of the new course \"Introduction to Digital Transformation and Digital Twins\". He will contribute to a sub-committee for identifying core knowledge and skills that individuals who participate in modeling and simulation programs should acquire."
      }
    ],
    February: [
      {
        title: "An Exploration of Human Machine Systems and Digital Twin Technologies at the IEEE / UCF Workshop",
        image: "/images/feb.png",
        content: "This February, an interactive, collaborative workshop between IEEE Systems, Man, and Cybernetics Society (SMCS) and the Institute of Simulation and Training, School of Modeling, Simulation, and Training at the University of Central Florida was held to explore the intersection of Human-Machine Systems (HMS) and Digital Twin Technologies (DTT)..."
      }
    ]
  },
  2023: {
    November: [
      {
        title: "Industry Panel in IEEE DTPI 2023: Unlocking Digital Infrastructure Potentials",
        image: "/images/2023.png",
        content: "In an era of rapid digital modernization and technological advancement, \"Smart Infrastructure\" has gained significant attention. Within this broader context, Digital Twins, Metaverse, and Smart Airports are emerging as transformative elements that can reshape the digital landscape and the aviation industry..."
      }
    ]
  }
};

const News = () => {
  const [selectedYear, setSelectedYear] = useState(2025);

  const yearVariants = {
    hover: { scale: 1.05, y: -5 },
    tap: { scale: 0.95 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const newsCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <PageContainer>
      <Title>News</Title>
      
      <YearGrid>
        {[2025, 2024, 2023].map((year) => (
          <YearCard
            key={year}
            active={selectedYear === year}
            onClick={() => setSelectedYear(year)}
            variants={yearVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {year}
          </YearCard>
        ))}
      </YearGrid>

      <AnimatePresence mode="wait">
        <NewsSection
          key={selectedYear}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={contentVariants}
          transition={{ duration: 0.5 }}
        >
          {Object.entries(newsData[selectedYear]).map(([month, news]) => (
            <MonthSection key={month}>
              <MonthTitle>{month}</MonthTitle>
              {news.map((item, index) => (
                <NewsCard
                  key={index}
                  variants={newsCardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  {item.image && (
                    <NewsImage src={item.image} alt={item.title} />
                  )}
                  <NewsContent>
                    <NewsTitle>{item.title}</NewsTitle>
                    <NewsText>{item.content}</NewsText>
                  </NewsContent>
                </NewsCard>
              ))}
            </MonthSection>
          ))}
        </NewsSection>
      </AnimatePresence>
    </PageContainer>
  );
};

export default News; 
