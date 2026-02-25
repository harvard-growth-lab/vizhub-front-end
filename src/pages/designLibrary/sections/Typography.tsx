import { BodyLarge, Heading2 } from "../components";
import styled from "styled-components";
import {
  activeLinkColor,
  backgroundColor,
  backgroundGray,
} from "../../landingPage/Utils";
import { lightBorderColor, secondaryFont } from "../../../styling/styleUtils";

const FontSectionContainer = styled.div`
  border: 1px solid ${lightBorderColor};
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  background-color: ${backgroundColor};
`;

const FontHeader = styled.div`
  padding-bottom: 3rem;
  border-bottom: 1px solid ${lightBorderColor};
`;

const FontName = styled.p`
  font-size: 3rem;
  margin: 0;
  padding: 0;
`;

const FontTitle = styled.h3`
  margin: 0;
  color: ${backgroundGray};
  font-family: ${secondaryFont};
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 0;
`;

const FontLink = styled.a`
  color: ${activeLinkColor};
  text-decoration: none;
  font-family: ${secondaryFont};
  font-size: 0.85rem;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const FontSampleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-top: 1rem;
`;

const FontSampleItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${lightBorderColor};
`;

const WeightLabel = styled.span`
  font-family: ${secondaryFont};
  font-size: 0.85rem;
  font-weight: 600;
  color: ${backgroundGray};
  text-transform: uppercase;
`;

const SampleText = styled.p<{ weight: number }>`
  margin: 0;
  font-family: "Source Sans 3", sans-serif;
  font-weight: ${({ weight }) => weight};
  font-size: 2.25rem;
  line-height: 1.6;
  color: #333;
`;

const CharacterSetWrapper = styled.div``;

const CharacterSetText = styled.p`
  margin: 0;
  font-family: "Source Sans 3", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  color: #333;
  word-break: break-all;
  white-space: pre-line;
`;

interface FontDisplayProps {
  fontName: string;
  fontFamily: string;
  googleFontsUrl: string;
  weights: Array<{ weight: number; label: string }>;
  characterSet: string;
}

const FontDisplay = ({
  fontName,
  fontFamily,
  googleFontsUrl,
  weights,
  characterSet,
}: FontDisplayProps) => (
  <FontSectionContainer>
    <FontHeader>
      <FontTitle>{fontName}</FontTitle>
      <FontName style={{ fontFamily }}>Source Sans 3</FontName>
      <FontLink href={googleFontsUrl} target="_blank" rel="noopener noreferrer">
        View on Google Fonts →
      </FontLink>
    </FontHeader>
    <FontSampleWrapper>
      {weights.map(({ weight, label }) => (
        <FontSampleItem key={weight}>
          <WeightLabel>
            {label} ({weight})
          </WeightLabel>
          <SampleText weight={weight} style={{ fontFamily }}>
            The quick brown fox jumps over the lazy dog
          </SampleText>
        </FontSampleItem>
      ))}
    </FontSampleWrapper>
    <CharacterSetWrapper>
      <FontTitle>Character Set</FontTitle>
      <CharacterSetText>{characterSet}</CharacterSetText>
    </CharacterSetWrapper>
  </FontSectionContainer>
);

export const TypographySection = () => (
  <>
    <Heading2>Typography</Heading2>
    <FontDisplay
      fontName="Primary Font"
      fontFamily="'Source Sans 3', sans-serif"
      googleFontsUrl="https://fonts.google.com/specimen/Source+Sans+3"
      weights={[
        { weight: 300, label: "Light" },
        { weight: 400, label: "Regular" },
        { weight: 600, label: "SemiBold" },
        { weight: 700, label: "Bold" },
      ]}
      characterSet={
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n0123456789!@#$%^&*()"
      }
    />
  </>
);
