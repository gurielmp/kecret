"use client";

import { useState } from "react";
import Link from "next/link";

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

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[color:rgba(248,244,238,0.82)] backdrop-blur-xl">
      <Container className="py-3.5 sm:py-4.5">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="#home"
            className="font-display text-xl font-semibold tracking-[-0.03em] text-[var(--color-foreground)] sm:text-[1.35rem]"
            onClick={() => setIsOpen(false)}
          >
            {siteConfig.name}
          </Link>

          <nav className="hidden flex-wrap items-center justify-end gap-2 sm:flex sm:gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2.5 text-[15px] font-medium text-[var(--color-muted)] transition-colors hover:bg-white hover:text-[var(--color-foreground)]"
              >
                {item.label}
              </Link>
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
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-surface)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
