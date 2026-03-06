"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.unhappybanking.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <div className="w-2 h-2 bg-accent rotate-45" />
              <span className="font-serif font-bold text-primary text-sm tracking-wide">
                UNHAPPY BANKING
              </span>
            </a>
            <span className="text-border">|</span>
            <Link href="/" className="text-xs font-semibold text-slate-body tracking-widest uppercase hover:text-primary transition-colors">
              Nationlink
            </Link>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-body hover:text-primary transition-colors">Home</Link>
            <Link href="/cases" className="text-sm font-medium text-slate-body hover:text-primary transition-colors">The Case</Link>
            <Link href="/about" className="text-sm font-medium text-slate-body hover:text-primary transition-colors">About Us</Link>
            <Link href="/register" className="text-sm font-semibold bg-accent hover:bg-accent-dark text-white px-5 py-2 rounded transition-colors">Register Now</Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-primary" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2 pt-4 flex flex-col gap-3">
            <Link href="/" className="text-sm font-medium text-slate-body hover:text-primary" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/cases" className="text-sm font-medium text-slate-body hover:text-primary" onClick={() => setMobileOpen(false)}>The Case</Link>
            <Link href="/about" className="text-sm font-medium text-slate-body hover:text-primary" onClick={() => setMobileOpen(false)}>About Us</Link>
            <Link href="/register" className="text-sm font-semibold bg-accent text-white px-5 py-2 rounded text-center" onClick={() => setMobileOpen(false)}>Register Now</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
