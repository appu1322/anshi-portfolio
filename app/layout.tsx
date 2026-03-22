import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anshi Singh | Data Analyst",
  description:
    "Data Analyst with 3+ years of experience at TCS, specializing in Tableau dashboards, MySQL, and Excel for Johnson & Johnson analytics projects.",
  openGraph: {
    title: "Anshi Singh | Data Analyst",
    description:
      "Data Analyst at TCS skilled in Tableau, MySQL, and Excel, delivering enterprise analytics for Johnson & Johnson.",
    url: "https://portfolio-lake-five-17.vercel.app",
    siteName: "Anshi Singh Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Anshi Singh – Data Analyst",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshi Singh | Data Analyst",
    description:
      "Data Analyst building dashboards and delivering business insights using Tableau, MySQL, and Excel.",
    images: ["/og.png"],
  },
  verification: {
    google: "Tzvd7rS2Q-FwZHwX5kMbqaFio-fZjAre1hRgLHfP_Rs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="bg-white dark:bg-black text-black dark:text-white transition-colors"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
