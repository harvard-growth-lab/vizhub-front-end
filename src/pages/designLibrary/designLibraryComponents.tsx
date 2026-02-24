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

const FontSectionContainer = styled.div`
  border: 1px solid ${lightBorderColor};
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  background-color: ${backgroundColor};
`;

const FontHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const FontTitle = styled.h3`
  margin: 0;
  color: ${backgroundGray};
  font-family: ${secondaryFont};
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
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
`;

const FontSampleItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`;

const CharacterSetWrapper = styled.div`
  border-top: 1px solid ${lightBorderColor};
  padding-top: 1rem;
`;

const CharacterSetTitle = styled.h4`
  margin: 0 0 0.75rem 0;
  font-family: ${secondaryFont};
  font-size: 0.85rem;
  font-weight: 600;
  color: ${backgroundGray};
  text-transform: uppercase;
`;

const CharacterSetText = styled.p`
  margin: 0;
  font-family: "Source Sans 3", sans-serif;
  font-weight: 400;
  font-size: 0.95rem;
  line-height: 1.8;
  color: #333;
  word-break: break-all;
`;

export interface FontDisplayProps {
  fontName: string;
  fontFamily: string;
  googleFontsUrl: string;
  weights: Array<{ weight: number; label: string }>;
  characterSet: string;
}

export const FontDisplay = ({
  fontName,
  fontFamily,
  googleFontsUrl,
  weights,
  characterSet,
}: FontDisplayProps) => (
  <FontSectionContainer>
    <FontHeader>
      <FontTitle>{fontName}</FontTitle>
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
      <CharacterSetTitle>Character Set</CharacterSetTitle>
      <CharacterSetText>{characterSet}</CharacterSetText>
    </CharacterSetWrapper>
  </FontSectionContainer>
);

const ImageAssetCardWrapper = styled.div`
  border: 1px solid ${lightBorderColor};
  border-radius: 12px;
  overflow: hidden;
  background-color: ${backgroundColor};
  margin: 1rem 0;
`;

export const ImageAssetCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 220px;
  object-fit: contain;
  background-color: #f8f8f8;
  display: block;
`;

const ImageAssetCardFooter = styled.div`
  padding: 0.85rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.6rem;
`;

const ImageAssetLabel = styled.span`
  font-family: ${secondaryFont};
  color: ${backgroundGray};
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
`;

const FormatButtonGroup = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
  width: 100%;
`;

const ImageDownloadButton = styled.button`
  border: none;
  background-color: #1976d2;
  color: white;
  border-radius: 6px;
  padding: 0.4rem 0.6rem;
  font-family: ${secondaryFont};
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  flex: 1;

  &:hover {
    background-color: #1565c0;
  }
`;

const DownloadIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M12 3V14M12 14L8 10M12 14L16 10M5 18H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export interface ImageAssetDownloads {
  svg: string;
  png: string;
  pdf: string;
}

export interface ImageAssetCardProps {
  previewSrc: string;
  label: string;
  downloads: ImageAssetDownloads;
  fileBaseName?: string;
}

export const ImageAssetCard = ({
  previewSrc,
  label,
  downloads,
  fileBaseName,
}: ImageAssetCardProps) => {
  const baseName = fileBaseName || label.replace(/\s+/g, "_").toLowerCase();

  const triggerDownload = async (
    url: string,
    extension: "svg" | "png" | "pdf",
  ) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = `${baseName}.${extension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(objectUrl);
    } catch {
      const link = document.createElement("a");
      link.href = url;
      link.download = `${baseName}.${extension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <ImageAssetCardWrapper>
      <ImagePreview src={previewSrc} alt={label} />
      <ImageAssetCardFooter>
        <ImageAssetLabel>{label}</ImageAssetLabel>
        <FormatButtonGroup>
          <ImageDownloadButton
            type="button"
            onClick={() => triggerDownload(downloads.svg, "svg")}
          >
            <DownloadIcon /> SVG
          </ImageDownloadButton>
          <ImageDownloadButton
            type="button"
            onClick={() => triggerDownload(downloads.png, "png")}
          >
            <DownloadIcon /> PNG
          </ImageDownloadButton>
          <ImageDownloadButton
            type="button"
            onClick={() => triggerDownload(downloads.pdf, "pdf")}
          >
            <DownloadIcon /> PDF
          </ImageDownloadButton>
        </FormatButtonGroup>
      </ImageAssetCardFooter>
    </ImageAssetCardWrapper>
  );
};
