import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Footer from "./_components/layout/Footer";
import Navbar from "./_components/layout/Navbar";
import Main from "./_components/layout/Main";
import DonationBanner from "./_components/layout/DonationBanner";

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
          <DonationBanner />
          <Navbar />
          <Main>{children}</Main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
