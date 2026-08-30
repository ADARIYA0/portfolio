import AboutMeSection from "@/components/about/AboutMeSection";
import DetailedExperienceSection from "@/components/about/DetailedExperienceSection";
import EducationSection from "@/components/about/EducationSection";

export const metadata = {
  title: "About | Portfolio of Adrian A.M.",
  description: "Learn more about Adrian Anugerah Maulana, a Software Engineer passionate about backend systems and DevOps.",
};

export default function AboutPage() {
  return (
    <div className="flex-1 w-full max-w-6xl mx-auto px-6 lg:px-12 flex flex-col pt-16 pb-12">
      <AboutMeSection />
      <DetailedExperienceSection />
      <EducationSection />
    </div>
  );
}
