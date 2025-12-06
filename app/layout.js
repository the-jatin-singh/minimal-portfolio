import "./globals.css";
import React from "react";
import Loader from "./Loader";

export const metadata = {
  title: {
    default: "The Jatin Singh",
    template: "%s | The Jatin Singh", // This adds your name to sub-pages (e.g., "Projects | The Jatin Singh")
  },
  description: "Personal portfolio, creative developer projects, and digital playground.",
  keywords: ["Next.js", "React", "JavaScript", "Portfolio", "Jatin Singh", "Web Development"],
  authors: [{ name: "Jatin Singh" }],
  creator: "Jatin Singh",
  icons: {
    icon: "/favicon.svg", // Ensure your SVG is saved as 'favicon.svg' in the public folder
  },
  openGraph: {
    title: "The Jatin Singh",
    description: "Personal portfolio, creative developer projects, and digital playground.",
    url: "https://the-jatin-singh.vercel.app/", // Replace with your actual domain when ready
    siteName: "The Jatin Singh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Jatin Singh",
    description: "Personal portfolio, creative developer projects, and digital playground.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Loader />
        {children}
      </body>
    </html>
  );
}