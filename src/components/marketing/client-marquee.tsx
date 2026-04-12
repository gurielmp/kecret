"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site-config";

export function ClientMarquee() {
  const items = siteConfig.selectedWork.map((work) => work.name);
  const loopedItems = [...items, ...items, ...items, ...items, ...items];

  return (
    <section className="border-y border-black/5 bg-white py-10 sm:py-12">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr] lg:items-center">
          <div className="max-w-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Built For
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-[2.2rem]">
              Ambitious brands that need clarity, not noise.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              Concept directions across service, advisory, and lifestyle-facing
              brands to show how Zennelis approaches digital presentation.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-[linear-gradient(180deg,#fffdfa_0%,#f7f0e7_100%)] p-5 sm:p-6">
            <div className="absolute inset-y-0 left-0 w-16 bg-[linear-gradient(to_right,#fffdfa,transparent)]" />
            <div className="absolute inset-y-0 right-0 w-16 bg-[linear-gradient(to_left,#f7f0e7,transparent)]" />
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              Directional Brand References
            </div>
            <div className="overflow-hidden">
              <motion.div
                animate={{ x: "-50%" }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 22,
                }}
                className="flex w-fit flex-none items-center gap-4 pr-4"
              >
                {loopedItems.map((item, idx) => (
                  <div
                    key={`${item}-${idx}`}
                    className="flex min-w-[12rem] items-center gap-3 rounded-[1.25rem] border border-black/6 bg-white/90 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-foreground)] text-sm font-semibold text-white">
                      {item.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-foreground)]">
                        {item}
                      </p>
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                        Concept Brand
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
