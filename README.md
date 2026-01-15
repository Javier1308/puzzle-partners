# Puzzle Partners - Landing Page

Landing page corporativa para Puzzle Partners, consultora boutique especializada en reclutamiento estratégico y talent consulting.

## Descripcion del Proyecto

Este proyecto es una aplicacion web de una sola pagina (SPA) desarrollada en React con Vite. La landing page presenta los servicios de Puzzle Partners, su propuesta de valor y facilita el contacto con potenciales clientes.

### Secciones

- **Header**: Navegacion principal con logo y llamada a la accion para agendar una llamada.
- **Hero**: Seccion de bienvenida con mensaje principal y elementos visuales animados.
- **Sobre Nosotros**: Informacion de la empresa, propuesta de valor y valores corporativos.
- **Servicios**: Catalogo de servicios dividido en dos categorias (empresas y personas).
- **Contacto**: Formulario de contacto e informacion de comunicacion directa.
- **Footer**: Enlaces de navegacion, datos de contacto y redes sociales.

## Tecnologias Utilizadas

- React 18
- Vite 5
- Framer Motion (animaciones)
- Lucide React (iconografia)
- CSS Modules (estilos)

## Requisitos Previos

- Node.js 18.0 o superior
- npm 9.0 o superior

## Instalacion

1. Clonar el repositorio:

```bash
git clone https://github.com/[usuario]/puzzle-partners.git
cd puzzle-partners
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicacion estara disponible en `http://localhost:5173`

## Scripts Disponibles

| Comando | Descripcion |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la version de produccion en `/dist` |
| `npm run preview` | Previsualiza la version de produccion localmente |
| `npm run lint` | Ejecuta el linter de codigo |

## Estructura del Proyecto

```
puzzle-partners/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── fonts/
│   │       ├── Mermaid1001.ttf
│   │       ├── Raleway-VariableFont_wght.ttf
│   │       └── Raleway-Italic-VariableFont_wght.ttf
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Configuracion de Estilos

### Paleta de Colores

La aplicacion utiliza la identidad visual oficial de Puzzle Partners:

| Color | Codigo | Uso |
|-------|--------|-----|
| Azul primario | `#5A7EFF` | Color principal, botones, acentos |
| Azul claro | `#C0D5FF` | Fondos secundarios, hover states |
| Lila claro | `#E9D9FE` | Fondos decorativos, gradientes |
| Blanco | `#FFFFFF` | Fondo principal, textos sobre color |
| Oscuro | `#1a1a2e` | Textos principales, footer |

### Tipografias

- **Mermaid**: Utilizada para el logo y titulos destacados.
- **Raleway**: Utilizada para cuerpo de texto, subtitulos y navegacion.

Las fuentes estan incluidas localmente en `/src/assets/fonts/`.

## Formulario de Contacto

El formulario de contacto actualmente utiliza el protocolo `mailto:` para abrir el cliente de correo del usuario con los datos pre-completados. Los mensajes se dirigen a `dnestorovic@puzzle-partners.com`.

### Campos del Formulario

| Campo | Tipo | Requerido |
|-------|------|-----------|
| Nombre | texto | Si |
| Empresa | texto | No |
| Cargo | texto | No |
| Email | email | Si |
| Telefono | tel | No |
| Mensaje | textarea | Si |

### Integracion con Servicios de Email (Opcional)

Para implementar envio de emails sin depender del cliente de correo del usuario, se recomienda integrar uno de los siguientes servicios:

- EmailJS (https://www.emailjs.com)
- Formspree (https://formspree.io)
- SendGrid (https://sendgrid.com)

## Enlaces Externos

La aplicacion incluye los siguientes enlaces externos configurados:

| Elemento | URL |
|----------|-----|
| Agendar llamada | https://koalendar.com/e/meet-with-darinka-nestorovic |
| WhatsApp | https://wa.me/51989438007 |
| LinkedIn | https://www.linkedin.com/in/darinka-nestorovic-monsalve-753770a7/ |
| Email | dnestorovic@puzzle-partners.com |

## Despliegue

### Generar Build de Produccion

```bash
npm run build
```

Los archivos optimizados se generaran en el directorio `/dist`.

### Plataformas Recomendadas

El proyecto puede desplegarse en cualquier servicio de hosting estatico:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

### Ejemplo de Despliegue en Vercel

```bash
npm install -g vercel
vercel
```

### Ejemplo de Despliegue en Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## Optimizaciones Incluidas

- Carga diferida de fuentes con `font-display: swap`
- Animaciones optimizadas con Framer Motion
- CSS minificado en produccion
- Tree shaking de dependencias no utilizadas
- Compresion gzip de assets

## Compatibilidad de Navegadores

La aplicacion es compatible con las versiones modernas de:

- Google Chrome (ultimas 2 versiones)
- Mozilla Firefox (ultimas 2 versiones)
- Safari (ultimas 2 versiones)
- Microsoft Edge (ultimas 2 versiones)

## Responsive Design

La aplicacion es completamente responsiva con breakpoints en:

- Desktop: 1200px y superior
- Tablet: 901px - 1199px
- Mobile: 900px e inferior

## Licencia

Este proyecto es propiedad de Puzzle Partners. Todos los derechos reservados.

## Contacto

Para consultas sobre el desarrollo:

- Empresa: Puzzle Partners
- Email: dnestorovic@puzzle-partners.com
- Ubicacion: Lima, Peru
