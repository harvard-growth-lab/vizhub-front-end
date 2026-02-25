import styled from "styled-components";
import { useState } from "react";
import {
  activeLinkColor,
  backgroundColor,
  backgroundGray,
} from "../landingPage/Utils";
import { lightBorderColor, secondaryFont } from "../../styling/styleUtils";
import copyIcon from "./assets/copy.svg";

export const ColorCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

export interface PaletteColor {
  name: string;
  hex: string;
}

export interface ColorGridProps {
  colors: PaletteColor[];
}

export const ColorGrid = ({ colors }: ColorGridProps) => (
  <ColorCardContainer>
    {colors.map((color) => (
      <ColorCard key={color.hex} color={color.hex} label={color.name} />
    ))}
  </ColorCardContainer>
);

const Card = styled.div`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${lightBorderColor};
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ColorSwatch = styled.div<{ color: string }>`
  width: 100%;
  height: 150px;
  background-color: ${({ color }) => color};
`;

const CardContent = styled.div`
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-family: ${secondaryFont};
  font-size: 0.85rem;
  font-weight: 600;
  color: ${backgroundGray};
  text-transform: uppercase;
  margin: 0;
`;

const HexButton = styled.button`
  border: 1px solid ${lightBorderColor};
  border-radius: 6px;
  padding: 0.5rem;
  background-color: ${backgroundColor};
  color: ${activeLinkColor};
  font-family: ${secondaryFont};
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const CopyIcon = styled.span`
  width: 0.85rem;
  height: 0.85rem;
  flex-shrink: 0;
  background-color: oklch(55.1% 0.027 264.364);
  mask-image: url(${copyIcon});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  -webkit-mask-image: url(${copyIcon});
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
`;

const ThinCheckIcon = styled.svg`
  width: 0.85rem;
  height: 0.85rem;
  flex-shrink: 0;
`;

export interface ColorCardProps {
  color: string;
  label: string;
}

export const ColorCard = ({ color, label }: ColorCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyHex = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card>
      <ColorSwatch color={color} />
      <CardContent>
        <Label>{label}</Label>
        <HexButton onClick={handleCopyHex}>
          <span>{color}</span>
          {copied ? (
            <ThinCheckIcon viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8.5L6.5 12L13 5"
                stroke="green"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </ThinCheckIcon>
          ) : (
            <CopyIcon aria-hidden="true" />
          )}
        </HexButton>
      </CardContent>
    </Card>
  );
};
