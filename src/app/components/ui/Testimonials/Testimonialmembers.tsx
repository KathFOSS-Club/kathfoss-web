import { Box } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { testimonialData } from '@/app/data/testimonial'
const Testimonialmembers = () => {
  return (
    
          <Box
      sx={{
        height: { xs: "30vh", sm: "25vh", md: "20vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "2vh", sm: "2.5vh", md: "3vh" }, 
          flexWrap: "wrap", 
        }}
      >
        {testimonialData.map((testimonial, index) => (
          <Box
            key={index}
            sx={{
              height: { xs: "8vh", sm: "9vh", md: "10vh" },
              width: { xs: "8vh", sm: "9vh", md: "10vh" }, 
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <Image
              src={testimonial.image}
              alt="member"
              height={500}
              width={500}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", 
              }}
            />
          </Box>
        ))}
      </Box>
        </Box>
  )
}

export default Testimonialmembers
