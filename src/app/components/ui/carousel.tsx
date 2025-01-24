"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";
<<<<<<< HEAD
import { Box, Button } from "@mui/material";
=======
import { Box, Button, Typography } from "@mui/material";
>>>>>>> 2b76e2fcbcf8888e40e61ae8326861152c975b63
import Image from "next/image";

interface SlideData {
  title: string;
  src: string;
<<<<<<< HEAD
=======
  description: string;
>>>>>>> 2b76e2fcbcf8888e40e61ae8326861152c975b63
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

<<<<<<< HEAD
  const { src, title } = slide;
  return (
    <Box
      sx={{
        perspective: "1200px",
=======
  const { src, title, description } = slide;
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Box
      sx={{
        perspective: "2000px",
>>>>>>> 2b76e2fcbcf8888e40e61ae8326861152c975b63
        transformStyle: "preserve-3d",
      }}
    >
      <Box
<<<<<<< HEAD
        ref={slideRef}
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
=======
>>>>>>> 2b76e2fcbcf8888e40e61ae8326861152c975b63
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          opacity: 1,
<<<<<<< HEAD
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          width: "70vmin",
          height: "70vmin",
=======
          transition:
            "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s ease-in-out",
          width: {
            xs: "20rem",
            sm: "25rem",
            md: "30rem",
            lg: "35rem",
            xl: "40rem",
          },
          height: {
            xs: isExpanded ? "34rem" : "26.5rem",
            sm: isExpanded ? "37rem" : "28rem",
            md: isExpanded ? "40rem" : "32rem",
            lg: isExpanded ? "38rem" : "32rem",
            xl: isExpanded ? "46rem" : "39.5rem",
          },
>>>>>>> 2b76e2fcbcf8888e40e61ae8326861152c975b63
          marginX: "4vmin",
          zIndex: 10,
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transformOrigin: "bottom",
<<<<<<< HEAD
        }}
=======
          overflow: "hidden", // Ensure content doesn't overflow
        }}
        ref={slideRef}
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
>>>>>>> 2b76e2fcbcf8888e40e61ae8326861152c975b63
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#1D1F2F",
<<<<<<< HEAD
            borderRadius: "50px",
=======
            borderRadius: "30px",
>>>>>>> 2b76e2fcbcf8888e40e61ae8326861152c975b63
            overflow: "hidden",
            transition: "all 0.15s ease-out",
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
<<<<<<< HEAD
          }}
        >
          <Image
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="lazy"
            decoding="sync"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: current === index ? 1 : 0.5,
              transition: "opacity 0.7s ease-in-out",
              transform: "scale(1,1)",
              cursor: "pointer",
            }}
            width={500}
            height={500}
          />
=======
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: {
                xs: "22rem",
                sm: "22rem",
                md: "26rem",
                lg: "26rem",
                xl: "33.5rem",
              },

              overflow: "hidden",
              padding: "16px",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: "25px 25px 0 0",
              }}
            >
              <Image
                alt={title}
                src={src}
                onLoad={imageLoaded}
                loading="lazy"
                decoding="sync"
                style={{
                  position: "absolute",
                  inset: 0,
                  objectFit: "cover",
                  opacity: current === index ? 1 : 0.5,
                  transition: "opacity 0.7s ease-in-out",
                  cursor: "pointer",
                }}
                fill
              />
            </Box>
          </Box>

          {/* Description Section */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              color: "white",
              fontSize: "16px",
              overflow: "hidden",
              height: isExpanded ? "auto" : "10px",
              transition: "height 0.3s ease-in-out, padding 0.3s ease-in-out",
              textAlign: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "500",
                fontSize: { sm: "23px", xs: "16px" },
                marginBottom: "6px",
                textAlign: "center",
                width: "100%",
                color: "grey.300",

              }}
            >
              {title}
            </Typography>

            <Box sx={{ padding: "0 6px" }}>
              <Typography
                sx={{
                  fontSize: { sm: "15px", xs: "12px" },
                  color: "#B0B0B0",
                  lineHeight: "1.6",
                  maxWidth: "600px",
                  marginBottom: "16px",
                  textAlign: "justify",
                  width: "100%",
                  marginX: "auto",
                  wordWrap: "break-word",
                  hyphens: "auto",
                }}
              >
                {description}
              </Typography>
            </Box>
          </Box>

          {/* Show More Button */}
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            sx={{
              color: `${isExpanded ? "gray" : "grey.400"}`,
              margin: "8px",
              fontSize: { sm: "14px", xs: "12px" },
              textTransform: "none",
            }}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </Button>
>>>>>>> 2b76e2fcbcf8888e40e61ae8326861152c975b63
        </Box>
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
    variant="contained"
    onClick={handleClick}
    sx={{
      padding: "8px",
      transition: "transform 0.2s ease-in-out",
      minWidth: "0",

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
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number | null>(null); // Starting pointer position
  const offsetXRef = useRef(0); // Current offset during dragging
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
  const handlePointerDown = (event: React.PointerEvent) => {
<<<<<<< HEAD
    console.log("point down");
=======
>>>>>>> 2b76e2fcbcf8888e40e61ae8326861152c975b63
    startXRef.current = event.clientX;
    console.log(startXRef);
    offsetXRef.current = 0;
    if (containerRef.current) {
      containerRef.current.style.transition = "none"; // Disable transition during drag
    }
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    if (startXRef.current === null) return;

    const currentX = event.clientX;
    offsetXRef.current = currentX - startXRef.current;

    if (containerRef.current) {
      const translateX =
        -current * (100 / slides.length) +
        (offsetXRef.current / containerRef.current.clientWidth) * 100;
      containerRef.current.style.transform = `translateX(${translateX}%)`;
    }
  };

  const handlePointerUp = () => {
    if (startXRef.current === null) return;

    const containerWidth = containerRef.current?.clientWidth || 1;
    const threshold = containerWidth * 0.2;

    if (Math.abs(offsetXRef.current) > threshold) {
      if (offsetXRef.current > 0) {
        handlePreviousClick();
      } else {
        handleNextClick();
      }
    } else {
      // If not beyond threshold, snap back to the current slide
      if (containerRef.current) {
        containerRef.current.style.transition = "transform 0.7s ease-in-out";
        containerRef.current.style.transform = `translateX(-${
          current * (100 / slides.length)
        }%)`;
      }
    }

    // Reset state
    startXRef.current = null;
    offsetXRef.current = 0;
  };

  const id = useId();

  return (
    <Box
      sx={{
        position: "relative",
<<<<<<< HEAD
        width: "80vmin",
        height: "70vmin",
=======
        width: {
          xs: "22rem",
          sm: "30rem",
          md: "35rem",
          lg: "39rem",
          xl: "45rem",
        },
        height: {
          xs: "30rem",
          sm: "30rem",
          md: "36rem",
          lg: "36rem",
          xl: "45rem",
        },
>>>>>>> 2b76e2fcbcf8888e40e61ae8326861152c975b63
        marginX: "auto",
      }}
      aria-labelledby={`carousel-heading-${id}`}
    >
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          transition: "transform 0.7s ease-in-out",
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
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
          top: "50%",
          left: 0,
          right: 0,
<<<<<<< HEAD
          display: "flex",
=======
          display: { md: "flex", xs: "none" },
>>>>>>> 2b76e2fcbcf8888e40e61ae8326861152c975b63
          justifyContent: "space-between",
          alignItems: "center",
          transform: "translateY(-50%)",
          margin: "0 -1rem 0 -1.6rem", // Adds spacing around the edges
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
