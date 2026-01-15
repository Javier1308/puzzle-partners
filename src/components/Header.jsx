import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="header__container">
        <a href="#inicio" className="header__logo" onClick={(e) => { e.preventDefault(); scrollToSection('#inicio'); }}>
          <span className="header__logo-puzzle">Puzzle</span>
          <span className="header__logo-partners">Partners</span>
        </a>

        <nav className="header__nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="header__nav-link"
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="https://koalendar.com/e/meet-with-darinka-nestorovic?month=2025-12&duration=30&date=2025-12-10"
          target="_blank"
          rel="noopener noreferrer"
          className="header__cta"
        >
          Agenda una llamada
        </a>

        <button
          className="header__mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="header__mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="header__mobile-link"
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <a
              href="https://koalendar.com/e/meet-with-darinka-nestorovic?month=2025-12&duration=30&date=2025-12-10"
              target="_blank"
              rel="noopener noreferrer"
              className="header__cta header__cta--mobile"
            >
              Agenda una llamada
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
