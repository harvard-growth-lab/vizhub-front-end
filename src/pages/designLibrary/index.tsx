import { ReactNode, useEffect, useState } from "react";
import Helmet from "react-helmet";
import TopLevelNav from "../landingPage/TopLevelNav";
import { scrollToTop } from "../../hooks/useScrollBehavior";
import {
  activeLinkColor,
  backgroundColor,
  HubContentContainer,
  navBackgroundColor,
  backgroundPattern,
} from "../landingPage/Utils";
import StandardFooter from "../../components/text/StandardFooter";
import meta from "../../metadata";
import {
  BodySmall,
  Banner,
  Heading2,
  Heading1,
  Layout,
  MainSection,
  PageShell,
  Sidebar,
  SidebarButton,
  SidebarChevron,
  SidebarIcon,
  SidebarLabel,
  SubmenuButton,
  SubmenuContainer,
} from "./components";
import { FlagsSection } from "./sections/Flags";
import { LogoColorsSection } from "./sections/LogoColors";
import { LogosSection } from "./sections/Logos";
import { TypographySection } from "./sections/Typography";
import { AtlasVisualizationColors } from "./sections/AtlasVisualizationColors";
import { MetroverseVisualizationColors } from "./sections/MetroverseVisualizationColors";
import { GreenplexityVisualizationColors } from "./sections/GreenplexityVisualizationColors";
import { MetroverseVisualAssets } from "./sections/MetroverseVisualAssets";
import { GreenplexityVisualAssets } from "./sections/GreenplexityVisualAssets";
import visualizationColorPalettesIcon from "./assets/visualization_color_palettes_icon.svg";
import typographyIcon from "./assets/typography_icon.svg";
import logosIcon from "./assets/logos_icon.svg";
import logoColorsIcon from "./assets/logo_colors_icon.svg";
import flagsIcon from "./assets/flags_icon.svg";

const metadata = meta.get(meta.Routes.DesignLibrary);

const visualizationColorItems = [
  {
    id: "atlas-visualization-colors",
    label: "Atlas of Economic Complexity",
  },
  {
    id: "metroverse-visualization-colors",
    label: "Metroverse",
  },
  {
    id: "greenplexity-visualization-colors",
    label: "Greenplexity",
  },
] as const;

const visualAssetItems = [
  {
    id: "metroverse-visual-assets",
    label: "Metroverse",
  },
  {
    id: "greenplexity-visual-assets",
    label: "Greenplexity",
  },
] as const;

const libraryItems = [
  {
    id: "typography",
    label: "Typography",
    icon: typographyIcon,
  },
  {
    id: "logos",
    label: "Logos",
    icon: logosIcon,
  },
  {
    id: "logo-colors",
    label: "Logo Colors",
    icon: logoColorsIcon,
  },
  {
    id: "flags",
    label: "Flags",
    icon: flagsIcon,
  },
] as const;

type LibraryItemId =
  | (typeof libraryItems)[number]["id"]
  | (typeof visualizationColorItems)[number]["id"]
  | (typeof visualAssetItems)[number]["id"];

type SectionRenderer = () => ReactNode;

const sectionRegistry: Record<LibraryItemId, SectionRenderer> = {
  "atlas-visualization-colors": AtlasVisualizationColors,
  "metroverse-visualization-colors": MetroverseVisualizationColors,
  "greenplexity-visualization-colors": GreenplexityVisualizationColors,
  "metroverse-visual-assets": MetroverseVisualAssets,
  "greenplexity-visual-assets": GreenplexityVisualAssets,
  typography: TypographySection,
  logos: LogosSection,
  "logo-colors": LogoColorsSection,
  flags: FlagsSection,
};

const visualizationColorIds = new Set<LibraryItemId>(
  visualizationColorItems.map((item) => item.id),
);

const visualAssetIds = new Set<LibraryItemId>(
  visualAssetItems.map((item) => item.id),
);

const FallbackSection: SectionRenderer = () => (
  <>
    <Heading2>Design Library</Heading2>
    <BodySmall>Select a section from the left menu.</BodySmall>
  </>
);

const DesignLibraryPage = () => {
  const [selectedItemId, setSelectedItemId] = useState<LibraryItemId>(
    visualizationColorItems[0].id,
  );
  const [isVisualizationMenuOpen, setIsVisualizationMenuOpen] = useState(true);
  const [isVisualAssetsMenuOpen, setIsVisualAssetsMenuOpen] = useState(true);

  const SelectedSection = sectionRegistry[selectedItemId] || FallbackSection;

  const handleVisualizationMenuToggle = () => {
    if (isVisualizationMenuOpen && visualizationColorIds.has(selectedItemId)) {
      return;
    }
    setIsVisualizationMenuOpen((isOpen) => !isOpen);
  };

  const handleVisualAssetsMenuToggle = () => {
    if (isVisualAssetsMenuOpen && visualAssetIds.has(selectedItemId)) {
      return;
    }
    setIsVisualAssetsMenuOpen((isOpen) => !isOpen);
  };

  useEffect(() => scrollToTop({ smooth: false }), []);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta property="og:description" content={metadata.description} />
      </Helmet>
      <TopLevelNav
        linkColor={backgroundColor}
        activeColor={activeLinkColor}
        showTitle={true}
        backgroundColor={navBackgroundColor}
        backgroundImage={backgroundPattern}
      />
      <HubContentContainer>
        <PageShell>
          <Banner>
            <Heading1>Design Library</Heading1>
          </Banner>
          <Layout>
            <Sidebar>
              <SidebarButton
                type="button"
                $active={visualizationColorIds.has(selectedItemId)}
                onClick={handleVisualizationMenuToggle}
              >
                <SidebarIcon
                  $src={visualizationColorPalettesIcon}
                  aria-hidden="true"
                />
                <SidebarLabel>Visualization Colors</SidebarLabel>
                <SidebarChevron $open={isVisualizationMenuOpen} />
              </SidebarButton>

              {isVisualizationMenuOpen && (
                <SubmenuContainer>
                  {visualizationColorItems.map((item) => (
                    <SubmenuButton
                      key={item.id}
                      type="button"
                      $active={item.id === selectedItemId}
                      onClick={() => setSelectedItemId(item.id)}
                    >
                      {item.label}
                    </SubmenuButton>
                  ))}
                </SubmenuContainer>
              )}

              <SidebarButton
                type="button"
                $active={visualAssetIds.has(selectedItemId)}
                onClick={handleVisualAssetsMenuToggle}
              >
                <SidebarIcon $src={logosIcon} aria-hidden="true" />
                <SidebarLabel>Visual Assets</SidebarLabel>
                <SidebarChevron $open={isVisualAssetsMenuOpen} />
              </SidebarButton>

              {isVisualAssetsMenuOpen && (
                <SubmenuContainer>
                  {visualAssetItems.map((item) => (
                    <SubmenuButton
                      key={item.id}
                      type="button"
                      $active={item.id === selectedItemId}
                      onClick={() => setSelectedItemId(item.id)}
                    >
                      {item.label}
                    </SubmenuButton>
                  ))}
                </SubmenuContainer>
              )}

              {libraryItems.map((item) => (
                <SidebarButton
                  key={item.id}
                  type="button"
                  $active={item.id === selectedItemId}
                  onClick={() => setSelectedItemId(item.id)}
                >
                  <SidebarIcon $src={item.icon} aria-hidden="true" />
                  <SidebarLabel>{item.label}</SidebarLabel>
                </SidebarButton>
              ))}
            </Sidebar>
            <MainSection>
              <SelectedSection />
            </MainSection>
          </Layout>
        </PageShell>
      </HubContentContainer>
      <StandardFooter />
    </>
  );
};

export default DesignLibraryPage;
