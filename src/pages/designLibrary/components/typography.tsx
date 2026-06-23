import styled from "styled-components";
import { secondaryFont } from "../../../styling/styleUtils";

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
  color: oklch(14.5% 0 0);
  font-family: ${secondaryFont};
  text-transform: uppercase;
  font-size: 1.875rem;
  font-weight: 600;
`;

export const Heading3 = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
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
  color: oklch(44.6% 0.03 256.802);
`;
