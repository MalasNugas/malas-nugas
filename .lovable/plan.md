# Malas Nugas — Website Jasa Joki

Website marketing multi-halaman bergaya "Caldera" (pixelated cyber-playground) dari DESIGN.md, dengan tombol order yang langsung membuka chat WhatsApp ke **+62 857-3874-8543**.

## Halaman (TanStack Router file-based)

```
src/routes/
  __root.tsx          # shell + <Header/> + <Footer/>
  index.tsx           # / — Hero, layanan singkat, stats, highlight project, CTA
  services.tsx        # /services — 6 layanan detail + CTA WA per layanan
  portfolio.tsx       # /portfolio — Grid project (Logo, Banner, Kemasan, UI/UX, Laporan)
  demos.tsx           # /demos — Live demo website (iframe + link)
  contact.tsx         # /contact — CTA WhatsApp besar + FAQ singkat
```

Tiap route punya `head()` sendiri (title, description, og) sesuai konvensi TanStack Start.

## Konten utama

**6 Layanan:** Desain Logo · Banner · Kemasan · UI/UX · Pembuatan Laporan · Pembuatan Website. Harga belum diberikan → setiap kartu pakai label **"Hubungi via WhatsApp"** (bukan harga palsu).

**Portfolio:** placeholder dummy untuk tiap kategori (gambar generate via imagegen dengan gaya pixelated Caldera, atau div placeholder bertekstur — akan diputuskan saat build, default: generate 6 gambar hero kategori).

**Live demo:** kartu showcase untuk `https://moneylaundry-ruby.vercel.app` + 2-3 slot placeholder ("Coming soon"). Setiap kartu: screenshot/iframe preview + tombol "Kunjungi situs".

**Tombol order WhatsApp** (komponen reusable `WhatsAppButton`):
- Link: `https://wa.me/6285738748543?text=<pesan-otomatis>`
- Pesan otomatis disesuaikan per konteks, misal: *"Halo Malas Nugas, saya mau order jasa Desain Logo"*.

## Design system (dari DESIGN.md)

Diterapkan di `src/styles.css` via `@theme` Tailwind v4:

- **Warna:** `--color-basalt-canvas #e2e2df` (bg), `--color-ash-white #f7f6f2` (card), `--color-abyssal-ink #070607` (teks), `--color-digital-orange #fc5000` (CTA), `--color-cyber-violet #524ae9` (decorative), `--color-pixel-glare #f5f28e` (highlight).
- **Font:** heading **Bebas Neue** (substitute PP Neue Corp Compact Ultrabold, tracking 0.02em), body **DM Sans** — di-load dari Google Fonts via `<link>` di `__root.tsx`.
- **Radius:** card 40px, button pill 800px, input 100px.
- **Layout:** max-width 1200px, section-gap 40px, card padding 40px.
- **Surfaces:** basalt canvas page bg; ash-white card; orange untuk feature/stats card menonjol.
- **Larangan dari DESIGN.md dihormati:** tanpa shadow/gradient elevation, Cyber Violet hanya untuk shape dekoratif (bukan teks), tanpa pure white sebagai bg page.

## Komponen reusable

- `Header` — nav pill (ash-white, radius 40px) + tombol "Order Sekarang" orange.
- `Footer` — sederhana, basalt canvas, link sosial + WA.
- `WhatsAppButton` (variants: primary orange pill, ghost outline).
- `ServiceCard`, `StatsCard` (orange + ash variants), `ProjectCard`, `DemoCard`.
- Dekoratif: `PixelBlob` (SVG blob 2-tone orange/violet untuk hero).

## Catatan teknis

- Semua warna pakai token semantik di `styles.css` (tidak ada hex hard-coded di komponen).
- Token DESIGN.md pakai hex; di `@theme` Tailwind v4 hex valid (tidak wajib oklch karena DESIGN.md eksplisit pakai hex sebagai brand color).
- Tanpa backend / Lovable Cloud — semua CTA mengarah ke `wa.me`.
- SEO: tiap route punya meta lengkap, lang `id`, single H1 per halaman.

## Hasil akhir

5 halaman ber-SSR, identitas visual Caldera konsisten, dan setiap titik konversi (header, hero, kartu layanan, footer, halaman kontak) mengarah ke WhatsApp `085738748543` dengan pesan ter-prefill sesuai layanan.
