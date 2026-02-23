import { useEffect, useState } from "react";
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
  Banner,
  Heading1,
  Layout,
  MainSection,
  PageShell,
  Sidebar,
  SidebarButton,
} from "./components";
import {
  FallbackSection,
  libraryItems,
  LibraryItemId,
  sectionRegistry,
} from "./sections";

const metadata = meta.get(meta.Routes.DesignLibrary);

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
                  active={item.id === selectedItemId}
                  onClick={() => setSelectedItemId(item.id)}
                >
                  {item.label}
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
