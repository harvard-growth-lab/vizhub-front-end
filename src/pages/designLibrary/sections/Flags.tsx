import { useMemo, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { BodyLarge, Heading2, Heading3 } from "../components";
import styled from "styled-components";
import { backgroundColor, backgroundGray } from "../../landingPage/Utils";
import { lightBorderColor, secondaryFont } from "../../../styling/styleUtils";
import JSZip from "jszip";

const GET_DESIGN_LIBRARY_COUNTRIES = gql`
  query GetDesignLibraryCountries {
    ggLocationCountryList {
      iso3Code
      nameEn
    }
  }
`;

const FlagColorCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
  margin: 1rem 0 2rem;
`;

const FlagColorCardWrapper = styled.div`
  border: 1px solid oklch(92.8% 0.006 264.531);
  border-radius: 12px;
  overflow: hidden;
  background-color: ${backgroundColor};
`;

const FlagColorTop = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlagLetters = styled.span`
  color: #ffffff;
  font-family: ${secondaryFont};
  font-size: 1.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FlagColorBottom = styled.div`
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const FlagColorLabel = styled.span`
  // color: ${backgroundGray};
  color: oklch(14.5% 0 0);
  font-family: ${secondaryFont};
  text-transform: uppercase;
  font-size: 0.875rem;
`;

const FlagHexText = styled.span`
  color: oklch(44.6% 0.03 256.802);
  font-family: ${secondaryFont};
  font-size: 0.8rem;
`;

interface FlagColorCardProps {
  color: string;
  letters: string;
  label: string;
  hexCode?: string;
}

const FlagColorCard = ({
  color,
  letters,
  label,
  hexCode,
}: FlagColorCardProps) => (
  <FlagColorCardWrapper>
    <FlagColorTop color={color}>
      <FlagLetters>{letters}</FlagLetters>
    </FlagColorTop>
    <FlagColorBottom>
      <FlagColorLabel>{label}</FlagColorLabel>
      <FlagHexText>{hexCode || color}</FlagHexText>
    </FlagColorBottom>
  </FlagColorCardWrapper>
);

const CountryFlagCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

const BottomInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  border: 1px solid oklch(92.8% 0.006 264.531);
  border-radius: 12px;
  background-color: ${backgroundColor};
  padding: 1rem;
`;

const InfoTitle = styled.h4`
  margin: 0 0 0.55rem 0;
  color: oklch(14.5% 0 0);
  font-family: ${secondaryFont};
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
`;

const InfoText = styled.p`
  margin: 0;
  color: oklch(44.6% 0.03 256.802);
  // font-family: ${secondaryFont};
  font-size: 0.875rem;
  line-height: 1.55;
`;

const ZipDownloadButton = styled.button`
  margin-top: 0.8rem;
  border: none;
  background-color: oklch(27.8% 0.033 256.848);
  color: white;
  border-radius: 6px;
  padding: 0.45rem 0.7rem;
  font-family: ${secondaryFont};
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  &:hover {
    background-color: oklch(21% 0.034 264.665);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const GuidelinesList = styled.ul`
  margin: 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.35rem;
`;

const GuidelinesItem = styled.li`
  color: oklch(44.6% 0.03 256.802);
  // font-family: ${secondaryFont};
  font-size: 0.875rem;
  line-height: 1.5;
`;

const CountryFlagCardWrapper = styled.div`
  border: 1px solid oklch(92.8% 0.006 264.531);
  border-radius: 12px;
  overflow: hidden;
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
`;

const CountryFlagTop = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  padding: 0;
`;

const CountryFlagImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CountryFlagBottom = styled.div`
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  align-items: stretch;
  border-top: 1px solid ${lightBorderColor};
`;

const CountryName = styled.span`
  color: oklch(14.5% 0 0);
  font-family: ${secondaryFont};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: left;
`;

const CountryCode = styled.span`
  color: oklch(55.1% 0.027 264.364);
  font-family: ${secondaryFont};
  font-size: 0.75rem;
  text-align: left;
`;

const SvgDownloadButton = styled.button`
  width: 100%;
  border: none;
  background-color: oklch(96.7% 0.003 264.542);
  color: oklch(14.5% 0 0);
  border-radius: 6px;
  padding: 0.38rem 0.75rem;
  font-family: ${secondaryFont};
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  margin-top: 0.2rem;

  &:hover {
    background-color: oklch(92.8% 0.006 264.531);
  }
`;

const DownloadIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M12 3V14M12 14L8 10M12 14L16 10M5 18H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CountryFlagCardProps {
  flagSrc: string;
  countryName: string;
  countryAbbreviation: string;
  downloadFileSrc: string;
  downloadExtension: string;
  fileBaseName?: string;
}

const CountryFlagCard = ({
  flagSrc,
  countryName,
  countryAbbreviation,
  downloadFileSrc,
  downloadExtension,
  fileBaseName,
}: CountryFlagCardProps) => {
  const baseName =
    fileBaseName || countryAbbreviation.toLowerCase().replace(/\s+/g, "_");

  const triggerDownload = async () => {
    try {
      const response = await fetch(downloadFileSrc);
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = `${baseName}.${downloadExtension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(objectUrl);
    } catch {
      const link = document.createElement("a");
      link.href = downloadFileSrc;
      link.download = `${baseName}.${downloadExtension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <CountryFlagCardWrapper>
      <CountryFlagTop>
        <CountryFlagImage src={flagSrc} alt={countryName} />
      </CountryFlagTop>
      <CountryFlagBottom>
        <CountryName>{countryName}</CountryName>
        <CountryCode>{countryAbbreviation}</CountryCode>
        <SvgDownloadButton type="button" onClick={triggerDownload}>
          <DownloadIcon /> {downloadExtension.toUpperCase()}
        </SvgDownloadButton>
      </CountryFlagBottom>
    </CountryFlagCardWrapper>
  );
};

interface WebpackContext {
  keys: () => string[];
  (id: string): string;
}

interface WebpackRequireContext {
  context: (path: string, deep?: boolean, filter?: RegExp) => WebpackContext;
}

const flagContext = (require as unknown as WebpackRequireContext).context(
  "../../../assets/country_flags",
  false,
  /^\.\/Flag-[A-Z0-9-]+\.(svg|png)$/,
);

const countryFlagItems = flagContext
  .keys()
  .map((path) => {
    const match = path.match(/^\.\/Flag-([A-Z0-9-]+)\.(svg|png)$/);
    if (!match) {
      return null;
    }

    const code = match[1];
    const extension = match[2];

    return {
      flagSrc: flagContext(path),
      countryAbbreviation: code,
      downloadFileSrc: flagContext(path),
      downloadExtension: extension,
      fileBaseName: `flag_${code.toLowerCase()}`,
    };
  })
  .filter((item): item is NonNullable<typeof item> => item !== null)
  .sort((a, b) => a.countryAbbreviation.localeCompare(b.countryAbbreviation));

interface CountriesQueryData {
  ggLocationCountryList?: Array<{
    iso3Code?: string | null;
    nameEn?: string | null;
  }>;
}

export const FlagsSection = () => {
  const { data } = useQuery<CountriesQueryData>(GET_DESIGN_LIBRARY_COUNTRIES);
  const [isZipDownloading, setIsZipDownloading] = useState(false);

  const countryNameByIso3 = useMemo(() => {
    const lookup = new Map<string, string>();
    (data?.ggLocationCountryList || []).forEach((country) => {
      if (country.iso3Code && country.nameEn) {
        lookup.set(country.iso3Code.toUpperCase(), country.nameEn);
      }
    });
    return lookup;
  }, [data]);

  const mappedCountryFlagItems = useMemo(
    () =>
      countryFlagItems
        .map((item) => {
          const countryName = countryNameByIso3.get(item.countryAbbreviation);
          if (!countryName) {
            return null;
          }

          return {
            ...item,
            countryName,
          };
        })
        .filter((item): item is NonNullable<typeof item> => item !== null),
    [countryNameByIso3],
  );

  const handleDownloadAllFlags = async () => {
    if (isZipDownloading || mappedCountryFlagItems.length === 0) {
      return;
    }

    setIsZipDownloading(true);
    try {
      const zip = new JSZip();

      await Promise.all(
        mappedCountryFlagItems.map(async (item) => {
          const response = await fetch(item.downloadFileSrc);
          if (!response.ok) {
            throw new Error(`Failed to fetch ${item.countryAbbreviation}`);
          }

          const blob = await response.blob();
          zip.file(
            `flags/${item.fileBaseName}.${item.downloadExtension}`,
            blob,
          );
        }),
      );

      const zipBlob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(zipBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "atlas_complete_flag_package.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to create flags zip", error);
    } finally {
      setIsZipDownloading(false);
    }
  };

  return (
    <>
      <Heading2>Flags</Heading2>
      <BodyLarge>
        Country flags and regional visual indicators for geographic data.
      </BodyLarge>
      <Heading3>Regional Indicators</Heading3>
      <FlagColorCardGrid>
        <FlagColorCard
          color="#773bd8"
          letters="AF"
          label="Africa"
          hexCode="#773bd8"
        />
        <FlagColorCard
          color="#9e4643"
          letters="AM"
          label="Americas"
          hexCode="#9e4643"
        />
        <FlagColorCard
          color="#6bc285"
          letters="AS"
          label="Asia"
          hexCode="#6bc285"
        />
        <FlagColorCard
          color="#5780b7"
          letters="EU"
          label="Europe"
          hexCode="#5780b7"
        />
        <FlagColorCard
          color="#f2bc67"
          letters="OC"
          label="Oceania"
          hexCode="#f2bc67"
        />
      </FlagColorCardGrid>

      <Heading3>Country Flags</Heading3>
      <BodyLarge>
        Standard 4:3 aspect ratio flags following ISO 3166-1 alpha-2 codes
      </BodyLarge>
      <CountryFlagCardGrid>
        {mappedCountryFlagItems.map((item) => (
          <CountryFlagCard
            key={`${item.countryAbbreviation}-${item.downloadExtension}`}
            flagSrc={item.flagSrc}
            countryName={item.countryName}
            countryAbbreviation={item.countryAbbreviation}
            downloadFileSrc={item.downloadFileSrc}
            downloadExtension={item.downloadExtension}
            fileBaseName={item.fileBaseName}
          />
        ))}
      </CountryFlagCardGrid>

      <BottomInfoGrid>
        <InfoCard>
          <InfoTitle>Complete Flag Library</InfoTitle>
          <InfoText>
            The Atlas includes flag assets for 200+ countries and territories,
            all following ISO 3166-1 alpha-2 country codes for consistency.
          </InfoText>
          <ZipDownloadButton
            type="button"
            onClick={handleDownloadAllFlags}
            disabled={isZipDownloading || mappedCountryFlagItems.length === 0}
          >
            <DownloadIcon />
            {isZipDownloading
              ? "Preparing ZIP..."
              : "Download Complete Flag Package (ZIP)"}
          </ZipDownloadButton>
        </InfoCard>

        <InfoCard>
          <InfoTitle>Usage Guidelines</InfoTitle>
          <GuidelinesList>
            <GuidelinesItem>
              Use standard 4:3 aspect ratio for all country flags
            </GuidelinesItem>
            <GuidelinesItem>
              Regional indicators use official Atlas color codes
            </GuidelinesItem>
            <GuidelinesItem>
              Minimum display size: 16px width for web, 0.5 inch for print
            </GuidelinesItem>
            <GuidelinesItem>
              Always use SVG format for scalability
            </GuidelinesItem>
            <GuidelinesItem>
              Maintain consistent border radius across all flags
            </GuidelinesItem>
            <GuidelinesItem>
              Ensure flags are readable at all sizes
            </GuidelinesItem>
          </GuidelinesList>
        </InfoCard>
      </BottomInfoGrid>
    </>
  );
};
