import { Heading2, Heading3 } from "../components";
import { ImageAssetCard, ImageAssetCardGrid } from "../designLibraryComponents";
import metroverseLogoBlack from "../assets/metroverse_black.png";
import metroverseLogoWhite from "../assets/metroverse_white.png";
import metroverseLogoBlackSvg from "../assets/metroverse_black.svg";
import metroverseLogoWhiteSvg from "../assets/metroverse_white.svg";

export const MetroverseVisualAssets = () => (
  <>
    <Heading2>Metroverse Visual Assets</Heading2>
    {/* <Heading3>Logos</Heading3> */}
    <ImageAssetCardGrid>
      <ImageAssetCard
        previewSrc={metroverseLogoBlack}
        previewBackground="#ffffff"
        label="Metroverse Logo Black"
        fileBaseName="metroverse_logo_black"
        downloads={{
          png: metroverseLogoBlack,
          svg: metroverseLogoBlackSvg,
        }}
      />
      <ImageAssetCard
        previewSrc={metroverseLogoWhite}
        previewBackground="#000000"
        label="Metroverse Logo White"
        fileBaseName="metroverse_logo_white"
        downloads={{
          png: metroverseLogoWhite,
          svg: metroverseLogoWhiteSvg,
        }}
      />
    </ImageAssetCardGrid>
  </>
);
