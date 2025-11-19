import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'} fixed top-0 left-0 right-0 z-50 transition-all`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <ImageWithFallback src="/images/logo-placeholder.png" alt="Global IT Vision Logo" className="h-9 w-auto" />
            <span className="font-semibold text-slate-800">Global IT Vision Pvt Ltd</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button key={item.href} onClick={() => handleClick(item.href)} className="text-slate-700 hover:text-blue-600 transition-colors">
                {item.label}
              </button>
            ))}
            <button onClick={() => handleClick('#contact')} className="ml-2 inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors shadow">
              Contact Us
            </button>
          </div>
          <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-200 pb-4">
            <div className="flex flex-col gap-2 pt-3">
              {navItems.map((item) => (
                <button key={item.href} onClick={() => handleClick(item.href)} className="text-left px-2 py-2 rounded hover:bg-slate-50 text-slate-700">
                  {item.label}
                </button>
              ))}
              <button onClick={() => handleClick('#contact')} className="mt-2 inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors shadow w-max">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
