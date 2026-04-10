## Kecret Studio

Starter structure for an agency website built on Next.js 15. This project is set up for a company profile, service pages, packages, case studies, and an inquiry funnel.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS v4

## Struktur

- `src/app`: routes and global layout
- `src/components/layout`: reusable layout wrappers
- `src/components/marketing`: sections for the company profile experience
- `src/data`: config and static content that can move to a CMS later

## Development

Jalankan local server:

```bash
npm run dev
```

Lint:

```bash
npm run lint
```

## Reasonable next steps

- add `about`, `services`, `portfolio`, and `contact` pages
- move package content and copy into a CMS or MDX once content volume grows
- add a shared `ui` layer once the design system becomes clearer
