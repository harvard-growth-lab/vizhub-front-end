import { useState } from "react";
import { Heading2 } from "../components";
import {
  DownloadableSection,
  IconCard,
  IconCardGrid,
  ImageAssetCard,
  ImageAssetCardGrid,
} from "../designLibraryComponents";
import JSZip from "jszip";
import greenplexityBackground from "../assets/greenplexity-bg.png";

import Batteries from "../../../assets/greenGrowth/Batteries.svg";
import CriticalMetals from "../../../assets/greenGrowth/Critical Metals.svg";
import ElectricVehicles from "../../../assets/greenGrowth/Electric_vehicles.svg";
import GreenHydrogen from "../../../assets/greenGrowth/Green Hydrogen.svg";
import HeatPumps from "../../../assets/greenGrowth/Heat_pumps.svg";
import HydroelectricPower from "../../../assets/greenGrowth/Hydroelectric_Power.svg";
import NuclearPower from "../../../assets/greenGrowth/Nuclear_power.svg";
import SolarPower from "../../../assets/greenGrowth/Solar_power.svg";
import WindPower from "../../../assets/greenGrowth/Wind_power.svg";

export const iconAssets = [
  { name: "Batteries", src: Batteries, fileBaseName: "batteries" },
  {
    name: "Critical Metals",
    src: CriticalMetals,
    fileBaseName: "critical_metals",
  },
  {
    name: "Electric Vehicles",
    src: ElectricVehicles,
    fileBaseName: "electric_vehicles",
  },
  {
    name: "Green Hydrogen",
    src: GreenHydrogen,
    fileBaseName: "green_hydrogen",
  },
  { name: "Heat Pumps", src: HeatPumps, fileBaseName: "heat_pumps" },
  {
    name: "Hydroelectric Power",
    src: HydroelectricPower,
    fileBaseName: "hydroelectric_power",
  },
  {
    name: "Nuclear Power",
    src: NuclearPower,
    fileBaseName: "nuclear_power",
  },
  { name: "Solar Power", src: SolarPower, fileBaseName: "solar_power" },
  { name: "Wind Power", src: WindPower, fileBaseName: "wind_power" },
];

export const GreenplexityVisualAssets = () => {
  const [isZipDownloading, setIsZipDownloading] = useState(false);

  const handleDownloadIconPackage = async () => {
    if (isZipDownloading) {
      return;
    }

    setIsZipDownloading(true);
    try {
      const zip = new JSZip();

      await Promise.all(
        iconAssets.map(async (icon) => {
          const response = await fetch(icon.src);
          if (!response.ok) {
            throw new Error(`Failed to fetch ${icon.name}`);
          }

          const blob = await response.blob();
          zip.file(`greenplexity-icons/${icon.fileBaseName}.svg`, blob);
        }),
      );

      const zipBlob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(zipBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "greenplexity_icons.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to create Greenplexity icon zip", error);
    } finally {
      setIsZipDownloading(false);
    }
  };

  return (
    <>
      <Heading2>Greenplexity Visual Assets</Heading2>

      <ImageAssetCardGrid>
        <ImageAssetCard
          previewSrc={greenplexityBackground}
          previewBackground="#ffffff"
          previewMode="cover"
          label="Greenplexity Background"
          fileBaseName="greenplexity_background"
          downloads={{
            png: greenplexityBackground,
          }}
        />
      </ImageAssetCardGrid>

      <DownloadableSection
        label="Value Chain Icons"
        description=""
        onDownload={handleDownloadIconPackage}
        downloadLabel={isZipDownloading ? "Preparing ZIP..." : "Download ZIP"}
      />

      <IconCardGrid>
        {iconAssets.map((icon) => (
          <IconCard
            key={icon.name}
            iconSrc={icon.src}
            iconName={icon.name}
            downloadFileSrc={icon.src}
            downloadExtension="svg"
            fileBaseName={icon.fileBaseName}
          />
        ))}
      </IconCardGrid>
    </>
  );
};
