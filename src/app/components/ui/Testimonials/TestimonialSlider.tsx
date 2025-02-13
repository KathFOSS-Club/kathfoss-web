import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { testimonialData } from "@/app/data/testimonial";
import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

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
        height: "110vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: { md: "start", sm: "start" },
        margin: "0 auto",
        gap: "5vh",
        padding: { md: "2vw", sm: "1vw" },
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: { sm: "4vw", md: "4vh" },
        }}
      >
        {testimonialData.map((data, index) => (
          <Box
            sx={{
              flex: "0 0 40%",
            }}
            key={index}
          >
            {/* member picture and dashicon */}
            <Box
              sx={{
                height: "40vh",
                width: {
                  xs: "100vw",
                  sm: "50vw",
                  md: "40vw",
                  lg: "30vw",
                  xl: "27vw",
                },
                backgroundColor: "#181630",
                display: "flex",

                flexDirection: "column",
                borderTopLeftRadius: "50px",
                borderTopRightRadius: "50px",
              }}
            >
              <Typography
                sx={{
                  marginTop: "2vh",
                  height: { md: "4vh", xs: "4vh", sm: "6vh" },
                  width: { md: "2vw", xs: "8vw", sm: "4vw" },
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Image
                  src="/images/Team/dashicons_testimonial.png"
                  height={500}
                  width={500}
                  alt="icon"
                  style={{ margin: "auto" }}
                />
              </Typography>

              <Box sx={{ height: "36vh", display: "flex" }}>
                <Image
                  src={data.image}
                  alt="member-image"
                  height={200}
                  width={200}
                  style={{ margin: "auto", borderRadius: "50%" }}
                />
              </Box>
            </Box>

            {/* Name, position and decription */}
            <Box
              sx={{
                minHeight: "40vh",
                width: {
                  xs: "100vw",
                  sm: "50vw",
                  md: "40vw",
                  lg: "30vw",
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

      <Box
        sx={{
          display: "flex",
          gap: "2vw",
          width: "100%",
          height: "vh",
          justifyContent: "center",
        }}
      >
        <Button
          className="embla__prev"
          onClick={scrollPrev}
          sx={{
            backgroundColor: "white",
            width: { md: "10vw", xs: "30vw", sm: "25vw" },
            height: { md: "5vh", xs: "5vh", sm: "5vh" },
            "&:hover": {},
          }}
        >
          Previous
        </Button>
        <Button
          className="embla__next"
          onClick={scrollNext}
          sx={{
            backgroundColor: "white",
            width: { md: "10vw", xs: "30vw", sm: "25vw" },
            height: { md: "5vh", xs: "5vh", sm: "5vh" },
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default TestimonialSlider;
