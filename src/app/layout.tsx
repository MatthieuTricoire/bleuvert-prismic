import type { Metadata } from "next";
import clsx from "clsx";
import { Raleway } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "studio bleuvert",
    description:
      settings.data.meta_description || "studio bleuvert meda fallback", //todo: définir une meta data par défaut
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(raleway.variable)}>
      <body>{children} </body>
    </html>
  );
}
