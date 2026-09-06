import type { Metadata } from "next";
import "../globals.css";

const siteUrl = new URL("https://xiuling-wang.pages.dev/");
const title = "王秀玲 Xiuling Wang｜微生物生态与微生物组研究";
const description = "微生物生态与微生物组研究者，结合低生物量分子实验、R统计分析与可复现研究，关注土壤、根际与环境梯度；寻找博后及相关研究机会。";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  authors: [{ name: "Xiuling Wang", url: "https://orcid.org/0000-0002-8006-7162" }],
  creator: "Xiuling Wang",
  icons: { icon: "/favicon.svg" },
  alternates: {
    canonical: new URL("/", siteUrl),
    languages: {
      "zh-CN": new URL("/", siteUrl),
      en: new URL("/en/", siteUrl),
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: new URL("/", siteUrl),
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    images: [{ url: new URL("/og-xiuling-v3.png", siteUrl).toString(), width: 1200, height: 630, alt: "Xiuling Wang · Microbes · Ecology · Data" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [new URL("/og-xiuling-v3.png", siteUrl).toString()],
  },
};

export default function ChineseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
