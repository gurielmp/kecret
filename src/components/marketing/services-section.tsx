"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Smartphone, Globe, TrendingUp } from "lucide-react";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site-config";

import { SectionHeading } from "./section-heading";

const iconMap: Record<string, React.ElementType> = {
  "Social Media": Smartphone,
  "Website": Globe,
  "Growth Support": TrendingUp,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Core Services"
            title="A service structure that stays clear from content to website delivery."
            description="The core offer is separated early so it can expand into detail pages, pricing, and case studies without a large refactor later."
          />
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.kicker] || Globe;
            return (
              <motion.article
                key={service.name}
                variants={itemVariants}
                className="group rounded-[2rem] border border-black/8 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fffdfa] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.02)] transition-colors duration-300 group-hover:bg-[#f8f4ee]">
                  <Icon className="h-6 w-6 text-[var(--color-accent)]" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  {service.kicker}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--color-foreground)]">
                  {service.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-[var(--color-foreground)]">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
