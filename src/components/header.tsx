"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

function MainNav() {
  return (
    <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
      <a
        href="#home"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </a>
      <a
        href="#about"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        About
      </a>
      <a
        href="#projects"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Projects
      </a>
      <a
        href="#skills"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Skills
      </a>
      <a
        href="#contact"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Contact
      </a>
    </nav>
  );
}

function MobileNav({ onLinkClick }: { onLinkClick: () => void }) {
  return (
    <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden">
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          <a
            href="#home"
            className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
            onClick={onLinkClick}
          >
            Home
          </a>
          <a
            href="#about"
            className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
            onClick={onLinkClick}
          >
            About
          </a>
          <a
            href="#projects"
            className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
            onClick={onLinkClick}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
            onClick={onLinkClick}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
            onClick={onLinkClick}
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}

export function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <button
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <Menu className="h-6 w-6" />
          <span className="font-bold">Menu</span>
        </button>
        {showMobileMenu && (
          <MobileNav onLinkClick={() => setShowMobileMenu(false)} />
        )}
      </div>
    </header>
  );
} 