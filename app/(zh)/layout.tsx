import type { Metadata } from "next";
import "../globals.css";

const siteUrl = new URL("https://xiuling-wang.pages.dev/");
const title = "王秀玲 Xiuling Wang｜微生物生态研究者";
const description = "王秀玲的学术与求职主页：微生物生态、气候与深度梯度、iDNA/eDNA、根际与食用菌微生物、真菌群落及微生物组数据分析。";

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
