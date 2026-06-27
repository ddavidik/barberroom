/// <reference types="vite/client" />
import { HeadContent, Link, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "~/styles/app.css?url";

import { Footer } from "~/components/Footer";
import { useRevealOnScroll } from "~/hooks/useReveal";

const RootComponent = () => {
  useRevealOnScroll();

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center gap-3 px-6"
        style={{
          background: "rgba(0, 0, 0, 0.75)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(255,247,0,0.08)",
        }}
      >
        <Link to="/" aria-label="Barber Room — domů">
          <img src="/images/logo-trans.png" alt="Barber Room" className="h-full w-auto" />
        </Link>
        <span
          className="font-graffiti tracking-wider text-white"
          style={{
            fontSize: "clamp(0.8rem, 3vw, 1.2rem)",
            letterSpacing: "0.12em",
            lineHeight: 1,
            animationDuration: "10s",
          }}
        >
          BARBER ROOM PRAGUE
        </span>
      </header>
      <main id="main-content" className="flex flex-1 flex-col pt-16" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const RootDocument = ({ children }: { children: ReactNode }) => (
  <html lang="cs">
    <head>
      <HeadContent />
    </head>
    <body>
      {children}
      <Scripts />
    </body>
  </html>
);

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      { name: "theme-color", content: "#808080" },
      { title: "Barber Room Prague — Nekompromisní barber shop" },
      {
        name: "description",
        content:
          "Barber Room - nekompromisní barber shop v Praze na Vyšehradské. Filas, Lukáš, Freezer. Rezervuj přes Reservio.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/images/logo-trans.png", type: "image/png" },
    ],
  }),
  component: RootComponent,
  shellComponent: RootDocument,
  notFoundComponent: () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h1 className="font-graffiti neon-text-dim" style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}>
        404
      </h1>
      <p className="text-[--text-secondary]">Stránka nenalezena</p>
      <a href="/" className="btn-neon-metal">
        Domů
      </a>
    </div>
  ),
});
