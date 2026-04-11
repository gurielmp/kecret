import type { Metadata } from "next";

import { ContactSection } from "@/components/marketing/contact-section";
import { HeroSection } from "@/components/marketing/hero-section";
import { PackagesSection } from "@/components/marketing/packages-section";
import { ProcessSection } from "@/components/marketing/process-section";
import { SelectedWorkSection } from "@/components/marketing/selected-work-section";
import { ServicesSection } from "@/components/marketing/services-section";
import { SiteHeader } from "@/components/marketing/site-header";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Social Media & Website Agency",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Social Media & Website Agency`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.socialImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} social preview image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Social Media & Website Agency`,
    description: siteConfig.description,
    images: [siteConfig.socialImage],
  },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <HeroSection />
      <ServicesSection />
      <SelectedWorkSection />
      <ProcessSection />
      <PackagesSection />
      <ContactSection />
    </>
  );
}
