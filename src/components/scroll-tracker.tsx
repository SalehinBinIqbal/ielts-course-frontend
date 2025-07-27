"use client";

import { useEffect, useState } from "react";

export function useScrollTracker() {
  const [hasPassedMediaCard, setHasPassedMediaCard] = useState(false);

  useEffect(() => {
    const mediaCard = document.getElementById("side-media-card");
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when the media card is completely out of view (not intersecting)
        setHasPassedMediaCard(!entry.isIntersecting);
      },
      {
        threshold: 0, // Trigger as soon as 1px is out of view
        rootMargin: "-15px 0px 0px 0px", // Add 50px buffer before triggering
      }
    );

    if (mediaCard) observer.observe(mediaCard);

    return () => {
      if (mediaCard) observer.unobserve(mediaCard);
    };
  }, []);

  console.log(hasPassedMediaCard);

  return hasPassedMediaCard;
}
