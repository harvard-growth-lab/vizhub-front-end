import styled from "styled-components";
import {
  activeLinkColor,
  backgroundColor,
  backgroundGray,
  navBackgroundColor,
} from "../landingPage/Utils";
import {
  lightBorderColor,
  secondaryFont,
  tertiaryColor,
} from "../../styling/styleUtils";

export const PageShell = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
`;

export const Banner = styled.header`
  background-color: ${navBackgroundColor};
  border: 1px solid ${lightBorderColor};
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 1.25rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.aside`
  border: 1px solid ${lightBorderColor};
  border-radius: 18px;
  background-color: ${backgroundColor};
  padding: 0.5rem;
`;

export const SidebarButton = styled.button<{ active: boolean }>`
  width: 100%;
  border: 0;
  border-radius: 12px;
  padding: 0.75rem;
  margin: 0.2rem 0;
  text-align: left;
  font-family: ${secondaryFont};
  background-color: ${({ active }) =>
    active ? tertiaryColor : backgroundColor};
  color: ${({ active }) => (active ? activeLinkColor : backgroundGray)};
  cursor: pointer;
`;

export const MainSection = styled.main`
  border: 1px solid ${lightBorderColor};
  border-radius: 18px;
  background-color: ${backgroundColor};
  min-height: 420px;
  padding: 1.5rem;
`;

export const Heading1 = styled.h1`
  margin: 0;
  color: white;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  font-family: ${secondaryFont};
`;

export const Heading2 = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${backgroundGray};
  font-family: ${secondaryFont};
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const Heading3 = styled.h3`
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${backgroundGray};
  font-family: ${secondaryFont};
  text-transform: uppercase;
  font-size: 0.95rem;
  font-weight: 600;
`;

export const BodyLarge = styled.p`
  line-height: 1.7;
  margin: 0;
  font-size: 1rem;
`;

export const BodySmall = styled.p`
  line-height: 1.6;
  margin: 0;
  font-size: 0.9rem;
  color: ${backgroundGray};
`;
