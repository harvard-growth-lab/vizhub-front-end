import styled from "styled-components";
import { BodyLarge, Heading2 } from "../components";
import { DownloadButton, DownloadIcon } from "../components";
import downloadIcon from "../assets/icons/download.svg";
import presentationTemplate from "../assets/downloads/GL_presentation_template.potx";
import presentationPreview from "../assets/icons/presentation_preview.png";

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

const templateFileName = "GL_presentation_template.potx";

const handleDownloadTemplate = async () => {
  try {
    const response = await fetch(presentationTemplate);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = templateFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(objectUrl);
  } catch {
    const link = document.createElement("a");
    link.href = presentationTemplate;
    link.download = templateFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export const GLPresentationTemplate = () => (
  <>
    <Heading2>Growth Lab Presentation Template</Heading2>
    <BodyLarge>
      The template is provided as a .potx file and includes 12 ready-to-use
      slide layouts for different types of content.
    </BodyLarge>
    <PreviewRow>
      <PreviewImage
        src={presentationPreview}
        alt="Growth Lab Presentation Template preview"
      />
    </PreviewRow>
    <DownloadButtonRow>
      <DownloadButton type="button" onClick={handleDownloadTemplate}>
        <DownloadIcon src={downloadIcon} alt="" aria-hidden="true" />
        Download Template
      </DownloadButton>
    </DownloadButtonRow>
  </>
);
