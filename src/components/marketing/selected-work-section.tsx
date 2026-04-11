import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site-config";

import { SectionHeading } from "./section-heading";

function WorkPreview({ name, featured }: { name: string; featured: boolean }) {
  const frameClassName = featured
    ? "border-white/10 bg-white/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
    : "border-black/8 bg-[linear-gradient(180deg,#fffdfa_0%,#f5ede3_100%)]";
  const shellClassName = featured
    ? "border-white/10 bg-[#111d35]"
    : "border-black/8 bg-white";
  const mutedBarClassName = featured ? "bg-white/16" : "bg-slate-200";
  const softBarClassName = featured ? "bg-white/10" : "bg-slate-100";
  const surfaceClassName = featured ? "bg-[#16233e]" : "bg-[#fbf5ef]";

  if (name === "Aster Studio") {
    return (
      <div
        className={`relative mb-6 h-[15.5rem] overflow-hidden rounded-[1.75rem] border p-3.5 transition-transform duration-500 group-hover:-translate-y-1 ${frameClassName}`}
      >
        <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_left,rgba(239,106,62,0.22),transparent_58%)]" />
        <div
          className={`relative rounded-[1.4rem] border p-4 ${shellClassName}`}
        >
          <div className="flex items-center justify-between rounded-full border border-black/5 bg-black/[0.03] px-3 py-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]/90" />
              <span className={`h-2.5 w-2.5 rounded-full ${mutedBarClassName}`} />
              <span className={`h-2.5 w-2.5 rounded-full ${softBarClassName}`} />
            </div>
            <div className={`h-2.5 w-28 rounded-full ${softBarClassName}`} />
          </div>
          <div
            className={`mt-5 rounded-[1.25rem] p-5 ${surfaceClassName}`}
          >
            <div className={`h-3 w-24 rounded-full ${mutedBarClassName}`} />
            <div className={`mt-4 h-12 w-4/5 rounded-[1rem] ${softBarClassName}`} />
            <div className="mt-6 rounded-[1.25rem] border border-black/5 bg-white/70 p-4">
              <div className="grid grid-cols-[1.15fr_0.85fr] gap-4">
                <div
                  className={`rounded-[1rem] p-4 ${
                    featured ? "bg-[#f8f4ee]" : "bg-[#fffaf5]"
                  }`}
                >
                  <div className="h-2.5 w-16 rounded-full bg-slate-300" />
                  <div className="mt-3 h-9 w-5/6 rounded-[0.85rem] bg-slate-200" />
                  <div className="mt-4 h-10 w-28 rounded-full bg-[var(--color-accent)]/85" />
                </div>
                <div className="space-y-3">
                  <div className="h-16 rounded-[1rem] bg-[var(--color-accent)]/88" />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-14 rounded-[1rem] bg-slate-200" />
                    <div className="h-14 rounded-[1rem] bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (name === "Northpeak Advisory") {
    return (
      <div
        className={`relative mb-6 h-[15.5rem] overflow-hidden rounded-[1.75rem] border p-3.5 transition-transform duration-500 group-hover:-translate-y-1 ${frameClassName}`}
      >
        <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[var(--color-accent)]/16 blur-2xl" />
        <div
          className={`relative rounded-[1.4rem] border p-4 ${shellClassName}`}
        >
          <div className="flex items-center justify-between rounded-full border border-black/5 bg-black/[0.03] px-3 py-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]/90" />
              <span className={`h-2.5 w-2.5 rounded-full ${mutedBarClassName}`} />
              <span className={`h-2.5 w-2.5 rounded-full ${softBarClassName}`} />
            </div>
            <div className={`h-2.5 w-24 rounded-full ${softBarClassName}`} />
          </div>
          <div className="mt-5 grid gap-4">
            <div className={`rounded-[1.25rem] p-5 ${featured ? "bg-[#16233e]" : "bg-slate-50"}`}>
              <div className={`h-3 w-24 rounded-full ${mutedBarClassName}`} />
              <div className={`mt-4 h-10 w-full rounded-[1rem] ${softBarClassName}`} />
              <div className="mt-5 flex gap-3">
                <div className="h-10 w-28 rounded-full bg-[var(--color-accent)]/88" />
                <div className={`h-10 flex-1 rounded-full ${featured ? "bg-white/10" : "bg-white"}`} />
              </div>
            </div>
            <div className="grid grid-cols-[1.25fr_0.75fr] gap-3">
              <div className={`rounded-[1.2rem] p-4 ${featured ? "bg-white/8" : "bg-[#f6efe7]"}`}>
                <div className={`h-2.5 w-16 rounded-full ${mutedBarClassName}`} />
                <div className={`mt-3 h-8 w-5/6 rounded-[0.8rem] ${softBarClassName}`} />
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="h-10 rounded-[0.85rem] bg-[var(--color-accent)]/82" />
                  <div className={`h-10 rounded-[0.85rem] ${softBarClassName}`} />
                  <div className={`h-10 rounded-[0.85rem] ${featured ? "bg-white/8" : "bg-white"}`} />
                </div>
              </div>
              <div className="space-y-3">
                <div className={`h-10 rounded-[1rem] ${featured ? "bg-white/8" : "bg-slate-100"}`} />
                <div className="h-11 rounded-[1rem] bg-[var(--color-accent)]/72" />
                <div className={`h-10 rounded-[1rem] ${featured ? "bg-white/10" : "bg-white"}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative mb-6 h-[15.5rem] overflow-hidden rounded-[1.75rem] border p-3.5 transition-transform duration-500 group-hover:-translate-y-1 ${frameClassName}`}
    >
      <div className="absolute left-6 top-4 h-24 w-24 rounded-full bg-[var(--color-accent)]/18 blur-2xl" />
      <div
        className={`relative rounded-[1.4rem] border p-4 ${shellClassName}`}
      >
        <div className="flex items-center justify-between rounded-full border border-black/5 bg-black/[0.03] px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]/90" />
            <span className={`h-2.5 w-2.5 rounded-full ${mutedBarClassName}`} />
            <span className={`h-2.5 w-2.5 rounded-full ${softBarClassName}`} />
          </div>
          <div className={`h-2.5 w-24 rounded-full ${softBarClassName}`} />
        </div>
        <div className="grid grid-cols-[0.9fr_1.1fr] gap-4">
          <div
            className={`mt-5 rounded-[1.2rem] p-4 ${
              featured ? "bg-white/8" : "bg-[#fbf4ee]"
            }`}
          >
            <div className="flex gap-2">
              <div className="h-7 w-7 rounded-full bg-[var(--color-accent)]/90" />
              <div className={`h-7 w-7 rounded-full ${featured ? "bg-white/12" : "bg-slate-200"}`} />
              <div className={`h-7 w-7 rounded-full ${featured ? "bg-white/12" : "bg-slate-100"}`} />
            </div>
            <div className={`mt-5 h-16 rounded-[1rem] ${featured ? "bg-white/10" : "bg-white"}`} />
            <div className={`mt-4 h-2.5 w-4/5 rounded-full ${mutedBarClassName}`} />
            <div className="mt-4 h-8 rounded-full bg-[var(--color-accent)]/72" />
          </div>
          <div className="mt-5 space-y-3">
            <div className={`rounded-[1.2rem] p-4 ${featured ? "bg-white/10" : "bg-slate-100"}`}>
              <div className={`h-2.5 w-16 rounded-full ${mutedBarClassName}`} />
              <div className={`mt-3 h-7 rounded-[0.9rem] ${softBarClassName}`} />
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="h-8 rounded-[0.8rem] bg-[var(--color-accent)]/78" />
                <div className={`h-8 rounded-[0.8rem] ${featured ? "bg-white/10" : "bg-white"}`} />
                <div className={`h-8 rounded-[0.8rem] ${softBarClassName}`} />
              </div>
            </div>
            <div className={`rounded-[1.2rem] p-4 ${featured ? "bg-white/8" : "bg-[#f6efe7]"}`}>
              <div className={`h-2.5 w-14 rounded-full ${mutedBarClassName}`} />
              <div className={`mt-3 h-9 rounded-[0.9rem] ${softBarClassName}`} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-12 rounded-[1rem] bg-[var(--color-accent)]/82" />
              <div className={`h-12 rounded-[1rem] ${featured ? "bg-white/8" : "bg-white"}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SelectedWorkSection() {
  return (
    <section
      id="work"
      className="scroll-mt-28 border-y border-black/5 bg-[linear-gradient(180deg,rgba(255,248,241,0.7)_0%,rgba(239,230,218,0.45)_100%)] py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Concept projects shaped to show how Zennelis builds trust online."
          description="A look at directional work across service businesses, consulting offers, and brand-led experiences. The goal is not decoration. It is positioning, clarity, and a stronger digital first impression."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {siteConfig.selectedWork.map((project) => (
            <article
              key={project.name}
              className={`group flex h-full min-h-[44rem] flex-col rounded-[2rem] border p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)] ${
                project.featured
                  ? "border-[var(--color-foreground)] bg-[var(--color-foreground)] text-[var(--color-background)]"
                  : "border-black/8 bg-white text-[var(--color-foreground)]"
              }`}
            >
              <WorkPreview name={project.name} featured={project.featured} />
              <p
                className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                  project.featured
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-accent)]"
                }`}
              >
                {project.category}
              </p>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.03em]">
                {project.name}
              </h3>
              <p
                className={`mt-5 text-sm leading-7 sm:text-base ${
                  project.featured
                    ? "text-[var(--color-background)]/78"
                    : "text-[var(--color-muted)]"
                }`}
              >
                {project.summary}
              </p>
              <ul className="mt-8 space-y-3 text-sm sm:text-[15px]">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className={`mt-1 h-2.5 w-2.5 rounded-full ${
                        project.featured
                          ? "bg-[var(--color-accent)]"
                          : "bg-[var(--color-foreground)]"
                      }`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p
                className={`mt-auto pt-8 text-sm font-medium transition-transform duration-300 group-hover:translate-x-1 ${
                  project.featured
                    ? "text-[var(--color-background)]/85"
                    : "text-[var(--color-foreground)]"
                }`}
              >
                {project.note} →
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
