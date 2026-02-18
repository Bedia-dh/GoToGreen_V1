import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import CookieBanner from "@/components/CookieBanner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoToGreen | Technology Solutions for Modern Business",
  description: "Delivering innovative technology solutions with a commitment to efficiency and responsible engineering. Web, Mobile, AI, DevOps & Training services.",
  keywords: "technology solutions, web development, mobile apps, AI solutions, DevOps, training, software development",
  icons: {
    icon: [
      { url: '/Frame5.png', sizes: 'any' },
      { url: '/Frame5.png', sizes: '32x32', type: 'image/png' },
      { url: '/Frame5.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/Frame5.png', sizes: '180x180', type: 'image/png' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
