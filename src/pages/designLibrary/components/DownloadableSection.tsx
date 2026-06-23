import styled from "styled-components";
import { secondaryFont } from "../../../styling/styleUtils";
import downloadIcon from "../assets/icons/download.svg";
import { BodySmall } from "./typography";

export interface DownloadableSectionProps {
  label: string;
  description: string;
  onDownload: () => void;
  downloadLabel?: string;
}

const Heading3Wrapper = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
`;

const DownloadableHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
`;

const SectionLabel = styled.div`
  color: oklch(14.5% 0 0);
  font-family: ${secondaryFont};
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const DownloadButton = styled.button`
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

export const DownloadIcon = styled.img`
  width: 0.9rem;
  height: 0.9rem;
  display: block;
  filter: brightness(0) invert(1);
`;

export const DownloadableSection = ({
  label,
  description,
  onDownload,
  downloadLabel = "Download CSV",
}: DownloadableSectionProps) => (
  <Heading3Wrapper>
    <DownloadableHeaderWrapper>
      <div>
        <SectionLabel>{label}</SectionLabel>
        <BodySmall>{description}</BodySmall>
      </div>
      <DownloadButton onClick={onDownload}>
        <DownloadIcon src={downloadIcon} alt="" aria-hidden="true" />
        {downloadLabel}
      </DownloadButton>
    </DownloadableHeaderWrapper>
  </Heading3Wrapper>
);
