# Deploy Workflow (GitHub Actions → GitHub Pages)
**Status:** Implemented
**Roadmap:** #0.5 — E0 · Foundation
**Depends on:** specs/00-project-cleanup.md

## Executive Summary
GitHub Actions workflow that builds the Astro site on every push to `master` and deploys it to GitHub Pages using the modern `upload-pages-artifact` + `deploy-pages` approach (no `gh-pages` branch needed).

## Affected Files

| File | Action | Description |
|---|---|---|
| `.github/workflows/deploy.yml` | CREATE | CI/CD pipeline: build + deploy to GitHub Pages |

## History

| Version | Date | Event | Notes |
|---|---|---|---|
| 1.0 | 2026-05-02 | Implemented | jr-exe-spec — GitHub Actions deploy workflow for Astro → GitHub Pages |
