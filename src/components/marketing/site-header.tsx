"use client";

import Image from "next/image";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site-config";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#packages", label: "Packages" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (targetId: string) => {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[color:rgba(248,244,238,0.82)] backdrop-blur-xl">
      <Container className="py-3.5 sm:py-4.5">
        <div className="flex items-center justify-between gap-6">
          <button
            type="button"
            className="flex items-center gap-3 text-left"
            onClick={() => handleNavigate("home")}
          >
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-black/8 bg-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur sm:h-12 sm:w-12">
              <Image
                src="/zennelis-mark.svg"
                alt="Zennelis logo"
                width={40}
                height={40}
                className="h-9 w-9 sm:h-10 sm:w-10"
                priority
              />
            </span>
            <span className="font-display text-xl font-semibold tracking-[-0.03em] text-[var(--color-foreground)] sm:text-[1.35rem]">
              {siteConfig.name}
            </span>
          </button>

          <nav className="hidden flex-wrap items-center justify-end gap-2 sm:flex sm:gap-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                className="rounded-full px-4 py-2.5 text-[15px] font-medium text-[var(--color-muted)] transition-colors hover:bg-white hover:text-[var(--color-foreground)]"
                onClick={() => handleNavigate(item.href.replace("#", ""))}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[var(--color-foreground)] backdrop-blur transition-colors hover:bg-white sm:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {isOpen ? (
          <nav
            id="mobile-navigation"
            className="mt-3 grid gap-2 rounded-[1.5rem] border border-black/8 bg-white/85 p-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur sm:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-surface)]"
                onClick={() => handleNavigate(item.href.replace("#", ""))}
              >
                {item.label}
              </button>
            ))}
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
