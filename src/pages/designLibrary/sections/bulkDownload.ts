import JSZip from "jszip";
import { PaletteColor } from "../designLibraryComponents";

// Atlas Visualization Colors
import {
  hsProductSectorsPalette,
  sitcProductSectorsPalette,
  locationColorsPalette,
  productSpaceClustersPalette,
  complexityColorGradient,
  tradeAmountGradient,
} from "./AtlasVisualizationColors";

// Metroverse Visualization Colors
import {
  industryGroupsPalette as metroverseIndustryGroups,
  knowledgeClustersPalette,
  yearsOfEducationGradient,
  hourlyWageGradient,
} from "./MetroverseVisualizationColors";

// Greenplexity Visualization Colors
import {
  industryGroupsPalette as greenplexityIndustryGroups,
  strategicApproachesPalette,
  potentialColorScale,
} from "./GreenplexityVisualizationColors";

// Logo Colors
import { brandColorsPalette } from "./LogoColors";

// Flags
import { regionPalette, countryFlagItems } from "./Flags";

// Logos
import growthLabFullLogoBlack from "../../../assets/GL_logo_black.png";
import growthLabFaviconBlack from "../../../assets/GL_Atlas_favicon_black.png";
import growthLabFaviconWhite from "../../../assets/GL_Atlas_favicon.png";
import growthLabFullLogoWhite from "../../../assets/GL_logo_white.png";
import growthLabFullLogoBlackPDF from "../assets/GL_logo_black.pdf";
import growthLabFaviconBlackPDF from "../assets/GL_favicon_black.pdf";
import growthLabFaviconWhitePDF from "../assets/GL_favicon_white.pdf";
import growthLabFullLogoWhitePDF from "../assets/GL_logo_white.pdf";

// Metroverse Visual Assets
import metroverseLogoBlack from "../assets/metroverse_black.png";
import metroverseLogoWhite from "../assets/metroverse_white.png";
import metroverseLogoBlackSvg from "../assets/metroverse_black.svg";
import metroverseLogoWhiteSvg from "../assets/metroverse_white.svg";

// Greenplexity Visual Assets
import greenplexityBackground from "../assets/greenplexity-bg.png";
import { iconAssets } from "./GreenplexityVisualAssets";

const escapeCsvCell = (value: string) => `"${value.replace(/"/g, '""')}"`;

const paletteToCsv = (colors: PaletteColor[]): string =>
  [["Name", "Hex Code"], ...colors.map((c) => [c.name, c.hex])]
    .map((row) => row.map(escapeCsvCell).join(","))
    .join("\n");

const gradientToCsv = (name: string, css: string): string =>
  [
    ["Name", "CSS Gradient"],
    [name, css],
  ]
    .map((row) => row.map(escapeCsvCell).join(","))
    .join("\n");

const addCsv = (zip: JSZip, path: string, content: string) =>
  zip.file(path, new Blob([content], { type: "text/csv;charset=utf-8;" }));

const fetchBlob = async (url: string): Promise<Blob> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return res.blob();
};

const extFromUrl = (url: string, fallback: string): string => {
  const match = url.match(/\.(\w+)(?:\?|$)/);
  return match ? match[1] : fallback;
};

const addFetchedFile = async (zip: JSZip, path: string, url: string) => {
  const blob = await fetchBlob(url);
  zip.file(path, blob);
};

const README = `# Growth Lab Design Library — Complete Asset Package

This archive contains all downloadable assets from the Growth Lab Design Library.

## Folder Structure

### visualization_colors/
Color palettes and gradient scales used in data visualizations.

**atlas/** — Atlas of Economic Complexity
- hs_product_sectors.csv — HS product classification colors (11 sectors)
- sitc_product_sectors.csv — SITC product classification colors (11 sectors)
- location_colors.csv — Geographic region colors (7 regions)
- product_space_clusters.csv — Product space cluster colors (8 clusters)
- complexity_color_scale.csv — Economic Complexity Index gradient
- trade_amount_color_scale.csv — Trade value gradient

**metroverse/** — Metroverse
- industry_groups.csv — Industry group colors (9 groups)
- knowledge_clusters.csv — Knowledge cluster colors (7 clusters)
- years_of_education_color_scale.csv — Education level gradient
- hourly_wage_color_scale.csv — Wage level gradient

**greenplexity/** — Greenplexity
- industry_groups.csv — Green technology sector colors (10 sectors)
- strategic_approaches.csv — Strategic approach colors (4 approaches)
- potential_color_scale.csv — Green potential gradient

### logo_colors/
- brand_colors.csv — Growth Lab brand palette (Blue, Green, Yellow, Red)

### logos/
Growth Lab logos in PNG and PDF formats.
- GL_logo_black.png / .pdf — Full logo, dark variant
- GL_logo_white.png / .pdf — Full logo, light variant
- GL_favicon_black.png / .pdf — Favicon, dark variant
- GL_favicon_white.png / .pdf — Favicon, light variant

### flags/
- regional_indicators.csv — Regional color indicators (5 regions)
- Individual country flag files (SVG/PNG, ISO 3166-1 alpha-3 codes)

### visual_assets/

**metroverse/** — Metroverse logos in PNG and SVG formats.

**greenplexity/** — Greenplexity background and technology sector icons (SVG).

## File Formats
- Color palettes: CSV (Name, Hex Code)
- Gradient scales: CSV (Name, CSS Gradient)
- Logos & flags: PNG, PDF, SVG
- Icons: SVG

Note that this package does not include typography files. The primary font used in the Growth Lab's design library is "Source Sans 3", which can be accessed via [Google Fonts](https://fonts.google.com/specimen/Source+Sans+3).
`;

export const createBulkDownloadZip = async (
  onProgress?: (message: string) => void,
): Promise<void> => {
  const zip = new JSZip();
  const report = (msg: string) => onProgress?.(msg);

  // README
  zip.file("README.md", README);

  // ── Visualization Colors (CSVs only, no fetches) ──
  report("Adding visualization color palettes…");

  // Atlas
  addCsv(
    zip,
    "visualization_colors/atlas/hs_product_sectors.csv",
    paletteToCsv(hsProductSectorsPalette),
  );
  addCsv(
    zip,
    "visualization_colors/atlas/sitc_product_sectors.csv",
    paletteToCsv(sitcProductSectorsPalette),
  );
  addCsv(
    zip,
    "visualization_colors/atlas/location_colors.csv",
    paletteToCsv(locationColorsPalette),
  );
  addCsv(
    zip,
    "visualization_colors/atlas/product_space_clusters.csv",
    paletteToCsv(productSpaceClustersPalette),
  );
  addCsv(
    zip,
    "visualization_colors/atlas/complexity_color_scale.csv",
    gradientToCsv("Complexity Color Scale", complexityColorGradient),
  );
  addCsv(
    zip,
    "visualization_colors/atlas/trade_amount_color_scale.csv",
    gradientToCsv("Trade Amount Color Scale", tradeAmountGradient),
  );

  // Metroverse
  addCsv(
    zip,
    "visualization_colors/metroverse/industry_groups.csv",
    paletteToCsv(metroverseIndustryGroups),
  );
  addCsv(
    zip,
    "visualization_colors/metroverse/knowledge_clusters.csv",
    paletteToCsv(knowledgeClustersPalette),
  );
  addCsv(
    zip,
    "visualization_colors/metroverse/years_of_education_color_scale.csv",
    gradientToCsv("Years of Education Color Scale", yearsOfEducationGradient),
  );
  addCsv(
    zip,
    "visualization_colors/metroverse/hourly_wage_color_scale.csv",
    gradientToCsv("Hourly Wage Color Scale", hourlyWageGradient),
  );

  // Greenplexity
  addCsv(
    zip,
    "visualization_colors/greenplexity/industry_groups.csv",
    paletteToCsv(greenplexityIndustryGroups),
  );
  addCsv(
    zip,
    "visualization_colors/greenplexity/strategic_approaches.csv",
    paletteToCsv(strategicApproachesPalette),
  );
  addCsv(
    zip,
    "visualization_colors/greenplexity/potential_color_scale.csv",
    gradientToCsv("Potential Color Scale", potentialColorScale),
  );

  // ── Logo Colors ──
  addCsv(zip, "logo_colors/brand_colors.csv", paletteToCsv(brandColorsPalette));

  // ── Flags ──
  addCsv(zip, "flags/regional_indicators.csv", paletteToCsv(regionPalette));

  // ── Fetched assets (logos, flags, visual assets) ──
  report("Downloading logos…");

  const logoFiles: [string, string][] = [
    ["logos/GL_logo_black.png", growthLabFullLogoBlack],
    ["logos/GL_logo_black.pdf", growthLabFullLogoBlackPDF],
    ["logos/GL_favicon_black.png", growthLabFaviconBlack],
    ["logos/GL_favicon_black.pdf", growthLabFaviconBlackPDF],
    ["logos/GL_logo_white.png", growthLabFullLogoWhite],
    ["logos/GL_logo_white.pdf", growthLabFullLogoWhitePDF],
    ["logos/GL_favicon_white.png", growthLabFaviconWhite],
    ["logos/GL_favicon_white.pdf", growthLabFaviconWhitePDF],
  ];

  await Promise.all(
    logoFiles.map(([path, url]) => addFetchedFile(zip, path, url)),
  );

  // ── Metroverse Visual Assets ──
  report("Downloading Metroverse assets…");
  const metroverseFiles: [string, string][] = [
    [
      `visual_assets/metroverse/metroverse_logo_black.${extFromUrl(metroverseLogoBlack, "png")}`,
      metroverseLogoBlack,
    ],
    [
      `visual_assets/metroverse/metroverse_logo_white.${extFromUrl(metroverseLogoWhite, "png")}`,
      metroverseLogoWhite,
    ],
    [
      "visual_assets/metroverse/metroverse_logo_black.svg",
      metroverseLogoBlackSvg,
    ],
    [
      "visual_assets/metroverse/metroverse_logo_white.svg",
      metroverseLogoWhiteSvg,
    ],
  ];
  await Promise.all(
    metroverseFiles.map(([path, url]) => addFetchedFile(zip, path, url)),
  );

  // ── Greenplexity Visual Assets ──
  report("Downloading Greenplexity assets…");
  await addFetchedFile(
    zip,
    `visual_assets/greenplexity/greenplexity_background.${extFromUrl(greenplexityBackground, "png")}`,
    greenplexityBackground,
  );
  await Promise.all(
    iconAssets.map((icon) =>
      addFetchedFile(
        zip,
        `visual_assets/greenplexity/icons/${icon.fileBaseName}.svg`,
        icon.src,
      ),
    ),
  );

  // ── Country Flags ──
  report("Downloading country flags…");
  await Promise.all(
    countryFlagItems.map((item) =>
      addFetchedFile(
        zip,
        `flags/${item.fileBaseName}.${item.downloadExtension}`,
        item.downloadFileSrc,
      ),
    ),
  );

  // ── Generate & trigger download ──
  report("Generating ZIP…");
  const blob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "growth_lab_design_library.zip";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
