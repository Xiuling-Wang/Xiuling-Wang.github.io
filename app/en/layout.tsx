import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xiuling Wang | Microbial Ecologist",
  description: "Academic and career website of Xiuling Wang: microbial ecology, climate and depth gradients, iDNA/eDNA, rhizosphere and edible-fungi microbiomes, R, and AI-assisted research workflows.",
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
