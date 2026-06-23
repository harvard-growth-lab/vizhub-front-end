import styled from "styled-components";
import { activeLinkColor, backgroundColor } from "../../landingPage/Utils";
import { lightBorderColor, secondaryFont } from "../../../styling/styleUtils";
import { CheckIcon, CopyIcon } from "./icons";
import { useCopied } from "./useCopied";

export interface GradientCardProps {
  gradient: string;
}

const GradientSwatch = styled.div<{ $gradient: string }>`
  width: 100%;
  height: 120px;
  background: ${({ $gradient }) => $gradient};
`;

const GradientCodeButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 6px;
  padding: 0.75rem;
  background-color: oklch(96.7% 0.003 264.542);
  color: ${activeLinkColor};
  font-family: ${secondaryFont};
  font-size: 0.75rem;
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

const GradientText = styled.span`
  min-width: 0;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

const GradientCardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FullWidthCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${lightBorderColor};
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s ease;
  margin: 1rem 0;

  &:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const GradientCard = ({ gradient }: GradientCardProps) => {
  const { copied, copy } = useCopied();

  return (
    <FullWidthCard>
      <GradientSwatch $gradient={gradient} />
      <GradientCardContent>
        <GradientCodeButton onClick={() => copy(gradient)}>
          <GradientText>{gradient}</GradientText>
          {copied ? <CheckIcon /> : <CopyIcon aria-hidden="true" />}
        </GradientCodeButton>
      </GradientCardContent>
    </FullWidthCard>
  );
};
