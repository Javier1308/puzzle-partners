import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Target, 
  MessageSquare, 
  GraduationCap,
  Briefcase,
  TrendingUp,
  FileText,
  UserCheck,
  Award
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('empresas');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const empresasServices = [
    {
      icon: Target,
      title: 'Reclutamiento y Selección',
      description: 'Encontramos el talento perfecto para tu organización mediante procesos estratégicos de headhunting y evaluación profunda.',
      features: ['Perfiles mid-senior y liderazgo', 'Roles estratégicos y operativos', 'Evaluación por competencias']
    },
    {
      icon: TrendingUp,
      title: 'Compensaciones',
      description: 'Diseñamos estructuras salariales competitivas y equitativas que atraen y retienen al mejor talento.',
      features: ['Análisis de mercado', 'Bandas salariales', 'Benchmarking sectorial']
    },
    {
      icon: Award,
      title: 'Gestión de Desempeño',
      description: 'Implementamos sistemas de evaluación que impulsan el crecimiento y desarrollo de tu equipo.',
      features: ['KPIs y métricas', 'Feedback continuo', 'Planes de desarrollo']
    },
    {
      icon: MessageSquare,
      title: 'Talleres',
      description: 'Capacitaciones personalizadas para fortalecer las habilidades de tu equipo y cultura organizacional.',
      features: ['Liderazgo', 'Comunicación efectiva', 'Trabajo en equipo']
    },
  ];

  const personasServices = [
    {
      icon: GraduationCap,
      title: 'Talleres de Empleabilidad',
      description: 'Desarrolla las habilidades que necesitas para destacar en el mercado laboral actual.',
      features: ['Marca personal', 'Networking efectivo', 'Presencia digital']
    },
    {
      icon: Users,
      title: 'Role Plays',
      description: 'Practica situaciones reales de entrevista y mejora tu desempeño en procesos de selección.',
      features: ['Simulaciones de entrevista', 'Feedback personalizado', 'Técnicas de negociación']
    },
    {
      icon: FileText,
      title: 'CV Profesional',
      description: 'Optimiza tu currículum para captar la atención de reclutadores y pasar filtros de ATS.',
      features: ['Redacción estratégica', 'Diseño profesional', 'Optimización ATS']
    },
    {
      icon: UserCheck,
      title: 'Análisis de Preferencias',
      description: 'Descubre tus fortalezas y encuentra el camino profesional que mejor se adapta a ti.',
      features: ['Test de personalidad', 'Evaluación de competencias', 'Plan de carrera']
    },
  ];

  const currentServices = activeTab === 'empresas' ? empresasServices : personasServices;

  return (
    <section id="servicios" className="services" ref={ref}>
      <div className="services__container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="services__label">Nuestros Servicios</span>
          <h2 className="services__title">
            Soluciones para cada
            <span className="services__title-accent"> necesidad</span>
          </h2>
        </motion.div>

        <motion.div
          className="services__tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            className={`services__tab ${activeTab === 'empresas' ? 'services__tab--active' : ''}`}
            onClick={() => setActiveTab('empresas')}
          >
            <Building2 size={20} />
            Para Empresas
          </button>
          <button
            className={`services__tab ${activeTab === 'personas' ? 'services__tab--active' : ''}`}
            onClick={() => setActiveTab('personas')}
          >
            <Briefcase size={20} />
            Para Personas
          </button>
        </motion.div>

        <motion.div
          className="services__grid"
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {currentServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="services__card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="services__card-icon">
                <service.icon size={28} />
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-description">{service.description}</p>
              <ul className="services__card-features">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services__cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>¿Listo para encontrar la pieza que falta en tu equipo?</p>
          <a
            href="https://koalendar.com/e/meet-with-darinka-nestorovic?month=2025-12&duration=30&date=2025-12-10"
            target="_blank"
            rel="noopener noreferrer"
            className="services__cta-button"
          >
            Agenda una llamada
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
