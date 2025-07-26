"use client";

import { useState, useRef, useEffect, forwardRef, useCallback } from "react";
import Image from "next/image";

import { AspectRatio } from "./ui/aspect-ratio";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface MediaCarouselProps {
  carouselItems: Array<{
    name: string;
    resource_type: string;
    resource_value: string;
    thumbnail_url?: string;
  }>;
}

export default function MediaCarousel({ carouselItems }: MediaCarouselProps) {
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  // Pause videos when slide changes
  useEffect(() => {
    videoRefs.current.forEach((iframe, index) => {
      if (iframe && index !== currentSlide) {
        iframe.contentWindow?.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    });
  }, [currentSlide]);

  // Auto-scroll thumbnails when slide changes
  const scrollThumbnailIntoView = useCallback((index: number) => {
    if (thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const thumbnails = container.querySelectorAll("div[data-thumbnail]");
      const activeThumb = thumbnails[index] as HTMLElement;

      if (activeThumb) {
        const containerWidth = container.offsetWidth;
        const thumbPos = activeThumb.offsetLeft;
        const thumbWidth = activeThumb.offsetWidth;

        // Calculate scroll position to center the active thumbnail
        const scrollTo = thumbPos - containerWidth / 2 + thumbWidth / 2;

        container.scrollTo({
          left: scrollTo,
          behavior: "smooth",
        });
      }
    }
  }, []);

  const handleSlideChange = useCallback(
    (index: number) => {
      setCurrentSlide(index);
      scrollThumbnailIntoView(index);
    },
    [scrollThumbnailIntoView]
  );

  const handleThumbnailClick = useCallback(
    (index: number) => {
      api?.scrollTo(index);
      handleSlideChange(index);
    },
    [api, handleSlideChange]
  );

  return (
    <>
      <Carousel
        className="w-full"
        onSlideChange={handleSlideChange}
        setApi={setApi}
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="w-full">
              <AspectRatio ratio={16 / 9}>
                {item.resource_type === "video" ? (
                  <VideoPlayer
                    videoId={item.resource_value}
                    thumbnailUrl={item.thumbnail_url}
                    title={item.name}
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    isActive={index === currentSlide}
                  />
                ) : (
                  <Image
                    src={item.resource_value}
                    alt={item.name}
                    fill
                    className="rounded-2xl object-cover"
                    unoptimized={true}
                  />
                )}
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div
        ref={thumbnailContainerRef}
        className="mt-4 inline-flex gap-2 w-full overflow-x-auto py-2"
      >
        <div className="flex flex-nowrap gap-2 min-w-max">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              data-thumbnail
              className={`cursor-pointer w-18 h-10 rounded-md overflow-hidden border-2 ${
                index === currentSlide ? "border-red-700" : "border-gray-300"
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <AspectRatio ratio={16 / 9}>
                {item.resource_type === "video" ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={
                        item.thumbnail_url ||
                        `https://img.youtube.com/vi/${item.resource_value}/default.jpg`
                      }
                      alt={`Thumbnail ${index}`}
                      fill
                      className="object-cover"
                      unoptimized={true}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={item.resource_value}
                    alt={`Thumbnail ${index}`}
                    fill
                    className="object-cover"
                    unoptimized={true}
                  />
                )}
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

interface VideoPlayerProps {
  videoId: string;
  thumbnailUrl?: string;
  title: string;
  isActive: boolean;
}

const VideoPlayer = forwardRef<HTMLIFrameElement, VideoPlayerProps>(
  ({ videoId, thumbnailUrl, title, isActive }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);

    // Reset to thumbnail when slide becomes inactive
    useEffect(() => {
      if (!isActive) {
        setIsPlaying(false);
      }
    }, [isActive]);

    return (
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        {!isPlaying ? (
          <div className="relative w-full h-full">
            <Image
              src={
                thumbnailUrl ||
                `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
              }
              alt={title}
              fill
              className="object-cover"
              unoptimized={true}
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-stone-100 transition-transform hover:scale-110 cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                <svg
                  className="w-8 h-8 text-black"
                  fill="text-black"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.25}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            ref={ref}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </div>
    );
  }
);

VideoPlayer.displayName = "VideoPlayer";
