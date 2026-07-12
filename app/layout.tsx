import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const siteUrl = new URL(`${protocol}://${host}`);
  const title = "王秀玲 Xiuling Wang｜微生物生态研究者";
  const description = "王秀玲的学术与求职主页：微生物生态、气候与深度梯度、iDNA/eDNA、根际与食用菌微生物、真菌群落及微生物组数据分析。";

  return {
    metadataBase: siteUrl,
    title,
    description,
    alternates: {
      canonical: siteUrl,
      languages: {
        "zh-CN": new URL("/", siteUrl),
        en: new URL("/en", siteUrl),
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: siteUrl,
      locale: "zh_CN",
      images: [{ url: new URL("/og-xiuling-v3.png", siteUrl).toString(), width: 1200, height: 630, alt: "Xiuling Wang · Microbes · Ecology · Data" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og-xiuling-v3.png", siteUrl).toString()],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
