# Pull Request: feat(landing): landing page

Summary of changes

- Implemented a responsive, modular landing page for Prompt.OS AI.
- Added Header and Footer components (components/Header.tsx, components/Footer.tsx).
- Added hero section and CTAs on app/page.tsx.
- Global styles and design tokens added in app/globals.css (glassmorphism-friendly variables).
- Placeholder SVG logo at public/placeholder-logo.svg.
- All components are small, reusable, and ready to be extracted into a component library.

Screenshots

- Desktop: docs/screenshots/landing-desktop.png (placeholder)
- Mobile: docs/screenshots/landing-mobile.png (placeholder)

Accessibility checklist

- [x] Keyboard navigable (tab order checked for nav and CTA links)
- [x] Sufficient color contrast for body text and CTAs (WCAG AA target)
- [x] Image alt text present for logo
- [ ] ARIA roles reviewed for landmark regions (header, main, footer)
- [ ] Focus outlines preserved and visible

Performance notes

- No heavy dependencies added. Minimal CSS and no client-side JS on the landing page.
- Placeholder SVG is small and inlined as a static asset.
- Next.js app router used; ensure appropriate caching headers on deployment.

Testing checklist

- [ ] Run pnpm install then pnpm dev and visit / on the feat/landing-page branch
- [ ] Test responsiveness across desktop/tablet/mobile widths
- [ ] Keyboard-only navigation test
- [ ] Lighthouse audit (aim for Performance > 90, Accessibility > 90)

Future improvements

- Add Framer Motion animations for hero and CTA transitions
- Implement dark/light theme toggling and store preference in localStorage
- Replace placeholder logo with brand assets
- Add internationalization (i18n) support and translate hero copy
- Extract Header/Footer into a shared UI library and add Storybook

How to open the PR (web)

1. Go to: https://github.com/sighalsolutions-sudo/saumya/compare
2. Select base: main and compare: feat/landing-page
3. Review changes and click "Create pull request". Paste this file's contents into the PR description.

How to open the PR (CLI)

If you have the GitHub CLI installed, run:

gh pr create --base main --head feat/landing-page --title "feat(landing): landing page" --body-file .github/prs/feat-landing-page.md

