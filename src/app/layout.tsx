import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Footer2 from "@/components/Footer/Footer2";
import Header2 from "@/components/Header/header2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fielmente",
  description: "Fielmente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} cz-shortcut-listen="true">
        {/* <Header /> */}
        <Header2 />
        {children}
        <Footer2 />
      </body>
    </html>
  );
}
