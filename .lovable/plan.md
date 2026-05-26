The user confirms they want to add a `vercel.json` configuration to ensure SPA routing works correctly when deployed on Vercel.

**What to build:**
1. Create `vercel.json` with a rewrite rule that redirects all non-asset requests to `index.html`, enabling client-side routing for all TanStack Start routes (`/services`, `/portfolio`, `/demos`, `/contact`).

This is a single-file change with no impact on existing code.