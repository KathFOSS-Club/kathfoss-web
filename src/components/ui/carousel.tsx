"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title } = slide;

  return (
    <Box
      sx={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      <Box
        ref={slideRef}
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          textAlign: "center",
          color: "white",
          opacity: 1,
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          width: "50vmin",
          height: "70vmin",
          marginX: "4vmin",
          zIndex: 10,
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transformOrigin: "bottom",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#1D1F2F",
            borderRadius: "50px",
            overflow: "hidden",
            transition: "all 0.15s ease-out",
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <Image
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: current === index ? 1 : 0.5,
              transition: "opacity 0.9s ease-in-out",
              transform: "scale(1,1)",
            }}
            width={500}
            height={500}
          />
          {current === index && (
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                transition: "all 1s ease-out",
              }}
            />
          )}
        </Box>

        <Box
          sx={{
            position: "relative",
            padding: "4vmin",
            opacity: current === index ? 1 : 0,
            visibility: current === index ? "visible" : "invisible",
            transition: "opacity 1s ease-in-out",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => (
  <Button
    onClick={handleClick}
    sx={{
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "neutral.200",
      borderRadius: "50%",
      border: "3px solid transparent",
      transition: "transform 0.2s ease-in-out",

      ...(type === "previous" && { transform: "rotate(180deg)" }),
    }}
    title={title}
  >
    <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
  </Button>
);

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(1);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <Box
      sx={{
        position: "relative",
        width: "50vmin",
        height: "70vmin",
        marginX: "auto",
      }}
      aria-labelledby={`carousel-heading-${id}`}
    >
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          transition: "transform 1s ease-in-out",
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </Box>

      <Box
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          top: "calc(100% + 1rem)",
        }}
      >
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </Box>
    </Box>
  );
}
