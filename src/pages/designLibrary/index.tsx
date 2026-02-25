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
  SidebarIcon,
  SidebarLabel,
} from "./components";
import { FlagsSection } from "./sections/Flags";
import { LogoColorsSection } from "./sections/LogoColors";
import { LogosSection } from "./sections/Logos";
import { TypographySection } from "./sections/Typography";
import { VisualizationColorPalettesSection } from "./sections/VisualizationColorPalettes";
import visualizationColorPalettesIcon from "./assets/visualization_color_palettes_icon.svg";
import typographyIcon from "./assets/typography_icon.svg";
import logosIcon from "./assets/logos_icon.svg";
import logoColorsIcon from "./assets/logo_colors_icon.svg";
import flagsIcon from "./assets/flags_icon.svg";

const metadata = meta.get(meta.Routes.DesignLibrary);

const libraryItems = [
  {
    id: "visualization-color-palettes",
    label: "Visualization Color Palettes",
    icon: visualizationColorPalettesIcon,
  },
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

type LibraryItemId = (typeof libraryItems)[number]["id"];

type SectionRenderer = () => ReactNode;

const sectionRegistry: Record<LibraryItemId, SectionRenderer> = {
  "visualization-color-palettes": VisualizationColorPalettesSection,
  typography: TypographySection,
  logos: LogosSection,
  "logo-colors": LogoColorsSection,
  flags: FlagsSection,
};

const FallbackSection: SectionRenderer = () => (
  <>
    <Heading2>Design Library</Heading2>
    <BodySmall>Select a section from the left menu.</BodySmall>
  </>
);

const DesignLibraryPage = () => {
  const [selectedItemId, setSelectedItemId] = useState<LibraryItemId>(
    libraryItems[0].id,
  );

  const SelectedSection = sectionRegistry[selectedItemId] || FallbackSection;

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
            <Heading1>Atlas of Economic Complexity Design System</Heading1>
          </Banner>
          <Layout>
            <Sidebar>
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
