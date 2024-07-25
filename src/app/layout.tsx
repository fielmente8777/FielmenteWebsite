import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Footer2 from "@/components/Footer/Footer2";
import Header2 from "@/components/Header/header2";
import Call from "@/components/Call";
import Whatsapp from "@/components/WhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fielmente - India's Leading Hospitality Marketing Agency",
  description: "We're the best hospitality marketing agency in India serving hotels, resorts restaurants, and cloud kitchens for more than 10 years.",
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
        <Call/>
        <Whatsapp/>
      </body>
    </html>
  );
}
