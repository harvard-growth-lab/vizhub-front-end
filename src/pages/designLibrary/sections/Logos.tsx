import { BodyLarge, Heading2 } from "../components";
import styled from "styled-components";
import { backgroundColor, backgroundGray } from "../../landingPage/Utils";
import { lightBorderColor, secondaryFont } from "../../../styling/styleUtils";
import growthLabFullLogoBlack from "../../../assets/GL_logo_black.png";
import growthLabFaviconBlack from "../../../assets/GL_Atlas_favicon_black.png";
import growthLabFaviconWhite from "../../../assets/GL_Atlas_favicon.png";
import growthLabFullLogoWhite from "../../../assets/GL_logo_white.png";
import logoDownloadGrowthLabSvg from "../../../assets/hks-logo.svg";
import logoDownloadHarvardSvg from "../../landingPage/title.svg";
import logoDownloadGrowthLabNewSvg from "../../landingPage/titleIcon.svg";
import logoDownloadAtlasSvg from "../../landingPage/subtitle.svg";
import logoDownloadGrowthLabPng from "../../../assets/GL_logo_black.png";
import logoDownloadHarvardPng from "../../../assets/harvard-logo.png";
import logoDownloadGrowthLabNewPng from "../../../assets/growth-lab-new-logo-2022.png";
import logoDownloadAtlasPng from "../../../assets/GL_Atlas_favicon.png";
import logoDownloadGuideA from "../../landingPage/internalContent/how-we-build-digital-tools.pdf";
import logoDownloadGuideB from "../../landingPage/internalContent/how-we-build-digital-prototypes.pdf";
import logoDownloadGuideC from "../../landingPage/internalContent/communicating-topics.pdf";

const ImageAssetCardWrapper = styled.div`
  border: 1px solid ${lightBorderColor};
  border-radius: 12px;
  overflow: hidden;
  background-color: ${backgroundColor};
  margin: 1rem 0;
`;

const ImageAssetCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ImagePreviewContainer = styled.div<{ $background: string }>`
  width: 100%;
  height: 220px;
  background-color: ${({ $background }) => $background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImagePreview = styled.img`
  width: 80%;
  height: 60%;
  object-fit: contain;
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
  // color: ${backgroundGray};
  color: oklch(14.5% 0 0);
  // text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
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

const GuidelinesBox = styled.div`
  margin-top: 1.25rem;
  background-color: oklch(97% 0.014 254.604);
  border-radius: 12px;
  padding: 1rem 1.1rem;
  color: oklch(37.3% 0.034 259.733);
  border: 1px solid oklch(88.2% 0.059 254.128);
`;

const GuidelinesTitle = styled.h3`
  margin: 0 0 0.6rem 0;
  font-family: ${secondaryFont};
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  color: oklch(14.5% 0 0);
`;

const GuidelinesList = styled.ul`
  margin: 0;
  padding-left: 1.15rem;
  display: grid;
  gap: 0.35rem;
`;

const GuidelinesItem = styled.li`
  // font-family: ${secondaryFont};
  font-size: 0.875rem;
  line-height: 1.5;
  color: oklch(37.3% 0.034 259.733);
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

interface ImageAssetDownloads {
  svg: string;
  png: string;
  pdf: string;
}

interface ImageAssetCardProps {
  previewSrc: string;
  previewBackground: string;
  label: string;
  downloads: ImageAssetDownloads;
  fileBaseName?: string;
}

const ImageAssetCard = ({
  previewSrc,
  previewBackground,
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
      <ImagePreviewContainer $background={previewBackground}>
        <ImagePreview src={previewSrc} alt={label} />
      </ImagePreviewContainer>
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

export const LogosSection = () => (
  <>
    <Heading2>Logos</Heading2>
    <BodyLarge>
      Official Atlas of Economic Complexity and Growth Lab logo assets.
    </BodyLarge>
    <ImageAssetCardGrid>
      <ImageAssetCard
        previewSrc={growthLabFullLogoBlack}
        previewBackground="#ffffff"
        label="Growth Lab Full Logo Black"
        fileBaseName="growth_lab_logo"
        downloads={{
          svg: logoDownloadGrowthLabSvg,
          png: logoDownloadGrowthLabPng,
          pdf: logoDownloadGuideA,
        }}
      />
      <ImageAssetCard
        previewSrc={growthLabFaviconBlack}
        previewBackground="#ffffff"
        label="Favicon Black"
        fileBaseName="harvard_logo"
        downloads={{
          svg: logoDownloadHarvardSvg,
          png: logoDownloadHarvardPng,
          pdf: logoDownloadGuideB,
        }}
      />
      <ImageAssetCard
        previewSrc={growthLabFaviconWhite}
        previewBackground="#000000"
        label="Favicon White"
        fileBaseName="growth_lab_logo_2022"
        downloads={{
          svg: logoDownloadGrowthLabNewSvg,
          png: logoDownloadGrowthLabNewPng,
          pdf: logoDownloadGuideC,
        }}
      />
      <ImageAssetCard
        previewSrc={growthLabFullLogoWhite}
        previewBackground="#000000"
        label="Growth Lab Full Logo White"
        fileBaseName="atlas_mark"
        downloads={{
          svg: logoDownloadAtlasSvg,
          png: logoDownloadAtlasPng,
          pdf: logoDownloadGuideA,
        }}
      />
    </ImageAssetCardGrid>
    <GuidelinesBox>
      <GuidelinesTitle>Logo Usage Guidelines</GuidelinesTitle>
      <GuidelinesList>
        <GuidelinesItem>
          Maintain minimum clear space around the logo equal to the height of
          one node
        </GuidelinesItem>
        <GuidelinesItem>
          Do not stretch, distort, or rotate the logo
        </GuidelinesItem>
        <GuidelinesItem>
          Do not apply effects like shadows or gradients to the logo
        </GuidelinesItem>
        <GuidelinesItem>
          Ensure sufficient contrast between logo and background
        </GuidelinesItem>
        <GuidelinesItem>
          Use the full wordmark logo for primary branding
        </GuidelinesItem>
        <GuidelinesItem>
          Network icons can be used in smaller spaces or as favicon
        </GuidelinesItem>
        <GuidelinesItem>
          Minimum size: 150px width for full logo, 32px for icon only
        </GuidelinesItem>
      </GuidelinesList>
    </GuidelinesBox>
  </>
);
