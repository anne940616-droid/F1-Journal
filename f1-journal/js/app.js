/* Rendering and interactions. Keep content in data.js, not in this file. */
(() => {
  const data = window.F1_DATA;
  const $ = (selector) => document.querySelector(selector);
  const teamGrid = $("#team-grid");
  const driverGrid = $("#driver-grid");
  const circuitGrid = $("#circuit-grid");
  const guideGrid = $("#guide-grid");

  function renderTeams(items) {
    teamGrid.innerHTML = items.map((team, i) => `
      <article class="team-card" style="--accent:${team.color}" data-number="${String(i+1).padStart(2,"0")}">
        <span class="card-kicker">${team.country} · ${team.category}</span>
        <h3>${team.name}</h3><p>${team.description}</p><span class="tag">Explore team</span>
      </article>`).join("");
    $("#team-count").textContent = `${items.length} TEAMS`;
  }
  function renderDrivers() {
    driverGrid.innerHTML = data.drivers.map(driver => `
      <article class="driver-card" style="--accent:${data.teams.find(t=>t.name.includes(driver.team))?.color || "#e10600"}">
        <div class="driver-number">${driver.number}</div><span class="card-kicker">${driver.country} · ${driver.team}</span>
        <h3>${driver.name}</h3><p>${driver.note}</p>
      </article>`).join("");
  }
  function renderCircuits() {
    circuitGrid.innerHTML = data.circuits.map((circuit,i) => `
      <article class="circuit-card"><span class="round">CIRCUIT 0${i+1}</span><div><h3>${circuit.name}</h3><p>${circuit.location}</p></div><span class="tag">${circuit.character}</span></article>`).join("");
  }
  function renderGuides() {
    guideGrid.innerHTML = data.guides.map((guide,i) => `
      <article class="guide-card"><span class="guide-no">0${i+1}</span><span class="card-kicker">${guide.category}</span><h3>${guide.title}</h3><p>${guide.body}</p></article>`).join("");
  }
  $("#team-search").addEventListener("input", event => {
    const query = event.target.value.toLowerCase();
    renderTeams(data.teams.filter(team => `${team.name} ${team.country} ${team.description}`.toLowerCase().includes(query)));
  });
  $(".menu-toggle").addEventListener("click", () => $(".topbar").classList.toggle("menu-open"));
  document.querySelectorAll("nav a").forEach(link => link.addEventListener("click", () => $(".topbar").classList.remove("menu-open")));
  renderTeams(data.teams); renderDrivers(); renderCircuits(); renderGuides();
})();