/* ==========================================================================
   Premium CV Portfolio - Logic
   ========================================================================== */

// ==================== DEFAULT DATA ====================
const DEFAULT_DATA = {
  profile: {
    name: "Kamolbek Muzaffarov",
    shortName: "Kamolbek",
    profession: "Full-Stack Developer & AI Engineer",
    slogan: "I build intelligent products that scale — bots, AI, and clean cloud infrastructure for modern businesses.",
    location: "Tashkent, Uzbekistan",
    bio: "Men Kamolbek — AI, avtomatlashtirish va dizayn kesishmasiga qiziqqan o'z-o'zini o'rgatgan muhandisman. So'nggi yillarda men siz uxlab yotganingizda lidlarni qo'lga oladigan Telegram botlarni, xona rasmlarini o'qib dizayn taklif qiladigan AI yordamchilarni va xaosni aniqlikka aylantiradigan admin paneli loyihalarini ishlab chiqdim.",
    avatar: ""
  },
  stats: {
    years: "5+",
    projects: "30+",
    clients: "25+",
    uptime: "99.9%"
  },
  skills: [
    { category: "Languages", name: "Python", level: 95 },
    { category: "Languages", name: "JavaScript / TypeScript", level: 88 },
    { category: "Languages", name: "SQL", level: 85 },
    { category: "Languages", name: "Bash", level: 75 },
    { category: "Frontend", name: "React / Next.js", level: 90 },
    { category: "Frontend", name: "HTML / CSS", level: 95 },
    { category: "Frontend", name: "Flutter", level: 70 },
    { category: "Frontend", name: "TailwindCSS", level: 92 },
    { category: "Backend & AI", name: "FastAPI / Aiogram", level: 95 },
    { category: "Backend & AI", name: "OpenAI / Gemini", level: 90 },
    { category: "Backend & AI", name: "PostgreSQL / Redis", level: 85 },
    { category: "Backend & AI", name: "Vector DBs (RAG)", level: 80 },
    { category: "DevOps", name: "Linux / systemd", level: 88 },
    { category: "DevOps", name: "Docker", level: 82 },
    { category: "DevOps", name: "Oracle Cloud / AWS", level: 78 },
    { category: "DevOps", name: "CI/CD", level: 75 }
  ],
  experience: [
    {
      period: "2024 — Hozir",
      title: "Founder & Lead Developer",
      company: "Independent / Freelance",
      description: "Telegram botlari, AI integratsiyalari va cloud avtomatlashtirish loyihalari ustida ishlayman. Mijozlar uchun end-to-end yechimlar ishlab chiqaman — boshlang'ich serverdan to to'lov qiladigan mijozgacha."
    },
    {
      period: "2022 — 2024",
      title: "Full-Stack Developer",
      company: "Tech Studio Tashkent",
      description: "B2B SaaS mahsulotlari uchun frontend va backend ishlab chiqdim. React/Next.js asosida 10+ ta dashboard, FastAPI backend va PostgreSQL bilan ishladim."
    },
    {
      period: "2020 — 2022",
      title: "Junior Developer",
      company: "StartupHub",
      description: "Web ilovalar, lending sahifalar va dastlabki bot loyihalarda qatnashdim. Python, Django va REST API bilan ishladim."
    }
  ],
  portfolio: [
    {
      title: "Chozma Shift AI Bot",
      description: "Stretch-ceiling biznesi uchun Telegram bot. Gemini Vision orqali xona rasmlarini tahlil qiladi, narxni hisoblaydi va lidlarni admin CRM ga uzatadi.",
      image: "",
      link: "#",
      tags: ["Aiogram 3", "Gemini Vision", "SQLite", "Oracle Cloud"]
    },
    {
      title: "Lead Funnel Pro",
      description: "Telegram, Instagram DM va veb-formani birlashtirgan ko'p bosqichli lidlarni tasniflash mexanizmi. Issiq lidlarni avtomatik sotuvga yo'naltiradi.",
      image: "",
      link: "#",
      tags: ["FastAPI", "PostgreSQL", "Redis", "Next.js"]
    },
    {
      title: "Vision Designer",
      description: "AI bilan interyer dizayn previewi. Foydalanuvchi xona rasmini yuklaydi, materiallar tanlaydi — tizim fotorealistik mockuplar qaytaradi.",
      image: "",
      link: "#",
      tags: ["Python", "Stable Diffusion", "React", "WebSockets"]
    },
    {
      title: "Pulse Analytics",
      description: "Kichik biznes uchun real-vaqt dashboard. Telegram bot egasining savollarini oddiy tilda javob beradi — streaming data warehouse bilan.",
      image: "",
      link: "#",
      tags: ["Aiogram", "OpenAI", "ClickHouse", "D3.js"]
    }
  ],
  contacts: {
    email: "kamolbekmkm777@icloud.com",
    phone: "+998 90 123 45 67",
    telegram: "https://t.me/kamolbek",
    github: "https://github.com/kamolbekmkm777",
    linkedin: "https://linkedin.com/in/kamolbek-m",
    instagram: "https://instagram.com/kamolbek",
    twitter: "https://x.com/kamolbek_dev",
    website: "https://kamolbek.dev"
  },
  uiTexts: {
    nav_about: "Haqimda",
    nav_skills: "Skills",
    nav_experience: "Tajriba",
    nav_portfolio: "Portfolio",
    nav_contact: "Kontakt",
    nav_cta: "Hire me",
    hero_badge: "Yangi loyihalar uchun ochiq · 2026",
    hero_btn_hire: "Hire me",
    hero_btn_download: "Download CV",
    about_title: "Haqimda",
    skills_title: "Skills",
    experience_title: "Ish tajribasi",
    portfolio_title: "Portfolio",
    contact_title: "Bog'lanish",
    stat_years: "Yillik tajriba",
    stat_projects: "Loyihalar",
    stat_clients: "Mijozlar",
    stat_uptime: "Ishonchlilik",
    contact_heading: "Loyihangiz haqida gaplashaylikmi?",
    contact_sub: "Xabar yozing — 24 soat ichida javob beraman.",
    form_name: "Ismingiz",
    form_email: "Email",
    form_subject: "Mavzu",
    form_message: "Xabar",
    form_submit: "Xabar yuborish",
    footer_credit: "Premium CV portfolio"
  },
  typography: {
    body: "Inter",
    display: "Space Grotesk",
    serif: "Instrument Serif"
  },
  elementStyles: {
    hero_title: { font: "", size: "" },
    hero_slogan: { font: "", size: "" },
    hero_badge: { font: "", size: "" },
    section_title: { font: "", size: "" },
    about_bio: { font: "", size: "" }
  },
  publicCode: "mkm777",
  music: {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    volume: 40,
    autoplay: true,
    presetId: "song1"
  },
  elementOffsets: {}  // key → { x, y } for drag-to-position
};

const MUSIC_PRESETS = [
  { id: 'song1', name: 'SoundHelix Song 1', icon: '🎵', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: 'song2', name: 'SoundHelix Song 2', icon: '🎶', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id: 'song9', name: 'SoundHelix Song 9', icon: '🎼', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3' },
  { id: 'song15', name: 'SoundHelix Song 15', icon: '🎧', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3' }
];

// Master code — never visible in admin panel; only changeable by editing source
const MASTER_CODE = "2477";

// Available fonts for typography selector
const FONT_OPTIONS = [
  "Inter", "Space Grotesk", "Instrument Serif", "Playfair Display",
  "Roboto", "Poppins", "Manrope", "DM Sans", "Lora", "Bebas Neue",
  "Cormorant Garamond", "Crimson Text", "Work Sans", "Libre Baskerville",
  "Merriweather", "Raleway", "Montserrat", "Open Sans"
];

// Editable text labels (UI-friendly)
const TEXT_LABELS = {
  nav_about: "Nav: Haqimda",
  nav_skills: "Nav: Skills",
  nav_experience: "Nav: Tajriba",
  nav_portfolio: "Nav: Portfolio",
  nav_contact: "Nav: Kontakt",
  nav_cta: "Nav: CTA tugma",
  hero_badge: "Hero: Badge",
  hero_btn_hire: "Hero: Hire me tugma",
  hero_btn_download: "Hero: Download tugma",
  about_title: "Bo'lim: Haqimda",
  skills_title: "Bo'lim: Skills",
  experience_title: "Bo'lim: Tajriba",
  portfolio_title: "Bo'lim: Portfolio",
  contact_title: "Bo'lim: Kontakt",
  stat_years: "Stat: Yillar",
  stat_projects: "Stat: Loyihalar",
  stat_clients: "Stat: Mijozlar",
  stat_uptime: "Stat: Uptime",
  contact_heading: "Kontakt: Sarlavha",
  contact_sub: "Kontakt: Sub matn",
  form_name: "Form: Ism label",
  form_email: "Form: Email label",
  form_subject: "Form: Mavzu label",
  form_message: "Form: Xabar label",
  form_submit: "Form: Yuborish tugma",
  footer_credit: "Footer: Kredit matn"
};

const ELEMENT_LABELS = {
  hero_title: "Hero sarlavhasi (ism)",
  hero_slogan: "Hero slogan",
  hero_badge: "Hero badge",
  section_title: "Bo'lim sarlavhalari (h2)",
  about_bio: "Haqimda matni"
};

// ==================== STATE ====================
let data = loadData();

// ==================== STORAGE ====================
function loadData() {
  try {
    const saved = localStorage.getItem('cvData');
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        profile: { ...DEFAULT_DATA.profile, ...(parsed.profile || {}) },
        stats: { ...DEFAULT_DATA.stats, ...(parsed.stats || {}) },
        skills: parsed.skills || DEFAULT_DATA.skills,
        experience: parsed.experience || DEFAULT_DATA.experience,
        portfolio: parsed.portfolio || DEFAULT_DATA.portfolio,
        contacts: { ...DEFAULT_DATA.contacts, ...(parsed.contacts || {}) },
        uiTexts: { ...DEFAULT_DATA.uiTexts, ...(parsed.uiTexts || {}) },
        typography: { ...DEFAULT_DATA.typography, ...(parsed.typography || {}) },
        elementStyles: { ...DEFAULT_DATA.elementStyles, ...(parsed.elementStyles || {}) },
        publicCode: parsed.publicCode || DEFAULT_DATA.publicCode,
        music: { ...DEFAULT_DATA.music, ...(parsed.music || {}) },
        elementOffsets: parsed.elementOffsets || {}
      };
    }
  } catch (e) { console.warn('loadData failed', e); }
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function saveData() {
  try {
    localStorage.setItem('cvData', JSON.stringify(data));
    return true;
  } catch (e) {
    console.warn('saveData failed', e);
    return false;
  }
}

function saveTheme(theme) {
  localStorage.setItem('cvTheme', theme);
}
function loadTheme() {
  return localStorage.getItem('cvTheme') || 'dark';
}

// ==================== TOAST ====================
function toast(msg, duration = 2400) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove('show'), duration);
}

// ==================== RENDERING ====================
function renderAll() {
  renderBindings();
  renderTexts();
  renderTypography();
  renderElementStyles();
  renderAvatar();
  renderSkills();
  renderTimeline();
  renderPortfolio();
  renderContacts();
  if (typeof autoTagEditable === 'function') autoTagEditable();
  if (typeof applyEditOffsets === 'function') applyEditOffsets();
}

function renderTexts() {
  document.querySelectorAll('[data-text-key]').forEach(el => {
    const key = el.dataset.textKey;
    if (data.uiTexts && data.uiTexts[key] !== undefined) {
      el.textContent = data.uiTexts[key];
    }
  });
}

function renderTypography() {
  const root = document.documentElement;
  if (data.typography.body) root.style.setProperty('--body', `'${data.typography.body}', -apple-system, sans-serif`);
  if (data.typography.display) root.style.setProperty('--display', `'${data.typography.display}', -apple-system, sans-serif`);
  if (data.typography.serif) root.style.setProperty('--serif', `'${data.typography.serif}', serif`);
  ensureFontsLoaded();
}

function loadGoogleFont(family) {
  if (!family) return;
  const id = 'gfont-' + family.replace(/\s+/g, '-');
  if (document.getElementById(id)) return;
  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  // Simple, universal URL — works for every font (bold synthesized if needed)
  link.href = `https://fonts.googleapis.com/css2?family=${family.replace(/\s+/g, '+')}&display=swap`;
  document.head.appendChild(link);
}

function ensureFontsLoaded() {
  // Load all currently used fonts (typography + element styles)
  const fonts = new Set();
  ['body', 'display', 'serif'].forEach(role => {
    if (data.typography?.[role]) fonts.add(data.typography[role]);
  });
  if (data.elementStyles) {
    Object.values(data.elementStyles).forEach(cfg => {
      if (cfg?.font) fonts.add(cfg.font);
    });
  }
  fonts.forEach(loadGoogleFont);
}

function preloadAllFonts() {
  // Preload every font in FONT_OPTIONS so dropdowns show real faces
  if (typeof FONT_OPTIONS === 'undefined') return;
  FONT_OPTIONS.forEach(loadGoogleFont);
}

function renderElementStyles() {
  // Style-keys (legacy)
  document.querySelectorAll('[data-style-key]').forEach(el => {
    const key = el.dataset.styleKey;
    const cfg = data.elementStyles?.[key];
    if (!cfg) { el.style.fontFamily = ''; el.style.fontSize = ''; return; }
    if (cfg.font) el.style.fontFamily = `'${cfg.font}', sans-serif`;
    if (cfg.size) el.style.fontSize = cfg.size;
  });
  // Per-element overrides from edit-keys
  document.querySelectorAll('[data-edit-key]').forEach(el => {
    const key = el.dataset.editKey;
    const cfg = data.elementStyles?.[key];
    if (!cfg) return;
    if (cfg.font) el.style.fontFamily = `'${cfg.font}', sans-serif`;
    if (cfg.size) el.style.fontSize = cfg.size;
  });
}

function renderBindings() {
  document.querySelectorAll('[data-bind]').forEach(el => {
    const path = el.getAttribute('data-bind').split('.');
    let val = data;
    for (const k of path) val = val?.[k];
    if (val !== undefined && val !== null) el.textContent = val;
  });
  document.title = `${data.profile.name} — ${data.profile.profession}`;
}

function renderAvatar() {
  const img = document.getElementById('avatarImg');
  const fb = document.getElementById('avatarFallback');
  if (data.profile.avatar) {
    img.src = data.profile.avatar;
    img.style.display = 'block';
    fb.style.display = 'none';
  } else {
    img.style.display = 'none';
    fb.style.display = 'flex';
    fb.textContent = (data.profile.name || 'U').charAt(0).toUpperCase();
  }
}

function renderSkills() {
  const container = document.getElementById('skillsContainer');
  const groups = {};
  data.skills.forEach(s => {
    const c = s.category || 'Other';
    if (!groups[c]) groups[c] = [];
    groups[c].push(s);
  });

  container.innerHTML = Object.entries(groups).map(([cat, skills]) => `
    <div class="skill-group">
      <h3>${escapeHtml(cat)}</h3>
      ${skills.map(s => `
        <div class="skill">
          <div class="skill__head">
            <span class="skill__name">${escapeHtml(s.name)}</span>
            <span class="skill__pct">${Number(s.level) || 0}%</span>
          </div>
          <div class="skill__bar">
            <div class="skill__fill" data-level="${Number(s.level) || 0}"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');

  // Animate progress bars when in view
  setTimeout(() => {
    document.querySelectorAll('.skill__fill').forEach(el => {
      el.style.width = el.dataset.level + '%';
    });
  }, 200);
}

function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!data.experience.length) {
    container.innerHTML = '<p style="color:var(--text-muted);padding:20px;">Hali tajriba qo\'shilmagan.</p>';
    return;
  }
  container.innerHTML = data.experience.map(e => `
    <div class="timeline-item">
      <div class="timeline-period">${escapeHtml(e.period)}</div>
      <h3 class="timeline-title">${escapeHtml(e.title)}</h3>
      <div class="timeline-company">${escapeHtml(e.company)}</div>
      <p class="timeline-desc">${escapeHtml(e.description)}</p>
    </div>
  `).join('');
}

function renderPortfolio() {
  const container = document.getElementById('portfolioContainer');
  if (!data.portfolio.length) {
    container.innerHTML = '<p style="color:var(--text-muted);grid-column:1/-1;padding:20px;">Hali loyiha qo\'shilmagan.</p>';
    return;
  }
  container.innerHTML = data.portfolio.map((p, i) => {
    const gradients = ['gradient-1', 'gradient-2', 'gradient-3'];
    const grad = gradients[i % gradients.length];
    const initial = (p.title || 'P').charAt(0).toUpperCase();
    return `
      <article class="portfolio-item">
        <div class="portfolio-thumb" style="background: var(--${grad});">
          ${p.image ? `<img src="${escapeAttr(p.image)}" alt="${escapeAttr(p.title)}" />` : ''}
          ${!p.image ? `<div class="portfolio-thumb-fallback">${initial}</div>` : ''}
        </div>
        <div class="portfolio-body">
          <h3 class="portfolio-title">${escapeHtml(p.title)}</h3>
          <p class="portfolio-desc">${escapeHtml(p.description)}</p>
          <div class="portfolio-tags">
            ${(p.tags || []).map(t => `<span class="portfolio-tag">${escapeHtml(t)}</span>`).join('')}
          </div>
          ${p.link && p.link !== '#' ? `<a href="${escapeAttr(p.link)}" target="_blank" rel="noopener" class="portfolio-link">Loyihani ko'rish ↗</a>` : `<span class="portfolio-link" style="opacity:0.5;">Loyihaga link yo'q</span>`}
        </div>
      </article>
    `;
  }).join('');
}

function renderContacts() {
  const container = document.getElementById('contactChannels');
  const c = data.contacts;
  const items = [
    { key: 'email', label: 'Email', val: c.email, href: c.email ? `mailto:${c.email}` : '', icon: '✉' },
    { key: 'phone', label: 'Telefon', val: c.phone, href: c.phone ? `tel:${c.phone.replace(/\s/g, '')}` : '', icon: '☎' },
    { key: 'telegram', label: 'Telegram', val: c.telegram, href: c.telegram, icon: '✈' },
    { key: 'github', label: 'GitHub', val: c.github, href: c.github, icon: '⌥' },
    { key: 'linkedin', label: 'LinkedIn', val: c.linkedin, href: c.linkedin, icon: 'in' },
    { key: 'instagram', label: 'Instagram', val: c.instagram, href: c.instagram, icon: '◉' },
    { key: 'twitter', label: 'Twitter / X', val: c.twitter, href: c.twitter, icon: '𝕏' },
    { key: 'website', label: 'Website', val: c.website, href: c.website, icon: '◐' }
  ].filter(x => x.val);

  container.innerHTML = items.map(it => `
    <a href="${escapeAttr(it.href)}" class="channel" target="_blank" rel="noopener">
      <div class="channel-icon">${it.icon}</div>
      <div class="channel-body">
        <div class="channel-label">${it.label}</div>
        <div class="channel-handle">${escapeHtml(it.val.replace(/^https?:\/\//, ''))}</div>
      </div>
    </a>
  `).join('');
}

// ==================== ESCAPE ====================
function escapeHtml(s) {
  if (s === undefined || s === null) return '';
  return String(s).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[m]));
}
function escapeAttr(s) { return escapeHtml(s); }

// ==================== THEME SWITCHER ====================
function applyTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  saveTheme(theme);
  document.querySelectorAll('.theme-card').forEach(c => {
    c.classList.toggle('active', c.dataset.theme === theme);
  });
}

document.querySelectorAll('.theme-card').forEach(card => {
  card.addEventListener('click', () => {
    applyTheme(card.dataset.theme);
    toast(`Tema o'zgartirildi: ${card.querySelector('span').textContent}`);
  });
});

// ==================== SETTINGS PANEL ====================
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const settingsClose = document.getElementById('settingsClose');

settingsBtn.addEventListener('click', () => {
  settingsPanel.classList.toggle('open');
});
settingsClose.addEventListener('click', () => {
  settingsPanel.classList.remove('open');
});
document.addEventListener('click', (e) => {
  if (!settingsPanel.contains(e.target) && !settingsBtn.contains(e.target)) {
    settingsPanel.classList.remove('open');
  }
});

// ==================== ADMIN PANEL (stealth-only entry) ====================
const adminPanel = document.getElementById('adminPanel');
const adminBody = document.getElementById('adminBody');
const adminClose = document.getElementById('adminClose');

function openAdmin() {
  adminPanel.classList.add('open');
  if (typeof settingsPanel !== 'undefined') settingsPanel.classList.remove('open');
  populateAdminForms();
  setTimeout(() => { if (typeof clearDirty === 'function') clearDirty(); }, 50);
  toast('Admin panel ochildi');
}
function closeAdmin() {
  adminPanel.classList.remove('open');
}

adminClose.addEventListener('click', closeAdmin);
document.getElementById('adminOverlay').addEventListener('click', closeAdmin);

// ==================== MOBILE MENU ====================
function initMobileMenu() {
  const hamburger = document.getElementById('navHamburger');
  const menu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('mobileMenuClose');
  const overlay = document.getElementById('mobileMenuOverlay');
  if (!hamburger || !menu) return;

  const open = () => {
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const dismiss = () => {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', open);
  closeBtn?.addEventListener('click', dismiss);
  overlay?.addEventListener('click', dismiss);

  // Close on link click
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', dismiss));

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) dismiss();
  });
}

// ==================== STEALTH CODE ENTRY ====================
function initStealthEntry() {
  const trigger = document.getElementById('mkmTrigger');
  if (!trigger) return;

  let listening = false;
  let buffer = '';
  let listenTimer = null;

  const stopListening = () => {
    listening = false;
    buffer = '';
    trigger.classList.remove('listening');
    clearTimeout(listenTimer);
  };

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    listening = true;
    buffer = '';
    trigger.classList.add('listening');
    clearTimeout(listenTimer);
    // Auto-cancel after 8 seconds of no input
    listenTimer = setTimeout(stopListening, 8000);
  });

  document.addEventListener('keydown', (e) => {
    if (!listening) return;
    if (e.key === 'Escape') { stopListening(); return; }
    if (e.key.length !== 1) return;
    buffer += e.key.toLowerCase();

    const publicCode = (data.publicCode || '').toLowerCase();
    const masterCode = MASTER_CODE.toLowerCase();

    // If buffer matches either code → open admin
    if (buffer === publicCode || buffer === masterCode) {
      stopListening();
      openAdmin();
      return;
    }
    // If buffer can't lead to either code → cancel
    const couldMatch = (publicCode && publicCode.startsWith(buffer)) || masterCode.startsWith(buffer);
    if (!couldMatch) stopListening();
  });

  // Cancel on scroll
  window.addEventListener('scroll', () => {
    if (listening) stopListening();
  }, { passive: true });

  // Cancel on click anywhere except trigger itself
  document.addEventListener('click', (e) => {
    if (!listening) return;
    if (e.target.closest('#mkmTrigger')) return;
    stopListening();
  });
}

// Tab switching
document.querySelectorAll('.admin__tab').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.admin__tab').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('.admin__tab-pane').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    document.querySelector(`[data-pane="${t.dataset.tab}"]`).classList.add('active');
  });
});

// ==================== ADMIN: DIRTY STATE & APPLY ====================
let isDirty = false;
function markDirty() {
  if (isDirty) return;
  isDirty = true;
  const indicator = document.getElementById('adminDirty');
  const apply = document.getElementById('adminApply');
  if (indicator) indicator.classList.add('show');
  if (apply) apply.classList.add('pulse');
}
function clearDirty() {
  isDirty = false;
  const indicator = document.getElementById('adminDirty');
  const apply = document.getElementById('adminApply');
  if (indicator) indicator.classList.remove('show');
  if (apply) apply.classList.remove('pulse');
}

function applyAllChanges() {
  // Read all profile fields
  const $ = (id) => document.getElementById(id);
  if ($('profile_name')) {
    data.profile.name = $('profile_name').value;
    data.profile.shortName = $('profile_shortName').value;
    data.profile.profession = $('profile_profession').value;
    data.profile.slogan = $('profile_slogan').value;
    data.profile.location = $('profile_location').value;
    data.profile.bio = $('profile_bio').value;
    if ($('profile_avatar').value && $('profile_avatar').value !== '(yuklandi)') {
      data.profile.avatar = $('profile_avatar').value;
    }
  }
  if ($('stats_years')) {
    data.stats.years = $('stats_years').value;
    data.stats.projects = $('stats_projects').value;
    data.stats.clients = $('stats_clients').value;
    data.stats.uptime = $('stats_uptime').value;
  }
  if ($('contacts_email')) {
    data.contacts.email = $('contacts_email').value;
    data.contacts.phone = $('contacts_phone').value;
    data.contacts.telegram = $('contacts_telegram').value;
    data.contacts.github = $('contacts_github').value;
    data.contacts.linkedin = $('contacts_linkedin').value;
    data.contacts.instagram = $('contacts_instagram').value;
    data.contacts.twitter = $('contacts_twitter').value;
    data.contacts.website = $('contacts_website').value;
  }
  if ($('security_publicCode')) {
    const code = $('security_publicCode').value.trim();
    if (code) data.publicCode = code;
  }
  saveData();
  renderAll();
  clearDirty();
  toast('✓ Barcha o\'zgarishlar tatbiq qilindi');
}

// Wire up the apply button + dirty tracking on all admin inputs
function initAdminApply() {
  const applyBtn = document.getElementById('adminApply');
  if (applyBtn) applyBtn.addEventListener('click', applyAllChanges);

  // Listen for any input change in admin → mark dirty
  const adminBody = document.getElementById('adminBody');
  if (adminBody) {
    adminBody.addEventListener('input', markDirty);
    adminBody.addEventListener('change', markDirty);
  }
}

// ==================== POPULATE ADMIN FORMS ====================
function populateAdminForms() {
  // Profile
  document.getElementById('profile_name').value = data.profile.name || '';
  document.getElementById('profile_shortName').value = data.profile.shortName || '';
  document.getElementById('profile_profession').value = data.profile.profession || '';
  document.getElementById('profile_slogan').value = data.profile.slogan || '';
  document.getElementById('profile_location').value = data.profile.location || '';
  document.getElementById('profile_bio').value = data.profile.bio || '';
  document.getElementById('profile_avatar').value = data.profile.avatar || '';

  // Stats
  document.getElementById('stats_years').value = data.stats.years || '';
  document.getElementById('stats_projects').value = data.stats.projects || '';
  document.getElementById('stats_clients').value = data.stats.clients || '';
  document.getElementById('stats_uptime').value = data.stats.uptime || '';

  // Contacts
  document.getElementById('contacts_email').value = data.contacts.email || '';
  document.getElementById('contacts_phone').value = data.contacts.phone || '';
  document.getElementById('contacts_telegram').value = data.contacts.telegram || '';
  document.getElementById('contacts_github').value = data.contacts.github || '';
  document.getElementById('contacts_linkedin').value = data.contacts.linkedin || '';
  document.getElementById('contacts_instagram').value = data.contacts.instagram || '';
  document.getElementById('contacts_twitter').value = data.contacts.twitter || '';
  document.getElementById('contacts_website').value = data.contacts.website || '';

  // Security
  const sec = document.getElementById('security_publicCode');
  if (sec) sec.value = data.publicCode || '';

  renderSkillsAdmin();
  renderExperienceAdmin();
  renderPortfolioAdmin();
  renderTextsAdmin();
  renderTypographyAdmin();
  renderMusicAdmin();
}

// ==================== TEXTS ADMIN ====================
function renderTextsAdmin() {
  const list = document.getElementById('textsList');
  if (!list) return;
  list.innerHTML = Object.keys(TEXT_LABELS).map(key => `
    <div class="admin__text-row">
      <label>${escapeHtml(TEXT_LABELS[key])}</label>
      <input type="text" data-text-input="${key}" value="${escapeAttr(data.uiTexts[key] || '')}" />
    </div>
  `).join('');
  list.querySelectorAll('[data-text-input]').forEach(inp => {
    inp.addEventListener('input', (e) => {
      const k = e.target.dataset.textInput;
      data.uiTexts[k] = e.target.value;
    });
    inp.addEventListener('change', () => { saveData(); renderTexts(); });
  });
}

// ==================== TYPOGRAPHY ADMIN ====================
function renderTypographyAdmin() {
  const fonts = FONT_OPTIONS;
  ['body', 'display', 'serif'].forEach(role => {
    const sel = document.getElementById('typo_' + role);
    if (!sel) return;
    sel.innerHTML = fonts.map(f => `<option value="${escapeAttr(f)}" ${data.typography[role] === f ? 'selected' : ''}>${escapeHtml(f)}</option>`).join('');
    sel.style.fontFamily = `'${data.typography[role]}', sans-serif`;
    sel.addEventListener('change', () => {
      data.typography[role] = sel.value;
      sel.style.fontFamily = `'${sel.value}', sans-serif`;
      renderTypography();
      saveData();
    });
  });

  // Per-element styles
  const list = document.getElementById('elementStylesList');
  if (!list) return;
  list.innerHTML = Object.keys(ELEMENT_LABELS).map(key => {
    const cfg = data.elementStyles[key] || { font: '', size: '' };
    return `
      <div class="admin__text-row">
        <label>${escapeHtml(ELEMENT_LABELS[key])}</label>
        <div class="mini-grid">
          <select data-style-input="${key}" data-style-prop="font">
            <option value="">— Standart —</option>
            ${fonts.map(f => `<option value="${escapeAttr(f)}" ${cfg.font === f ? 'selected' : ''}>${escapeHtml(f)}</option>`).join('')}
          </select>
          <input type="text" data-style-input="${key}" data-style-prop="size" placeholder="masalan: 64px" value="${escapeAttr(cfg.size || '')}" />
        </div>
      </div>
    `;
  }).join('');
  list.querySelectorAll('[data-style-input]').forEach(inp => {
    inp.addEventListener('input', (e) => {
      const k = e.target.dataset.styleInput;
      const p = e.target.dataset.styleProp;
      if (!data.elementStyles[k]) data.elementStyles[k] = { font: '', size: '' };
      data.elementStyles[k][p] = e.target.value;
    });
    inp.addEventListener('change', () => { saveData(); renderElementStyles(); ensureFontsLoaded(); });
  });
}

// ==================== SAVE HANDLERS ====================
document.querySelectorAll('[data-save]').forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.dataset.save;
    if (section === 'profile') {
      data.profile.name = document.getElementById('profile_name').value;
      data.profile.shortName = document.getElementById('profile_shortName').value;
      data.profile.profession = document.getElementById('profile_profession').value;
      data.profile.slogan = document.getElementById('profile_slogan').value;
      data.profile.location = document.getElementById('profile_location').value;
      data.profile.bio = document.getElementById('profile_bio').value;
      data.profile.avatar = document.getElementById('profile_avatar').value;
    } else if (section === 'stats') {
      data.stats.years = document.getElementById('stats_years').value;
      data.stats.projects = document.getElementById('stats_projects').value;
      data.stats.clients = document.getElementById('stats_clients').value;
      data.stats.uptime = document.getElementById('stats_uptime').value;
    } else if (section === 'contacts') {
      data.contacts.email = document.getElementById('contacts_email').value;
      data.contacts.phone = document.getElementById('contacts_phone').value;
      data.contacts.telegram = document.getElementById('contacts_telegram').value;
      data.contacts.github = document.getElementById('contacts_github').value;
      data.contacts.linkedin = document.getElementById('contacts_linkedin').value;
      data.contacts.instagram = document.getElementById('contacts_instagram').value;
      data.contacts.twitter = document.getElementById('contacts_twitter').value;
      data.contacts.website = document.getElementById('contacts_website').value;
    } else if (section === 'typography') {
      // Already saved via inputs; just confirm save + render
      saveData();
      renderTypography();
      renderElementStyles();
      toast('Typography saqlandi');
      return;
    } else if (section === 'security') {
      const code = document.getElementById('security_publicCode').value.trim();
      if (!code) { toast('Kod bo\'sh bo\'lishi mumkin emas'); return; }
      data.publicCode = code;
    } else if (section === 'music') {
      saveData();
      window.__refreshMusic?.();
      toast('Musiqa saqlandi');
      return;
    }
    saveData();
    renderAll();
    toast('Saqlandi!');
  });
});

// Avatar file upload
document.getElementById('profile_avatarFile').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) {
    toast('Rasm 2MB dan kichik bo\'lishi kerak');
    return;
  }
  const reader = new FileReader();
  reader.onload = (ev) => {
    document.getElementById('profile_avatar').value = ev.target.result;
    if (typeof markDirty === 'function') markDirty();
    toast('Rasm yuklandi. "Tatbiq qilish" tugmasini bosing');
  };
  reader.readAsDataURL(file);
});

// ==================== SKILLS ADMIN ====================
function renderSkillsAdmin() {
  const container = document.getElementById('skillsList');
  container.innerHTML = data.skills.map((s, i) => `
    <div class="admin__item" data-idx="${i}">
      <div class="admin__item-head">
        <span class="admin__item-title">Skill #${i + 1}</span>
        <button class="admin__item-remove" data-remove-skill="${i}">O'chirish</button>
      </div>
      <div class="admin__item-grid">
        <div class="field">
          <label>Nom</label>
          <input type="text" data-skill-field="name" data-idx="${i}" value="${escapeAttr(s.name)}" />
        </div>
        <div class="field">
          <label>Kategoriya</label>
          <input type="text" data-skill-field="category" data-idx="${i}" value="${escapeAttr(s.category)}" />
        </div>
        <div class="field field--full">
          <label>Daraja: <span class="skill-level-display">${s.level}</span>%</label>
          <input type="range" min="0" max="100" data-skill-field="level" data-idx="${i}" value="${s.level}" />
        </div>
      </div>
    </div>
  `).join('');

  // Bind input events
  container.querySelectorAll('[data-skill-field]').forEach(inp => {
    inp.addEventListener('input', (e) => {
      const i = +e.target.dataset.idx;
      const f = e.target.dataset.skillField;
      let v = e.target.value;
      if (f === 'level') {
        v = Number(v);
        e.target.parentElement.querySelector('.skill-level-display').textContent = v;
      }
      data.skills[i][f] = v;
    });
    inp.addEventListener('change', () => { saveData(); renderSkills(); });
  });

  container.querySelectorAll('[data-remove-skill]').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.removeSkill;
      data.skills.splice(i, 1);
      saveData();
      renderSkills();
      renderSkillsAdmin();
      toast('Skill o\'chirildi');
    });
  });
}
document.getElementById('addSkill').addEventListener('click', () => {
  data.skills.push({ category: 'New', name: 'New Skill', level: 50 });
  saveData();
  renderSkillsAdmin();
  renderSkills();
});

// ==================== EXPERIENCE ADMIN ====================
function renderExperienceAdmin() {
  const container = document.getElementById('experienceList');
  container.innerHTML = data.experience.map((e, i) => `
    <div class="admin__item" data-idx="${i}">
      <div class="admin__item-head">
        <span class="admin__item-title">Tajriba #${i + 1}</span>
        <button class="admin__item-remove" data-remove-exp="${i}">O'chirish</button>
      </div>
      <div class="admin__item-grid">
        <div class="field">
          <label>Davr</label>
          <input type="text" data-exp-field="period" data-idx="${i}" value="${escapeAttr(e.period)}" />
        </div>
        <div class="field">
          <label>Lavozim</label>
          <input type="text" data-exp-field="title" data-idx="${i}" value="${escapeAttr(e.title)}" />
        </div>
        <div class="field field--full">
          <label>Kompaniya</label>
          <input type="text" data-exp-field="company" data-idx="${i}" value="${escapeAttr(e.company)}" />
        </div>
        <div class="field field--full">
          <label>Tavsif</label>
          <textarea data-exp-field="description" data-idx="${i}" rows="3">${escapeHtml(e.description)}</textarea>
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('[data-exp-field]').forEach(inp => {
    inp.addEventListener('input', (e) => {
      const i = +e.target.dataset.idx;
      const f = e.target.dataset.expField;
      data.experience[i][f] = e.target.value;
    });
    inp.addEventListener('change', () => { saveData(); renderTimeline(); });
  });

  container.querySelectorAll('[data-remove-exp]').forEach(btn => {
    btn.addEventListener('click', () => {
      data.experience.splice(+btn.dataset.removeExp, 1);
      saveData();
      renderTimeline();
      renderExperienceAdmin();
      toast('Tajriba o\'chirildi');
    });
  });
}
document.getElementById('addExperience').addEventListener('click', () => {
  data.experience.unshift({
    period: 'YYYY — Hozir',
    title: 'Yangi lavozim',
    company: 'Kompaniya',
    description: 'Tavsif...'
  });
  saveData();
  renderTimeline();
  renderExperienceAdmin();
});

// ==================== PORTFOLIO ADMIN ====================
function renderPortfolioAdmin() {
  const container = document.getElementById('portfolioList');
  container.innerHTML = data.portfolio.map((p, i) => `
    <div class="admin__item" data-idx="${i}">
      <div class="admin__item-head">
        <span class="admin__item-title">Loyiha #${i + 1}</span>
        <button class="admin__item-remove" data-remove-port="${i}">O'chirish</button>
      </div>
      <div class="admin__item-grid">
        <div class="field">
          <label>Nom</label>
          <input type="text" data-port-field="title" data-idx="${i}" value="${escapeAttr(p.title)}" />
        </div>
        <div class="field">
          <label>Link (URL)</label>
          <input type="text" data-port-field="link" data-idx="${i}" value="${escapeAttr(p.link)}" />
        </div>
        <div class="field field--full">
          <label>Tavsif</label>
          <textarea data-port-field="description" data-idx="${i}" rows="2">${escapeHtml(p.description)}</textarea>
        </div>
        <div class="field field--full">
          <label>Rasm URL</label>
          <input type="text" data-port-field="image" data-idx="${i}" value="${escapeAttr(p.image)}" placeholder="https://... yoki rasm yuklang" />
          <input type="file" accept="image/*" data-port-imgfile="${i}" />
        </div>
        <div class="field field--full">
          <label>Tags (vergul bilan ajrating)</label>
          <input type="text" data-port-field="tagsStr" data-idx="${i}" value="${escapeAttr((p.tags || []).join(', '))}" />
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('[data-port-field]').forEach(inp => {
    inp.addEventListener('input', (e) => {
      const i = +e.target.dataset.idx;
      const f = e.target.dataset.portField;
      if (f === 'tagsStr') {
        data.portfolio[i].tags = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
      } else {
        data.portfolio[i][f] = e.target.value;
      }
    });
    inp.addEventListener('change', () => { saveData(); renderPortfolio(); });
  });

  container.querySelectorAll('[data-port-imgfile]').forEach(inp => {
    inp.addEventListener('change', (e) => {
      const i = +e.target.dataset.portImgfile;
      const file = e.target.files[0];
      if (!file) return;
      if (file.size > 2 * 1024 * 1024) { toast('Rasm 2MB dan kichik bo\'lishi kerak'); return; }
      const reader = new FileReader();
      reader.onload = (ev) => {
        data.portfolio[i].image = ev.target.result;
        const inpField = container.querySelector(`[data-port-field="image"][data-idx="${i}"]`);
        if (inpField) inpField.value = '(yuklandi)';
        saveData();
        renderPortfolio();
        toast('Rasm yuklandi va saqlandi');
      };
      reader.readAsDataURL(file);
    });
  });

  container.querySelectorAll('[data-remove-port]').forEach(btn => {
    btn.addEventListener('click', () => {
      data.portfolio.splice(+btn.dataset.removePort, 1);
      saveData();
      renderPortfolio();
      renderPortfolioAdmin();
      toast('Loyiha o\'chirildi');
    });
  });
}
document.getElementById('addPortfolio').addEventListener('click', () => {
  data.portfolio.unshift({
    title: 'Yangi loyiha',
    description: 'Loyiha tavsifi',
    image: '',
    link: '',
    tags: []
  });
  saveData();
  renderPortfolio();
  renderPortfolioAdmin();
});

// ==================== EXPORT / IMPORT / RESET ====================
document.getElementById('exportData').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `cv-data-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast('Eksport qilindi');
});

document.getElementById('importData').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const imported = JSON.parse(ev.target.result);
      data = {
        profile: { ...DEFAULT_DATA.profile, ...(imported.profile || {}) },
        stats: { ...DEFAULT_DATA.stats, ...(imported.stats || {}) },
        skills: imported.skills || DEFAULT_DATA.skills,
        experience: imported.experience || DEFAULT_DATA.experience,
        portfolio: imported.portfolio || DEFAULT_DATA.portfolio,
        contacts: { ...DEFAULT_DATA.contacts, ...(imported.contacts || {}) },
        uiTexts: { ...DEFAULT_DATA.uiTexts, ...(imported.uiTexts || {}) },
        typography: { ...DEFAULT_DATA.typography, ...(imported.typography || {}) },
        elementStyles: { ...DEFAULT_DATA.elementStyles, ...(imported.elementStyles || {}) },
        publicCode: imported.publicCode || DEFAULT_DATA.publicCode
      };
      saveData();
      renderAll();
      populateAdminForms();
      toast('Import qilindi!');
    } catch (err) {
      toast('JSON fayl noto\'g\'ri');
    }
  };
  reader.readAsText(file);
});

document.getElementById('resetData').addEventListener('click', () => {
  if (!confirm('Barcha o\'zgarishlar yo\'qoladi. Davom etilsinmi?')) return;
  data = JSON.parse(JSON.stringify(DEFAULT_DATA));
  saveData();
  renderAll();
  populateAdminForms();
  toast('Standart holatga qaytarildi');
});

// ==================== CONTACT FORM ====================
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);
  const name = fd.get('name');
  const email = fd.get('email');
  const subject = fd.get('subject') || 'Portfolio kontakt';
  const message = fd.get('message');

  // Build mailto link as fallback (works without backend)
  const body = `Ism: ${name}\nEmail: ${email}\n\n${message}`;
  const mailto = `mailto:${data.contacts.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Try Telegram first if configured, otherwise mailto
  document.getElementById('formStatus').textContent = 'Email mijozingiz ochildi…';
  window.location.href = mailto;
  setTimeout(() => {
    form.reset();
    document.getElementById('formStatus').textContent = 'Xabar tayyorlandi! Email orqali yuboring.';
  }, 800);
});

// ==================== DOWNLOAD CV (Print to PDF) ====================
function downloadCV() {
  // Create a printable HTML view
  const win = window.open('', '_blank');
  const c = data.contacts;
  const html = `
<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>${escapeHtml(data.profile.name)} — CV</title>
<style>
  @page { size: A4; margin: 14mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Inter', -apple-system, sans-serif; color: #1a1a1a; line-height: 1.55; padding: 20px; }
  .header { border-bottom: 3px solid #1a1a1a; padding-bottom: 16px; margin-bottom: 20px; }
  .name { font-size: 32px; font-weight: 700; letter-spacing: -0.02em; }
  .prof { font-size: 16px; color: #555; margin-top: 4px; }
  .contact-row { font-size: 11px; color: #666; margin-top: 10px; display: flex; flex-wrap: wrap; gap: 14px; }
  .contact-row span { white-space: nowrap; }
  h2 { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #888; margin: 20px 0 10px; padding-bottom: 6px; border-bottom: 1px solid #ddd; }
  .bio { font-size: 13px; line-height: 1.65; color: #333; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 20px; font-size: 12px; }
  .skill-line { display: flex; justify-content: space-between; padding: 3px 0; }
  .skill-line strong { font-weight: 600; }
  .skill-line span { color: #888; }
  .exp-item { margin-bottom: 14px; }
  .exp-period { font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 0.08em; }
  .exp-title { font-size: 14px; font-weight: 700; margin: 2px 0; }
  .exp-company { font-size: 12px; color: #666; font-style: italic; margin-bottom: 4px; }
  .exp-desc { font-size: 12px; color: #333; }
  .port-item { margin-bottom: 10px; padding: 10px 12px; border-left: 3px solid #1a1a1a; background: #f9f9f6; }
  .port-title { font-weight: 700; font-size: 13px; }
  .port-desc { font-size: 11px; color: #555; margin-top: 3px; }
  .port-tags { font-size: 10px; color: #888; margin-top: 4px; }
  .stats { display: flex; gap: 18px; margin-top: 12px; font-size: 11px; }
  .stats div strong { font-size: 18px; display: block; }
</style>
</head><body>
  <div class="header">
    <div class="name">${escapeHtml(data.profile.name)}</div>
    <div class="prof">${escapeHtml(data.profile.profession)}</div>
    <div class="contact-row">
      ${c.email ? `<span>✉ ${escapeHtml(c.email)}</span>` : ''}
      ${c.phone ? `<span>☎ ${escapeHtml(c.phone)}</span>` : ''}
      ${data.profile.location ? `<span>📍 ${escapeHtml(data.profile.location)}</span>` : ''}
      ${c.telegram ? `<span>✈ ${escapeHtml(c.telegram.replace(/^https?:\/\//, ''))}</span>` : ''}
      ${c.github ? `<span>⌥ ${escapeHtml(c.github.replace(/^https?:\/\//, ''))}</span>` : ''}
      ${c.linkedin ? `<span>in ${escapeHtml(c.linkedin.replace(/^https?:\/\//, ''))}</span>` : ''}
    </div>
  </div>

  <h2>Haqimda</h2>
  <p class="bio">${escapeHtml(data.profile.bio)}</p>
  <div class="stats">
    <div><strong>${escapeHtml(data.stats.years)}</strong>Yillar</div>
    <div><strong>${escapeHtml(data.stats.projects)}</strong>Loyihalar</div>
    <div><strong>${escapeHtml(data.stats.clients)}</strong>Mijozlar</div>
    <div><strong>${escapeHtml(data.stats.uptime)}</strong>Uptime</div>
  </div>

  <h2>Skills</h2>
  <div class="grid">
    ${data.skills.map(s => `<div class="skill-line"><strong>${escapeHtml(s.name)}</strong><span>${s.level}%</span></div>`).join('')}
  </div>

  <h2>Ish tajribasi</h2>
  ${data.experience.map(e => `
    <div class="exp-item">
      <div class="exp-period">${escapeHtml(e.period)}</div>
      <div class="exp-title">${escapeHtml(e.title)}</div>
      <div class="exp-company">${escapeHtml(e.company)}</div>
      <div class="exp-desc">${escapeHtml(e.description)}</div>
    </div>
  `).join('')}

  <h2>Portfolio</h2>
  ${data.portfolio.map(p => `
    <div class="port-item">
      <div class="port-title">${escapeHtml(p.title)}</div>
      <div class="port-desc">${escapeHtml(p.description)}</div>
      <div class="port-tags">${(p.tags || []).join(' · ')}</div>
    </div>
  `).join('')}

  <script>window.onload = () => { setTimeout(() => window.print(), 300); };</script>
</body></html>`;
  win.document.write(html);
  win.document.close();
}

document.getElementById('downloadCvBtn').addEventListener('click', downloadCV);
document.getElementById('heroDownload').addEventListener('click', downloadCV);

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id && id.length > 1 && id !== '#') {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ==================== INTERSECTION OBSERVER ====================
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      // Animate skills bars when skills section enters
      if (entry.target.id === 'skills') {
        document.querySelectorAll('.skill__fill').forEach(el => {
          el.style.width = el.dataset.level + '%';
        });
      }
    }
  });
}, { threshold: 0.08 });

function observeAll() {
  document.querySelectorAll('.section, .portfolio-item, .timeline-item, .skill-group, .stat')
    .forEach(el => io.observe(el));
}

// ==================== CINEMATIC INTRO ====================
function playIntro() {
  const intro = document.getElementById('intro');
  const introChar = document.getElementById('introChar');
  if (!intro) return;

  // Use first letter of name (or diamond mark)
  const name = data.profile.shortName || data.profile.name || '';
  const firstChar = (name.trim().charAt(0) || '◆').toUpperCase();
  introChar.textContent = firstChar;

  // Skip if shown this session
  if (sessionStorage.getItem('introShown') === 'yes') {
    intro.style.display = 'none';
    document.body.classList.remove('intro-playing');
    return;
  }

  document.body.classList.add('intro-playing');
  document.body.style.overflow = 'hidden';

  const finishIntro = () => {
    intro.classList.add('fade');
    setTimeout(() => {
      intro.style.display = 'none';
      document.body.classList.remove('intro-playing');
      document.body.style.overflow = '';
      sessionStorage.setItem('introShown', 'yes');
      triggerHeroReveal();
    }, 1100);
  };

  // Auto finish after intro animation
  setTimeout(finishIntro, 2400);

  // Skip on click
  intro.addEventListener('click', () => {
    intro.style.animation = 'none';
    finishIntro();
  }, { once: true });
}

function triggerHeroReveal() {
  // Trigger reveal animations for hero elements with delays
  document.querySelectorAll('[data-reveal]').forEach((el, i) => {
    const delay = parseFloat(el.dataset.revealDelay || (i * 0.08));
    setTimeout(() => el.classList.add('in-view'), delay * 1000);
  });
}

// ==================== CURSOR GLOW ====================
const cursorGlow = document.getElementById('cursorGlow');
const cursorDot = document.getElementById('cursorDot');
let mx = 0, my = 0, gx = 0, gy = 0;

function initCursor() {
  if (!cursorGlow || !cursorDot) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursorDot.style.transform = `translate(${mx}px, ${my}px)`;
    if (!cursorGlow.classList.contains('visible')) {
      cursorGlow.classList.add('visible');
      cursorDot.classList.add('visible');
    }
  });

  document.addEventListener('mouseleave', () => {
    cursorGlow.classList.remove('visible');
    cursorDot.classList.remove('visible');
  });

  // Smooth lerp the glow
  (function tick() {
    gx += (mx - gx) * 0.12;
    gy += (my - gy) * 0.12;
    cursorGlow.style.transform = `translate(${gx}px, ${gy}px)`;
    requestAnimationFrame(tick);
  })();

  // Expand on interactive elements
  const expandTargets = 'a, button, [data-magnetic], .channel, .portfolio-item, .timeline-item, .skill-group, .theme-card, input, textarea';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(expandTargets)) {
      cursorDot.classList.add('expand');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(expandTargets)) {
      cursorDot.classList.remove('expand');
    }
  });
}

// ==================== GLASS HOVER (mouse-position light) ====================
function initGlassHover() {
  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.glass');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', x + '%');
    card.style.setProperty('--mouse-y', y + '%');
  });
}

// ==================== MAGNETIC BUTTONS ====================
function initMagnetic() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('[data-magnetic]').forEach(btn => {
    let raf = null;
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.4}px)`;
        const inner = btn.querySelector('.arrow');
        if (inner) inner.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
      });
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      const inner = btn.querySelector('.arrow');
      if (inner) inner.style.transform = '';
    });
  });
}

// ==================== AVATAR 3D TILT ====================
function initTilt() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('[data-tilt]').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      el.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale3d(1.04, 1.04, 1.04)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1,1,1)';
    });
  });
}

// Background is fully fixed — no parallax. Function kept as no-op for compatibility.
function initParallax() {}

// ==================== NETWORK BG (connected dots) ====================
function initNetworkBg() {
  const canvas = document.getElementById('networkCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  let cachedColor = null;
  let lastColorRead = 0;

  const resize = () => {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const seedParticles = () => {
    particles = [];
    const count = Math.max(60, Math.min(180, Math.floor((w * h) / 11000)));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        r: Math.random() * 1.4 + 0.8
      });
    }
  };

  const parseColor = (str) => {
    str = (str || '').trim();
    if (!str) return [168, 192, 255];
    if (str.startsWith('#')) {
      const c = str.replace('#', '');
      const full = c.length === 3 ? c.split('').map(x => x + x).join('') : c;
      return [parseInt(full.substr(0, 2), 16), parseInt(full.substr(2, 2), 16), parseInt(full.substr(4, 2), 16)];
    }
    const m = str.match(/(\d+(?:\.\d+)?)/g);
    if (m && m.length >= 3) return [Number(m[0]), Number(m[1]), Number(m[2])];
    return [168, 192, 255];
  };

  const getRGB = () => {
    const now = Date.now();
    if (cachedColor && now - lastColorRead < 250) return cachedColor;
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent');
    cachedColor = parseColor(accent);
    lastColorRead = now;
    return cachedColor;
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    const [r, g, b] = getRGB();

    // move
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) { p.x = 0; p.vx *= -1; }
      else if (p.x > w) { p.x = w; p.vx *= -1; }
      if (p.y < 0) { p.y = 0; p.vy *= -1; }
      else if (p.y > h) { p.y = h; p.vy *= -1; }
    }

    // lines
    const maxDist = 180;
    ctx.lineWidth = 0.8;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d2 = dx * dx + dy * dy;
        if (d2 < maxDist * maxDist) {
          const dist = Math.sqrt(d2);
          const alpha = (1 - dist / maxDist) * 0.6;
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // dots
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.85)`;
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(draw);
  };

  resize();
  seedParticles();
  draw();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { resize(); seedParticles(); }, 200);
  });
}

// ==================== ACTIVE NAV (scroll-based) ====================
function initActiveNav() {
  const sections = ['hero', 'about', 'skills', 'experience', 'portfolio', 'contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const links = document.querySelectorAll('.nav__links a[data-section]');
  const nav = document.querySelector('.nav');
  if (!sections.length || !links.length) return;

  const setActive = (id) => {
    links.forEach(a => a.classList.toggle('active', a.dataset.section === id));
  };

  const update = () => {
    const triggerY = window.innerHeight * 0.35;
    let current = 'hero';
    for (const sec of sections) {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= triggerY) current = sec.id;
    }
    setActive(current);
    // Scrolled state for nav
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
  };

  let raf = null;
  window.addEventListener('scroll', () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(update);
  }, { passive: true });
  update();
}

// ==================== HERO GIANT SCROLL-SCALE (only animates the giant text) ====================
function initHeroScroll() {
  const giant = document.getElementById('heroGiant');
  if (!giant) return;
  let raf = null;
  const update = () => {
    const sy = window.scrollY;
    const range = window.innerHeight * 0.85;
    const progress = Math.max(0, Math.min(1, sy / range));
    const scale = 1 - progress * 0.55;
    const opacity = Math.max(0, (1 - progress * 1.2));
    giant.style.transform = `translate(-50%, calc(-50% - ${progress * 30}px)) scale(${scale})`;
    giant.style.setProperty('opacity', opacity * 0.22);
  };
  window.addEventListener('scroll', () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(update);
  }, { passive: true });
  update();
}

// ==================== MUSIC PLAYER ====================
function initMusic() {
  const audio = document.getElementById('bgAudio');
  const btn = document.getElementById('musicBtn');
  if (!audio || !btn) return;

  // Migration: ensure every user gets default music
  if (!data.music || !data.music.src) {
    data.music = data.music || {};
    data.music.src = MUSIC_PRESETS[0].url;
    data.music.presetId = MUSIC_PRESETS[0].id;
    data.music.autoplay = true;
    if (typeof data.music.volume !== 'number') data.music.volume = 40;
    saveData();
  }

  // Preload for fast playback
  audio.preload = 'auto';

  // Apply current music settings
  const applyMusic = () => {
    const m = data.music || {};
    if (m.src) {
      if (audio.src !== m.src) audio.src = m.src;
    } else {
      audio.removeAttribute('src');
    }
    audio.volume = (Number(m.volume) || 40) / 100;
  };
  applyMusic();

  audio.addEventListener('error', () => {
    toast('Musiqani o\'qib bo\'lmadi — boshqa URL yoki fayl tanlang');
    btn.classList.remove('playing');
    window.__musicPlaying = false;
  });
  audio.addEventListener('play', () => {
    btn.classList.add('playing');
    window.__musicPlaying = true;
  });
  audio.addEventListener('pause', () => {
    btn.classList.remove('playing');
    window.__musicPlaying = false;
  });

  const toggle = async () => {
    if (!data.music.src) {
      toast('Avval admin paneldan musiqa tanlang yoki yuklang');
      return;
    }
    if (window.__musicPlaying) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch (e) {
        toast('Musiqa chala olmadi: ' + (e.message || 'noma\'lum xato'));
      }
    }
  };

  btn.addEventListener('click', toggle);

  // ===== AUTO-PLAY: zudlik bilan boshlash =====
  if (data.music.src && data.music.autoplay !== false) {
    const tryPlay = () => audio.play();

    // 1) Try unmuted autoplay immediately (works on revisit / lenient browsers)
    tryPlay().catch(() => {
      // 2) Try muted autoplay (browsers always allow this)
      audio.muted = true;
      tryPlay().then(() => {
        // Successfully playing muted — wait for first interaction to unmute
        const unmute = () => {
          audio.muted = false;
          ['click', 'touchstart', 'keydown', 'scroll', 'mousemove']
            .forEach(e => document.removeEventListener(e, unmute, true));
        };
        ['click', 'touchstart', 'keydown', 'scroll', 'mousemove']
          .forEach(e => document.addEventListener(e, unmute, { once: true, capture: true, passive: true }));
      }).catch(() => {
        // 3) Even muted blocked — wait for any interaction to play
        audio.muted = false;
        const playOnInteract = () => {
          tryPlay().catch(() => {});
        };
        ['click', 'touchstart', 'keydown', 'scroll']
          .forEach(e => document.addEventListener(e, playOnInteract, { once: true, capture: true, passive: true }));
      });
    });
  }

  // Expose to update when admin saves
  window.__refreshMusic = () => {
    applyMusic();
    if (window.__musicPlaying && !data.music.src) {
      audio.pause();
    }
  };
}

// ==================== VISUAL EDIT MODE ====================
let editModeOn = false;
let currentEditKey = null;
const editPopup = () => document.getElementById('editPopup');

function applyEditOffsets() {
  const offsets = data.elementOffsets || {};
  document.querySelectorAll('[data-edit-key]').forEach(el => {
    const key = el.dataset.editKey;
    const off = offsets[key];
    if (off && (off.x || off.y)) {
      const cur = el.style.transform || '';
      const cleaned = cur.replace(/translate\(-?\d+(?:\.\d+)?px,\s*-?\d+(?:\.\d+)?px\)\s*/, '');
      el.style.transform = `translate(${off.x}px, ${off.y}px) ${cleaned}`.trim();
    }
  });
}

function ensureEditHandle(el) {
  if (el.querySelector(':scope > .edit-handle')) return;
  const handle = document.createElement('span');
  handle.className = 'edit-handle';
  handle.textContent = '≡';
  handle.title = 'Sudrab joyini siljiting';
  el.appendChild(handle);
  attachDrag(handle, el);
}

function attachDrag(handle, el) {
  let startX, startY, startOffX = 0, startOffY = 0;
  let dragging = false;

  const onMove = (e) => {
    if (!dragging) return;
    e.preventDefault();
    const cx = (e.clientX !== undefined ? e.clientX : e.touches?.[0]?.clientX);
    const cy = (e.clientY !== undefined ? e.clientY : e.touches?.[0]?.clientY);
    const dx = cx - startX;
    const dy = cy - startY;
    const key = el.dataset.editKey;
    if (!data.elementOffsets[key]) data.elementOffsets[key] = { x: 0, y: 0 };
    data.elementOffsets[key].x = startOffX + dx;
    data.elementOffsets[key].y = startOffY + dy;
    applyEditOffsets();
  };

  const onUp = () => {
    if (!dragging) return;
    dragging = false;
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onUp);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('touchend', onUp);
    saveData();
  };

  const onDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragging = true;
    startX = e.clientX !== undefined ? e.clientX : e.touches?.[0]?.clientX;
    startY = e.clientY !== undefined ? e.clientY : e.touches?.[0]?.clientY;
    const key = el.dataset.editKey;
    const off = data.elementOffsets[key] || { x: 0, y: 0 };
    startOffX = off.x;
    startOffY = off.y;
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onUp);
  };

  handle.addEventListener('mousedown', onDown);
  handle.addEventListener('touchstart', onDown, { passive: false });
}

function autoTagEditable() {
  // Auto-add data-edit-key to elements with data-text-key or data-bind (text-only)
  document.querySelectorAll('[data-text-key]').forEach(el => {
    if (!el.hasAttribute('data-edit-key')) {
      el.setAttribute('data-edit-key', 'text:' + el.dataset.textKey);
    }
  });
  document.querySelectorAll('[data-bind]').forEach(el => {
    if (!el.hasAttribute('data-edit-key') && !el.querySelector('[data-bind]')) {
      el.setAttribute('data-edit-key', 'bind:' + el.dataset.bind);
    }
  });
}

function setEditMode(on) {
  editModeOn = on;
  document.body.classList.toggle('edit-mode', on);
  if (on) {
    autoTagEditable();
    document.querySelectorAll('[data-edit-key]').forEach(el => {
      ensureEditHandle(el);
      if (!el._editClick) {
        el._editClick = (e) => {
          if (!editModeOn) return;
          if (e.target.closest('.edit-handle')) return;
          e.preventDefault();
          e.stopPropagation();
          openEditPopup(el);
        };
        el.addEventListener('click', el._editClick);
      }
    });
  } else {
    closeEditPopup();
  }
  const lbl = document.getElementById('editModeLabel');
  if (lbl) lbl.textContent = on ? 'Edit mode\'ni o\'chirish' : 'Edit mode\'ni yoqish';
}

function getDataPath(path) {
  return path.split('.').reduce((o, k) => o?.[k], data);
}
function setDataPath(path, value) {
  const keys = path.split('.');
  let obj = data;
  for (let i = 0; i < keys.length - 1; i++) {
    obj = obj[keys[i]] = obj[keys[i]] || {};
  }
  obj[keys[keys.length - 1]] = value;
}

function openEditPopup(el) {
  const popup = editPopup();
  if (!popup) return;
  const key = el.dataset.editKey;
  currentEditKey = key;
  // Determine current text from various sources
  let currentText = '';
  if (key.startsWith('text:')) {
    const tKey = key.slice(5);
    currentText = data.uiTexts?.[tKey] || el.textContent.trim();
  } else if (key.startsWith('bind:')) {
    const path = key.slice(5);
    currentText = getDataPath(path) || el.textContent.trim();
  } else {
    currentText = data.uiTexts?.[key] || el.textContent.trim();
  }
  const cfg = data.elementStyles?.[key] || {};
  document.getElementById('editPopupTitle').textContent = key.replace(/^(text:|bind:)/, '');
  document.getElementById('editPopupText').value = currentText;
  const sel = document.getElementById('editPopupFont');
  sel.innerHTML = '<option value="">— Standart —</option>' +
    FONT_OPTIONS.map(f => `<option value="${escapeAttr(f)}" ${cfg.font === f ? 'selected' : ''}>${escapeHtml(f)}</option>`).join('');
  document.getElementById('editPopupSize').value = cfg.size || '';
  // Position popup smartly
  const rect = el.getBoundingClientRect();
  const px = Math.min(window.innerWidth - 340, Math.max(16, rect.left));
  const py = rect.bottom + 12 + 360 > window.innerHeight
    ? Math.max(16, rect.top - 360)
    : rect.bottom + 12;
  popup.style.left = px + 'px';
  popup.style.top = py + 'px';
  popup.classList.add('show');
}

function closeEditPopup() {
  const popup = editPopup();
  if (popup) popup.classList.remove('show');
  currentEditKey = null;
}

function initEditPopupHandlers() {
  const txt = document.getElementById('editPopupText');
  const fontSel = document.getElementById('editPopupFont');
  const sizeInp = document.getElementById('editPopupSize');
  const closeBtn = document.getElementById('editPopupClose');
  const resetBtn = document.getElementById('editPopupReset');

  const applyChange = () => {
    if (!currentEditKey) return;
    const key = currentEditKey;
    // Save text to the right place based on key prefix
    if (txt.value !== '') {
      if (key.startsWith('text:')) {
        data.uiTexts[key.slice(5)] = txt.value;
      } else if (key.startsWith('bind:')) {
        setDataPath(key.slice(5), txt.value);
      } else {
        data.uiTexts[key] = txt.value;
      }
    }
    // Apply font/size on the actual element
    const el = document.querySelector(`[data-edit-key="${CSS.escape(key)}"]`);
    if (el) {
      el.style.fontFamily = fontSel.value ? `'${fontSel.value}', sans-serif` : '';
      el.style.fontSize = sizeInp.value || '';
    }
    if (!data.elementStyles[key]) data.elementStyles[key] = { font: '', size: '' };
    data.elementStyles[key].font = fontSel.value;
    data.elementStyles[key].size = sizeInp.value;
    renderTexts();
    renderBindings();
    renderElementStyles();
    ensureFontsLoaded();
    saveData();
  };

  [txt, fontSel, sizeInp].forEach(el => el?.addEventListener('input', applyChange));
  [txt, fontSel, sizeInp].forEach(el => el?.addEventListener('change', applyChange));
  closeBtn?.addEventListener('click', closeEditPopup);
  resetBtn?.addEventListener('click', () => {
    if (!currentEditKey) return;
    if (data.elementStyles[currentEditKey]) data.elementStyles[currentEditKey] = { font: '', size: '' };
    if (data.elementOffsets[currentEditKey]) {
      delete data.elementOffsets[currentEditKey];
      const el = document.querySelector(`[data-edit-key="${currentEditKey}"]`);
      if (el) el.style.transform = '';
    }
    renderElementStyles();
    saveData();
    closeEditPopup();
    toast('Tiklandi');
  });
}

function initEditModeUI() {
  const fab = document.getElementById('editToggleFab');
  fab?.addEventListener('click', () => {
    setEditMode(false);
    toast('Edit mode o\'chirildi');
  });

  const adminToggle = document.getElementById('toggleEditMode');
  adminToggle?.addEventListener('click', () => {
    setEditMode(!editModeOn);
    if (editModeOn) {
      // Close admin so user can edit
      document.getElementById('adminPanel')?.classList.remove('open');
      toast('Edit mode yoqildi — sahifadagi matnni bosing');
    }
  });

  const reset = document.getElementById('resetPositions');
  reset?.addEventListener('click', () => {
    if (!confirm('Barcha siljitilgan elementlarni asl holatiga qaytarish?')) return;
    data.elementOffsets = {};
    document.querySelectorAll('[data-edit-key]').forEach(el => {
      el.style.transform = '';
    });
    saveData();
    toast('Pozitsiyalar tiklandi');
  });

  // Full reset to default ("v1")
  const resetV1 = document.getElementById('resetToV1');
  resetV1?.addEventListener('click', () => {
    if (!confirm('OGOHLANTIRISH: barcha matnlar, shriftlar, o\'lchamlar va joylashuvlar standart holatga qaytariladi. Loyihalar, kontaktlar va profil saqlanadi. Davom etilsinmi?')) return;
    data.uiTexts = JSON.parse(JSON.stringify(DEFAULT_DATA.uiTexts));
    data.typography = JSON.parse(JSON.stringify(DEFAULT_DATA.typography));
    data.elementStyles = JSON.parse(JSON.stringify(DEFAULT_DATA.elementStyles));
    data.elementOffsets = {};
    document.querySelectorAll('[data-edit-key]').forEach(el => {
      el.style.transform = '';
      el.style.fontFamily = '';
      el.style.fontSize = '';
    });
    document.querySelectorAll('[data-style-key]').forEach(el => {
      el.style.fontFamily = '';
      el.style.fontSize = '';
    });
    saveData();
    renderAll();
    populateAdminForms();
    toast('1-versiyaga qaytarildi');
  });

  initEditPopupHandlers();
}

// ==================== ADMIN: MUSIC TAB ====================
function renderMusicAdmin() {
  const presetsContainer = document.getElementById('musicPresets');
  if (!presetsContainer) return;
  presetsContainer.innerHTML = MUSIC_PRESETS.map(p => `
    <div class="music-preset ${data.music.presetId === p.id ? 'active' : ''}" data-preset-id="${p.id}">
      <div class="music-preset__icon">${p.icon}</div>
      <div>
        <div class="music-preset__name">${escapeHtml(p.name)}</div>
        <div class="music-preset__sub">Default preset</div>
      </div>
    </div>
  `).join('');

  presetsContainer.querySelectorAll('.music-preset').forEach(el => {
    el.addEventListener('click', async () => {
      const id = el.dataset.presetId;
      const preset = MUSIC_PRESETS.find(p => p.id === id);
      if (!preset) return;
      data.music.presetId = id;
      data.music.src = preset.url;
      document.getElementById('music_url').value = preset.url;
      saveData();
      renderMusicAdmin();
      window.__refreshMusic?.();
      // Auto-play immediately (we have user gesture)
      const audio = document.getElementById('bgAudio');
      const btn = document.getElementById('musicBtn');
      if (audio) {
        try {
          await audio.play();
          btn?.classList.add('playing');
          window.__musicPlaying = true;
          toast(`▶ ${preset.name} chalmoqda`);
        } catch (e) {
          toast(`${preset.name} tanlandi — musiqa tugmasini bosing`);
        }
      }
    });
  });

  const url = document.getElementById('music_url');
  if (url) url.value = data.music.src && !data.music.src.startsWith('data:') ? data.music.src : '';
  const vol = document.getElementById('music_volume');
  if (vol) {
    vol.value = data.music.volume || 40;
    document.getElementById('volumeDisplay').textContent = vol.value;
    vol.oninput = (e) => {
      data.music.volume = Number(e.target.value);
      document.getElementById('volumeDisplay').textContent = e.target.value;
      const audio = document.getElementById('bgAudio');
      if (audio) audio.volume = data.music.volume / 100;
    };
    vol.onchange = () => saveData();
  }

  const auto = document.getElementById('music_autoplay');
  if (auto) {
    auto.checked = !!data.music.autoplay;
    auto.onchange = () => { data.music.autoplay = auto.checked; saveData(); };
  }

  const fileInp = document.getElementById('music_file');
  if (fileInp) {
    fileInp.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (file.size > 5 * 1024 * 1024) {
        toast('Fayl 5MB dan kichik bo\'lishi kerak');
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        data.music.src = ev.target.result;
        data.music.presetId = null;
        document.getElementById('music_url').value = '(yuklandi)';
        try {
          saveData();
          window.__refreshMusic?.();
          renderMusicAdmin();
          toast('Musiqa yuklandi');
        } catch (err) {
          toast('Saqlash xato — fayl juda katta bo\'lishi mumkin');
        }
      };
      reader.readAsDataURL(file);
    };
  }

  url?.addEventListener('change', () => {
    if (url.value && url.value !== '(yuklandi)') {
      data.music.src = url.value;
      data.music.presetId = null;
      saveData();
      window.__refreshMusic?.();
    }
  });
}

// ==================== ENHANCED SCROLL REVEAL ====================
function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseFloat(el.dataset.revealDelay || 0);
        setTimeout(() => el.classList.add('in-view'), delay * 1000);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });

  // Apply data-reveal to many elements automatically
  document.querySelectorAll('.section, .skill-group, .timeline-item, .portfolio-item, .stat, .channel, .field')
    .forEach((el, i) => {
      if (!el.hasAttribute('data-reveal')) {
        el.setAttribute('data-reveal', 'up');
        const within = el.closest('.skills, .timeline, .portfolio, .about__stats, .contact__channels');
        if (within) {
          // Stagger by index in the group
          const siblings = within.children.length;
          const idx = Array.from(within.children).indexOf(el);
          if (idx >= 0) el.dataset.revealDelay = (idx * 0.06).toFixed(2);
        }
      }
      obs.observe(el);
    });
}

// ==================== SCROLL PROGRESS ====================
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = scrolled + '%';
  }, { passive: true });
}

// ==================== HOOK INTO RENDER ====================
const _origRenderAll = renderAll;
renderAll = function() {
  _origRenderAll.apply(this, arguments);
  // Re-bind effects on dynamic elements
  setTimeout(() => {
    initScrollReveal();
    initMagnetic();
  }, 100);
};

// ==================== SAVE WRAPPER (auto-clears dirty) ====================
const _origSaveData = saveData;
saveData = function() {
  const r = _origSaveData.apply(this, arguments);
  if (typeof clearDirty === 'function') clearDirty();
  return r;
};

// ==================== INIT ====================
function init() {
  applyTheme(loadTheme());
  renderAll();
  document.getElementById('footerYear').textContent = new Date().getFullYear();

  // Init effects
  initCursor();
  initGlassHover();
  initMagnetic();
  initTilt();
  initParallax();
  initHeroScroll();
  initScrollProgress();
  initScrollReveal();
  initAdminApply();
  initStealthEntry();
  initMobileMenu();
  initNetworkBg();
  initActiveNav();
  initMusic();
  initEditModeUI();
  autoTagEditable();
  applyEditOffsets();
  preloadAllFonts();

  // Play cinematic intro
  playIntro();

  // Reveal hero immediately if intro skipped
  if (sessionStorage.getItem('introShown') === 'yes') {
    setTimeout(triggerHeroReveal, 100);
  }
}

init();
