import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site-config";

import { SectionHeading } from "./section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Core Services"
          title="A service structure that stays clear from content to website delivery."
          description="The core offer is separated early so it can expand into detail pages, pricing, and case studies without a large refactor later."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {siteConfig.services.map((service) => (
            <article
              key={service.name}
              className="rounded-[2rem] border border-black/8 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
            >
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
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
