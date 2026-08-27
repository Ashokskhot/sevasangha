"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Communities", href: "/communities" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-lg">
              🙏
            </div>

            <div>
              <div className="text-lg font-bold leading-none text-text">
                SevaSangha
              </div>

              <div className="mt-1 text-[10px] text-text-muted">
                Serving Communities Digitally
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}

            <Button size="sm">
              Login
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-lg p-2 text-xl text-text transition-colors hover:bg-surface-muted md:hidden"
          >
            <Icon
                name={isMenuOpen ? "close" : "menu"}
                size={24}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
            <div className="border-t border-border py-4 md:hidden">
                <nav className="flex flex-col gap-1">
                {navigation.map((item) => (
                    <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-text transition-colors hover:bg-orange-50 hover:text-primary"
                    >
                    {item.label}
                    </Link>
                ))}

                <div className="mt-2 border-t border-border pt-3">
                    <Button
                    size="md"
                    className="w-full"
                    onClick={closeMenu}
                    >
                    Login
                    </Button>
                </div>
                </nav>
            </div>
            )}
      </Container>
    </header>
  );
}