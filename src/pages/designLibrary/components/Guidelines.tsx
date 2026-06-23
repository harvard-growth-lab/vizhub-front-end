import styled from "styled-components";
import { secondaryFont } from "../../../styling/styleUtils";

export const GuidelinesBox = styled.div`
  margin-top: 1.25rem;
  background-color: oklch(97% 0.014 254.604);
  border-radius: 12px;
  padding: 1rem 1.1rem;
  color: oklch(37.3% 0.034 259.733);
  border: 1px solid oklch(88.2% 0.059 254.128);
`;

export const GuidelinesTitle = styled.h3`
  margin: 0 0 0.6rem 0;
  font-family: ${secondaryFont};
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  color: oklch(14.5% 0 0);
`;

export const GuidelinesList = styled.ul`
  margin: 0;
  padding-left: 1.15rem;
  display: grid;
  gap: 0.35rem;
`;

export const GuidelinesItem = styled.li`
  font-size: 0.875rem;
  line-height: 1.5;
  color: oklch(37.3% 0.034 259.733);
`;
