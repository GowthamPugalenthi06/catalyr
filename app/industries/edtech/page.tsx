import type { Metadata } from "next";
import EdtechPage from "@/components/sections/EdtechPage";

export const metadata: Metadata = {
  title: "EdTech Design & Development Agency | Catalyr",
  description: "Expert EdTech website design, UI/UX, and development. We build scalable digital learning platforms.",
  alternates: { canonical: '/industries/edtech' },
};

export default function EdtechRoute() {
  return (
    <main>
      <EdtechPage />
    </main>
  );
}
