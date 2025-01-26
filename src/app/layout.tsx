import Providers from "@/config/Providers";
import "@/styles/globals.css";
import { Poppins, Karla } from "next/font/google";
import { Box } from "@mui/material";
import StarField from "./components/ParticleAnimation/StarField";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // weight: "600",
  subsets: ["latin"],
});

// For SEO
export const metadata = {
  title: "Kathfoss | Official Site",
  description: "add description here",
  metadataBase: new URL("https://kathfoss.org"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    type: "website",
    url: "https://kathfoss.org",
    title: "Kathfoss | Official Site",
    description: "add description here",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
        alt: "kathfoss-image-logo",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} antialiased`}>
        <Providers>
          <StarField />
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Navbar />
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
