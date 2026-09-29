"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Sakiyo, home">
        <span className="wordmark-symbol" aria-hidden="true">$</span>
        <span>Sakiyo<span className="wordmark-subtitle">Independent designer</span></span>
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        {navigation.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${active ? " is-active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <a className="header-contact" href="mailto:hello@sakiyo.studio">Let’s talk <span aria-hidden="true">↗</span></a>
    </header>
  );
}
