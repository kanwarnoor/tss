import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Space_Grotesk, Montserrat, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const space = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TSS GNDU",
  description:
    "Official Technical Student Society of Guru Nanak Dev University. We empower students through workshops, hackathons, and technical excellence.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        space.variable,
        montserrat.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
