import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xiuling Wang | Soil Microbial Ecologist",
  description: "Academic and career website of Xiuling Wang: soil microbial ecology, climate and depth gradients, iDNA/eDNA, rhizosphere microbiomes, R, and AI-assisted research workflows.",
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
