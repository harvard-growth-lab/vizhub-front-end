import { Heading2 } from "../components";
import { ImageAssetCard, ImageAssetCardGrid } from "../components";
import metroverseLogoBlack from "../assets/downloads/metroverse_black.png";
import metroverseLogoWhite from "../assets/downloads/metroverse_white.png";
import metroverseLogoBlackSvg from "../assets/downloads/metroverse_black.svg";
import metroverseLogoWhiteSvg from "../assets/downloads/metroverse_white.svg";

export const MetroverseVisualAssets = () => (
  <>
    <Heading2>Metroverse Visual Assets</Heading2>
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
