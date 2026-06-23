import styled from "styled-components";
import {
  activeLinkColor,
  backgroundColor,
  navBackgroundColor,
} from "../../landingPage/Utils";
import {
  lightBorderColor,
  secondaryFont,
  tertiaryColor,
} from "../../../styling/styleUtils";
import { maskIcon } from "../utils/maskIcon";

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
  ${({ $src }) => maskIcon($src)}
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
  border-radius: 18px;
  background-color: ${backgroundColor};
  min-height: 420px;
  padding: 0 1.5rem;
`;
