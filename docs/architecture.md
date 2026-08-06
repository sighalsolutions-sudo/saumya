# Architecture Overview

This project follows a modular architecture intended to scale horizontally.

- Frontend: Next.js (app router), TypeScript, Tailwind CSS
- Backend: serverless APIs on Vercel; Supabase for auth and Postgres
- Storage: Postgres for structured data; object storage for assets
- CI/CD: GitHub Actions → Vercel deployment

Key considerations: stateless frontends, API rate limits per AI provider, and secure handling of API keys.
