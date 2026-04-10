import Link from "next/link";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site-config";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 pb-20 sm:pb-24">
      <Container>
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,#073b4c_0%,#0f172a_55%,#ef6a3e_130%)] px-5 py-8 text-white sm:rounded-[2.5rem] sm:px-10 sm:py-12 lg:flex lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Next Step
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-4xl">
              Start with a clear company profile, then scale into a stronger marketing engine.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
              This website can grow into campaign landing pages, case studies, a blog, and a more intentional inquiry funnel without rebuilding the structure again.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 text-sm lg:mt-0 lg:items-end">
            <p className="text-white/70">{siteConfig.contactEmail}</p>
            <Link
              href={`mailto:${siteConfig.contactEmail}`}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-95 sm:w-auto"
            >
              Request a proposal
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
