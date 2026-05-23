# Deploy Malas Nugas ke Coolify Self-Hosted

## Ringkasan

Proyek ini adalah website marketing TanStack Start v1 (React 19 + SSR) yang saat ini dikonfigurasi untuk Cloudflare Workers. Untuk deploy ke Coolify self-hosted, kita perlu mengubah output build dari format **Cloudflare Worker** menjadi format yang bisa di-host di server Anda sendiri.

Ada **2 strategi deploy** — kita akan mulai dengan yang direkomendasikan:

---

## Strategi Direkomendasikan: Static Prerendering (SSG)

Karena ini adalah website marketing tanpa backend (CTA hanya ke WhatsApp), cara terbaik adalah **generate file HTML statis** untuk semua halaman saat build, lalu serve dengan web server (Nginx/Caddy) di Coolify.

**Keunggulan:**
- Performa maksimal (file statis, no runtime)
- Hosting cost minimal
- No server maintenance
- SEO tetap optimal (HTML sudah prerendered)

---

## Langkah 1: Konfigurasi Static Prerender di Proyek

### 1.1. Update `vite.config.ts`

Tambahkan konfigurasi `prerender` ke dalam `tanstackStart`:

```typescript
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,      // Auto-discover semua route dari link
      concurrency: 4,        // Jumlah parallel prerender
      failOnError: true,     // Build gagal jika prerender error
      // Routes yang akan diprerender (auto-discovered dari crawlLinks,
      // tapi explicit list sebagai fallback):
      pages: [
        { path: "/", prerender: { enabled: true } },
        { path: "/services", prerender: { enabled: true } },
        { path: "/portfolio", prerender: { enabled: true } },
        { path: "/demos", prerender: { enabled: true } },
        { path: "/contact", prerender: { enabled: true } },
      ],
    },
  },
});
```

### 1.2. Test Build Lokal

```bash
bun run build
```

Pastikan ada folder `dist/` (atau `.tanstack/output/` — tergantung config) yang berisi:
- `index.html`
- `services/index.html`
- `portfolio/index.html`
- `demos/index.html`
- `contact/index.html`
- File JS/CSS asset

### 1.3. Buat `Dockerfile` untuk Static Site

```dockerfile
# Stage 1: Build
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy dependency files
COPY package.json bun.lock bunfig.toml ./
COPY . .

# Install deps & build
RUN bun install --frozen-lockfile
RUN bun run build

# Stage 2: Serve dengan Caddy (atau Nginx)
FROM caddy:2-alpine

# Copy hasil build ke Caddy web root
COPY --from=builder /app/dist /usr/share/caddy

# Copy Caddy config untuk SPA fallback (agar client routing tetap jalan)
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
```

### 1.4. Buat `Caddyfile`

```caddyfile
:80 {
    root * /usr/share/caddy
    file_server

    # Untuk SPA fallback — jika file tidak ditemukan,
    # serve index.html agar client-side routing TanStack Router tetap bekerja
    try_files {path} /index.html
}
```

---

## Langkah 2: Siapkan Server Coolify

### 2.1. Install Coolify

Jika belum install, jalankan di VPS/server Anda:

```bash
# Requirements: Docker & Docker Compose sudah terinstall
# OS: Ubuntu 22.04/24.04, Debian 12, atau CentOS 9 direkomendasikan

curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

Coolify akan berjalan di port `8000` by default. Akses via browser: `http://<server-ip>:8000`

### 2.2. Setup Reverse Proxy (Domain)

Di Coolify dashboard:
1. Buat **New Resource** → pilih **Server**
2. Pastikan server sudah connected
3. Pergi ke **Settings** → aktifkan **Wildcard Domain** (opsional) atau setup domain spesifik

---

## Langkah 3: Deploy ke Coolify

### 3.1. Buat Resource Baru — Static Site

1. Di Coolify dashboard, klik **New Resource**
2. Pilih tipe: **Service**
3. Pilih template: **Static Site** (jika tersedia) atau gunakan **Docker Compose** / **Dockerfile**
4. Pilih source: **Git Repository**

### 3.2. Konfigurasi Git Repository

1. **Repository URL**: URL GitHub/GitLab Anda (atau push kode ke Git repo)
2. **Branch**: `main` (atau branch yang Anda pakai)
3. **Build Pack**: Pilih **Dockerfile**

### 3.3. Environment Variables (jika diperlukan)

Karena ini static site tanpa backend, tidak perlu env vars.

### 3.4. Deploy

1. Klik **Deploy** atau aktifkan **Auto Deploy** (jika ada webhook Git)
2. Coolify akan:
   - Pull kode dari repo
   - Build image menggunakan Dockerfile
   - Deploy container dengan Caddy sebagai web server
   - Assign domain

### 3.5. Setup Domain / URL

1. Pergi ke resource settings
2. Di tab **Domain**, masukkan domain Anda: `malasnugas.com`
3. Coolify akan otomatis request Let's Encrypt SSL certificate
4. Atau gunakan subdomain dari Coolify: `malasnugas.your-coolify-domain.com`

---

## Langkah 4: Verifikasi Deploy

Setelah deploy sukses, cek:

1. **Halaman utama**: `https://malasnugas.com/` — harus tampil
2. **Navigasi client-side**: Klik link di menu — harus tanpa reload page
3. **Direct URL**: Buka langsung `https://malasnugas.com/services` — harus tampil (SPA fallback bekerja)
4. **WhatsApp CTA**: Tombol order harus tetap mengarah ke `wa.me/6285738748543`

---

## Alternatif: Deploy dengan Node.js SSR (Jika Butuh Dinamik)

Jika nanti butuh fitur dinamik (misal form submission, dashboard admin), gunakan strategi Node.js SSR:

### Konversi ke Node.js Server

TanStack Start bisa deploy ke Node.js dengan adapter `@tanstack/react-start-node-server`:

1. **Install adapter**:
   ```bash
   bun add @tanstack/react-start-node-server
   ```

2. **Update `vite.config.ts`**:
   ```typescript
   import { defineConfig } from "@lovable.dev/vite-tanstack-config";
   import { nodeServerAdapter } from "@tanstack/react-start-node-server";

   export default defineConfig({
     tanstackStart: {
       server: { entry: "server" },
       adapter: nodeServerAdapter(),
     },
   });
   ```

3. **Update `src/server.ts`** untuk Node.js:
   TanStack Start akan otomatis menghasilkan entry point Node.js yang compatible.

4. **Dockerfile untuk Node.js**:
   ```dockerfile
   FROM oven/bun:1 AS builder
   WORKDIR /app
   COPY package.json bun.lock bunfig.toml ./
   COPY . .
   RUN bun install --frozen-lockfile
   RUN bun run build

   FROM node:22-alpine AS runner
   WORKDIR /app
   COPY --from=builder /app/.output ./.output
   # Atau copy dist dan package.json jika perlu
   ENV NODE_ENV=production
   EXPOSE 3000
   CMD ["node", ".output/server/index.mjs"]
   ```

5. Di Coolify, deploy sebagai **Docker Compose** dengan port mapping `3000:3005` (atau port yang Anda tentukan).

---

## Checklist Pre-Deploy

Sebelum deploy, pastikan:
- [ ] Konfigurasi prerender sudah ditambah di `vite.config.ts`
- [ ] `Dockerfile` dan `Caddyfile` sudah dibuat
- [ ] Build lokal berhasil: `bun run build`
- [ ] Folder `dist/` berisi file HTML untuk semua 5 halaman
- [ ] Semua asset (CSS, JS, gambar) ada di `dist/`
- [ ] Kode sudah di-push ke Git repository
- [ ] Server Coolify sudah terinstall dan running
- [ ] Domain sudah diarahkan ke server (atau gunakan subdomain Coolify)

---

## Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Build gagal di Coolify | Cek log build di Coolify dashboard; pastikan `bun.lock` tidak conflict; coba `bun install` ulang lokal |
| 404 saat akses direct URL (`/services`) | Pastikan Caddyfile/Nginx config punya `try_files` fallback ke `index.html` |
| Client routing tidak jalan | Cek bahwa JS bundle tidak error; pastikan TanStack Router hydrate dengan benar |
| SSL tidak terinstall | Pastikan domain sudah point ke server; cek Coolify SSL settings; tunggu propagation DNS |
| Gambar tidak tampil | Cek path gambar di `public/` sudah di-copy ke `dist/` saat build |

---

## Catatan Penting

- **TanStack Start v1** menggunakan Vite 7 + custom config `@lovable.dev/vite-tanstack-config`. Konfigurasi prerender harus ditempatkan dalam objek `tanstackStart` di `vite.config.ts`.
- `@cloudflare/vite-plugin` di `dependencies` adalah untuk build target Cloudflare. Untuk static/Node.js deploy, plugin ini tidak akan aktif jika tidak ada config Cloudflare di vite.config.ts.
- Saat ini `wrangler.jsonc` ada di root — file ini tidak akan mempengaruhi build ke Coolify asalkan tidak di-referensikan di vite.config.ts.
- `src/server.ts` saat ini menggunakan format Worker (`export default { fetch }`). Untuk static deploy, ini tidak dipakai karena kita hanya serve file HTML statis. Untuk Node.js SSR, perlu adapter yang berbeda.
