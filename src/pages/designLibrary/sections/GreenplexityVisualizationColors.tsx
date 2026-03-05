import { Heading2 } from "../components";
import {
  ColorGrid,
  DownloadableSection,
  GradientCard,
  PaletteColor,
} from "../designLibraryComponents";
import { downloadGradientAsCSV, downloadPaletteAsCSV } from "./downloadUtils";

const industryGroupsPalette: PaletteColor[] = [
  { name: "Electric Vehicles", hex: "#808080" },
  { name: "Heat Pumps", hex: "#99CC34" },
  { name: "Fuel Cells & Green Hydrogen", hex: "#1E81E6" },
  { name: "Wind Power", hex: "#1FB3AB" },
  { name: "Solar Power", hex: "#33CD32" },
  { name: "Hydroelectric Power", hex: "#FE69B5" },
  { name: "Nuclear Power", hex: "#FF8C03" },
  { name: "Batteries", hex: "#DB153D" },
  { name: "Electric Grid", hex: "#8B2BE2" },
  { name: "Critical Metals & Minerals", hex: "#8B4512" },
];

const strategicApproachesPalette: PaletteColor[] = [
  { name: "Parsimonious Industrial Policy Approach", hex: "#FFBC59" },
  { name: "Light Touch Approach", hex: "#5480C5" },
  { name: "Strategic Bets Approach", hex: "#F18959" },
  { name: "Technological Frontier Approach", hex: "#57BD9B" },
];

const potentialColorScale =
  "linear-gradient(to right, rgb(165, 0, 38) 0%, rgb(190, 24, 39) 5%, rgb(212, 50, 44) 10%, rgb(229, 79, 54) 15%, rgb(241, 110, 67) 20%, rgb(248, 141, 82) 25%, rgb(252, 172, 100) 30%, rgb(253, 198, 121) 35%, rgb(254, 221, 144) 40%, rgb(254, 238, 168) 45%, rgb(250, 248, 193) 50%, rgb(238, 248, 218) 55%, rgb(220, 241, 236) 60%, rgb(197, 229, 239) 65%, rgb(171, 214, 232) 70%, rgb(144, 194, 221) 75%, rgb(117, 171, 208) 80%, rgb(93, 145, 194) 85%, rgb(74, 116, 180) 90%, rgb(60, 85, 164) 95%, rgb(49, 54, 149) 100%);";

export const GreenplexityVisualizationColors = () => (
  <>
    <Heading2>Greenplexity Visualization Colors</Heading2>

    <DownloadableSection
      label="Industry Groups"
      description=""
      onDownload={() =>
        downloadPaletteAsCSV(
          "Greenplexity Industry Groups",
          industryGroupsPalette,
        )
      }
    />
    <ColorGrid colors={industryGroupsPalette} />

    <DownloadableSection
      label="Strategic Approaches"
      description=""
      onDownload={() =>
        downloadPaletteAsCSV(
          "Greenplexity Strategic Approaches",
          strategicApproachesPalette,
        )
      }
    />
    <ColorGrid colors={strategicApproachesPalette} />

    <DownloadableSection
      label="Potential Color Scale"
      description=""
      onDownload={() =>
        downloadGradientAsCSV(
          "Greenplexity Potential Color Scale",
          potentialColorScale,
        )
      }
    />
    <GradientCard gradient={potentialColorScale} />
  </>
);
