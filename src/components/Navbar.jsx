import React, { useState } from 'react';

export default function Navbar({ currentPath }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { label: 'Inicio', href: '/' },
    { label: 'Divisiones', href: '/divisiones' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Contacto', href: '/contacto' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0_40px_60px_-5px_rgba(0,0,0,0.4)]">
        <div className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-screen-2xl mx-auto">
          <div className="text-2xl font-black tracking-tighter text-white italic">
            La Conect Company
          </div>
          
          <div className="hidden md:flex gap-8 items-center font-['Inter'] antialiased tracking-tighter uppercase font-bold text-sm">
            {links.map((link) => {
              const isActive = currentPath === link.href || currentPath === link.href + '/';
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-all duration-300 hover:text-[#FF5F1F] hover:scale-105 scale-95 active:opacity-80 ${
                    isActive 
                      ? 'text-[#FF5F1F] border-b-2 border-[#FF5F1F] pb-1' 
                      : 'text-white/70'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <button 
            className="md:hidden text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-xl md:hidden pt-32 px-6 pb-12 flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            {links.map((link) => {
              const isActive = currentPath === link.href || currentPath === link.href + '/';
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-4xl font-headline font-bold uppercase tracking-tighter flex items-center justify-between ${
                    isActive ? 'text-primary-container' : 'text-on-surface'
                  }`}
                >
                  {link.label}
                  {isActive && (
                     <span className="material-symbols-outlined text-primary-container text-4xl">arrow_forward</span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
