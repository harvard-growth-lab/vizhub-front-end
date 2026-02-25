import { PaletteColor } from "../designLibraryComponents";

const escapeCsvCell = (value: string) => `"${value.replace(/"/g, '""')}"`;

const downloadCsvRows = (fileBaseName: string, rows: string[][]) => {
  const csvContent = rows
    .map((row) => row.map((cell) => escapeCsvCell(cell)).join(","))
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `${fileBaseName.replace(/\s+/g, "_").toLowerCase()}.csv`,
  );
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const downloadPaletteAsCSV = (
  paletteName: string,
  colors: PaletteColor[],
) => {
  downloadCsvRows(paletteName, [
    ["Color Name", "Hex Code"],
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
