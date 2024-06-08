import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const bahnschrift = localFont({ 
  src: "../../public/fonts/Bahnschrift-Font-Family/bahnschrift.ttf",
  variable: '--font-bahnschrift',
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FRC 333 | The Megalodons",
  description: "Official website of FRC Team 333, The Megalodons. Founded in 1998, the John Dewey High School robotics team aims to equip a community of students passionate about science and technology with the skills and initiative to become the next generation of leaders and create positive change in their respective career fields.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bahnschrift.variable} font-main ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
