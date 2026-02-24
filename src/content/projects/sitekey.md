---
title: "SiteKey"
description: "A QR-based document access system that links physical industrial assets to their technical documentation, built with multi-tenant architecture and secure file delivery."
stack:
  - "Next.js"
  - "TypeScript"
  - "PostgreSQL"
  - "Prisma"
  - "AWS S3"
  - "Tailwind CSS"
  - "Zod"
links:
  github: "https://github.com/jnabulsi/SiteKey"
  live: "https://site-key.vercel.app/"
screenshots: []
featured: true
role: "Solo project"
---

## What it is
SiteKey links physical industrial assets — switchboards, machines, panels — to their technical documentation using QR codes. A technician scans a QR label, enters a shared access code, and instantly views the relevant PDFs on their phone.

## Why I built it
I wanted to move beyond demo-style CRUD apps and build something that resembles a real production system. SiteKey gave me hands-on experience with multi-tenant data isolation, secure authentication without external providers, large file uploads in a serverless environment, and private document delivery via presigned URLs.

## How it works
1. An admin creates an organisation and adds assets
2. Each asset receives a unique QR code linked to a public token
3. A technician scans the QR code on-site using any phone camera
4. The technician enters a shared organisation access code
5. The relevant documentation is delivered via a short-lived presigned S3 URL

## Technical highlights
- Multi-tenant organisation model with strict org-scoped data access
- Direct-to-S3 PDF uploads via a 3-step presigned URL flow to avoid serverless body size limits
- Short-lived presigned GET URLs for secure document delivery
- Cookie-based sessions with scrypt-hashed passwords and hashed session tokens
- Separate admin and field technician session types
- Database-backed rate limiting on login and access endpoints
- Upload lifecycle management with orphan cleanup
