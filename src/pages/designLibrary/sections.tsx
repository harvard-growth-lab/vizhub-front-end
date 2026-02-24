import { ReactNode } from "react";
import { BodyLarge, BodySmall, Heading2, Heading3 } from "./components";
import {
  ColorCard,
  ColorCardContainer,
  ColorGrid,
  DownloadableSection,
  FontDisplay,
  GradientCard,
  ImageAssetCard,
  ImageAssetCardGrid,
  PaletteColor,
} from "./designLibraryComponents";
import logoPreviewGrowthLab from "../../assets/GL_logo_black.png";
import logoPreviewHarvard from "../../assets/harvard-logo.png";
import logoPreviewGrowthLabNew from "../../assets/growth-lab-new-logo-2022.png";
import logoPreviewAtlas from "../../assets/GL_Atlas_favicon.png";
import logoDownloadGrowthLabSvg from "../../assets/hks-logo.svg";
import logoDownloadHarvardSvg from "../landingPage/title.svg";
import logoDownloadGrowthLabNewSvg from "../landingPage/titleIcon.svg";
import logoDownloadAtlasSvg from "../landingPage/subtitle.svg";
import logoDownloadGrowthLabPng from "../../assets/GL_logo_black.png";
import logoDownloadHarvardPng from "../../assets/harvard-logo.png";
import logoDownloadGrowthLabNewPng from "../../assets/growth-lab-new-logo-2022.png";
import logoDownloadAtlasPng from "../../assets/GL_Atlas_favicon.png";
import logoDownloadGuideA from "../landingPage/internalContent/how-we-build-digital-tools.pdf";
import logoDownloadGuideB from "../landingPage/internalContent/how-we-build-digital-prototypes.pdf";
import logoDownloadGuideC from "../landingPage/internalContent/communicating-topics.pdf";

// Utility function to download palette as CSV
const downloadPaletteAsCSV = (paletteName: string, colors: PaletteColor[]) => {
  const csvContent = [
    ["Color Name", "Hex Code"],
    ...colors.map((color) => [color.name, color.hex]),
  ]
    .map((row) => row.join(","))
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `${paletteName.replace(/\s+/g, "_").toLowerCase()}.csv`,
  );
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Utility function to download gradient as CSV
const downloadGradientAsCSV = (gradientName: string, gradientCode: string) => {
  const csvContent = [
    ["Name", "CSS Gradient"],
    [gradientName, gradientCode],
  ]
    .map((row) => row.map((cell) => `"${cell}"`).join(","))
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `${gradientName.replace(/\s+/g, "_").toLowerCase()}.csv`,
  );
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const libraryItems = [
  {
    id: "visualization-color-palettes",
    label: "Visualization Color Palettes",
  },
  {
    id: "typography",
    label: "Typography",
  },
  {
    id: "logos",
    label: "Logos",
  },
  {
    id: "logo-colors",
    label: "Logo Colors",
  },
  {
    id: "flags",
    label: "Flags",
  },
] as const;

export type LibraryItemId = (typeof libraryItems)[number]["id"];

// Color palette data from Figma design
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

// Gradient data
const complexityColorGradient =
  "linear-gradient(to right, rgb(227, 159, 96) 0%, rgb(231, 173, 120) 27.8697%, rgb(235, 188, 143) 33.8965%, rgb(240, 202, 168) 39.8272%, rgb(244, 217, 191) 44.8314%, rgb(248, 231, 215) 49.3999%, rgb(192, 228, 225) 49.4099%, rgb(154, 211, 207) 53.3691%, rgb(116, 195, 189) 57.1435%, rgb(77, 178, 171) 60.6597%, rgb(40, 162, 153) 66.1681%, rgb(2, 146, 135) 100%)";

const tradeAmountGradient =
  "linear-gradient(to right, rgb(177, 224, 187) 0px, rgb(177, 224, 187) 50%, rgb(173, 220, 186) 51%, rgb(169, 216, 184) 52%, rgb(164, 212, 183) 53%, rgb(160, 208, 182) 54%, rgb(156, 205, 180) 55%, rgb(152, 201, 179) 56%, rgb(148, 197, 178) 57%, rgb(144, 193, 176) 58%, rgb(139, 189, 175) 59%, rgb(135, 185, 174) 60%, rgb(131, 181, 172) 61%, rgb(127, 177, 171) 62%, rgb(123, 173, 170) 63%, rgb(119, 169, 168) 64%, rgb(114, 166, 167) 65%, rgb(110, 162, 166) 66%, rgb(106, 158, 164) 67%, rgb(102, 154, 163) 68%, rgb(98, 150, 162) 69%, rgb(94, 146, 161) 70%, rgb(89, 142, 159) 71%, rgb(85, 138, 158) 72%, rgb(81, 134, 157) 73%, rgb(77, 130, 155) 74%, rgb(73, 127, 154) 75%, rgb(68, 123, 153) 76%, rgb(64, 119, 151) 77%, rgb(60, 115, 150) 78%, rgb(56, 111, 149) 79%, rgb(52, 107, 147) 80%, rgb(48, 103, 146) 81%, rgb(43, 99, 145) 82%, rgb(39, 95, 143) 83%, rgb(35, 91, 142) 84%, rgb(31, 88, 141) 85%, rgb(27, 84, 139) 86%, rgb(23, 80, 138) 87%, rgb(18, 76, 137) 88%, rgb(14, 72, 135) 89%, rgb(10, 68, 134) 90%, rgb(6, 64, 133) 91%, rgb(2, 60, 131) 92%, rgb(0, 56, 130) 93%, rgb(0, 52, 129) 94%, rgb(0, 49, 127) 95%, rgb(0, 45, 126) 96%, rgb(0, 41, 125) 97%, rgb(0, 37, 123) 98%, rgb(0, 33, 122) 99%, rgb(0, 29, 121) 100%, rgb(10, 68, 134) 100%)";

const brandColorsPalette: PaletteColor[] = [
  { name: "Blue", hex: "#6db5db" },
  { name: "Green", hex: "#48c0a2" },
  { name: "Yellow", hex: "#e5bd4f" },
  { name: "Red", hex: "#ee3e4c" },
];

type SectionRenderer = () => ReactNode;

const VisualizationColorPalettesSection: SectionRenderer = () => (
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

const TypographySection: SectionRenderer = () => (
  <>
    <Heading2>Typography</Heading2>
    <BodyLarge>
      Define heading, body, and caption text styles used across Viz Hub pages.
    </BodyLarge>
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
      characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789!@#$%^&*()"
    />
  </>
);

const LogosSection: SectionRenderer = () => (
  <>
    <Heading2>Logos</Heading2>
    <BodyLarge>
      Official Atlas of Economic Complexity and Growth Lab logo assets.
    </BodyLarge>
    <ImageAssetCardGrid>
      <ImageAssetCard
        previewSrc={logoPreviewGrowthLab}
        label="Growth Lab Logo"
        fileBaseName="growth_lab_logo"
        downloads={{
          svg: logoDownloadGrowthLabSvg,
          png: logoDownloadGrowthLabPng,
          pdf: logoDownloadGuideA,
        }}
      />
      <ImageAssetCard
        previewSrc={logoPreviewHarvard}
        label="Harvard Logo"
        fileBaseName="harvard_logo"
        downloads={{
          svg: logoDownloadHarvardSvg,
          png: logoDownloadHarvardPng,
          pdf: logoDownloadGuideB,
        }}
      />
      <ImageAssetCard
        previewSrc={logoPreviewGrowthLabNew}
        label="Growth Lab Logo 2022"
        fileBaseName="growth_lab_logo_2022"
        downloads={{
          svg: logoDownloadGrowthLabNewSvg,
          png: logoDownloadGrowthLabNewPng,
          pdf: logoDownloadGuideC,
        }}
      />
      <ImageAssetCard
        previewSrc={logoPreviewAtlas}
        label="Atlas Mark"
        fileBaseName="atlas_mark"
        downloads={{
          svg: logoDownloadAtlasSvg,
          png: logoDownloadAtlasPng,
          pdf: logoDownloadGuideA,
        }}
      />
    </ImageAssetCardGrid>
  </>
);

const LogoColorsSection: SectionRenderer = () => (
  <>
    <Heading2>Logo Colors</Heading2>
    <BodyLarge>
      Official brand colors used in the Atlas of Economic Complexity logo and
      identity. Click any color code to copy it to your clipboard.
    </BodyLarge>
    <ColorGrid colors={brandColorsPalette} />
  </>
);

const FlagsSection: SectionRenderer = () => (
  <>
    <Heading2>Flags</Heading2>
    <BodyLarge>
      Country flags and regional visual indicators for geographic data.
    </BodyLarge>
  </>
);

export const sectionRegistry: Record<LibraryItemId, SectionRenderer> = {
  "visualization-color-palettes": VisualizationColorPalettesSection,
  typography: TypographySection,
  logos: LogosSection,
  "logo-colors": LogoColorsSection,
  flags: FlagsSection,
};

export const FallbackSection: SectionRenderer = () => (
  <>
    <Heading2>Design Library</Heading2>
    <BodySmall>Select a section from the left menu.</BodySmall>
  </>
);
