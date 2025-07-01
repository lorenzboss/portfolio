import { GitHub, LinkedIn } from "@mui/icons-material";
import styled from "styled-components";
import { Bio } from "../../data/bio";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Lorenz Boss</Logo>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.github} target="display">
            <GitHub />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedIn />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          Design based on work by{" "}
          <Link target="_blank" href="https://github.com/rishavchanda">
            Rishav Chanda
          </Link>{" "}
          | {currentYear} Lorenz Boss
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
