import { Heading2 } from "../components";
import {
  ColorGrid,
  DownloadableSection,
  GradientCard,
  PaletteColor,
} from "../designLibraryComponents";
import { downloadGradientAsCSV, downloadPaletteAsCSV } from "./downloadUtils";

const industryGroupsPalette: PaletteColor[] = [
  { name: "Construction", hex: "#A773BF" },
  { name: "Education & health", hex: "#F0866B" },
  { name: "Financial activities", hex: "#FFC034" },
  { name: "Leisure & hospitality", hex: "#92CFCF" },
  { name: "Manufacturing", hex: "#498099" },
  { name: "Natural resources", hex: "#76C799" },
  { name: "Other", hex: "#6A6AAC" },
  { name: "Professional & business", hex: "#d25262" },
  { name: "Trade & transportation", hex: "#F28188" },
];

const knowledgeClustersPalette: PaletteColor[] = [
  { name: "Basic Materials", hex: "#999932" },
  { name: "Manufacturing", hex: "#495999" },
  { name: "Food", hex: "#37AE98" },
  { name: "Durables", hex: "#66CCE0" },
  { name: "Logistics", hex: "#873362" },
  { name: "Services", hex: "#B66274" },
  { name: "Finance", hex: "#DDCC77" },
];

const yearsOfEducationGradient =
  "linear-gradient(90deg, rgb(90, 173, 96) 0%, rgb(234, 235, 204) 50%, rgb(152, 111, 170) 100%);";

const hourlyWageGradient =
  "linear-gradient(90deg, rgb(74, 122, 183) 0%, rgb(234, 235, 204) 50%, rgb(220, 61, 45) 100%);";

export const MetroverseVisualizationColors = () => (
  <>
    <Heading2>Metroverse Visualization Colors</Heading2>

    <DownloadableSection
      label="Industry Groups"
      description=""
      onDownload={() =>
        downloadPaletteAsCSV(
          "Metroverse Industry Groups",
          industryGroupsPalette,
        )
      }
    />
    <ColorGrid colors={industryGroupsPalette} />

    <DownloadableSection
      label="Knowledge Clusters"
      description=""
      onDownload={() =>
        downloadPaletteAsCSV(
          "Metroverse Knowledge Clusters",
          knowledgeClustersPalette,
        )
      }
    />
    <ColorGrid colors={knowledgeClustersPalette} />

    <DownloadableSection
      label="Years of Education Color Scale"
      description=""
      onDownload={() =>
        downloadGradientAsCSV(
          "Metroverse Years of Education Color Scale",
          yearsOfEducationGradient,
        )
      }
    />
    <GradientCard gradient={yearsOfEducationGradient} />

    <DownloadableSection
      label="Hourly Wage Color Scale"
      description=""
      onDownload={() =>
        downloadGradientAsCSV(
          "Metroverse Hourly Wage Color Scale",
          hourlyWageGradient,
        )
      }
    />
    <GradientCard gradient={hourlyWageGradient} />
  </>
);
