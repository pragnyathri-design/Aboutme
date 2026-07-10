/* =========================================================================
   SCRIPT.JS
   Renders everything from content.js into the page.
   You should not need to edit this file.
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const c = CONTENT;

  document.title = `${c.name} — ${c.role}`;

  setText("hero-name", c.name);
  setText("hero-role", c.role);
  setText("hero-location", c.location);
  setText("hero-tagline", c.tagline);

  // Hero title
  const titleBox = document.getElementById("hero-title-container");
  if (titleBox) {
    titleBox.innerHTML = `
      <span class="line">${escapeHtml(c.hero_line_1)}</span>
      <span class="line accent">${escapeHtml(c.hero_line_2)}</span>
      <span class="line hand">${escapeHtml(c.hero_line_3)}</span>
    `;
  }

  // About
  setText("about-headline", c.about_headline);
  const aboutBox = document.getElementById("about-paragraphs");
  if (aboutBox) {
    aboutBox.innerHTML = c.about_paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join("");
  }

  // Quick facts
  const qf = document.getElementById("quick-facts");
  if (qf) {
    qf.innerHTML = c.quick_facts.map(f => `
      <div class="qf">
        <span class="qf-k">${escapeHtml(f.label)}</span>
        <span class="qf-v">${escapeHtml(f.value)}</span>
      </div>
    `).join("");
  }

  setText("contact-email-text", c.email);
  setText("contact-message", c.contact_message);

  // Contact title
  const ct = document.getElementById("contact-title");
  if (ct && c.contact_headline) {
    const parts = c.contact_headline.split(" ");
    if (parts.length >= 2) {
      const last = parts.pop();
      ct.innerHTML = `${escapeHtml(parts.join(" "))} <em>${escapeHtml(last)}</em>`;
    } else {
      ct.textContent = c.contact_headline;
    }
  }

  setLink("link-cv", c.links.cv);
  setLink("link-cv-2", c.links.cv);
  setLink("link-linkedin", c.links.linkedin);

  const mailLink = document.getElementById("contact-email");
  if (mailLink) mailLink.href = `mailto:${c.email}`;

  // Projects
  const projectList = document.getElementById("project-list");
  if (projectList) {
    projectList.innerHTML = c.projects.map(p => `
      <article class="project">
        <span class="project-tag">${escapeHtml(p.tag)}</span>
        <div class="project-period">${escapeHtml(p.period)}</div>
        <h3>${escapeHtml(p.title)}</h3>
        <p>${escapeHtml(p.summary)}</p>
        <div class="project-footer">
          <span class="project-stat-label">${escapeHtml(p.stat_label)}</span>
          <span class="project-stat-value">${escapeHtml(p.stat_value)}</span>
        </div>
      </article>
    `).join("");
  }

  // Timeline
  const timeline = document.getElementById("timeline");
  if (timeline) {
    timeline.innerHTML = c.experience.map(e => `
      <div class="t-item">
        <div class="t-period">${escapeHtml(e.period)}</div>
        <div class="t-body">
          <h3>${escapeHtml(e.role)}</h3>
          <div class="t-org">${escapeHtml(e.org)}</div>
          <p>${escapeHtml(e.detail)}</p>
        </div>
      </div>
    `).join("");
  }

  // Skills
  const skillsGrid = document.getElementById("skills-grid");
  if (skillsGrid) {
    skillsGrid.innerHTML = c.skills.map(s =>
      `<span class="skill-chip">${escapeHtml(s)}</span>`
    ).join("");
  }

  // Publications
  const pubList = document.getElementById("pub-list");
  if (pubList) {
    pubList.innerHTML = c.publications.map(p => `
      <article class="pub">
        <div>
          <div class="pub-year">${escapeHtml(p.year)}</div>
          <div class="pub-type">${escapeHtml(p.type)}</div>
        </div>
        <div>
          <h3>${escapeHtml(p.title)}</h3>
          <div class="pub-authors">${escapeHtml(p.authors)}</div>
          <div class="pub-venue">${escapeHtml(p.venue)}</div>
        </div>
        <div>
          ${p.url ? `<a class="pub-link" href="${escapeHtml(p.url)}" target="_blank" rel="noopener">Read →</a>` : ""}
        </div>
      </article>
    `).join("");
  }

  // Certificates
  const certGrid = document.getElementById("cert-grid");
  if (certGrid) {
    certGrid.innerHTML = c.certificates.map(cert => `
      <div class="cert-card">
        <div class="cert-year">${escapeHtml(cert.year)}</div>
        <h3>${escapeHtml(cert.name)}</h3>
        <div class="cert-issuer">${escapeHtml(cert.issuer)}</div>
        ${cert.url ? `<a href="${escapeHtml(cert.url)}" target="_blank" rel="noopener" class="cert-link">Verify credential →</a>` : ""}
      </div>
    `).join("");
  }

  // Mobile nav
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  setText("footer-year", new Date().getFullYear());
  setText("footer-name", c.name);
});

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}
function setLink(id, url) {
  const el = document.getElementById(id);
  if (!el) return;
  if (!url) { el.style.display = "none"; return; }
  el.href = url;
}
function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
