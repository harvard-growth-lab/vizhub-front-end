import styled from "styled-components";
import { BodyLarge, Heading2 } from "./typography";
import { DownloadButton, DownloadIcon } from "./DownloadableSection";
import downloadIcon from "../assets/icons/download.svg";

export interface FileDownloadSectionProps {
  heading: string;
  description: string;
  previewSrc: string;
  previewAlt: string;
  downloadUrl: string;
  downloadFileName: string;
  downloadLabel: string;
}

const PreviewRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
`;

const PreviewImage = styled.img`
  border: solid thin #d9d9d9;
  width: 80%;
  height: auto;
  border-radius: 12px;
  display: block;
`;

const DownloadButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
`;

const triggerDownload = (url: string, fileName: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const downloadFile = async (url: string, fileName: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    triggerDownload(objectUrl, fileName);
    URL.revokeObjectURL(objectUrl);
  } catch {
    triggerDownload(url, fileName);
  }
};

export const FileDownloadSection = ({
  heading,
  description,
  previewSrc,
  previewAlt,
  downloadUrl,
  downloadFileName,
  downloadLabel,
}: FileDownloadSectionProps) => (
  <>
    <Heading2>{heading}</Heading2>
    <BodyLarge>{description}</BodyLarge>
    <PreviewRow>
      <PreviewImage src={previewSrc} alt={previewAlt} />
    </PreviewRow>
    <DownloadButtonRow>
      <DownloadButton
        type="button"
        onClick={() => downloadFile(downloadUrl, downloadFileName)}
      >
        <DownloadIcon src={downloadIcon} alt="" aria-hidden="true" />
        {downloadLabel}
      </DownloadButton>
    </DownloadButtonRow>
  </>
);
