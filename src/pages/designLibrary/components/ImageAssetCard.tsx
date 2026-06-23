import styled from "styled-components";
import { backgroundColor } from "../../landingPage/Utils";
import { lightBorderColor, secondaryFont } from "../../../styling/styleUtils";
import { AssetDownloadIcon } from "./icons";
import { downloadFile } from "../utils/download";

export type ImageAssetDownloads = Record<string, string>;

export interface ImageAssetCardProps {
  previewSrc: string;
  previewBackground: string;
  previewMode?: "contain" | "cover";
  label: string;
  downloads: ImageAssetDownloads;
  fileBaseName?: string;
}

export const ImageAssetCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ImageAssetCardWrapper = styled.div`
  border: 1px solid ${lightBorderColor};
  border-radius: 12px;
  overflow: hidden;
  background-color: ${backgroundColor};
  margin: 0;
`;

const ImagePreviewContainer = styled.div<{ $background: string }>`
  width: 100%;
  height: 220px;
  background-color: ${({ $background }) => $background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImagePreview = styled.img<{ $previewMode: "contain" | "cover" }>`
  width: ${({ $previewMode }) => ($previewMode === "cover" ? "100%" : "80%")};
  height: ${({ $previewMode }) => ($previewMode === "cover" ? "100%" : "60%")};
  object-fit: ${({ $previewMode }) => $previewMode};
  display: block;
`;

const ImageAssetCardFooter = styled.div`
  padding: 0.85rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.6rem;
`;

const ImageAssetLabel = styled.span`
  font-family: ${secondaryFont};
  color: oklch(14.5% 0 0);
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
`;

const FormatButtonGroup = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
  width: 100%;
`;

const ImageDownloadButton = styled.button`
  border: none;
  background-color: oklch(96.7% 0.003 264.542);
  color: oklch(14.5% 0 0);
  border-radius: 6px;
  padding: 0.4rem 0.6rem;
  font-family: ${secondaryFont};
  font-size: 0.875rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  flex: 1;

  &:hover {
    background-color: oklch(92.8% 0.006 264.531);
  }
`;

export const ImageAssetCard = ({
  previewSrc,
  previewBackground,
  previewMode = "contain",
  label,
  downloads,
  fileBaseName,
}: ImageAssetCardProps) => {
  const baseName = fileBaseName || label.replace(/\s+/g, "_").toLowerCase();

  return (
    <ImageAssetCardWrapper>
      <ImagePreviewContainer $background={previewBackground}>
        <ImagePreview src={previewSrc} alt={label} $previewMode={previewMode} />
      </ImagePreviewContainer>
      <ImageAssetCardFooter>
        <ImageAssetLabel>{label}</ImageAssetLabel>
        <FormatButtonGroup>
          {Object.entries(downloads).map(([extension, url]) => (
            <ImageDownloadButton
              key={extension}
              type="button"
              onClick={() => downloadFile(url, `${baseName}.${extension}`)}
            >
              <AssetDownloadIcon /> {extension.toUpperCase()}
            </ImageDownloadButton>
          ))}
        </FormatButtonGroup>
      </ImageAssetCardFooter>
    </ImageAssetCardWrapper>
  );
};
