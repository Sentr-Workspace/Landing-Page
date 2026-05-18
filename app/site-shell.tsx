"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const activeItem = navLinks.find((item) => item.href === pathname);
    const activeHref = activeItem?.href;
    if (!activeHref || !navRef.current) {
      return;
    }

    const updateIndicator = () => {
      const navEl = navRef.current;
      const activeEl = itemRefs.current[activeHref];
      if (!navEl || !activeEl) return;

      const navRect = navEl.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      setIndicator({
        left: activeRect.left - navRect.left,
        width: activeRect.width,
        opacity: 1,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/70">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="rounded-full px-1.5 py-1 transition-colors hover:bg-primary/5"
          >
            <img
              src="/logo_full.png"
              alt="Sentr"
              className="h-11 w-auto object-contain"
            />
          </Link>

          <nav
            ref={navRef}
            className="relative hidden items-center gap-1 rounded-full border border-border/70 bg-background/70 p-1 md:flex"
          >
            <span
              className="pointer-events-none absolute bottom-1 top-1 rounded-full bg-primary/12 ring-1 ring-primary/20 transition-all duration-300 ease-out"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.opacity,
              }}
            />
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={(el) => {
                    itemRefs.current[link.href] = el;
                  }}
                  className={`relative z-10 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 sm:inline-flex"
            >
              Request demo
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-border/70 p-2 text-foreground transition hover:bg-muted md:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-border/70 bg-background/95 md:hidden">
            <nav className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary/12 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                Request demo
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/70">
        <div className="mx-auto flex flex-col items-center justify-between gap-4 px-4 py-10 text-sm sm:flex-row sm:px-6 lg:px-8 max-w-screen-2xl">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Sentr" className="h-6 w-6" />
            <div>
              <span className="font-medium">Sentr</span>
              <span className="text-muted-foreground"> - Inventory Intelligence</span>
            </div>
          </div>
          <p className="text-muted-foreground">A Jugend forscht 2026 project</p>
        </div>
      </footer>
    </div>
  );
}