"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { LicenseInfo } from "@mui/x-license";
import { motion } from "framer-motion";
import Footer from "../components/footer/Footer";
import NavBar from "../components/header/Navbar";

LicenseInfo.setLicenseKey("YOUR_LICENSE_KEY");

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-[1400px]">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
