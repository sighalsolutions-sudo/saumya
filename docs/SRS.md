# Software Requirements Specification (SRS)

## Overview
This SRS defines functional and non-functional requirements for the Prompt.OS AI Core MVP.

## Functional requirements
- User sign up / sign in using email (Supabase)
- Create, edit, and save prompts
- Conversational assistant flow that asks follow-ups
- Prompt export: copy, download (.md/.txt), and platform-specific formats

## Non-functional requirements
- Scalability: support thousands of users with stateless Node server on Vercel
- Security: store secrets in environment variables; use Supabase RBAC for user data
- Accessibility: WCAG AA compliance for core flows
