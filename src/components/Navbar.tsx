import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-900 p-1.5 rounded-lg shadow-md">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-xl leading-none tracking-tight ${scrolled || isDark ? 'text-blue-900 dark:text-white' : 'text-white md:text-blue-900'}`}>
              PIVOTAL
            </span>
            <span className={`text-[10px] font-semibold tracking-[0.2em] ${scrolled || isDark ? 'text-slate-500 dark:text-slate-400' : 'text-slate-200 md:text-slate-500'}`}>
              PLUMBING SERVICES
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                scrolled || isDark ? 'text-slate-700 dark:text-slate-200' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              scrolled || isDark ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200' : 'bg-white/10 text-white'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-full px-6 shadow-xl">
            <Phone className="w-4 h-4 mr-2" />
            +234 913 571 6438
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              scrolled || isDark ? 'text-slate-700 dark:text-slate-200' : 'text-white'
            }`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${scrolled || isDark ? 'text-blue-900 dark:text-white' : 'text-white'}`}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-t dark:border-slate-800 shadow-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-slate-800 dark:text-slate-200 border-b border-slate-50 dark:border-slate-800 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-blue-900 text-white w-full py-6 text-lg rounded-xl">
                <Phone className="w-5 h-5 mr-3" />
                Call Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;