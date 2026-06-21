/**
 * data.js — Fuente de datos centralizada del portafolio.
 *
 * Para añadir un nuevo proyecto:
 * 1. Agrega una entrada en DATA.portfolio.projects (tarjeta en la página principal).
 * 2. Agrega la entrada correspondiente en DATA.projects con todos los detalles.
 * 3. Coloca la imagen de portada en assets/project/<id>-banner.png
 */

var DATA = {
  portfolio: {

    hero: {
      name: "Gonzalo Dormos Rodríguez",
      title: "Backend Developer | Mobile & Web Applications",
      techs: "Node.js • FastAPI • React • Ionic",
      image: "assets/Foto.png",
      cvLink: "#",
      projectLink: "#projects"
    },

    stats: [
      { number: "3", label: "Proyectos" },
      { number: "1", label: "APIs desplegadas" },
      { number: "6", label: "Tecnologías Backend" },
      { number: "SoC", label: "Arquitecturas" }
    ],

    about: "Desarrollador Full-Stack orientado principalmente a la lógica e infraestructura backend, con la versatilidad necesaria para construir y mantener interfaces de usuario estables. Aporto valor en el diseño modular de arquitecturas, modelado de datos con Supabase y Prisma, e integración de servicios externos. En el lado frontend, participo de manera efectiva en la implementación técnica de vistas y componentes utilizando frameworks modernos. Mi objetivo es aplicar buenas prácticas de desarrollo para resolver problemas lógicos con claridad, proporcionando código eficiente y escalable para los productos de la empresa.",

    stack: [
      { category: "Backend", items: "Node.js<br>FastAPI" },
      { category: "Frontend", items: "React<br>TailwindCSS" },
      { category: "Mobile", items: "React Native<br>Ionic + Angular" },
      { category: "Tools", items: "Git/GitHub<br>Firebase<br>Supabase" }
    ],
    /**
     * Cada proyecto de la lista principal debe tener:
     * - id:          identificador único (debe coincidir con la clave en DATA.projects)
     * - title:       nombre del proyecto
     * - description: descripción corta para la tarjeta
     * - techs:       array de tecnologías (badges)
     * - link:        ruta a la plantilla de detalle
     * - coverImage:  ruta a la imagen de portada de la tarjeta
     * - coverBg:     (fallback) clase de gradiente si no hay imagen
     */
    projects: [
      {
        id: "ploons",
        title: "Ploons API",
        description: "Backend para red social gastronómica con gestión de usuarios, feeds y relaciones.",
        techs: ["Node.js", "Prisma", "Supabase", "Swagger docs"],
        link: "projects/index.html?id=ploons",
        coverImage: "./assets/project/ploons.png",
        coverBg: "bg-gradient-to-br from-blue-100 to-indigo-200"
      },
      {
        id: "kanuxfrontend",
        title: "Kánux Frontend",
        description: "Desarrollo colaborativo de la interfaz web y móvil para una plataforma de vinculación laboral adaptada a microservicios.",
        techs: ["React+Next.js", "React Native", "TailwindCSS", "TypeScript"],
        link: "projects/index.html?id=kanuxfrontend",
        coverImage: "./assets/project/kanuxfrontend.png",
        coverBg: "bg-gradient-to-br from-purple-100 to-indigo-200"
      },
      {
        id: "kanuxbackend",
        title: "Kánux Backend",
        description: "Co-diseño y desarrollo de infraestructura basada en microservicios, lógica de negocio y validación de retos.",
        techs: ["Node.js", "Prisma", "Supabase", "Cloudinary", "Microservices", "JWT"],
        link: "projects/index.html?id=kanuxbackend",
        coverImage: "./assets/project/kanuxbackend.png",
        coverBg: "bg-gradient-to-br from-purple-100 to-indigo-200"
      }
    ],

    cta: {
      title: "¿Trabajamos juntos?",
      subtitle: "Abierto a oportunidades laborales de tiempo completo y colaboración en proyectos tecnológicos.",
      email: "mailto:gonzalodormos26@gmail.com"
    },

    footer: {
      name: "Gonzalo Dormos Rodríguez",
      location: "Costa Rica",
      github: "https://github.com/gonzalodr",
      linkedin: "https://www.linkedin.com/in/gonzalo-dormos-r",
      email: "mailto:gonzalodormos26@gmail.com"
    }
  },

  projects: {
    ploons: {
      id: "ploons",
      title: "PLOONS API",
      subtitle: "Red social gastronómica en tiempo real",
      coverImage: "../assets/project/ploons.png",
      coverBg: "bg-gradient-to-br from-blue-100 to-indigo-200",
      github: "https://github.com/gonzalodr/ploons-api",
      githubMobil: null,
      demo: null,
      wiki: "https://deepwiki.com/gonzalodr/ploons-api",
      description: "Ploons API es el backend completo de una red social enfocada en el mundo gastronómico. Permite a los usuarios crear perfiles, publicar recetas, comentar, dar 'me gusta' y seguir a otros chefs. La API está diseñada siguiendo principios RESTful y maneja autenticación segura con JWT, subida de imágenes y un sistema de feeds optimizado.",
      features: [
        "Registro y autenticación de usuarios con Supabase Auth",
        "CRUD completo de publicaciones y recetas",
        "Sistema de 'me gusta' y comentarios anidados",
        "Feed personalizado",
        "Búsqueda avanzada por ingredientes y etiquetas",
      ],
      detailedTechs: ["Node.js", "Express", "Prisma ORM", "PostgreSQL", "Supabase", "Socket.io", "Supabase Auth", "Cloudinary"],
      challenge: "El principal desafío fue garantizar la consistencia de los datos en un sistema con alta concurrencia (muchos usuarios interactuando al mismo tiempo) y mantener un rendimiento óptimo en el feed personalizado, que requería unir múltiples tablas y filtrar por relaciones de seguimiento.",
      solution: "Se implementó una estrategia de caché con Redis para almacenar los feeds más consultados, se optimizaron las consultas SQL con índices específicos en las tablas de relaciones (seguidores y publicaciones) y se utilizó Prisma para manejar las transacciones complejas de manera eficiente, reduciendo el tiempo de respuesta de 800ms a 120ms."
    },
    kanuxfrontend: {
      id: "kanuxfrontend",
      title: "Kánux Frontend",
      subtitle: "Ecosistema web y móvil para validación de talento técnico",
      coverImage: "../assets/project/kanuxfrontend.png",
      coverBg: "bg-gradient-to-br from-purple-100 to-indigo-200",
      github: "https://github.com/AaronMatarrita/kanux-frontend-web",
      githubMobil: "https://github.com/AaronMatarrita/kanux-frontend-mobile",
      demo: null,
      wiki: null,
      description: "Desarrollo colaborativo de la capa de presentación de Kánux, compuesta por una aplicación web robusta construida con React y Next.js para empresas y una aplicación móvil nativa con React Native para postulantes. El trabajo en equipo se enfocó en acoplar estas interfaces de manera eficiente con un backend distribuido en microservicios, asegurando una experiencia de usuario fluida y reactiva al consumir la API Gateway.",
      features: [
        "Colaboración en la interfaz web SPA/SSR optimizada con Next.js y TailwindCSS para clientes corporativos",
        "Participación en la aplicación móvil en React Native adaptada para el seguimiento de perfiles y retos",
        "Consumo asíncrono y sincronizado de la API Gateway mediante Axios / TanStack Query",
        "Maquetación técnica de dashboards interactivos para la visualización de métricas de desempeño",
        "Integración del entorno del editor de código en web para el envío de soluciones en tiempo real"
      ],
      detailedTechs: ["TypeScript", "React", "Next.js", "React Native", "TailwindCSS", "Axios", "TanStack Query", "Git / GitHub Collaboration"],
      challenge: "El reto principal a nivel de equipo fue establecer flujos de trabajo limpios y asegurar que la gestión del estado global coincidiera con la naturaleza distribuida del backend, garantizando que la expiración y renovación de los tokens JWT ocurriera transparentemente en ambas plataformas cliente.",
      solution: "Se trabajó de manera conjunta para configurar interceptores globales en Axios conectados a soluciones robustas de almacenamiento seguro (Zustand + SecureStore en mobile y Cookies HTTP-only en Next.js), logrando un control de sesiones unificado que evita interrupciones en la experiencia de usuario.",
    },
    kanuxbackend: {
      id: "kanuxbackend",
      title: "Kánux Backend",
      subtitle: "Arquitectura distribuida en microservicios para la gestión de talento",
      coverImage: "../assets/project/kanuxbackend.png",
      coverBg: "bg-gradient-to-br from-purple-100 to-indigo-200",
      github: "https://github.com/gonzalodr/kanux-backend",
      githubMobil: null,
      demo: null,
      wiki: null,
      description: "Co-diseño y desarrollo de la infraestructura backend central de la plataforma Kánux, estructurada bajo un enfoque modular de microservicios independientes. El desarrollo se centró en la creación de servicios desacoplados encargados de procesar la lógica de negocio, persistencia de datos con Prisma y Supabase, almacenamiento con Cloudinary, y la seguridad global del sistema mediante flujos de autenticación estrictos.",
      features: [
        "Participación en el diseño de la arquitectura modular basada en microservicios conectados por un API Gateway",
        "Implementación de mecanismos centralizados de autenticación y autorización mediante tokens JWT",
        "Diseño colaborativo del modelo de base de datos relacional y migraciones con Prisma ORM sobre Supabase",
        "Integración del servicio de almacenamiento y optimización de activos multimedia mediante Cloudinary",
        "Desarrollo de lógica para el aislamiento y validación automatizada de pruebas técnicas enviadas por usuarios",
        "Estructuración de servicios de procesamiento analítico para la optimización del filtrado de CVs"
      ],
      detailedTechs: ["Node.js", "TypeScript", "Express / NestJS", "Prisma ORM", "Supabase", "Cloudinary", "Microservices Architecture", "JWT Auth"],
      challenge: "El desafío crítico del equipo fue diseñar un ecosistema distribuido altamente escalable que aislara con éxito las operaciones comunes de la plataforma de los procesos intensivos, como la carga masiva de archivos adjuntos (CVs, imágenes) y el procesamiento de código en tiempo real.",
      solution: "Se estructuró el backend dividiendo responsabilidades en contenedores lógicos independientes; se usó Prisma para consultas transaccionales optimizadas y se delegó la carga de recursos multimedia a Cloudinary mediante firmas seguras desde el servidor. El tráfico se centralizó a través de un API Gateway compartido que procesa la autenticación JWT tempranamente, aliviando la carga de los microservicios internos."
    }
  }
};