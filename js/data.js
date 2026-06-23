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
      title: "Backend & Frontend  Developer | Mobile & Web Applications",
      techs: "Node.js • FastAPI • React • Ionic",
      image: "assets/Foto.png",
      cvLink: "#",
      projectLink: "#projects"
    },
    stats: [
      { number: "3", label: "Projects" },
      { number: "1", label: "Deployed APIs" },
      { number: "5+", label: "Backend and Frontend Technologies" },
      { number: "SoC", label: "Architectures" }
    ],

    about: "Full-Stack Developer primarily focused on backend logic and infrastructure, with the versatility to build and maintain stable user interfaces. I contribute to the modular design of architectures, data modeling with Supabase and Prisma, and the integration of external services. On the frontend side, I actively participate in the technical implementation of views and components using modern frameworks. My goal is to apply best development practices to solve logical problems clearly, delivering efficient and scalable code for the company's products.",

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
        description: "Backend for a gastronomic social network with user management, feeds and relationships.",
        techs: ["Node.js", "Prisma", "Supabase", "Swagger docs"],
        link: "projects/index.html?id=ploons",
        coverImage: "./assets/project/ploons.png",
        coverBg: "bg-gradient-to-br from-blue-100 to-indigo-200"
      },
      {
        id: "kanuxfrontend",
        title: "Kánux Frontend",
        description: "Collaborative development of the web and mobile interface for a job placement platform adapted to microservices.",
        techs: ["React+Next.js", "React Native", "TailwindCSS", "TypeScript"],
        link: "projects/index.html?id=kanuxfrontend",
        coverImage: "./assets/project/kanuxfrontend.png",
        coverBg: "bg-gradient-to-br from-purple-100 to-indigo-200"
      },
      {
        id: "kanuxbackend",
        title: "Kánux Backend",
        description: "Co-design and development of microservices-based infrastructure, business logic, and challenge validation.",
        techs: ["Node.js", "Prisma", "Supabase", "Cloudinary", "Microservices", "JWT"],
        link: "projects/index.html?id=kanuxbackend",
        coverImage: "./assets/project/kanuxbackend.png",
        coverBg: "bg-gradient-to-br from-purple-100 to-indigo-200"
      }
    ],

    cta: {
      title: "Shall we work together?",
      subtitle: "Open to full-time job opportunities and collaboration on technology projects.",
      email: "gonzalodormos26@gmail.com"
    },

    footer: {
      name: "Gonzalo Alberto Dormos Rodríguez",
      location: "Costa Rica, Heredia.",
      github: "https://github.com/gonzalodr",
      linkedin: "https://www.linkedin.com/in/gonzalo-dormos-r",
      email: "gonzalodormos26@gmail.com"
    }
  },

  projects: {
    ploons: {
      id: "ploons",
      title: "PLOONS API",
      subtitle: "Real-time gastronomic social network",
      coverImage: "../assets/project/ploons.png",
      coverBg: "bg-gradient-to-br from-blue-100 to-indigo-200",
      github: "https://github.com/gonzalodr/ploons-api",
      githubMobil: null,
      demo: null,
      wiki: "https://deepwiki.com/gonzalodr/ploons-api",
      description: "Ploons API is the complete backend for a social network focused on the culinary world. It allows users to create profiles, publish recipes, comment, like, and follow other chefs. The API is designed using RESTful principles and handles secure authentication with JWT, image uploads, and an optimized feed system.",
      features: [
        "User registration and authentication with Supabase Auth",
        "Full CRUD functionality for posts and recipes",
        "Nested likes and comments system",
        "Custom feed",
        "Advanced search by ingredients and tags"
      ],
      detailedTechs: ["Node.js", "Express", "Prisma ORM", "PostgreSQL", "Supabase", "Socket.io", "Supabase Auth", "Cloudinary"],
      challenge: "The main challenge was to ensure data consistency in a system with high concurrency (many users interacting at the same time) and maintain optimal performance in the custom feed, which required joining multiple tables and filtering by tracking relationships.",
      solution: "An optimization strategy for SQL queries was implemented with specific indexes on the relationship tables (followers and posts) and Prisma was used to efficiently handle complex transactions."
    },
    kanuxfrontend: {
      id: "kanuxfrontend",
      title: "Kánux Frontend",
      subtitle: "Web and mobile ecosystem for talent validation.",
      coverImage: "../assets/project/kanuxfrontend.png",
      coverBg: "bg-gradient-to-br from-purple-100 to-indigo-200",
      github: "https://github.com/AaronMatarrita/kanux-frontend-web",
      githubMobil: "https://github.com/AaronMatarrita/kanux-frontend-mobile",
      demo: null,
      wiki: null,
      description: "Collaborative development of the Kanux presentation layer, consisting of a robust web application built with React and Next.js and a native mobile application with React Native. The teamwork focused on efficiently integrating these interfaces with a microservices-based distributed backend, ensuring a smooth and responsive user experience when consuming the API Gateway.",
      features: [
        "Collaboration on the optimized web interface with Next.js and Tailwind CSS for corporate clients and talent.",
        "Participation in the mobile application built with React Native, adapted for tracking profiles and challenges.",
        "Asynchronous and synchronized consumption of the API Gateway using Axios.",
        "Technical layout of interactive dashboards for visualizing performance metrics.",
        "Integration of the code editor environment into the web for submitting solutions in real time."
      ],
      detailedTechs: ["TypeScript", "React", "Next.js", "React Native", "TailwindCSS", "Axios", "TanStack Query", "Git / GitHub Collaboration"],
      challenge: "The main challenge at the team level was to establish clean workflows and ensure that global state management matched the distributed nature of the backend, guaranteeing that the expiration and renewal of JWT tokens occurred transparently on both client platforms, as well as handling instant messaging.",
      solution: "We worked together to configure global interceptors in Axios connected to robust secure storage solutions (Zustan + SecureStore on mobile in Next.js), achieving unified session control that prevents interruptions to the user experience. We also used tools to manage the integrated code editor and sockets for instant messaging.",
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
      description: "Co-design and development of the core backend infrastructure for the Kánux platform, structured under a modular approach of independent microservices. Development focused on creating decoupled services responsible for processing business logic, data persistence with Prisma and Supabase, storage with Cloudinary, and overall system security through strict authentication flows.",
      features: [
        "Participation in the design of the modular architecture based on microservices connected by an API Gateway",
        "Implementation of centralized authentication and authorization mechanisms using JWT tokens",
        "Collaborative design of the relational database model and migrations with Prisma ORM on Supabase",
        "Integration of the storage service and optimization of multimedia assets using Cloudinary",
        "Development of logic for the isolation and automated validation of technical tests submitted by users",
        "Structuring of analytical processing services for the optimization of skills-based filtering"
      ],
      detailedTechs: ["Node.js", "TypeScript", "Express / NestJS", "Prisma ORM", "Supabase", "Cloudinary", "Microservices Architecture", "JWT Auth"],
      challenge: "The team's critical challenge was to design a highly scalable distributed ecosystem that successfully isolated common platform operations from intensive processes, such as bulk uploading of attachments and real-time code processing.",
      solution: "The backend was structured by dividing responsibilities into independent logical containers; Prisma was used for optimized transactional queries, and the loading of multimedia resources was delegated to Cloudinary. Traffic was centralized through a shared API Gateway that processes JWT authentication early on, relieving the load on internal microservices."
    }
  }
};