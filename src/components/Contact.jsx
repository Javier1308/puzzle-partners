import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    cargo: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Crear el cuerpo del email
    const emailBody = `
Nuevo mensaje desde Puzzle Partners Web

Nombre: ${formData.nombre}
Empresa: ${formData.empresa}
Cargo: ${formData.cargo}
Email: ${formData.email}
Teléfono: ${formData.telefono}

Mensaje:
${formData.mensaje}
    `.trim();

    // Crear el enlace mailto
    const mailtoLink = `mailto:dnestorovic@puzzle-partners.com?subject=Nuevo contacto desde la web - ${formData.nombre}&body=${encodeURIComponent(emailBody)}`;
    
    // Abrir el cliente de correo
    window.location.href = mailtoLink;
    
    // Simular éxito después de abrir el cliente de correo
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Se ha abierto tu cliente de correo. ¡Envía el mensaje para contactarnos!'
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contacto" className="contact" ref={ref}>
      <div className="contact__bg">
        <div className="contact__bg-shape contact__bg-shape--1"></div>
        <div className="contact__bg-shape contact__bg-shape--2"></div>
      </div>

      <div className="contact__container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="contact__label">Contacto</span>
          <h2 className="contact__title">
            Conversemos sobre tu
            <span className="contact__title-accent"> próximo proyecto</span>
          </h2>
          <p className="contact__subtitle">
            Estamos listos para ser tu aliado estratégico en talento. 
            Cuéntanos qué necesitas y encontremos juntos la solución perfecta.
          </p>
        </motion.div>

        <div className="contact__content">
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="nombre">Nombre *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="empresa">Empresa</label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                />
              </div>
            </div>

            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="cargo">Cargo</label>
                <input
                  type="text"
                  id="cargo"
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleChange}
                  placeholder="Tu cargo actual"
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="contact__form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+51 999 999 999"
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="mensaje">Mensaje *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Cuéntanos en qué podemos ayudarte..."
              />
            </div>

            {status.message && (
              <div className={`contact__status contact__status--${status.type}`}>
                {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              className="contact__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Abriendo correo...' : 'Enviar mensaje'}
              <Send size={18} />
            </button>
          </motion.form>

          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="contact__info-card">
              <h3>¿Prefieres una llamada?</h3>
              <p>
                Agenda directamente una videollamada de 30 minutos 
                y conversemos sobre tus necesidades.
              </p>
              <a
                href="https://koalendar.com/e/meet-with-darinka-nestorovic?month=2025-12&duration=30&date=2025-12-10"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__info-cta"
              >
                Agenda una llamada
              </a>
            </div>

            <div className="contact__info-details">
              <div className="contact__info-item">
                <span className="contact__info-label">Email</span>
                <a href="mailto:dnestorovic@puzzle-partners.com">
                  dnestorovic@puzzle-partners.com
                </a>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-label">WhatsApp</span>
                <a href="https://wa.me/51989438007" target="_blank" rel="noopener noreferrer">
                  +51 989 438 007
                </a>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-label">Ubicación</span>
                <span>Lima, Perú</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
