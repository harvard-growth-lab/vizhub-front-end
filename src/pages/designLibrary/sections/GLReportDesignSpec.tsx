import { FileDownloadSection } from "../components";
import reportDesignSpec from "../assets/downloads/GL_report_design_spec.pdf";
import reportDesignSpecPreview from "../assets/icons/GL_report_design_spec_preview.png";

export const GLReportDesignSpec = () => (
  <FileDownloadSection
    heading="Growth Lab Report Design Spec"
    description="The spec is provided as a PDF file and outlines guidelines for designing reports in the Growth Lab style."
    previewSrc={reportDesignSpecPreview}
    previewAlt="Growth Lab Report Design Spec preview"
    downloadUrl={reportDesignSpec}
    downloadFileName="GL_report_design_spec.pdf"
    downloadLabel="Download Spec"
  />
);
