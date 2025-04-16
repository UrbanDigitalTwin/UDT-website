import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const ContactInfo = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  svg {
    margin-right: 1rem;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.primary};
    flex-shrink: 0;
    margin-top: 0.25rem;
  }
`;

const ContactText = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const ContactLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const Contact = () => {
  return (
    <PageContainer>
      <Title>Contact Us</Title>
      <ContactGrid>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.544793438546!2d-81.20047638491142!3d28.585731982434946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7685bb824d9cd%3A0x3c3c1f50a5a5c0b5!2sPartnership%20II%2C%203100%20Technology%20Pkwy%2C%20Orlando%2C%20FL%2032826!5e0!3m2!1sen!2sus!4v1647881147757!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lab Location"
          />
        </MapContainer>
        <ContactInfo>
          <ContactItem>
            <FaMapMarkerAlt />
            <ContactText>
              Partnership II<br />
              3100 Technology Parkway<br />
              Orlando, FL 32826<br />
              USA
            </ContactText>
          </ContactItem>
          <ContactItem>
            <FaEnvelope />
            <ContactText>
              <ContactLink href="mailto:soheilsabri@ucf.edu">
                soheilsabri@ucf.edu
              </ContactLink>
            </ContactText>
          </ContactItem>
          <ContactItem>
            <FaLinkedin />
            <ContactText>
              <ContactLink 
                href="https://www.linkedin.com/company/urban-digital-twin-lab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Urban Digital Twin Lab
              </ContactLink>
            </ContactText>
          </ContactItem>
        </ContactInfo>
      </ContactGrid>
    </PageContainer>
  );
};

export default Contact; 