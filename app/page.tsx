// ============================================================
// app/page.tsx — Homepage (server-rendered, SEO-crawlable)
// Imports all section components — same design, proper HTML
// ============================================================
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { JourneySection } from "@/components/JourneySection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AboutSection } from "@/components/AboutSection";
import { ToolsSection } from "@/components/ToolsSection";
import { SubscribeSection } from "@/components/SubscribeSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <JourneySection />
      <PortfolioSection />
      <AboutSection />
      <ToolsSection />
      <SubscribeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
