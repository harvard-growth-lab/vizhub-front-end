import { FileDownloadSection } from "../components";
import presentationTemplate from "../assets/downloads/GL_presentation_template.potx";
import presentationPreview from "../assets/icons/presentation_preview.png";

export const GLPresentationTemplate = () => (
  <FileDownloadSection
    heading="Growth Lab Presentation Template"
    description="The template is provided as a .potx file and includes 12 ready-to-use slide layouts for different types of content."
    previewSrc={presentationPreview}
    previewAlt="Growth Lab Presentation Template preview"
    downloadUrl={presentationTemplate}
    downloadFileName="GL_presentation_template.potx"
    downloadLabel="Download Template"
  />
);
