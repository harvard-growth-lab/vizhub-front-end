import { BodyLarge, Heading2 } from "../components";
import {
  GuidelinesBox,
  GuidelinesItem,
  GuidelinesList,
  GuidelinesTitle,
  ImageAssetCard,
  ImageAssetCardGrid,
} from "../designLibraryComponents";
import growthLabFullLogoBlack from "../../../assets/GL_logo_black.png";
import growthLabFaviconBlack from "../../../assets/GL_Atlas_favicon_black.png";
import growthLabFaviconWhite from "../../../assets/GL_Atlas_favicon.png";
import growthLabFullLogoWhite from "../../../assets/GL_logo_white.png";

import growthLabFullLogoBlackPDF from "../assets/GL_logo_black.pdf";
import growthLabFaviconBlackPDF from "../assets/GL_favicon_black.pdf";
import growthLabFaviconWhitePDF from "../assets/GL_favicon_white.pdf";
import growthLabFullLogoWhitePDF from "../assets/GL_logo_white.pdf";

export const LogosSection = () => (
  <>
    <Heading2>Logos</Heading2>
    <BodyLarge>
      Official Atlas of Economic Complexity and Growth Lab logo assets.
    </BodyLarge>
    <ImageAssetCardGrid>
      <ImageAssetCard
        previewSrc={growthLabFullLogoBlack}
        previewBackground="#ffffff"
        label="Growth Lab Full Logo Black"
        fileBaseName="growth_lab_logo_black"
        downloads={{
          png: growthLabFullLogoBlack,
          pdf: growthLabFullLogoBlackPDF,
        }}
      />
      <ImageAssetCard
        previewSrc={growthLabFaviconBlack}
        previewBackground="#ffffff"
        label="Favicon Black"
        fileBaseName="growth_lab_favicon_black"
        downloads={{
          png: growthLabFaviconBlack,
          pdf: growthLabFaviconBlackPDF,
        }}
      />
      <ImageAssetCard
        previewSrc={growthLabFaviconWhite}
        previewBackground="#000000"
        label="Favicon White"
        fileBaseName="growth_lab_favicon_white"
        downloads={{
          png: growthLabFaviconWhite,
          pdf: growthLabFaviconWhitePDF,
        }}
      />
      <ImageAssetCard
        previewSrc={growthLabFullLogoWhite}
        previewBackground="#000000"
        label="Growth Lab Full Logo White"
        fileBaseName="growth_lab_full_logo_white"
        downloads={{
          png: growthLabFullLogoWhite,
          pdf: growthLabFullLogoWhitePDF,
        }}
      />
    </ImageAssetCardGrid>
    <GuidelinesBox>
      <GuidelinesTitle>Logo Usage Guidelines</GuidelinesTitle>
      <GuidelinesList>
        <GuidelinesItem>
          Maintain minimum clear space around the logo equal to the height of
          one node
        </GuidelinesItem>
        <GuidelinesItem>
          Do not stretch, distort, or rotate the logo
        </GuidelinesItem>
        <GuidelinesItem>
          Do not apply effects like shadows or gradients to the logo
        </GuidelinesItem>
        <GuidelinesItem>
          Ensure sufficient contrast between logo and background
        </GuidelinesItem>
        <GuidelinesItem>
          Use the full wordmark logo for primary branding
        </GuidelinesItem>
        <GuidelinesItem>
          Network icons can be used in smaller spaces or as favicon
        </GuidelinesItem>
        <GuidelinesItem>
          Minimum size: 150px width for full logo, 32px for icon only
        </GuidelinesItem>
      </GuidelinesList>
    </GuidelinesBox>
  </>
);
