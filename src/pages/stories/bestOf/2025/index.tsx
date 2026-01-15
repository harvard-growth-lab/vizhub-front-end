import React, { useEffect, useRef } from "react";
import BestOfTemplate, { type SectionDatum } from "./Template";
import { get, Routes } from "../../../../metadata";
import data from "./bestviz_2025-Sheet1.json";
import { scrollToAnchor } from "../../../../hooks/useScrollBehavior";
import { useLocation } from "react-router";
import { storyMobileWidth } from "../../../../styling/Grid";

import CoverPhotoImage from "./images/header_image_2025.png";
import CoverPhotoImageLowRes from "./images/header_image_2025.png";

const BestOf2025 = () => {
  const sections = useRef<React.RefObject<HTMLParagraphElement>[]>(
    Array(data.length)
      .fill(null)
      .map(() => React.createRef()),
  );

  const hasBeenRendered = useRef<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const anchor = location && location.hash ? location.hash : null;
    const bufferTop =
      window.innerWidth > storyMobileWidth
        ? -window.innerHeight * 0.95
        : -window.innerHeight * 1.6;
    scrollToAnchor({ anchor, bufferTop });
  }, [location.pathname]);

  const metadata = get(Routes.BestOf2025);

  const sectionsData: SectionDatum[] = data.map((d, i) => {
    const source =
      d.source && d.source.length ? (
        <>
          <br />
          <br />
          <em>Source: {d.source}</em>
        </>
      ) : null;
    const url = d.link && d.link.length ? d.link : undefined;

    return {
      id: d.hash_id || `viz-${i + 1}`,
      title: d.title,
      text: (
        <p>
          {d.text}
          {source}
        </p>
      ),
      image: require(`./images/${d.image}`),
      linkText: undefined,
      url,
      ref: sections.current[i],
    };
  });

  return (
    <BestOfTemplate
      metaTitle={metadata.title}
      metaDescription={metadata.description}
      coverPhotoSrc={{ low: CoverPhotoImageLowRes, high: CoverPhotoImage }}
      pageTitle={"Visual Insights from the Growth Lab's 2025 Research"}
      dateLine={"December 16, 2025"}
      byLine={null}
      introText={
        <p>
          The Growth Lab's multidisciplinary research team works across the
          world, offering ideas, methods, and tools to help policymakers,
          scholars, investors, and others find ways to accelerate economic
          growth and expand opportunity. Our research in 2025 spanned nine
          countries across five continents and investigated economic crises in
          Bolivia and Malawi, clean energy industrial transition strategies, oil
          diversification and new engines for growth, depopulation and workforce
          challenges, and much more. Below, we showcase some of the most
          insightful visualizations from our research portfolio.
        </p>
      }
      sectionsData={sectionsData}
      hasBeenRendered={hasBeenRendered}
    />
  );
};

export default BestOf2025;
