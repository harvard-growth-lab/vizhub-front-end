import { BodyLarge, Heading2, Heading3 } from "../components";
import { ColorGrid, PaletteColor } from "../designLibraryComponents";
import styled from "styled-components";
import { secondaryFont } from "../../../styling/styleUtils";
import downloadIcon from "../assets/download.svg";
import { downloadPaletteAsCSV } from "./downloadUtils";

const DownloadableHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
`;

const InlineHeading3 = styled(Heading3)`
  margin: 0;
  font-size: 1.5rem;
`;

const DownloadButtonStyled = styled.button`
  border: none;
  background-color: #1976d2;
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${secondaryFont};
  font-size: 0.85rem;
  font-weight: 600;
  transition: background-color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background-color: #1565c0;
  }
`;

const DownloadIcon = styled.img`
  width: 0.9rem;
  height: 0.9rem;
  display: block;
  filter: brightness(0) invert(1);
`;

const brandColorsPalette: PaletteColor[] = [
  { name: "Blue", hex: "#6db5db" },
  { name: "Green", hex: "#48c0a2" },
  { name: "Yellow", hex: "#e5bd4f" },
  { name: "Red", hex: "#ee3e4c" },
];

export const LogoColorsSection = () => (
  <>
    <Heading2>Logo Colors</Heading2>
    <BodyLarge>
      Official brand colors used in the Atlas of Economic Complexity logo and
      identity. Click any color code to copy it to your clipboard.
    </BodyLarge>

    <DownloadableHeaderWrapper>
      <InlineHeading3>Brand Colors</InlineHeading3>
      <DownloadButtonStyled
        type="button"
        onClick={() => downloadPaletteAsCSV("Brand Colors", brandColorsPalette)}
      >
        <DownloadIcon src={downloadIcon} alt="" aria-hidden="true" />
        Download CSV
      </DownloadButtonStyled>
    </DownloadableHeaderWrapper>
    <ColorGrid colors={brandColorsPalette} />
  </>
);
