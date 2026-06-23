import styled from "styled-components";
import { backgroundColor } from "../../landingPage/Utils";
import { lightBorderColor, secondaryFont } from "../../../styling/styleUtils";
import { AssetDownloadIcon } from "./icons";
import { downloadFile } from "../utils/download";

export interface IconCardProps {
  iconSrc: string;
  iconName: string;
  downloadFileSrc: string;
  downloadExtension: string;
  fileBaseName?: string;
}

export const IconCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

const IconCardWrapper = styled.div`
  border: 1px solid oklch(92.8% 0.006 264.531);
  border-radius: 12px;
  overflow: hidden;
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
`;

const IconCardTop = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  padding: 0;
`;

const IconCardImage = styled.img`
  width: 70%;
  height: 70%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const IconCardBottom = styled.div`
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  align-items: stretch;
  border-top: 1px solid ${lightBorderColor};
`;

const IconCardName = styled.span`
  color: oklch(14.5% 0 0);
  font-family: ${secondaryFont};
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
  line-height: 1.4;
`;

const IconDownloadButton = styled.button`
  width: 100%;
  border: none;
  background-color: oklch(96.7% 0.003 264.542);
  color: oklch(14.5% 0 0);
  border-radius: 6px;
  padding: 0.38rem 0.75rem;
  font-family: ${secondaryFont};
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  margin-top: 0.2rem;

  &:hover {
    background-color: oklch(92.8% 0.006 264.531);
  }
`;

export const IconCard = ({
  iconSrc,
  iconName,
  downloadFileSrc,
  downloadExtension,
  fileBaseName,
}: IconCardProps) => {
  const baseName =
    fileBaseName ||
    iconName
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "");

  return (
    <IconCardWrapper>
      <IconCardTop>
        <IconCardImage src={iconSrc} alt={iconName} />
      </IconCardTop>
      <IconCardBottom>
        <IconCardName>{iconName}</IconCardName>
        <IconDownloadButton
          type="button"
          onClick={() =>
            downloadFile(downloadFileSrc, `${baseName}.${downloadExtension}`)
          }
        >
          <AssetDownloadIcon /> {downloadExtension.toUpperCase()}
        </IconDownloadButton>
      </IconCardBottom>
    </IconCardWrapper>
  );
};
