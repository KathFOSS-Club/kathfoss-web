import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { testimonialData } from "@/app/data/testimonial";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useState } from "react";

export const TestimonialSlider = () => {
  const [expanded, setExpanded] = useState(
    Array(testimonialData.length).fill(false)
  );

  function handleReadmore(index: number) {
    const updatedExpanded = [...expanded];
    updatedExpanded[index] = true;
    setExpanded(updatedExpanded);
  }

  function handleSeeless(index: number) {
    const updatedExpanded = [...expanded];
    updatedExpanded[index] = false;
    setExpanded(updatedExpanded);
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "start" },
    [Autoplay({ delay: 4000 })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <Box
      ref={emblaRef}
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        gap: "5vh",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {testimonialData.map((data, index) => (
          <Box sx={{ flex: "0 0 40%" }} key={index}>
            {/* member picture and dashicon */}
            <Box
              sx={{
                height: "40vh",
                width: {
                    xs: "20rem",
                    sm: "25rem",
                    md: "30rem",
                    lg: "35rem",
                    xl: "27vw",
                  },
                backgroundColor: "#181630",
                display: "flex",
                flexDirection: "column",
                borderTopLeftRadius: "50px",
                borderTopRightRadius: "50px",
                flex: "0 0 20%",
              }}
            >
              <Typography sx={{ marginTop: "2vh" }}>
                <Image
                  src="/images/Team/dashicons_testimonial.png"
                  height={500}
                  width={500}
                  alt="icon"
                  style={{ height: "3.2vh", width: "1.5vw", margin: "auto" }}
                />
              </Typography>

              <Box sx={{ height: "36vh", display: "flex" }}>
                <Image
                  src={data.image}
                  alt="member-image"
                  height={200}
                  width={200}
                  style={{ margin:"auto", borderRadius: "50%"}}
                />
              </Box>
            </Box>

            {/* Name, position and decription */}
            <Box
              sx={{
                minHeight: "40vh",
                width: {
                    xs: "20rem",
                    sm: "25rem",
                    md: "30rem",
                    lg: "35rem",
                    xl: "27vw",
                  },
                backgroundColor: "white",
                borderBottomLeftRadius: "50px",
                borderBottomRightRadius: "50px",
                display: "flex",
                flexDirection: "column",
                padding: "2vh",
                gap: "4vh",
              }}
            >
              <Box sx={{ height: "5vh" }}>
                <Typography
                  sx={{
                    color: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "500",
                  }}
                >
                  {data.name}
                </Typography>
              </Box>
              <Box sx={{ height: "5vh" }}>
                <Typography
                  sx={{
                    color: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  {data.position}
                </Typography>
              </Box>

              <Box
                sx={{
                  minHeight: "25vh",
                  overflow: "hidden",
                  display: "flex",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.1rem",
                    lineHeight: "1.2",
                    textAlign: "center",
                    whiteSpace: "normal",
                    color: "black",
                  }}
                >
                  {data.description.length <= 215 || expanded[index]
                    ? data.description
                    : `${data.description.slice(0, 215)}...`}
                  {/* Conditionally render "Read more" button */}
                  {data.description.length > 215 && !expanded[index] && (
                    <Button
                      sx={{
                        color: "black",
                        height: "2vh",
                        marginTop: "0.5vh",
                       
                      }}
                      onClick={() => handleReadmore(index)}
                    >
                      Read more...
                    </Button>
                  )}

                  {/* "See less" Button */}
                  {expanded[index] && (
                    <Button
                      sx={{
                        color: "black",
                        height: "2vh",
                        marginTop: "0.5vh",
                      }}
                      onClick={() => handleSeeless(index)}
                    >
                      See less
                    </Button>
                  )}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", gap: "1vw" }}>
        <Button
          className="embla__prev"
          onClick={scrollPrev}
          sx={{ backgroundColor: "white", width: "6vw" }}
        >
          Previous
        </Button>
        <Button
          className="embla__next"
          onClick={scrollNext}
          sx={{ backgroundColor: "white", width: "6vw" }}
        >
          Next
        </Button>
      </Box>
    </Box>
    
  );
};

export default TestimonialSlider;
