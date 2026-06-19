/**
 * project.js — Lógica de la plantilla de detalle de proyecto (projects/index.html).
 * Requiere: js/data.js cargado antes que este script.
 *
 * Funciona con cualquier proyecto: lee el parámetro ?id=<id> de la URL
 * y busca los datos en DATA.projects[id].
 */

(function () {
  /* ── Leer ID desde la URL ─────────────────────────────────────── */
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");

  /* ── Helper: pantalla de error ───────────────────────────────── */
  function showError(title, message) {
    document.body.innerHTML = `
      <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white p-10 shadow-xl text-center max-w-md">
          <h2 class="text-2xl font-bold text-red-600">${title}</h2>
          ${message ? `<p class="text-gray-500 mt-2">${message}</p>` : ""}
          <a href="../../index.html" class="mt-6 inline-block text-blue-600 hover:underline">
            ← Volver al portafolio
          </a>
        </div>
      </div>
    `;
  }

  if (!projectId) {
    showError("No se especificó un proyecto");
    return;
  }

  const project = DATA.projects[projectId];
  if (!project) {
    showError("Proyecto no encontrado", `El proyecto con ID "${projectId}" no existe.`);
    return;
  }

  /* ── Actualizar <title> dinámicamente ───────────────────────── */
  document.title = `${project.title} | Gonzalo Dormos`;

  /* ── HEADER con imagen de portada ───────────────────────────── */
  const coverHtml = project.coverImage
    ? `<div
         class="w-full h-[300px] sm:h-[400px] bg-cover bg-center relative"
         style="background-image: url('${project.coverImage}');"
       >
         <div class="absolute inset-0 bg-black/30 flex items-end p-8">
           <div>
             <h1 class="text-white text-4xl sm:text-5xl font-extrabold drop-shadow">
               ${project.title}
             </h1>
             ${project.subtitle ? `<p class="text-white/80 text-lg mt-1 drop-shadow">${project.subtitle}</p>` : ""}
           </div>
         </div>
       </div>`
    : `<div class="w-full h-[250px] flex flex-col items-center justify-center ${project.coverBg || "bg-gradient-to-br from-gray-200 to-gray-400"}">
         <h1 class="text-4xl font-extrabold text-blue-700">${project.title}</h1>
         ${project.subtitle ? `<p class="text-gray-600 mt-2 text-lg">${project.subtitle}</p>` : ""}
       </div>`;

  document.getElementById("project-header").innerHTML = coverHtml;

  /* ── DESCRIPCIÓN ─────────────────────────────────────────────── */
  document.getElementById("project-description").innerHTML = `
    <h2 class="text-2xl font-bold border-b-4 border-amber-400 w-fit mb-4">Descripción del Proyecto</h2>
    <p class="text-gray-600 leading-relaxed">${project.description}</p>
  `;

  /* ── CARACTERÍSTICAS ─────────────────────────────────────────── */
  const featuresEl = document.getElementById("project-features");
  if (project.features && project.features.length) {
    featuresEl.innerHTML = `
      <h2 class="text-2xl font-bold border-b-4 border-amber-400 w-fit mb-4">Características Principales</h2>
      <ul class="grid sm:grid-cols-2 gap-3 list-disc list-inside text-gray-600">
        ${project.features.map(f => `<li class="marker:text-blue-500">${f}</li>`).join("")}
      </ul>
    `;
  } else {
    featuresEl.style.display = "none";
  }

  /* ── TECNOLOGÍAS ─────────────────────────────────────────────── */
  const techsEl = document.getElementById("project-techs");
  if (project.detailedTechs && project.detailedTechs.length) {
    techsEl.innerHTML = `
      <h2 class="text-2xl font-bold border-b-4 border-amber-400 w-fit mb-4">Stack Tecnológico usado</h2>
      <div class="flex flex-wrap gap-3">
        ${project.detailedTechs.map(t =>
      `<span class="bg-blue-50 text-blue-700 font-medium text-sm px-4 py-2 rounded-full shadow-sm border border-blue-100">${t}</span>`
    ).join("")}
      </div>
    `;
  } else {
    techsEl.style.display = "none";
  }

  /* ── DESAFÍO Y SOLUCIÓN ──────────────────────────────────────── */
  const challengeEl = document.getElementById("project-challenge");
  if (project.challenge || project.solution) {
    challengeEl.innerHTML = `
      <div class="grid sm:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-bold text-red-600 flex items-center gap-2">
            Desafío
          </h3>
          <p class="text-gray-600 mt-2 leading-relaxed">${project.challenge || "No especificado"}</p>
        </div>
        <div>
          <h3 class="text-xl font-bold text-green-600 flex items-center gap-2">
            Solución
          </h3>
          <p class="text-gray-600 mt-2 leading-relaxed">${project.solution || "No especificada"}</p>
        </div>
      </div>
    `;
  } else {
    challengeEl.style.display = "none";
  }

  /* ── ENLACES (GitHub / Demo) ─────────────────────────────────── */
  const linksEl = document.getElementById("project-links");
  if (project.github || project.demo) {
    linksEl.innerHTML = `
      <div class="flex flex-wrap justify-center gap-6 p-6 bg-white shadow-xl">
        ${project.github ? `
          <a href="${project.github}" target="_blank" rel="noopener"
             class="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-700 transition shadow-md">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
            </svg>
            Ver código en GitHub
          </a>
        ` : ""}
        ${project.demo ? `
          <a href="${project.demo}" target="_blank" rel="noopener"
             class="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition shadow-md">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
            Ver Demo en vivo
          </a>
        ` : ""}
      </div>
    `;
  } else {
    linksEl.style.display = "none";
  }
})();
