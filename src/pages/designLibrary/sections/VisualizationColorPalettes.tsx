import { useState } from "react";
import { BodyLarge, Heading2 } from "../components";
import { BodySmall } from "../components";
import { ColorGrid, PaletteColor } from "../designLibraryComponents";
import styled from "styled-components";
import {
  activeLinkColor,
  backgroundColor,
  backgroundGray,
} from "../../landingPage/Utils";
import { lightBorderColor, secondaryFont } from "../../../styling/styleUtils";
import downloadIcon from "../assets/download.svg";
import copyIcon from "../assets/copy.svg";
import { downloadGradientAsCSV, downloadPaletteAsCSV } from "./downloadUtils";

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

interface DownloadableSectionProps {
  label: string;
  description: string;
  onDownload: () => void;
}

const DownloadableSection = ({
  label,
  description,
  onDownload,
}: DownloadableSectionProps) => (
  <Heading3Wrapper>
    <DownloadableHeaderWrapper>
      <div>
        <SectionLabel>{label}</SectionLabel>
        <BodySmall>{description}</BodySmall>
      </div>
      <DownloadButtonStyled onClick={onDownload}>
        <DownloadIcon src={downloadIcon} alt="" aria-hidden="true" />
        Download CSV
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
  // border: 1px solid ${lightBorderColor};
  border: none;
  border-radius: 6px;
  padding: 0.75rem;
  // background-color: ${backgroundColor};
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

interface GradientCardProps {
  gradient: string;
}

const GradientCard = ({ gradient }: GradientCardProps) => {
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

const hsProductSectorsPalette: PaletteColor[] = [
  { name: "Services", hex: "#b23c6f" },
  { name: "Textiles", hex: "#7bc8a4" },
  { name: "Agriculture", hex: "#e5c21a" },
  { name: "Stone", hex: "#caa46b" },
  { name: "Minerals", hex: "#a88b7d" },
  { name: "Metals", hex: "#c9656b" },
  { name: "Chemicals", hex: "#b07ac9" },
  { name: "Vehicles", hex: "#7a6cc3" },
  { name: "Machinery", hex: "#6e8fc3" },
  { name: "Electronics", hex: "#74c5c6" },
  { name: "Other", hex: "#2f5d74" },
];

const sitcProductSectorsPalette: PaletteColor[] = [
  { name: "Services", hex: "#b23c6f" },
  { name: "Food", hex: "#e5c21a" },
  { name: "Beverages", hex: "#e76f8f" },
  { name: "Crude Materials", hex: "#cf6f6f" },
  { name: "Fuels", hex: "#b39183" },
  { name: "Vegetable Oils", hex: "#f39c12" },
  { name: "Chemicals", hex: "#b07ac9" },
  { name: "Material Manufacturers", hex: "#d73027" },
  { name: "Machinery & Vehicles", hex: "#6e8fc3" },
  { name: "Other Manufacturers", hex: "#1f9d9a" },
  { name: "Unspecified", hex: "#355f73" },
];

const locationColorsPalette: PaletteColor[] = [
  { name: "Services Partners", hex: "#033095" },
  { name: "Africa", hex: "#773bd8" },
  { name: "Americas", hex: "#9e4643" },
  { name: "Asia", hex: "#6bc285" },
  { name: "Europe", hex: "#5780b7" },
  { name: "Oceania", hex: "#f2bc67" },
  { name: "Other", hex: "#576582" },
];

const productSpaceClustersPalette: PaletteColor[] = [
  { name: "Agricultural Goods", hex: "#e0b614" },
  { name: "Construction Goods", hex: "#c77c2b" },
  { name: "Electronics", hex: "#5cc7c6" },
  { name: "Chemicals & Basic Metals", hex: "#9c3bd6" },
  { name: "Metalworking Machinery", hex: "#c43d3d" },
  { name: "Minerals", hex: "#7a6a63" },
  { name: "Textile & Home Goods", hex: "#8a8a8a" },
  { name: "Apparel", hex: "#2fa84f" },
];

const complexityColorGradient =
  "linear-gradient(to right, rgb(227, 159, 96) 0%, rgb(231, 173, 120) 27.8697%, rgb(235, 188, 143) 33.8965%, rgb(240, 202, 168) 39.8272%, rgb(244, 217, 191) 44.8314%, rgb(248, 231, 215) 49.3999%, rgb(192, 228, 225) 49.4099%, rgb(154, 211, 207) 53.3691%, rgb(116, 195, 189) 57.1435%, rgb(77, 178, 171) 60.6597%, rgb(40, 162, 153) 66.1681%, rgb(2, 146, 135) 100%)";

const tradeAmountGradient =
  "linear-gradient(to right, rgb(177, 224, 187) 0px, rgb(177, 224, 187) 50%, rgb(173, 220, 186) 51%, rgb(169, 216, 184) 52%, rgb(164, 212, 183) 53%, rgb(160, 208, 182) 54%, rgb(156, 205, 180) 55%, rgb(152, 201, 179) 56%, rgb(148, 197, 178) 57%, rgb(144, 193, 176) 58%, rgb(139, 189, 175) 59%, rgb(135, 185, 174) 60%, rgb(131, 181, 172) 61%, rgb(127, 177, 171) 62%, rgb(123, 173, 170) 63%, rgb(119, 169, 168) 64%, rgb(114, 166, 167) 65%, rgb(110, 162, 166) 66%, rgb(106, 158, 164) 67%, rgb(102, 154, 163) 68%, rgb(98, 150, 162) 69%, rgb(94, 146, 161) 70%, rgb(89, 142, 159) 71%, rgb(85, 138, 158) 72%, rgb(81, 134, 157) 73%, rgb(77, 130, 155) 74%, rgb(73, 127, 154) 75%, rgb(68, 123, 153) 76%, rgb(64, 119, 151) 77%, rgb(60, 115, 150) 78%, rgb(56, 111, 149) 79%, rgb(52, 107, 147) 80%, rgb(48, 103, 146) 81%, rgb(43, 99, 145) 82%, rgb(39, 95, 143) 83%, rgb(35, 91, 142) 84%, rgb(31, 88, 141) 85%, rgb(27, 84, 139) 86%, rgb(23, 80, 138) 87%, rgb(18, 76, 137) 88%, rgb(14, 72, 135) 89%, rgb(10, 68, 134) 90%, rgb(6, 64, 133) 91%, rgb(2, 60, 131) 92%, rgb(0, 56, 130) 93%, rgb(0, 52, 129) 94%, rgb(0, 49, 127) 95%, rgb(0, 45, 126) 96%, rgb(0, 41, 125) 97%, rgb(0, 37, 123) 98%, rgb(0, 33, 122) 99%, rgb(0, 29, 121) 100%, rgb(10, 68, 134) 100%)";

export const VisualizationColorPalettesSection = () => (
  <>
    <Heading2>Visualization Color Palettes</Heading2>
    <BodyLarge>
      The Atlas of Economic Complexity uses distinct color palettes for
      different data visualizations. Click any color code to copy it to your
      clipboard, or download entire palettes as CSV files.
    </BodyLarge>

    <DownloadableSection
      label="HS Product Sectors"
      description="Harmonized System product classification colors"
      onDownload={() =>
        downloadPaletteAsCSV("HS Product Sectors", hsProductSectorsPalette)
      }
    />
    <ColorGrid colors={hsProductSectorsPalette} />

    <DownloadableSection
      label="SITC Product Sectors"
      description="Standard International Trade Classification colors"
      onDownload={() =>
        downloadPaletteAsCSV("SITC Product Sectors", sitcProductSectorsPalette)
      }
    />
    <ColorGrid colors={sitcProductSectorsPalette} />

    <DownloadableSection
      label="Location Colors"
      description="Geographic region and service partner colors"
      onDownload={() =>
        downloadPaletteAsCSV("Location Colors", locationColorsPalette)
      }
    />
    <ColorGrid colors={locationColorsPalette} />

    <DownloadableSection
      label="Product Space Clusters"
      description="Product clustering and classification colors"
      onDownload={() =>
        downloadPaletteAsCSV(
          "Product Space Clusters",
          productSpaceClustersPalette,
        )
      }
    />
    <ColorGrid colors={productSpaceClustersPalette} />

    <DownloadableSection
      label="Complexity Color Scale"
      description="Used for representing economic complexity indices"
      onDownload={() =>
        downloadGradientAsCSV("Complexity Color Scale", complexityColorGradient)
      }
    />

    <GradientCard gradient={complexityColorGradient} />

    <DownloadableSection
      label="Trade Amount Color Scale"
      description="Used for visualizing trade volume and value"
      onDownload={() =>
        downloadGradientAsCSV("Trade Amount Color Scale", tradeAmountGradient)
      }
    />

    <GradientCard gradient={tradeAmountGradient} />
  </>
);
