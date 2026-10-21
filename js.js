/*
  ملف JavaScript - معرض الأعمال
  مسئول عن: الهيدر المشترك، القائمة الجانبية، الإعدادات (اللغة / المظهر)، حفظ التفضيلات
*/

const STORAGE_KEYS = {
  theme: "portfolio_theme",
  language: "portfolio_language"
};

const translations = {
  en: {
    dir: "ltr",
    langAttr: "en",
    title: "About Me | Portfolio",
    menuTitle: "Menu",
    navAbout: "About Me",
    navProjects: "Projects",
    navServices: "Services",
    navContact: "Contact",
    settingsTitle: "Settings",
    appearance: "Appearance",
    light: "Light Mode",
    dark: "Dark Mode",
    language: "Language",
    closeMenu: "Close Menu",
    openMenu: "Open Sidebar",
    aboutTitle: "About Me",
    aboutSubtitle: "Web Developer | Portfolio",
    footerCopy: "© 2026 Your Name. All rights reserved."
  },
  ar: {
    dir: "rtl",
    langAttr: "ar",
    title: "عني | معرض الأعمال",
    menuTitle: "القائمة",
    navAbout: "عني",
    navProjects: "المشاريع",
    navServices: "الخدمات",
    navContact: "التواصل",
    settingsTitle: "الإعدادات",
    appearance: "المظهر",
    light: "الوضع الفاتح",
    dark: "الوضع الداكن",
    language: "اللغة",
    closeMenu: "إغلاق القائمة",
    openMenu: "فتح القائمة الجانبية",
    aboutTitle: "عني",
    aboutSubtitle: "مطور ويب | معرض الأعمال",
    footerCopy: "© 2026 اسمك. جميع الحقوق محفوظة."
  },
  fr: {
    dir: "ltr",
    langAttr: "fr",
    title: "À propos | Portfolio",
    menuTitle: "Menu",
    navAbout: "À propos",
    navProjects: "Projets",
    navServices: "Services",
    navContact: "Contact",
    settingsTitle: "Paramètres",
    appearance: "Apparence",
    light: "Mode Clair",
    dark: "Mode Sombre",
    language: "Langue",
    closeMenu: "Fermer le menu",
    openMenu: "Ouvrir le menu latéral",
    aboutTitle: "À propos de moi",
    aboutSubtitle: "Développeur Web | Portfolio",
    footerCopy: "© 2026 Votre Nom. Tous droits réservés."
  }
};

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
  } else {
    root.removeAttribute("data-theme");
  }

  const themeOptions = document.querySelectorAll(".theme-option");
  themeOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.theme === theme);
  });

  try {
    localStorage.setItem(STORAGE_KEYS.theme, theme);
  } catch (error) {
    // تجاهل أخطاء localStorage
  }
}

function applyLanguage(lang) {
  const translation = translations[lang] || translations.en;
  const html = document.documentElement;

  html.setAttribute("lang", translation.langAttr);
  html.setAttribute("dir", translation.dir);

  document.title = translation.title;

  const sidebarTitle = document.querySelector(".sidebar-title");
  if (sidebarTitle) sidebarTitle.textContent = translation.menuTitle;

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    const page = link.dataset.page;
    if (page === "index") link.textContent = translation.navAbout;
    if (page === "projects") link.textContent = translation.navProjects;
    if (page === "services") link.textContent = translation.navServices;
    if (page === "contact") link.textContent = translation.navContact;
  });

  const navDesktopLinks = document.querySelectorAll(".nav-desktop-link");
  navDesktopLinks.forEach((link) => {
    const page = link.dataset.page;
    if (page === "index") link.textContent = translation.navAbout;
    if (page === "projects") link.textContent = translation.navProjects;
    if (page === "services") link.textContent = translation.navServices;
    if (page === "contact") link.textContent = translation.navContact;
  });

  const settingsTitle = document.querySelector(".settings-title");
  if (settingsTitle) settingsTitle.textContent = translation.settingsTitle;

  const settingsLabels = document.querySelectorAll(".settings-group .settings-label");
  if (settingsLabels[0]) settingsLabels[0].textContent = translation.appearance;
  if (settingsLabels[1]) settingsLabels[1].textContent = translation.language;

  const settingsPanelLabels = document.querySelectorAll(".settings-panel-label");
  if (settingsPanelLabels[0]) settingsPanelLabels[0].textContent = translation.appearance;
  if (settingsPanelLabels[1]) settingsPanelLabels[1].textContent = translation.language;

  const themeOptions = document.querySelectorAll(".theme-option");
  if (themeOptions[0]) themeOptions[0].textContent = translation.light;
  if (themeOptions[1]) themeOptions[1].textContent = translation.dark;

  const settingsToggle = document.getElementById("settings-toggle");
  if (settingsToggle) settingsToggle.textContent = translation.settingsTitle;

  const menuToggle = document.getElementById("menu-toggle");
  if (menuToggle) menuToggle.setAttribute("aria-label", translation.openMenu);

  const sidebarClose = document.getElementById("sidebar-close");
  if (sidebarClose) sidebarClose.setAttribute("aria-label", translation.closeMenu);

  const aboutTitle = document.querySelector(".about-title");
  if (aboutTitle) aboutTitle.textContent = translation.aboutTitle;

  const aboutSubtitle = document.querySelector(".about-subtitle");
  if (aboutSubtitle) aboutSubtitle.textContent = translation.aboutSubtitle;

  const footerCopy = document.querySelector(".footer-copy");
  if (footerCopy) footerCopy.textContent = translation.footerCopy;

  const languageSelect = document.getElementById("language-select");
  if (languageSelect) {
    languageSelect.value = lang;
  }

  const languageSelectHeader = document.getElementById("language-select-header");
  if (languageSelectHeader) {
    languageSelectHeader.value = lang;
  }

  try {
    localStorage.setItem(STORAGE_KEYS.language, lang);
  } catch (error) {
    // تجاهل أخطاء localStorage
  }
}

function initSidebar() {
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  const sidebarClose = document.getElementById("sidebar-close");
  const sidebarPanel = sidebar?.querySelector(".sidebar-panel");

  if (!menuToggle || !sidebar) return;

  function openSidebar() {
    sidebar.classList.add("is-open");
    sidebar.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    sidebarClose?.focus();
  }

  function closeSidebar() {
    sidebar.classList.remove("is-open");
    sidebar.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    menuToggle.focus();
  }

  menuToggle.addEventListener("click", () => {
    if (sidebar.classList.contains("is-open")) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  sidebarOverlay?.addEventListener("click", closeSidebar);
  sidebarClose?.addEventListener("click", closeSidebar);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && sidebar.classList.contains("is-open")) {
      closeSidebar();
    }
  });

  sidebarPanel?.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const focusableElements = sidebarPanel.querySelectorAll('button, [href], select, [tabindex]:not([tabindex="-1"])');
    if (focusableElements.length === 0) return;
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  });
}

function initSettingsDropdown() {
  const settingsToggle = document.getElementById("settings-toggle");
  const settingsDropdown = document.getElementById("settings-dropdown");
  const settingsPanel = document.getElementById("settings-panel");
  const settingsOverlay = document.getElementById("settings-overlay");
  const body = document.body;

  if (!settingsToggle || !settingsDropdown) return;

  const focusableSelector = 'button:not([disabled]), [href], select:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])';
  let previouslyFocusedElement = null;

  function getFocusableElements() {
    if (!settingsPanel) return [];
    return Array.from(settingsPanel.querySelectorAll(focusableSelector)).filter((el) => {
      return el.offsetWidth > 0 || el.offsetHeight > 0 || el === document.activeElement;
    });
  }

  function setInertOutside(inert) {
    const elementsToInert = [document.querySelector(".nav-desktop"), document.querySelector(".main-content"), document.querySelector(".site-footer")];
    elementsToInert.forEach((el) => {
      if (!el) return;
      if (inert) {
        el.setAttribute("inert", "");
      } else {
        el.removeAttribute("inert");
      }
    });
  }

  function closeDropdown() {
    settingsDropdown.classList.remove("is-open");
    settingsToggle.setAttribute("aria-expanded", "false");
    document.removeEventListener("keydown", trapFocus);
    setInertOutside(false);
    body.style.overflow = "";
    if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === "function") {
      previouslyFocusedElement.focus();
    }
  }

  function trapFocus(event) {
    if (event.key !== "Tab") return;
    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) {
      event.preventDefault();
      return;
    }
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  }

  function openDropdown() {
    previouslyFocusedElement = document.activeElement;
    settingsDropdown.classList.add("is-open");
    settingsToggle.setAttribute("aria-expanded", "true");
    body.style.overflow = "hidden";
    setInertOutside(true);
    document.addEventListener("keydown", trapFocus);
    window.requestAnimationFrame(() => {
      const focusableElements = getFocusableElements();
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    });
  }

  settingsToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    if (settingsDropdown.classList.contains("is-open")) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  settingsOverlay?.addEventListener("click", closeDropdown);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && settingsDropdown.classList.contains("is-open")) {
      closeDropdown();
    }
  });
}

function initSettings() {
  const themeOptions = document.querySelectorAll(".theme-option");
  themeOptions.forEach((option) => {
    option.addEventListener("click", () => {
      applyTheme(option.dataset.theme);
    });
  });

  const languageSelect = document.getElementById("language-select");
  const languageSelectHeader = document.getElementById("language-select-header");

  languageSelect?.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
    if (languageSelectHeader) languageSelectHeader.value = event.target.value;
  });

  languageSelectHeader?.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
    if (languageSelect) languageSelect.value = event.target.value;
  });
}

function loadPreferences() {
  let theme = "light";
  let language = "en";

  try {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
    if (savedTheme === "dark" || savedTheme === "light") {
      theme = savedTheme;
    }
  } catch (error) {
    // تجاهل
  }

  try {
    const savedLanguage = localStorage.getItem(STORAGE_KEYS.language);
    if (savedLanguage === "ar" || savedLanguage === "en" || savedLanguage === "fr") {
      language = savedLanguage;
    }
  } catch (error) {
    // تجاهل
  }

  applyTheme(theme);
  applyLanguage(language);
}

function init() {
  initSidebar();
  initSettingsDropdown();
  initSettings();
  loadPreferences();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
