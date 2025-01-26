"use client";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import React from "react";
import {
  Email,
  LocationOn,
  Phone,
  Facebook,
  LinkedIn,
  Instagram,
  GitHub,
} from "@mui/icons-material";
import { FaDiscord } from "react-icons/fa";
import Image from "next/image";
import { ContactFormType, contactSchema } from "@/utils/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: undefined,
      email: undefined,
      phone: undefined,
      message: undefined,
    },
    mode: "onChange",
  });
  const handleClick = async (data: ContactFormType) => {
    try {
      await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box sx={{ padding: 2 }} id="contact-us">
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: "600", marginBottom: 2, color: "#64ffda" }}
      >
        <span style={{ color: "#fff", textTransform: "uppercase" }}>
          Contact
        </span>{" "}
        <span style={{ color: "#87CEFA", textTransform: "uppercase" }}>Us</span>
      </Typography>
      <Typography
        variant="h6"
        component="h6"
        align="center"
        gutterBottom
        sx={{ marginBottom: 3, color: "#8892b0" }}
      >
        We'd love to hear from you!
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          backgroundColor: "rgb(25, 22, 49)",
          color: "#fff",
          padding: 4,
          borderRadius: "8px",
          fontFamily: "'Poppins', sans-serif",
          boxShadow: "0 4px 8px rgb(25, 22, 49)",
          margin: "50px auto",
          maxWidth: "1200px",
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            flex: "1 1 40%",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: 2,
          }}
        >
          <Typography variant="h6" sx={{ color: "#87CEFA" }} gutterBottom>
            Contact Details
          </Typography>
          <Typography variant="body1" gutterBottom>
            Feel free to reach out to us through the contact details below.
          </Typography>

          {/* Contact Info */}
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginBottom: 2,
              }}
            >
              <Email />
              <Typography variant="body1" sx={{ color: "#87CEFA" }}>
                kathfoss@kathford.edu.np
              </Typography>
            </Box>
            {/*<Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginBottom: 2,
              }}
            >
              <Phone />
              <Typography variant="body1" sx={{ color: "#87CEFA" }}>
                9774444444
              </Typography>
            </Box>*/}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginBottom: 2,
              }}
            >
              <LocationOn />
              <Typography variant="body1" sx={{ color: "#87CEFA" }}>
                Balkumari, Lalitpur
              </Typography>
            </Box>
          </Box>

          {/* Social Media Icons */}
          <Typography variant="h6" sx={{ color: "#87CEFA", marginTop: 3 }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
            <IconButton sx={{ color: "#87CEFA" }}>
              <a
                href="https://www.facebook.com/kathfordfosscommunity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            </IconButton>
            <IconButton sx={{ color: "#87CEFA" }}>
              <a
                href="https://www.linkedin.com/in/kathfoss-community-957a801a5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>
            </IconButton>
            <IconButton sx={{ color: "#87CEFA" }}>
              <a
                href="https://www.instagram.com/kathfosscommunity/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </IconButton>
            <IconButton sx={{ color: "#87CEFA" }}>
              <a
                href="https://github.com/KathFOSS-Club"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
              </a>
            </IconButton>
            <IconButton sx={{ color: "#87CEFA" }}>
              <a
                href="https://discord.gg/5TPSezJadW"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>
            </IconButton>
          </Box>

          {/* Logo */}
          <Box
            sx={{
              marginTop: { xs: 2, md: 25 },
              textAlign: "center",
            }}
          >
            <Image src="/assets/logo.svg" alt="Logo" width={130} height={130} />
          </Box>
        </Box>

        {/* Right Section with Message Box */}
        <Box
          sx={{
            flex: "1 1 50%",
            backgroundColor: "#190033",
            padding: 4,
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit(handleClick)}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="body1" sx={{ color: "#87CEFA" }}>
              Name
            </Typography>
            <TextField
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              label="Enter your Name"
              variant="outlined"
              fullWidth
              sx={{
                input: { color: "#87CEFA" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#87CEFA",
                  },
                },
              }}
            />
            <Typography variant="body1" sx={{ color: "#87CEFA" }}>
              Phone Number
            </Typography>
            <TextField
              {...register("phone")}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              label="Enter your Phone Number"
              variant="outlined"
              fullWidth
              sx={{
                input: { color: "#87CEFA" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#87CEFA",
                  },
                },
              }}
            />
            <Typography variant="body1" sx={{ color: "#87CEFA" }}>
              Email
            </Typography>
            <TextField
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              label="Enter your Email"
              variant="outlined"
              fullWidth
              sx={{
                input: { color: "#87CEFA" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#87CEFA",
                  },
                },
              }}
            />
            <Typography variant="body1" sx={{ color: "#87CEFA" }}>
              Message
            </Typography>
            <TextField
              {...register("message")}
              error={!!errors.message}
              helperText={errors.message?.message}
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              sx={{
                textarea: { color: "#87CEFA" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#87CEFA",
                  },
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              sx={{
                backgroundColor: "rgb(25, 22, 49)",
                "&:hover": {
                  backgroundColor: "#47e1a5",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
