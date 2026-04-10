import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site-config";

import { SectionHeading } from "./section-heading";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="scroll-mt-28 border-y border-black/5 bg-[var(--color-surface)] py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Workflow"
          title="A workflow built to scale as client volume grows."
          description="This section is data-driven on purpose, so it can be reused later in About, FAQ, proposal, or service detail pages."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {siteConfig.process.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
            >
              <p className="text-sm font-semibold text-[var(--color-accent)]">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[var(--color-foreground)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
