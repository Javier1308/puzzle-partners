import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <a href="#inicio" className="footer__logo" onClick={(e) => { e.preventDefault(); scrollToSection('#inicio'); }}>
              <span className="footer__logo-puzzle">Puzzle</span>
              <span className="footer__logo-partners">Partners</span>
            </a>
            <p className="footer__tagline">
              La pieza que conecta talento con estrategia.
            </p>
            <p className="footer__description">
              Reclutamiento Estratégico & Talent Consulting
            </p>
          </div>

          <div className="footer__links">
            <h4>Navegación</h4>
            <nav>
              <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('#inicio'); }}>Inicio</a>
              <a href="#nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('#nosotros'); }}>Sobre nosotros</a>
              <a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('#servicios'); }}>Servicios</a>
              <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('#contacto'); }}>Contacto</a>
            </nav>
          </div>

          <div className="footer__contact">
            <h4>Contacto</h4>
            <div className="footer__contact-list">
              <a href="mailto:dnestorovic@puzzle-partners.com" className="footer__contact-item">
                <Mail size={18} />
                <span>dnestorovic@puzzle-partners.com</span>
              </a>
              <a href="https://wa.me/51989438007" target="_blank" rel="noopener noreferrer" className="footer__contact-item">
                <Phone size={18} />
                <span>+51 989 438 007</span>
              </a>
              <div className="footer__contact-item">
                <MapPin size={18} />
                <span>Lima, Perú</span>
              </div>
            </div>
          </div>

          <div className="footer__social">
            <h4>Síguenos</h4>
            <div className="footer__social-links">
              <a
                href="https://www.linkedin.com/in/darinka-nestorovic-monsalve-753770a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
            <a
              href="https://koalendar.com/e/meet-with-darinka-nestorovic?month=2025-12&duration=30&date=2025-12-10"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__cta"
            >
              Agenda una llamada
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} Puzzle Partners. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
