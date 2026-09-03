import AchievementsSection from "@/components/achievements/AchievementsSection";
import CertificationsSection from "@/components/achievements/CertificationsSection";
import { Metadata } from "next";
import { NavSpacer } from "@/components/layout/NavSpacer";

export const metadata: Metadata = {
  title: "Achievements | Portfolio of Adrian A.M.",
  description: "Awards, achievements, and certifications of Adrian Anugerah Maulana.",
};

export default function AchievementsPage() {
  return (
    <div className="flex-1 w-full max-w-6xl mx-auto px-6 lg:px-12 flex flex-col pt-16 pb-12">
      <NavSpacer />
      <AchievementsSection />
      <CertificationsSection />
    </div>
  );
}
