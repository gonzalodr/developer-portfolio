(function () {
  const data = DATA.portfolio;

  /* ── HERO ─────────────────────────────────────────────────────── */
  document.getElementById("hero").innerHTML = `
    <img
      class="h-44 w-44 rounded-full object-cover shadow-xl border-4 border-white"
      src="${data.hero.image}"
      alt="Foto de ${data.hero.name}"
    >
    <div class="text-center sm:text-left">
      <h1 class="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
        ${data.hero.name}
      </h1>
      <p class="mt-2 text-lg text-gray-500">${data.hero.title}</p>
      <p class="text-sm text-gray-400 mt-1">${data.hero.techs}</p>
      <div class="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
        <a href="${data.hero.projectLink}"
           class="rounded-full bg-gray-900 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">
          View Projects
        </a>
        <!-- <a href="${data.hero.cvLink}"
           class="rounded-full border-2 border-gray-200 px-6 py-2 text-sm font-semibold text-gray-600 hover:border-blue-500 hover:text-blue-500 transition">
          Descargar CV
        </a> -->
      </div>
    </div>
  `;

  /* ── STATS ────────────────────────────────────────────────────── */
  document.getElementById("stats").innerHTML = data.stats.map(stat => `
    <div class="bg-white p-6 shadow text-center">
      <h3 class="text-3xl font-bold text-blue-600">${stat.number}</h3>
      <p class="text-gray-500">${stat.label}</p>
    </div>
  `).join("");

  /* ── ABOUT ────────────────────────────────────────────────────── */
  document.getElementById("about").innerHTML = `
    <h2 class="text-3xl font-bold border-b-4 border-amber-400 w-fit mb-6">About me</h2>
    <p class="text-lg text-gray-600 leading-relaxed">${data.about}</p>
  `;

  /* ── STACK ────────────────────────────────────────────────────── */
  document.getElementById("stack").innerHTML = `
    <h2 class="text-3xl font-bold mb-8 text-gray-800">Technology Stack</h2>
    <div class="grid sm:grid-cols-4 gap-6">
      ${data.stack.map(item => `
        <div class="bg-white p-6 shadow">
          <h3 class="font-bold mb-3">${item.category}</h3>
          <p class="text-gray-500 text-sm">${item.items}</p>
        </div>
      `).join("")}
    </div>
  `;

  /* ── PROJECTS ────────────────────────────────────────────────── */
  document.getElementById("projects").innerHTML = `
    <h2 class="text-3xl font-bold mb-10 text-gray-800">Proyectos</h2>
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      ${data.projects.map(proj => {
        const cover = proj.coverImage
          ? `<img
               src="${proj.coverImage}"
               alt="Portada de ${proj.title}"
               class="w-full h-40 object-cover"
             >`
          : `<div class="h-40 flex items-center justify-center ${proj.coverBg || "bg-gradient-to-br from-gray-200 to-gray-400"} font-bold text-blue-600 text-xl">
               ${proj.title}
             </div>`;

        return `
          <a href="${proj.link}" class="group block">
            <div class="bg-white shadow-lg group-hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
              ${cover}
              <div class="p-6">
                <h3 class="font-bold text-lg">${proj.title}</h3>
                <p class="text-sm text-gray-500 mt-2">${proj.description}</p>
                <div class="flex flex-wrap gap-2 mt-4">
                  ${proj.techs.map(tech =>
                    `<span class="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded">${tech}</span>`
                  ).join("")}
                </div>
              </div>
            </div>
          </a>
        `;
      }).join("")}
    </div>
  `;

  /* ── CTA ──────────────────────────────────────────────────────── */
  document.getElementById("cta").innerHTML = `
    <h2 class="text-3xl font-bold">${data.cta.title}</h2>
    <p class="mt-3 text-blue-100">${data.cta.subtitle}</p>
    <a href="mailto:${data.cta.email}"
       class="inline-block mt-6 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:shadow-lg transition">
      Contact me
    </a>
  `;

  /* ── FOOTER ───────────────────────────────────────────────────── */
  document.getElementById("footer").innerHTML = `
    <div>
      <h2 class="text-xl font-bold">${data.footer.name}</h2>
      <p class="text-gray-400">${data.footer.location}</p>
    </div>
    <div class="flex gap-6 flex-wrap">
      <a href="${data.footer.github}"  class="text-gray-400 hover:text-white transition">GitHub</a>
      <a href="${data.footer.linkedin}" class="text-gray-400 hover:text-white transition">LinkedIn</a>
      <a href="mailto:${data.footer.email}"class="text-amber-400 font-semibold hover:underline">${data.footer.email}</a>
    </div>
  `;
})();
