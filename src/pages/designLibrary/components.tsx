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
  margin-bottom: 2.5rem;
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

export const SidebarButton = styled.button<{ $active: boolean }>`
  width: 100%;
  border: 0;
  border-radius: 12px;
  padding: 0.75rem;
  margin: 0.2rem 0;
  text-align: left;
  font-family: ${secondaryFont};
  background-color: ${({ $active }) =>
    $active ? tertiaryColor : backgroundColor};
  color: ${({ $active }) => ($active ? activeLinkColor : "oklch(14.5% 0 0);")};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.55rem;
`;

export const SidebarIcon = styled.span<{ $src: string }>`
  width: 0.95rem;
  height: 0.95rem;
  display: inline-block;
  flex-shrink: 0;
  background-color: currentColor;
  mask-image: url(${({ $src }) => $src});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  -webkit-mask-image: url(${({ $src }) => $src});
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
`;

export const SidebarLabel = styled.span`
  line-height: 1.2;
  font-size: 1rem;
`;

export const SidebarChevron = styled.span<{ $open: boolean }>`
  margin-left: auto;
  margin-right: 0.25rem;
  width: 0.35rem;
  height: 0.35rem;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: ${({ $open }) => ($open ? "rotate(45deg)" : "rotate(-45deg)")};
  transition: transform 0.2s ease;
  flex-shrink: 0;
`;

export const SubmenuContainer = styled.div`
  margin: 0.1rem 0 0.3rem 1.75rem;
`;

export const SubmenuButton = styled.button<{ $active: boolean }>`
  width: 100%;
  border: 0;
  border-radius: 10px;
  padding: 0.55rem 0.75rem;
  margin: 0.12rem 0;
  text-align: left;
  font-family: ${secondaryFont};
  background-color: ${({ $active }) =>
    $active ? tertiaryColor : backgroundColor};
  color: ${({ $active }) => ($active ? activeLinkColor : "oklch(14.5% 0 0);")};
  cursor: pointer;
  line-height: 1.2;
  font-size: 0.95rem;
`;

export const MainSection = styled.main`
  //   border: 1px solid ${lightBorderColor};
  border-radius: 18px;
  background-color: ${backgroundColor};
  min-height: 420px;
  padding: 0 1.5rem;
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
  //   color: ${backgroundGray};
  color: oklch(14.5% 0 0);
  font-family: ${secondaryFont};
  text-transform: uppercase;
  font-size: 1.875rem;
  font-weight: 600;
`;

export const Heading3 = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  //   color: ${backgroundGray};
  color: oklch(14.5% 0 0);
  font-family: ${secondaryFont};
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const BodyLarge = styled.p`
  line-height: 1.7;
  margin: 0;
  font-size: 1rem;
  color: oklch(44.6% 0.03 256.802);
`;

export const BodySmall = styled.p`
  line-height: 1.6;
  margin: 0;
  font-size: 0.875rem;
  //   color: ${backgroundGray};
  color: oklch(44.6% 0.03 256.802);
`;
