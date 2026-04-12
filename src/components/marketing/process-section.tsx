"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Search, LayoutGrid, PenTool, BarChart } from "lucide-react";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site-config";

import { SectionHeading } from "./section-heading";

const icons = [Search, LayoutGrid, PenTool, BarChart];

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
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function ProcessSection() {
  return (
    <section
      id="process"
      className="scroll-mt-28 border-y border-black/5 bg-[var(--color-surface)] py-20 sm:py-24"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Workflow"
            title="A workflow built to scale as client volume grows."
            description="This section is data-driven on purpose, so it can be reused later in About, FAQ, proposal, or service detail pages."
          />
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 lg:grid-cols-4"
        >
          {siteConfig.process.map((step, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article
                key={step.title}
                variants={itemVariants}
                className="group relative rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
              >
                <div className="absolute right-6 top-6 text-slate-100 transition-colors duration-300 group-hover:text-slate-200">
                  <Icon className="h-12 w-12" strokeWidth={1} />
                </div>
                <p className="text-sm font-semibold text-[var(--color-accent)]">
                  0{index + 1}
                </p>
                <h3 className="mt-8 text-xl font-semibold text-[var(--color-foreground)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
