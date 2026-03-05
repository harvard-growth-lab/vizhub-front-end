import styled from "styled-components";
import { useState } from "react";
import {
  activeLinkColor,
  backgroundColor,
  backgroundGray,
} from "../landingPage/Utils";
import { lightBorderColor, secondaryFont } from "../../styling/styleUtils";
import copyIcon from "./assets/copy.svg";
import downloadIcon from "./assets/download.svg";
import { BodySmall } from "./components";

export const ColorCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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
  height: 150px;
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
  font-size: 1rem;
  //   font-weight: 600;
  //   color: ${backgroundGray};
  color: oklch(14.5% 0 0);
  text-transform: uppercase;
  margin: 0;
`;

const HexButton = styled.button`
  //   border: 1px solid ${lightBorderColor};
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  //   background-color: ${backgroundColor};
  color: ${activeLinkColor};
  background-color: oklch(96.7% 0.003 264.542);
  //   color: oklch(14.5% 0 0);
  font-family: ${secondaryFont};
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  &:hover {
    // background-color: #f5f5f5;
    background-color: oklch(92.8% 0.006 264.531);
  }
`;

const CopyIcon = styled.span`
  width: 0.85rem;
  height: 0.85rem;
  flex-shrink: 0;
  background-color: oklch(55.1% 0.027 264.364);
  mask-image: url(${copyIcon});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  -webkit-mask-image: url(${copyIcon});
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
`;

const ThinCheckIcon = styled.svg`
  width: 0.85rem;
  height: 0.85rem;
  flex-shrink: 0;
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
        <HexButton onClick={handleCopyHex}>
          <span>{color}</span>
          {copied ? (
            <ThinCheckIcon viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8.5L6.5 12L13 5"
                stroke="green"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </ThinCheckIcon>
          ) : (
            <CopyIcon aria-hidden="true" />
          )}
        </HexButton>
      </CardContent>
    </Card>
  );
};

const DownloadableHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
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

const DownloadIcon = styled.img`
  width: 0.9rem;
  height: 0.9rem;
  display: block;
  filter: brightness(0) invert(1);
`;

const Heading3Wrapper = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
`;

const SectionLabel = styled.div`
  color: oklch(14.5% 0 0);
  font-family: ${secondaryFont};
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;
`;

export interface DownloadableSectionProps {
  label: string;
  description: string;
  onDownload: () => void;
  downloadLabel?: string;
}

export const DownloadableSection = ({
  label,
  description,
  onDownload,
  downloadLabel = "Download CSV",
}: DownloadableSectionProps) => (
  <Heading3Wrapper>
    <DownloadableHeaderWrapper>
      <div>
        <SectionLabel>{label}</SectionLabel>
        <BodySmall>{description}</BodySmall>
      </div>
      <DownloadButtonStyled onClick={onDownload}>
        <DownloadIcon src={downloadIcon} alt="" aria-hidden="true" />
        {downloadLabel}
      </DownloadButtonStyled>
    </DownloadableHeaderWrapper>
  </Heading3Wrapper>
);

const GradientSwatch = styled.div<{ $gradient: string }>`
  width: 100%;
  height: 120px;
  background: ${({ $gradient }) => $gradient};
`;

const GradientCodeButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 6px;
  padding: 0.75rem;
  background-color: oklch(96.7% 0.003 264.542);
  color: ${activeLinkColor};
  font-family: ${secondaryFont};
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  &:hover {
    background-color: oklch(92.8% 0.006 264.531);
  }
`;

const GradientText = styled.span`
  min-width: 0;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

const GradientCardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
      <GradientSwatch $gradient={gradient} />
      <GradientCardContent>
        <GradientCodeButton onClick={handleCopyGradient}>
          <GradientText>{gradient}</GradientText>
          {copied ? (
            <ThinCheckIcon viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8.5L6.5 12L13 5"
                stroke="green"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </ThinCheckIcon>
          ) : (
            <CopyIcon aria-hidden="true" />
          )}
        </GradientCodeButton>
      </GradientCardContent>
    </FullWidthCard>
  );
};

export const ImageAssetCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ImageAssetCardWrapper = styled.div`
  border: 1px solid ${lightBorderColor};
  border-radius: 12px;
  overflow: hidden;
  background-color: ${backgroundColor};
  margin: 0;
`;

const ImagePreviewContainer = styled.div<{ $background: string }>`
  width: 100%;
  height: 220px;
  background-color: ${({ $background }) => $background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImagePreview = styled.img<{ $previewMode: "contain" | "cover" }>`
  width: ${({ $previewMode }) => ($previewMode === "cover" ? "100%" : "80%")};
  height: ${({ $previewMode }) => ($previewMode === "cover" ? "100%" : "60%")};
  object-fit: ${({ $previewMode }) => $previewMode};
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
  color: oklch(14.5% 0 0);
  font-size: 1rem;
  line-height: 1.5;
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
  background-color: oklch(96.7% 0.003 264.542);
  color: oklch(14.5% 0 0);
  border-radius: 6px;
  padding: 0.4rem 0.6rem;
  font-family: ${secondaryFont};
  font-size: 0.875rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  flex: 1;

  &:hover {
    background-color: oklch(92.8% 0.006 264.531);
  }
`;

const AssetDownloadIcon = styled.span`
  width: 0.75rem;
  height: 0.75rem;
  display: inline-block;
  flex-shrink: 0;
  background-color: currentColor;
  mask-image: url(${downloadIcon});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  -webkit-mask-image: url(${downloadIcon});
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
`;

export type ImageAssetDownloads = Record<string, string>;

export interface ImageAssetCardProps {
  previewSrc: string;
  previewBackground: string;
  previewMode?: "contain" | "cover";
  label: string;
  downloads: ImageAssetDownloads;
  fileBaseName?: string;
}

export const ImageAssetCard = ({
  previewSrc,
  previewBackground,
  previewMode = "contain",
  label,
  downloads,
  fileBaseName,
}: ImageAssetCardProps) => {
  const baseName = fileBaseName || label.replace(/\s+/g, "_").toLowerCase();

  const triggerDownload = async (url: string, extension: string) => {
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
      <ImagePreviewContainer $background={previewBackground}>
        <ImagePreview src={previewSrc} alt={label} $previewMode={previewMode} />
      </ImagePreviewContainer>
      <ImageAssetCardFooter>
        <ImageAssetLabel>{label}</ImageAssetLabel>
        <FormatButtonGroup>
          {Object.entries(downloads).map(([extension, url]) => (
            <ImageDownloadButton
              key={extension}
              type="button"
              onClick={() => triggerDownload(url, extension)}
            >
              <AssetDownloadIcon /> {extension.toUpperCase()}
            </ImageDownloadButton>
          ))}
        </FormatButtonGroup>
      </ImageAssetCardFooter>
    </ImageAssetCardWrapper>
  );
};

export const IconCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

const IconCardWrapper = styled.div`
  border: 1px solid oklch(92.8% 0.006 264.531);
  border-radius: 12px;
  overflow: hidden;
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
`;

const IconCardTop = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  padding: 0;
`;

const IconCardImage = styled.img`
  width: 70%;
  height: 70%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const IconCardBottom = styled.div`
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  align-items: stretch;
  border-top: 1px solid ${lightBorderColor};
`;

const IconCardName = styled.span`
  color: oklch(14.5% 0 0);
  font-family: ${secondaryFont};
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
  line-height: 1.4;
`;

const IconDownloadButton = styled.button`
  width: 100%;
  border: none;
  background-color: oklch(96.7% 0.003 264.542);
  color: oklch(14.5% 0 0);
  border-radius: 6px;
  padding: 0.38rem 0.75rem;
  font-family: ${secondaryFont};
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  margin-top: 0.2rem;

  &:hover {
    background-color: oklch(92.8% 0.006 264.531);
  }
`;

export interface IconCardProps {
  iconSrc: string;
  iconName: string;
  downloadFileSrc: string;
  downloadExtension: string;
  fileBaseName?: string;
}

export const IconCard = ({
  iconSrc,
  iconName,
  downloadFileSrc,
  downloadExtension,
  fileBaseName,
}: IconCardProps) => {
  const baseName =
    fileBaseName ||
    iconName
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "");

  const triggerDownload = async () => {
    try {
      const response = await fetch(downloadFileSrc);
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = `${baseName}.${downloadExtension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(objectUrl);
    } catch {
      const link = document.createElement("a");
      link.href = downloadFileSrc;
      link.download = `${baseName}.${downloadExtension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <IconCardWrapper>
      <IconCardTop>
        <IconCardImage src={iconSrc} alt={iconName} />
      </IconCardTop>
      <IconCardBottom>
        <IconCardName>{iconName}</IconCardName>
        <IconDownloadButton type="button" onClick={triggerDownload}>
          <AssetDownloadIcon /> {downloadExtension.toUpperCase()}
        </IconDownloadButton>
      </IconCardBottom>
    </IconCardWrapper>
  );
};

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
