import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('/images/patnership-2.jpeg') center/cover no-repeat;
  color: #fff;
  padding: 0.5rem 0 0.3rem 0;
  margin-top: 1.2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.1rem;
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0;
  }
`;

const FooterCol = styled.div`
  flex: 1 1 200px;
  min-width: 150px;
  position: relative;
  padding: 0 0.5rem;

  @media (max-width: 900px) {
    padding: 0;
    border: none !important;
  }
`;

const Divider = styled.div`
  width: 1px;
  background: #333;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  @media (max-width: 900px) {
    display: none;
  }
`;

const LogoRow = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  margin-bottom: 0.3rem;
`;

const LabLogo = styled.img`
  height: 40px;
  width: auto;
  border-radius: 6px;
  background: #fff;
  padding: 1px;
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.7rem;
  margin-top: 0.1rem;
`;

const SocialIcon = styled.a`
  color: #FFC904;
  font-size: 1.2rem;
  transition: color 0.2s;
  &:hover {
    color: #fff;
  }
`;

const FooterTitle = styled.h4`
  color: #FFC904;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: block;
  margin-bottom: 0.2rem;
  font-size: 0.92rem;
  &:hover {
    color: #FFC904;
  }
`;

const ContactText = styled.p`
  margin: 0 0 0.2rem 0;
  font-size: 0.92rem;
  color: #fff;
`;

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      {/* Column 1: Logos and Social */}
      <FooterCol>
        <LogoRow>
          <LabLogo src="/images/UDT_Logo-V01.png" alt="UDT Lab Logo" />
          <a href="https://www.cecs.ucf.edu/smst/" target="_blank" rel="noopener noreferrer">
            <LabLogo src="/images/ucf-logo.png" alt="UCF Logo" />
          </a>
        </LogoRow>
        <SocialRow>
          <SocialIcon href="https://twitter.com/ISTUCF" target="_blank" rel="noopener noreferrer"><FaTwitter /></SocialIcon>
          <SocialIcon href="https://www.instagram.com/istucf/" target="_blank" rel="noopener noreferrer"><FaInstagram /></SocialIcon>
          <SocialIcon href="https://www.linkedin.com/company/urban-digital-twin-lab/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIcon>
        </SocialRow>
        <Divider />
      </FooterCol>

      {/* Column 2: Menu */}
      <FooterCol>
        <FooterTitle>Menu</FooterTitle>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/people">People</FooterLink>
        <FooterLink to="/projects">Projects</FooterLink>
        <FooterLink to="/teaching">Teaching</FooterLink>
        <FooterLink to="/news">News</FooterLink>
        <FooterLink to="/publications">Publications</FooterLink>
        <FooterLink to="/contact">Contact</FooterLink>
        <Divider />
      </FooterCol>

      {/* Column 3: Contact Info */}
      <FooterCol>
        <FooterTitle>Contact Us</FooterTitle>
        <ContactText><b>Email:</b> soheilsabri@ucf.edu</ContactText>
        <ContactText><b>Office Hours:</b> 8 a.m. to 5 p.m. Monday – Friday</ContactText>
        <ContactText><b>Location:</b><br />
          Partnership II, Suit 135C, 3100 Technology Pkwy, Orlando, FL 32826
        </ContactText>
      </FooterCol>
    </FooterContent>
  </FooterContainer>
);

export default Footer; 