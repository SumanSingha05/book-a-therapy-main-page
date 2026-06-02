import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Blogs', href: '#blogs' },
    { label: 'Gift Cards', href: '#gift-cards' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className="sticky top-0 z-50 w-full border-b transition-all duration-300"
        style={{
          backgroundColor: 'var(--nav-bg)',
          borderColor: 'var(--nav-border)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span 
                className="font-serif font-extrabold text-base md:text-xl tracking-tight leading-none flex items-center relative select-none"
                style={{ color: 'var(--text-primary)', fontFamily: "'Fraunces', serif" }}
              >
                Book
                <span className="text-[#82b443] font-serif italic relative px-1 select-none">
                  a
                  {/* Blue Butterfly SVG */}
                  <svg className="w-4.5 h-4.5 absolute -top-[10px] -right-[5px] pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C10.2 10.2 8.2 10.5 7.2 11.9C6.2 13.3 6.9 15.4 8.7 15.4C9.8 15.4 11.2 14 12 12Z" fill="#3b82f6" opacity="0.8" />
                    <path d="M12 12C11 11 9.2 11 8.5 12C7.8 13.1 8.5 14.5 9.5 14.5C10.2 14.5 11.2 13.1 12 12Z" fill="#1e3a8a" />
                    <path d="M12 12C13.8 10.2 15.8 10.5 16.8 11.9C17.8 13.3 17.1 15.4 15.3 15.4C14.2 15.4 12.8 14 12 12Z" fill="#3b82f6" opacity="0.8" />
                    <path d="M12 12C13 11 14.8 11 15.5 12C16.2 13.1 15.5 14.5 14.5 14.5C13.8 14.5 12.8 13.1 12 12Z" fill="#1e3a8a" />
                    <path d="M12 12C11.8 10.2 11.1 9.2 10.5 8.8" stroke="#1e3a8a" strokeWidth="0.8" strokeLinecap="round" />
                    <path d="M12 12C12.2 10.2 12.9 9.2 13.5 8.8" stroke="#1e3a8a" strokeWidth="0.8" strokeLinecap="round" />
                  </svg>
                </span>
                Therapy
              </span>
              <span 
                className="text-[7.5px] font-bold tracking-[0.16em] uppercase mt-1.5 leading-none pl-0.5"
                style={{ color: 'var(--text-muted)' }}
              >
                Match. Relax. Thrive
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#82b443] font-bold text-xs md:text-sm transition-colors"
                style={{ color: 'var(--nav-text)' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Section (CTA Buttons with sharp rectangular layout) */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              className="border font-bold text-xs md:text-sm px-6 py-2 rounded-none transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                borderColor: 'var(--nav-text)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--nav-text)'
              }}
            >
              Login
            </button>
            <button className="bg-[#82b443] hover:bg-[#74a23b] text-white font-bold text-xs md:text-sm px-6 py-2.5 rounded-none transition-all shadow-sm active:scale-95 cursor-pointer">
              Book a Therapy
            </button>
          </div>

          {/* Mobile Menu Burger Button */}
          <button
            className="md:hidden p-1.5 border rounded-none transition-all"
            style={{
              borderColor: 'var(--nav-border)',
              color: 'var(--nav-text)'
            }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu (Flat panel, no rounding) */}
        {isOpen && (
          <div 
            className="w-full border-t p-5 flex flex-col gap-3 md:hidden animate-fade-in"
            style={{
              backgroundColor: 'var(--nav-bg)',
              borderColor: 'var(--nav-border)',
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-bold text-sm py-2 px-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                style={{ color: 'var(--nav-text)' }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3 border-t">
              <button 
                className="flex-1 border font-bold text-xs py-2.5 rounded-none text-center"
                style={{
                  borderColor: 'var(--nav-text)',
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--nav-text)'
                }}
              >
                Login
              </button>
              <button className="flex-1 bg-[#82b443] text-white font-bold text-xs py-2.5 rounded-none text-center border-none shadow-sm">
                Book a Therapy
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Floating Theme Toggle FAB at bottom right */}
      <button
        onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full border shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-md"
        style={{
          borderColor: 'var(--nav-border)',
          backgroundColor: 'var(--bg-card)',
          color: 'var(--text-primary)',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15)'
        }}
        title="Toggle dark/light mode"
      >
        {theme === 'light' ? <Moon size={16} /> : <Sun size={16} className="text-amber-400" />}
      </button>
    </>
  );
}
