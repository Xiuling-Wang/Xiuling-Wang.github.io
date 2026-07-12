import type { Metadata } from "next";

const siteUrl = new URL("https://xiuling-wang.pages.dev/");
const title = "Xiuling Wang | Microbial Ecologist";
const description = "Academic and career website of Xiuling Wang: microbial ecology, climate and depth gradients, iDNA/eDNA, rhizosphere and edible-fungi microbiomes, R, and AI-assisted research workflows.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  icons: { icon: "/favicon.svg" },
  alternates: {
    canonical: new URL("/en/", siteUrl),
    languages: {
      "zh-CN": new URL("/", siteUrl),
      en: new URL("/en/", siteUrl),
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: new URL("/en/", siteUrl),
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    images: [{ url: new URL("/og-xiuling-v3.png", siteUrl).toString(), width: 1200, height: 630, alt: "Xiuling Wang · Microbes · Ecology · Data" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [new URL("/og-xiuling-v3.png", siteUrl).toString()],
  },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
