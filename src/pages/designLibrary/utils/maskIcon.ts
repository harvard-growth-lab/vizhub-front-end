import { css } from "styled-components";

// Renders an SVG as a mask so it can be tinted via `background-color`
// (typically `currentColor`). Set the background color on the element itself.
export const maskIcon = (src: string) => css`
  mask-image: url(${src});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  -webkit-mask-image: url(${src});
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
`;
