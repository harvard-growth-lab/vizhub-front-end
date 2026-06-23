import styled from "styled-components";
import { activeLinkColor, backgroundColor } from "../../landingPage/Utils";
import { lightBorderColor, secondaryFont } from "../../../styling/styleUtils";
import { CheckIcon, CopyIcon } from "./icons";
import { useCopied } from "./useCopied";

export interface PaletteColor {
  name: string;
  hex: string;
}

export interface ColorGridProps {
  colors: PaletteColor[];
}

export interface ColorCardProps {
  color: string;
  label: string;
}

export const ColorCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

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
  font-size: 1rem;
  color: oklch(14.5% 0 0);
  text-transform: uppercase;
  margin: 0;
`;

const HexButton = styled.button`
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  color: ${activeLinkColor};
  background-color: oklch(96.7% 0.003 264.542);
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
    background-color: oklch(92.8% 0.006 264.531);
  }
`;

export const ColorCard = ({ color, label }: ColorCardProps) => {
  const { copied, copy } = useCopied();

  return (
    <Card>
      <ColorSwatch color={color} />
      <CardContent>
        <Label>{label}</Label>
        <HexButton onClick={() => copy(color)}>
          <span>{color}</span>
          {copied ? <CheckIcon /> : <CopyIcon aria-hidden="true" />}
        </HexButton>
      </CardContent>
    </Card>
  );
};

export const ColorGrid = ({ colors }: ColorGridProps) => (
  <ColorCardContainer>
    {colors.map((color) => (
      <ColorCard key={color.hex} color={color.hex} label={color.name} />
    ))}
  </ColorCardContainer>
);
