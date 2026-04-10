import { ContactSection } from "@/components/marketing/contact-section";
import { HeroSection } from "@/components/marketing/hero-section";
import { PackagesSection } from "@/components/marketing/packages-section";
import { ProcessSection } from "@/components/marketing/process-section";
import { ServicesSection } from "@/components/marketing/services-section";
import { SiteHeader } from "@/components/marketing/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PackagesSection />
      <ContactSection />
    </>
  );
}
