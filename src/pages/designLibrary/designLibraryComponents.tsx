import styled from "styled-components";
import { useState } from "react";
import {
  activeLinkColor,
  backgroundColor,
  backgroundGray,
} from "../landingPage/Utils";
import { lightBorderColor, secondaryFont } from "../../styling/styleUtils";
import { BodySmall } from "./components";

export const ColorCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

export interface PaletteColor {
  name: string;
  hex: string;
}

export interface ColorGridProps {
  colors: PaletteColor[];
}

export const ColorGrid = ({ colors }: ColorGridProps) => (
  <ColorCardContainer>
    {colors.map((color) => (
      <ColorCard key={color.hex} color={color.hex} label={color.name} />
    ))}
  </ColorCardContainer>
);

const Card = styled.div`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${lightBorderColor};
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ColorSwatch = styled.div<{ color: string }>`
  width: 100%;
  height: 100px;
  background-color: ${({ color }) => color};
`;

const CardContent = styled.div`
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-family: ${secondaryFont};
  font-size: 0.85rem;
  font-weight: 600;
  color: ${backgroundGray};
  text-transform: uppercase;
  margin: 0;
`;

const HexButton = styled.button<{ copied?: boolean }>`
  border: 1px solid ${lightBorderColor};
  border-radius: 6px;
  padding: 0.5rem;
  background-color: ${({ copied }) => (copied ? "#e8f5e9" : backgroundColor)};
  color: ${({ copied }) => (copied ? "#2e7d32" : activeLinkColor)};
  font-family: ${secondaryFont};
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;

  &:hover {
    background-color: ${({ copied }) => (copied ? "#e8f5e9" : "#f5f5f5")};
  }
`;

export interface ColorCardProps {
  color: string;
  label: string;
}

export const ColorCard = ({ color, label }: ColorCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyHex = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card>
      <ColorSwatch color={color} />
      <CardContent>
        <Label>{label}</Label>
        <HexButton copied={copied} onClick={handleCopyHex}>
          {copied ? "✓ Copied" : color}
        </HexButton>
      </CardContent>
    </Card>
  );
};

const GradientSwatch = styled.div<{ gradient: string }>`
  width: 100%;
  height: 120px;
  background: ${({ gradient }) => gradient};
`;

const GradientCodeButton = styled.button<{ copied?: boolean }>`
  width: 100%;
  border: 1px solid ${lightBorderColor};
  border-radius: 6px;
  padding: 0.75rem;
  background-color: ${({ copied }) => (copied ? "#e8f5e9" : backgroundColor)};
  color: ${({ copied }) => (copied ? "#2e7d32" : activeLinkColor)};
  font-family: ${secondaryFont};
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: ${({ copied }) => (copied ? "#e8f5e9" : "#f5f5f5")};
  }
`;

const FullWidthCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${lightBorderColor};
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s ease;
  margin: 1rem 0;

  &:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const GradientCardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export interface GradientCardProps {
  gradient: string;
}

export const GradientCard = ({ gradient }: GradientCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyGradient = () => {
    navigator.clipboard.writeText(gradient);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <FullWidthCard>
      <GradientSwatch gradient={gradient} />
      <GradientCardContent>
        <GradientCodeButton copied={copied} onClick={handleCopyGradient}>
          {copied ? "✓ Copied" : gradient}
        </GradientCodeButton>
      </GradientCardContent>
    </FullWidthCard>
  );
};

const DownloadableHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const DownloadButtonStyled = styled.button`
  border: none;
  background-color: #1976d2;
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${secondaryFont};
  font-size: 0.85rem;
  font-weight: 600;
  transition: background-color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background-color: #1565c0;
  }
`;

export interface DownloadableSectionProps {
  label: string;
  description: string;
  onDownload: () => void;
}

export const DownloadableSection = ({
  label,
  description,
  onDownload,
}: DownloadableSectionProps) => {
  const Heading3Wrapper = styled.div`
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  `;

  return (
    <Heading3Wrapper>
      <DownloadableHeaderWrapper>
        <div>
          <div
            style={{
              color: backgroundGray,
              fontFamily: secondaryFont,
              textTransform: "uppercase",
              fontSize: "0.95rem",
              fontWeight: 600,
            }}
          >
            {label}
          </div>
          <BodySmall>{description}</BodySmall>
        </div>
        <DownloadButtonStyled onClick={onDownload}>
          ↓ Download CSV
        </DownloadButtonStyled>
      </DownloadableHeaderWrapper>
    </Heading3Wrapper>
  );
};
