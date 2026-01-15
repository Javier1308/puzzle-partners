import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Shield, Zap, Palette, Flame, Target } from 'lucide-react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { icon: Heart, name: 'Empatía', description: 'Nos ponemos en tu lugar' },
    { icon: Shield, name: 'Respeto', description: 'Valoramos cada relación' },
    { icon: Target, name: 'Confianza', description: 'Transparencia total' },
    { icon: Zap, name: 'Flexibilidad', description: 'Nos adaptamos a ti' },
    { icon: Flame, name: 'Pasión', description: 'Amamos lo que hacemos' },
    { icon: Palette, name: 'Creatividad', description: 'Soluciones únicas' },
  ];

  return (
    <section id="nosotros" className="about" ref={ref}>
      <div className="about__container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="about__label">¿Quiénes somos?</span>
          <h2 className="about__title">
            La pieza que conecta<br />
            <span className="about__title-accent">talento con estrategia.</span>
          </h2>
        </motion.div>

        <div className="about__content">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about__card about__card--highlight">
              <h3>Consultora Boutique</h3>
              <p>
                Nos enfocamos en encontrar <strong>talento clave</strong> mediante 
                procesos ágiles, evaluación profunda y alineamiento cultural real.
              </p>
              <p>
                Somos parte de tu equipo. No un proveedor, sino tu 
                <strong> socio estratégico en talento.</strong>
              </p>
            </div>

            <div className="about__features">
              <div className="about__feature">
                <span className="about__feature-icon">✓</span>
                <span>Actuamos como socios estratégicos</span>
              </div>
              <div className="about__feature">
                <span className="about__feature-icon">◐</span>
                <span>Servicio personalizado</span>
              </div>
              <div className="about__feature">
                <span className="about__feature-icon">☆</span>
                <span>Calidad sobre cantidad</span>
              </div>
              <div className="about__feature">
                <span className="about__feature-icon">✔</span>
                <span>Transparencia y compromiso</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__purpose"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="about__purpose-content">
              <h3>Nuestro Propósito</h3>
              <p className="about__purpose-text">
                <span className="about__quote">"</span>
                Impulsamos talento
                <span className="about__quote">"</span>
              </p>
              <p className="about__purpose-desc">
                Buscamos armonía entre personas y empresas, trabajando de la mano 
                para lograr lo mejor para ambas partes.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about__values"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="about__values-title">Nuestros Valores</h3>
          <div className="about__values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                className="about__value"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <div className="about__value-icon">
                  <value.icon size={24} />
                </div>
                <h4>{value.name}</h4>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
