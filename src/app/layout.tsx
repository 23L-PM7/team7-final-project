"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { LicenseInfo } from "@mui/x-license";

LicenseInfo.setLicenseKey("YOUR_LICENSE_KEY");

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
