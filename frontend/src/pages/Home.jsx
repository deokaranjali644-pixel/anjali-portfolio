import { HeroSection } from "@/components/home/HeroSection";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { ToolsSection } from "@/components/home/ToolsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main data-testid="home-page">
      <HeroSection />
      <ExperienceTimeline />
      <ToolsSection />
      <ContactSection />
    </main>
  );
}
