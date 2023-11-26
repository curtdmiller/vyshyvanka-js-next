import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./_components/Navbar";
import { Providers } from "./providers";
import { Flex } from "@chakra-ui/react";
import Main from "./_components/Main";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vyshyvanka.js",
  description: "A cross-stitch audio interface based on Ukrainian embroidery",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <Main>{children}</Main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
