import styled from "styled-components";
import { maskIcon } from "../utils/maskIcon";
import copyIcon from "../assets/icons/copy.svg";
import downloadIcon from "../assets/icons/download.svg";

export const CopyIcon = styled.span`
  width: 0.85rem;
  height: 0.85rem;
  flex-shrink: 0;
  background-color: oklch(55.1% 0.027 264.364);
  ${maskIcon(copyIcon)}
`;

export const AssetDownloadIcon = styled.span`
  width: 0.75rem;
  height: 0.75rem;
  display: inline-block;
  flex-shrink: 0;
  background-color: currentColor;
  ${maskIcon(downloadIcon)}
`;

const CheckSvg = styled.svg`
  width: 0.85rem;
  height: 0.85rem;
  flex-shrink: 0;
`;

// Thin checkmark shown after a value is copied to the clipboard.
export const CheckIcon = () => (
  <CheckSvg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8.5L6.5 12L13 5"
      stroke="green"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </CheckSvg>
);
