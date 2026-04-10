import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site-config";

import { SectionHeading } from "./section-heading";

export function PackagesSection() {
  return (
    <section id="packages" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Packages"
          title="Starting packages that are easy to sell and easy to extend."
          description="The pricing and deliverables can still change, but the structure is already ready to move into a CMS or a dedicated content layer later."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {siteConfig.packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`rounded-[2rem] border p-7 ${
                pkg.featured
                  ? "border-[var(--color-foreground)] bg-[var(--color-foreground)] text-[var(--color-background)]"
                  : "border-black/10 bg-white text-[var(--color-foreground)]"
              }`}
            >
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <h3 className="text-2xl font-semibold">{pkg.name}</h3>
                {pkg.featured ? (
                  <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
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
                      className={`mt-1 h-2.5 w-2.5 rounded-full ${
                        pkg.featured ? "bg-[var(--color-accent)]" : "bg-[var(--color-foreground)]"
                      }`}
                    />
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
