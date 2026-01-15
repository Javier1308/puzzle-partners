import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg">
        <div className="hero__bg-shape hero__bg-shape--1"></div>
        <div className="hero__bg-shape hero__bg-shape--2"></div>
        <div className="hero__bg-shape hero__bg-shape--3"></div>
      </div>

      <div className="hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Sparkles size={16} />
            <span>Reclutamiento Estratégico & Talent Consulting</span>
          </motion.div>

          <h1 className="hero__title">
            <span className="hero__title-line">Un área de</span>
            <span className="hero__title-highlight">Recursos Humanos</span>
          </h1>

          <p className="hero__subtitle">
            Buscamos armonía entre personas y empresas. Somos tu aliado profesional 
            cercano, trabajando juntos para encontrar el talento que tu organización necesita.
          </p>

          <div className="hero__actions">
            <a
              href="https://koalendar.com/e/meet-with-darinka-nestorovic?month=2025-12&duration=30&date=2025-12-10"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__cta hero__cta--primary"
            >
              Agenda una llamada
              <ArrowRight size={18} />
            </a>
            <a href="#servicios" className="hero__cta hero__cta--secondary">
              Conoce nuestros servicios
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="hero__puzzle">
            <div className="hero__puzzle-piece hero__puzzle-piece--1">
              <span>Talento</span>
            </div>
            <div className="hero__puzzle-piece hero__puzzle-piece--2">
              <span>Estrategia</span>
            </div>
            <div className="hero__puzzle-piece hero__puzzle-piece--3">
              <span>Cultura</span>
            </div>
            <div className="hero__puzzle-piece hero__puzzle-piece--4">
              <span>Crecimiento</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="hero__scroll-indicator"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
