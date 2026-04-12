"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site-config";
import { ClientMarquee } from "./client-marquee";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-[linear-gradient(180deg,_rgba(255,248,241,0.96)_0%,_rgba(245,238,229,0.98)_100%)] pt-28"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(239,106,62,0.18),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(7,59,76,0.1),_transparent_22%)]" />
        <Container className="pb-14 sm:pb-24 lg:pb-28">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid gap-10 sm:gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end"
          >
            <div>
              <motion.div variants={fadeIn} className="inline-flex max-w-full items-center rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-medium leading-5 text-[var(--color-muted)] backdrop-blur sm:text-sm">
                Social media management, website production, and growth support
              </motion.div>
              <motion.h1 variants={fadeIn} className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-[var(--color-foreground)] sm:mt-6 sm:text-6xl lg:text-7xl">
                Build a sharper digital presence without a messy delivery process.
              </motion.h1>
              <motion.p variants={fadeIn} className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:mt-6 sm:text-lg sm:leading-8">
                {siteConfig.description}
              </motion.p>
              <motion.div variants={fadeIn} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                <Link
                  href="#packages"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-95 sm:w-auto"
                >
                  Explore packages
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 backdrop-blur transition-colors hover:bg-white sm:w-auto"
                >
                  Discuss your project
                </Link>
              </motion.div>
            </div>

            <motion.div variants={staggerContainer} className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {siteConfig.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeIn}
                  className="rounded-[1.5rem] border border-black/10 bg-white/70 p-5 backdrop-blur sm:rounded-[2rem] sm:p-6"
                >
                  <p className="text-3xl font-semibold text-[var(--color-foreground)]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>
      <ClientMarquee />
    </>
  );
}
