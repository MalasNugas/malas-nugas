import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 — Malas Nugas";
  }, []);

  return (
    <div className="container-page flex min-h-screen items-center justify-center">
      <div className="rounded-[40px] bg-ash p-10 text-center max-w-md">
        <div className="font-display text-7xl">404</div>
        <h2 className="mt-3 text-xl font-medium">Halaman tidak ditemukan.</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Mungkin tugasnya sudah selesai duluan.
        </p>
        <Link to="/" className="btn-pill mt-6 bg-orange text-pure inline-flex">
          Kembali ke beranda
        </Link>
      </div>
    </div>
  );
}
