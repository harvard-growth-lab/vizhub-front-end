import type { PaletteColor } from "../components/ColorCard";

const clickDownloadLink = (href: string, fileName: string) => {
  const link = document.createElement("a");
  link.href = href;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Fetches the asset and downloads it as a blob so the browser saves it with the
// given file name. Falls back to a direct link if the fetch fails.
export const downloadFile = async (url: string, fileName: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    clickDownloadLink(objectUrl, fileName);
    URL.revokeObjectURL(objectUrl);
  } catch {
    clickDownloadLink(url, fileName);
  }
};

const escapeCsvCell = (value: string) => `"${value.replace(/"/g, '""')}"`;

const downloadCsvRows = (fileBaseName: string, rows: string[][]) => {
  const csvContent = rows
    .map((row) => row.map((cell) => escapeCsvCell(cell)).join(","))
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  clickDownloadLink(
    url,
    `${fileBaseName.replace(/\s+/g, "_").toLowerCase()}.csv`,
  );
  URL.revokeObjectURL(url);
};

export const downloadPaletteAsCSV = (
  paletteName: string,
  colors: PaletteColor[],
) => {
  downloadCsvRows(paletteName, [
    ["Name", "Hex Code"],
    ...colors.map((color) => [color.name, color.hex]),
  ]);
};

export const downloadGradientAsCSV = (
  gradientName: string,
  gradientCode: string,
) => {
  downloadCsvRows(gradientName, [
    ["Name", "CSS Gradient"],
    [gradientName, gradientCode],
  ]);
};
