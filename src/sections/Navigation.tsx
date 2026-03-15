import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '困扰', href: '#painpoints' },
  { label: '服务', href: '#services' },
  { label: '信任', href: '#trust' },
  { label: '角色', href: '#roles' },
  { label: '数据', href: '#data' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-soft py-3'
            : 'bg-transparent py-5'
          }
        `}
      >
        <div className="section-padding">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2"
            >
              <div className={`
                w-9 h-9 rounded-xl flex items-center justify-center transition-colors
                ${isScrolled ? 'bg-brand-green' : 'bg-white/20 backdrop-blur'}
              `}>
                <Heart className={`w-4 h-4 ${isScrolled ? 'text-white' : 'text-brand-green'}`} />
              </div>
              <span className={`
                text-xl font-bold transition-colors
                ${isScrolled ? 'text-gray-900' : 'text-gray-900'}
              `}>
                心约智理
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`
                    text-sm font-medium transition-colors hover:text-brand-green
                    ${isScrolled ? 'text-gray-600' : 'text-gray-700'}
                  `}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                className="text-sm font-medium text-gray-600 hover:text-brand-green"
              >
                登录
              </Button>
              <Button className="btn-primary text-sm h-10 px-5">
                免费体验
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden
          transition-all duration-300
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu content */}
        <div
          className={`
            absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl p-6
            transition-all duration-300
            ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
          `}
        >
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-brand-green-light hover:text-brand-green transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
            <Button variant="outline" className="w-full justify-center">
              登录
            </Button>
            <Button className="w-full justify-center btn-primary">
              免费体验
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
