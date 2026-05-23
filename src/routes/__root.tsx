import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="container-page flex min-h-screen items-center justify-center">
      <div className="rounded-[40px] bg-ash p-10 text-center max-w-md">
        <div className="font-display text-7xl">404</div>
        <h2 className="mt-3 text-xl font-medium">Halaman tidak ditemukan.</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Mungkin tugasnya sudah selesai duluan.
        </p>
        <Link
          to="/"
          className="btn-pill mt-6 bg-orange text-pure inline-flex"
        >
          Kembali ke beranda
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="container-page flex min-h-screen items-center justify-center">
      <div className="rounded-[40px] bg-ash p-10 text-center max-w-md">
        <h1 className="font-display text-3xl">Halaman gagal dimuat</h1>
        <p className="mt-3 text-sm text-muted-foreground">Coba refresh atau kembali ke beranda.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-pill bg-ink text-pure"
          >
            Coba lagi
          </button>
          <a href="/" className="btn-pill border-2 border-ink">Beranda</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Malas Nugas — Jasa Joki Desain, Laporan & Website" },
      {
        name: "description",
        content:
          "Malas Nugas: jasa joki desain logo, banner, kemasan, UI/UX, pembuatan laporan, dan website. Cepat, rapi, langsung WhatsApp.",
      },
      { name: "author", content: "Malas Nugas" },
      { property: "og:site_name", content: "Malas Nugas" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Malas Nugas — Jasa Joki Desain, Laporan & Website" },
      { property: "og:description", content: "Joki tugas, desain, dan website untuk mahasiswa & UMKM." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Malas Nugas",
          description: "Jasa joki desain, laporan, dan pembuatan website.",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+62-857-3874-8543",
            contactType: "customer service",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
