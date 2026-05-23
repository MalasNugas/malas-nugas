# Stage 1: Build dengan Bun
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy semua source
COPY . .

# Install deps & build (prerender ke HTML statis)
RUN bun install --frozen-lockfile
RUN bun run build

# Stage 2: Serve dengan Caddy
FROM caddy:2-alpine

# Hasil prerender TanStack Start ada di dist/client (default Vite build output)
# Jika TanStack Start menaruh di .output/public, sesuaikan path di bawah.
COPY --from=builder /app/dist/client /usr/share/caddy

# Caddy config untuk SPA fallback
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
