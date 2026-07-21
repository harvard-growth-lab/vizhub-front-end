import { FileDownloadSection } from "../components";
import dataVisualizationSpec from "../assets/downloads/GL_data_visualization_spec.pdf";
import dataVisualizationSpecPreview from "../assets/icons/GL_data_visualization_spec_preview.png";

export const GLDataVisualizationSpec = () => (
  <FileDownloadSection
    heading="Growth Lab Data Visualization Spec"
    description="The spec is provided as a PDF file and outlines guidelines for designing data visualizations in the Growth Lab style."
    previewSrc={dataVisualizationSpecPreview}
    previewAlt="Growth Lab Data Visualization Spec preview"
    downloadUrl={dataVisualizationSpec}
    downloadFileName="GL_data_visualization_spec.pdf"
    downloadLabel="Download Spec"
  />
);
