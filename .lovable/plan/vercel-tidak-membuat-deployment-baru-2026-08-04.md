# Vercel Tidak Membuat Deployment Baru

Kode terbaru sudah ada di GitHub, tapi Vercel tidak membuat deployment baru sama sekali. Artinya masalahnya ada di sambungan Git → Vercel, bukan di kode. `vercel.json` dan `vite.config.ts` di proyek ini sudah benar untuk SPA React (output `dist`, rewrite ke `index.html`), jadi tidak ada yang perlu diubah di kode.

## Penyebab paling mungkin (urut dari yang paling sering)

1. **Branch tidak cocok** — Vercel memantau `main`, sedangkan commit masuk ke branch lain (atau sebaliknya).
2. **Auto-deploy / Git integration mati** — tombol "Ignored Build Step" aktif, atau Deploy Hooks & Git integration dinonaktifkan.
3. **Repo yang tersambung berbeda** — Vercel masih menunjuk repo lama (misal repo hasil percobaan sebelumnya).
4. **Izin GitHub App Vercel dicabut** untuk repo tersebut, sehingga webhook push tidak sampai ke Vercel.

## Langkah pemeriksaan & perbaikan (dilakukan di dashboard, bukan di kode)

1. Buka **Vercel → Project → Settings → Git**
   - Cocokkan **Repository** dengan repo GitHub yang dipakai Lovable.
   - Cocokkan **Production Branch** dengan nama branch tempat commit terbaru berada (cek di GitHub, biasanya `main`).
2. Di halaman yang sama, pastikan **Ignored Build Step** kosong / "Automatic", dan Git integration dalam keadaan aktif.
3. Buka **GitHub → Settings → Applications → Vercel → Configure**, pastikan repo ini termasuk dalam daftar repository yang diizinkan.
4. Buka **Vercel → Deployments → Create Deployment** (atau **Redeploy** pada deployment terakhir dengan opsi *Use existing Build Cache* dimatikan) untuk memaksa build dari commit terbaru.
5. Setelah build selesai, buka URL produksi dalam mode incognito / hard refresh (Ctrl+Shift+R) untuk memastikan bukan cache browser.

## Jika ingin jalan pintas

Hapus project di Vercel lalu **Import Project** ulang dari repo GitHub yang benar. Vercel akan mendeteksi Vite otomatis; setelan yang perlu dipastikan:
- Framework Preset: **Vite**
- Build Command: `npm run build` (atau biarkan default)
- Output Directory: `dist`
- `vercel.json` yang sudah ada akan otomatis dipakai untuk rewrite SPA.

## Yang akan saya lakukan di sisi kode

Tidak ada perubahan fungsional. Hanya jika kamu mau, saya bisa:
- Menyederhanakan `vercel.json` menjadi hanya aturan rewrite (membiarkan Vercel mendeteksi build Vite sendiri), agar tidak ada `buildCommand` `bun run build` yang bisa gagal bila Vercel tidak memakai Bun.

Ini opsional dan bisa dikerjakan bersamaan dengan langkah di atas.
