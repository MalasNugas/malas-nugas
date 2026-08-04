# Layout & Animasi ala Legs Brands

Mengubah layout Malas Nugas mengikuti struktur dan gaya gerak legsbrands.com, tetap memakai identitas warna/tipografi yang sudah ada (canvas, orange #fc5000, violet, Bebas Neue).

## Struktur yang diambil dari referensi

1. **Hero full-screen (100vh) edge-to-edge**
   - Latar penuh layar (bukan kartu rounded), dengan lapisan visual bergerak: gradient orange–violet yang beranimasi pelan + grid piksel yang bergeser + partikel/blob melayang.
   - Judul besar seperti referensi: kata-kata rapat tanpa spasi ditumpuk ("MALAS / NUGAS?"), muncul per-kata dengan animasi naik + fade saat load.
   - Satu tombol CTA utama (Order via WhatsApp) di bawah judul.
   - Indikator scroll di bawah layar.

2. **Header overlay transparan**
   - Nav mengambang di atas hero (teks putih), berubah jadi solid + menyusut saat scroll.
   - Logo kotak di kiri, menu di kanan, underline animasi saat hover.

3. **Marquee strip** di bawah hero — baris teks berjalan tanpa henti ("DESAIN LOGO • BANNER • KEMASAN • UI/UX • LAPORAN • WEBSITE"), berlatar ink/orange, sama seperti barisan logo berjalan di referensi.

4. **Section bergantian layar penuh** dengan reveal saat masuk viewport (fade + slide up, stagger antar item):
   - Statistik: angka menghitung naik saat terlihat.
   - Layanan: daftar besar bergaya baris (row list) yang membesar/berubah warna saat hover, bukan hanya grid kartu.
   - Portfolio: grid dengan gambar/tile yang zoom halus saat hover dan reveal berurutan.
   - CTA penutup full-bleed.

5. **Halaman lain (Layanan, Portfolio, Live Demo, Kontak)**
   - Hero besar full-width dengan animasi masuk yang sama.
   - Semua kartu/section memakai reveal-on-scroll dan hover lift agar konsisten.

6. **Transisi antar halaman**: fade + slide halus setiap ganti route, dan scroll otomatis ke atas.

## Detail teknis

- Tambah `framer-motion` untuk animasi masuk, stagger, hover, dan transisi route (`AnimatePresence` di `src/App.tsx`).
- Komponen baru:
  - `src/components/Reveal.tsx` — pembungkus reveal-on-scroll (viewport once).
  - `src/components/Marquee.tsx` — strip teks berjalan (CSS keyframes).
  - `src/components/Hero.tsx` — hero 100vh dengan layer animasi.
  - `src/components/CountUp.tsx` — angka statistik menghitung.
- `src/components/Header.tsx`: posisi fixed/overlay + state scroll, warna adaptif.
- `src/styles.css`: keyframes `marquee`, `float`, `gradient-shift`, utilitas `full-bleed`, dan penyesuaian agar hero bisa keluar dari `container-page`.
- Halaman `Index/Services/Portfolio/Demos/Contact` disusun ulang layout-nya (hero full-bleed + section reveal), konten teks/data (`src/lib/*`) tidak diubah.
- Hormati `prefers-reduced-motion`.

Catatan: video 3D "Brand Land" di referensi adalah aset milik mereka; penggantinya di sini adalah latar animasi gradient + piksel bergerak sesuai identitas Malas Nugas.
