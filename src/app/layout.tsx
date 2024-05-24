"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { LicenseInfo } from "@mui/x-license";
import { motion } from "framer-motion";
import Footer from "../components/footer/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import NavBar from "../components/header/Navbar";

LicenseInfo.setLicenseKey("YOUR_LICENSE_KEY");

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
