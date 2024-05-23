"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/header/Navbar";
import { LicenseInfo } from "@mui/x-license";
import { motion } from "framer-motion";
import Footer from "../components/footer/Footer";

LicenseInfo.setLicenseKey("YOUR_LICENSE_KEY");

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

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
        {/* <Footer /> */}
      </body>
    </html>
  );
}
