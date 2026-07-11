import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import TechStackSection from "@/components/home/TechStackSection";
import GithubSection from "@/components/home/GithubSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="flex-1 w-full max-w-6xl mx-auto px-6 lg:px-12 flex flex-col">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TechStackSection />
      <GithubSection />
      <CtaSection />
    </div>
  );
}
