/**
 * data.js — Fuente de datos centralizada del portafolio.
 *
 * Para añadir un nuevo proyecto:
 *  1. Agrega una entrada en DATA.portfolio.projects (tarjeta en la página principal).
 *  2. Agrega la entrada correspondiente en DATA.projects con todos los detalles.
 *  3. Coloca la imagen de portada en assets/project/<id>-banner.png
 */

var DATA = {

  /* ================================================================
     PÁGINA PRINCIPAL
  ================================================================ */
  portfolio: {

    hero: {
      name: "Gonzalo Dormos Rodríguez",
      title: "Backend Developer | Mobile & Web Applications",
      techs: "Node.js • FastAPI • React • PostgreSQL",
      image: "assets/Foto.png",
      cvLink: "#",
      projectLink: "#proyectos"
    },

    stats: [
      { number: "5+", label: "Proyectos" },
      { number: "1", label: "APIs desplegadas" },
      { number: "6+", label: "Tecnologías Backend" },
      { number: "SoC", label: "Arquitecturas" }
    ],

    about: "Desarrollador Full-Stack orientado principalmente a la lógica e infraestructura backend, con la versatilidad necesaria para construir y mantener interfaces de usuario estables. Aporto valor en el diseño modular de arquitecturas, modelado de datos con Supabase y Prisma, e integración de servicios externos. En el lado frontend, participo de manera efectiva en la implementación técnica de vistas y componentes utilizando frameworks modernos. Mi objetivo es aplicar buenas prácticas de desarrollo para resolver problemas lógicos con claridad, proporcionando código eficiente y escalable para los productos de la empresa.",

    stack: [
      { category: "Backend", items: "Node.js<br>FastAPI<br>Prisma<br>Springboot" },
      { category: "Frontend", items: "React<br>TailwindCSS" },
      { category: "Mobile", items: "React Native<br>Ionic Framework" },
      { category: "Tools", items: "Git<br>Firebase<br>PostgreSQL<br>Supabase" }
    ],

    /**
     * Cada proyecto de la lista principal debe tener:
     *  - id:          identificador único (debe coincidir con la clave en DATA.projects)
     *  - title:       nombre del proyecto
     *  - description: descripción corta para la tarjeta
     *  - techs:       array de tecnologías (badges)
     *  - link:        ruta a la plantilla de detalle
     *  - coverImage:  ruta a la imagen de portada de la tarjeta
     *  - coverBg:     (fallback) clase de gradiente si no hay imagen
     */
    projects: [
      {
        id: "ploons",
        title: "Ploons API",
        description: "Backend para red social gastronómica con gestión de usuarios, feeds y relaciones en tiempo real.",
        techs: ["Node.js", "Prisma", "Supabase"],
        link: "projects/index.html?id=ploons",
        coverImage: "assets/project/ploons-banner.png",
        coverBg: "bg-gradient-to-br from-blue-100 to-indigo-200"
      }
    ],

    cta: {
      title: "¿Trabajamos juntos?",
      subtitle: "Disponible para prácticas profesionales y colaboración en proyectos.",
      email: "mailto:gonzalodormos26@gmail.com"
    },

    footer: {
      name: "Gonzalo Dormos Rodríguez",
      location: "Costa Rica",
      github: "https://github.com/gonzalodr",
      linkedin: "https://linkedin.com",
      email: "mailto:gonzalodormos26@gmail.com"
    }
  },

  /* ================================================================
     DETALLES DE CADA PROYECTO
     Para añadir uno nuevo: copia el bloque "ploons" y edita los campos.
  ================================================================ */
  projects: {

    ploons: {
      id: "ploons",
      title: "PLOONS API",
      subtitle: "Red social gastronómica en tiempo real",

      /** Imagen de portada del header de la página de detalle */
      coverImage: "../assets/project/ploons-banner.png",
      /** Fallback si no hay coverImage */
      coverBg: "bg-gradient-to-br from-blue-100 to-indigo-200",

      github: "https://github.com/tuusuario/ploons-api",
      demo: "https://tu-demo.com/ploons",

      description: "Ploons API es el backend completo de una red social enfocada en el mundo gastronómico. Permite a los usuarios crear perfiles, publicar recetas, comentar, dar 'me gusta' y seguir a otros chefs. La API está diseñada siguiendo principios RESTful y maneja autenticación segura con JWT, subida de imágenes y un sistema de feeds optimizado.",

      features: [
        "Registro y autenticación de usuarios con JWT",
        "CRUD completo de publicaciones y recetas",
        "Sistema de 'me gusta' y comentarios anidados",
        "Feed personalizado en tiempo real",
        "Búsqueda avanzada por ingredientes y etiquetas",
        "Panel de administración para moderación"
      ],

      detailedTechs: ["Node.js", "Express", "Prisma ORM", "PostgreSQL", "Supabase", "Socket.io", "JWT", "Cloudinary"],

      challenge: "El principal desafío fue garantizar la consistencia de los datos en un sistema con alta concurrencia (muchos usuarios interactuando al mismo tiempo) y mantener un rendimiento óptimo en el feed personalizado, que requería unir múltiples tablas y filtrar por relaciones de seguimiento.",

      solution: "Se implementó una estrategia de caché con Redis para almacenar los feeds más consultados, se optimizaron las consultas SQL con índices específicos en las tablas de relaciones (seguidores y publicaciones) y se utilizó Prisma para manejar las transacciones complejas de manera eficiente, reduciendo el tiempo de respuesta de 800ms a 120ms."
    }

  }

};
