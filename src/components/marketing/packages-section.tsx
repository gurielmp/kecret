"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site-config";

import { SectionHeading } from "./section-heading";

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

export function PackagesSection() {
  return (
    <section id="packages" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Packages"
            title="Starting packages that are easy to sell and easy to extend."
            description="The pricing and deliverables can still change, but the structure is already ready to move into a CMS or a dedicated content layer later."
          />
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {siteConfig.packages.map((pkg) => (
            <motion.article
              variants={itemVariants}
              key={pkg.name}
              className={`relative flex flex-col rounded-[2rem] border p-7 transition-transform duration-300 hover:-translate-y-1 ${
                pkg.featured
                  ? "border-[var(--color-foreground)] bg-[var(--color-foreground)] text-[var(--color-background)] shadow-[0_20px_50px_rgba(15,23,42,0.25)]"
                  : "border-black/10 bg-white text-[var(--color-foreground)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)]"
              }`}
            >
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <h3 className="text-2xl font-semibold">{pkg.name}</h3>
                {pkg.featured ? (
                  <span className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    Recommended
                  </span>
                ) : null}
              </div>
              <p
                className={`mt-4 text-sm leading-7 ${
                  pkg.featured
                    ? "text-[var(--color-background)]/75"
                    : "text-[var(--color-muted)]"
                }`}
              >
                {pkg.description}
              </p>
              <p className="mt-6 text-4xl font-semibold tracking-tight">{pkg.price}</p>
              <p
                className={`mt-2 text-sm ${
                  pkg.featured
                    ? "text-[var(--color-background)]/75"
                    : "text-[var(--color-muted)]"
                }`}
              >
                {pkg.billing}
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className={`mt-1 h-2.5 w-2.5 rounded-full flex-none ${
                        pkg.featured ? "bg-[var(--color-accent)]" : "bg-[var(--color-foreground)]"
                      }`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
