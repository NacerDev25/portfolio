/*
  ملف JavaScript - معرض الأعمال
  مسؤول عن: الهيدر المشترك، القائمة الجانبية، الإعدادات (اللغة / المظهر)، حفظ التفضيلات
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
    pageTitles: {
      about: "About Me | Portfolio",
      home: "Home | Portfolio",
      projects: "Projects | Portfolio",
      services: "Services | Portfolio",
      contact: "Contact | Portfolio"
    },
    skipToContent: "Skip to main content",
    logoLabel: "Go to home page",
    menuTitle: "Menu",
    navHome: "Home",
    navAbout: "About Me",
    navProjects: "Projects",
    navServices: "Services",
    navContact: "Contact",
    settingsTitle: "Settings",
    appearance: "Appearance",
    light: "Light Mode",
    dark: "Dark Mode",
    language: "Language",
    languageSelect: "Select language",
    closeMenu: "Close Menu",
    openMenu: "Open Sidebar",
    closeSettings: "Close settings",
    aboutTitle: "About Me",
    aboutSubtitle: "Web Developer | Portfolio",
    aboutIntro: "I am Nacer, a website developer and programmer from Algeria. I have comprehensive technical expertise in engineering and building digital applications and platforms from scratch, combining my background in clinical psychology to deliver exceptional user experiences. I design high-performance interfaces adapted for all users, with full commitment to modern development standards and accessibility standards.",
    homeHeroHeading: "Web developer building fast, accessible websites",
    homeHeroLead: "I turn ideas into clean, responsive interfaces that work well for everyone — with a focus on performance, accessibility, and maintainable code.",
    homeCtaProjects: "View projects",
    homeCtaContact: "Get in touch",
    homeServicesHeading: "What I do",
    homeServicesLead: "A focused set of services to design, build, and improve your web presence.",
    homeServiceFrontendTitle: "Front-end development",
    homeServiceFrontendDesc: "Semantic, responsive interfaces built with HTML, CSS, and JavaScript.",
    homeServiceTailwindTitle: "Website design with Tailwind CSS",
    homeServiceTailwindDesc: "Modern, responsive website designs built efficiently with Tailwind CSS.",
    homeServiceBackendTitle: "Back-end development",
    homeServiceBackendDesc: "APIs and server-side logic built with Node.js.",
    homeServiceAccessibleTitle: "Accessible UI",
    homeServiceAccessibleDesc: "Interfaces that meet WCAG 2.2 AA and work with keyboards and screen readers.",
    homeServicePerformanceTitle: "Performance",
    homeServicePerformanceDesc: "Fast-loading pages with lean assets and a clean, maintainable structure.",
    homeAllServices: "All services",
    homeWorkHeading: "Selected work",
    homeWorkLead: "A few projects that show how I approach design and development.",
    homeProject1Title: "Portfolio website",
    homeProject1Desc: "A multilingual, accessible portfolio with light and dark themes.",
    homeProject2Title: "Analytics dashboard",
    homeProject2Desc: "A responsive dashboard that turns complex data into clear decisions.",
    homeProject3Title: "Marketing landing page",
    homeProject3Desc: "A conversion-focused page built for speed and mobile-first reading.",
    homeAllProjects: "All projects",
    homeCtaHeading: "Let’s work together",
    homeCtaLead: "Have a project in mind? I’d be glad to hear about it.",
    projectsTitle: "Projects",
    projectsSubtitle: "A selection of work that reflects how I build for the web.",
    project1Title: "Portfolio website",
    project1Desc: "A multilingual, accessible portfolio with light and dark themes and persistent preferences.",
    project2Title: "Analytics dashboard",
    project2Desc: "A responsive dashboard with clear data visualisation and keyboard-friendly controls.",
    project3Title: "Task manager app",
    project3Desc: "A small app for organising tasks, with filters, local persistence, and a simple flow.",
    project4Title: "Marketing landing page",
    project4Desc: "A mobile-first landing page focused on clarity, speed, and a single call to action.",
    project5Title: "Blog platform",
    project5Desc: "A content-first blog layout with readable typography and a clean article structure.",
    project6Title: "Weather app",
    project6Desc: "A compact weather interface that presents current conditions at a glance.",
    servicesTitle: "Services",
    servicesSubtitle: "Practical help to design, build, and improve your website.",
    service1Name: "Website development",
    service1Desc: "Complete websites built with clean HTML, CSS, and JavaScript, from layout to launch.",
    serviceTailwindName: "Website design with Tailwind CSS",
    serviceTailwindDesc: "Modern, responsive website designs built efficiently with Tailwind CSS.",
    serviceBackendName: "Back-end development",
    serviceBackendDesc: "APIs and server-side logic built with Node.js.",
    service2Name: "Responsive design",
    service2Desc: "Interfaces that adapt smoothly from small phones to large screens.",
    service3Name: "Accessibility improvements",
    service3Desc: "Audits and fixes to meet WCAG 2.2 AA, including keyboard and screen-reader support.",
    service4Name: "Performance optimisation",
    service4Desc: "Leaner pages that load faster and feel smoother on every device.",
    processHeading: "How I work",
    processIntro: "A simple process that keeps you informed from start to finish.",
    process1: "Discover",
    process2: "Plan",
    process3: "Build",
    process4: "Review",
    faqHeading: "Frequently asked questions",
    faq1Q: "How long does a project take?",
    faq1A: "It depends on the scope. A single page usually takes a few days, while a full site takes one to three weeks.",
    faq2Q: "Do you work with existing designs?",
    faq2A: "Yes. I can build from a design you already have, or help shape the structure before development starts.",
    faq3Q: "Will the site work on mobile?",
    faq3A: "Yes. Every page is built to reflow and stay usable at small screen sizes.",
    contactTitle: "Contact",
    contactSubtitle: "Choose the way that suits you best — I’ll get back to you as soon as I can.",
    contactEmailLabel: "Email",
    contactEmailDesc: "Best for project details and longer messages.",
    contactPhoneLabel: "Phone",
    contactPhoneDesc: "Available during working hours.",
    contactWhatsappLabel: "WhatsApp",
    contactWhatsappDesc: "Quick questions and short updates.",
    contactAvailabilityHeading: "Availability",
    contactAvailabilityText: "Currently available for freelance projects and collaborations.",
    footerCopy: "© 2026 Your Name. All rights reserved."
  },
  ar: {
    dir: "rtl",
    langAttr: "ar",
    title: "عني | معرض الأعمال",
    pageTitles: {
      about: "عني | معرض الأعمال",
      home: "الرئيسية | معرض الأعمال",
      projects: "المشاريع | معرض الأعمال",
      services: "الخدمات | معرض الأعمال",
      contact: "التواصل | معرض الأعمال"
    },
    skipToContent: "تخطَّ إلى المحتوى الرئيسي",
    logoLabel: "الذهاب إلى الصفحة الرئيسية",
    menuTitle: "القائمة",
    navHome: "الرئيسية",
    navAbout: "عني",
    navProjects: "المشاريع",
    navServices: "الخدمات",
    navContact: "التواصل",
    settingsTitle: "الإعدادات",
    appearance: "المظهر",
    light: "الوضع الفاتح",
    dark: "الوضع الداكن",
    language: "اللغة",
    languageSelect: "اختيار اللغة",
    closeMenu: "إغلاق القائمة",
    openMenu: "فتح القائمة الجانبية",
    closeSettings: "إغلاق الإعدادات",
    aboutTitle: "عني",
    aboutSubtitle: "مطور ويب | معرض الأعمال",
    aboutIntro: "أنا ناصر، مطور ومبرمج مواقع من الجزائر. أمتلك خبرة تقنية متكاملة في هندسة وبناء التطبيقات والمنصات الرقمية من الصفر، مع دمج خلفيتي في علم النفس العيادي لتقديم تجارب مستخدم استثنائية. أصمم واجهات عالية الأداء مهيأة لجميع المستخدمين، مع التزام تام بالمعايير البرمجية الحديثة ومعايير إمكانية الوصول.",
    homeHeroHeading: "مطوّر ويب أبني مواقع سريعة وسهلة الوصول",
    homeHeroLead: "أحوّل الأفكار إلى واجهات نظيفة ومتجاوبة تعمل بشكل جيد للجميع، مع التركيز على الأداء وإمكانية الوصول والكود القابل للصيانة.",
    homeCtaProjects: "عرض المشاريع",
    homeCtaContact: "تواصل معي",
    homeServicesHeading: "ما أقدّمه",
    homeServicesLead: "مجموعة خدمات مركّزة لتصميم حضورك الرقمي وبنائه وتحسينه.",
    homeServiceFrontendTitle: "تطوير الواجهات الأمامية",
    homeServiceFrontendDesc: "واجهات دلالية ومتجاوبة مبنية بـ HTML وCSS وJavaScript.",
    homeServiceTailwindTitle: "تصميم مواقع باستعمال Tailwind CSS",
    homeServiceTailwindDesc: "تصميم مواقع حديثة ومتجاوبة بسرعة وكفاءة باستعمال إطار العمل Tailwind CSS.",
    homeServiceBackendTitle: "تطوير الواجهات الخلفية",
    homeServiceBackendDesc: "واجهات برمجة التطبيقات ومنطق الخادم مبني بـ Node.js.",
    homeServiceAccessibleTitle: "واجهات سهلة الوصول",
    homeServiceAccessibleDesc: "واجهات تلبي معيار WCAG 2.2 AA وتعمل مع لوحة المفاتيح وقارئات الشاشة.",
    homeServicePerformanceTitle: "الأداء",
    homeServicePerformanceDesc: "صفحات سريعة التحميل بموارد خفيفة وبنية نظيفة قابلة للصيانة.",
    homeAllServices: "كل الخدمات",
    homeWorkHeading: "أعمال مختارة",
    homeWorkLead: "بعض المشاريع التي تُظهر كيف أتعامل مع التصميم والتطوير.",
    homeProject1Title: "موقع معرض أعمال",
    homeProject1Desc: "معرض أعمال متعدد اللغات وسهل الوصول مع وضعين فاتح وداكن.",
    homeProject2Title: "لوحة تحليلات",
    homeProject2Desc: "لوحة متجاوبة تحوّل البيانات المعقدة إلى قرارات واضحة.",
    homeProject3Title: "صفحة هبوط تسويقية",
    homeProject3Desc: "صفحة تركّز على التحويل ومبنية للسرعة والقراءة على الجوال.",
    homeAllProjects: "كل المشاريع",
    homeCtaHeading: "لنعمل معاً",
    homeCtaLead: "هل لديك مشروع في ذهنك؟ يسعدني أن أسمع عنه.",
    projectsTitle: "المشاريع",
    projectsSubtitle: "مجموعة أعمال تعكس طريقة بنائي للمواقع.",
    project1Title: "موقع معرض أعمال",
    project1Desc: "معرض أعمال متعدد اللغات وسهل الوصول، بوضعين فاتح وداكن وتفضيلات محفوظة.",
    project2Title: "لوحة تحليلات",
    project2Desc: "لوحة متجاوبة تعرض البيانات بوضوح وتدعم التحكم الكامل بلوحة المفاتيح.",
    project3Title: "تطبيق إدارة المهام",
    project3Desc: "تطبيق صغير لتنظيم المهام، مع تصفية وحفظ محلي وتدفق بسيط.",
    project4Title: "صفحة هبوط تسويقية",
    project4Desc: "صفحة هبوط للجوال أولاً، تركّز على الوضوح والسرعة ودعوة واحدة للفعل.",
    project5Title: "منصة مدونة",
    project5Desc: "تصميم مدونة يضع المحتوى أولاً، بطباعة مريحة للقراءة وبنية مقالات نظيفة.",
    project6Title: "تطبيق الطقس",
    project6Desc: "واجهة طقس مختصرة تعرض الحالة الحالية بنظرة واحدة.",
    servicesTitle: "الخدمات",
    servicesSubtitle: "مساعدة عملية لتصميم موقعك وبنائه وتحسينه.",
    service1Name: "تطوير المواقع",
    service1Desc: "مواقع كاملة مبنية بـ HTML وCSS وJavaScript نظيفة، من التخطيط إلى الإطلاق.",
    serviceTailwindName: "تصميم مواقع باستعمال Tailwind CSS",
    serviceTailwindDesc: "تصميم مواقع حديثة ومتجاوبة بسرعة وكفاءة باستعمال إطار العمل Tailwind CSS.",
    serviceBackendName: "تطوير الواجهات الخلفية",
    serviceBackendDesc: "واجهات برمجة التطبيقات ومنطق الخادم مبني بـ Node.js.",
    service2Name: "التصميم المتجاوب",
    service2Desc: "واجهات تتكيف بسلاسة من الهواتف الصغيرة إلى الشاشات الكبيرة.",
    service3Name: "تحسين إمكانية الوصول",
    service3Desc: "تدقيق وإصلاح للوصول إلى WCAG 2.2 AA، بما يشمل لوحة المفاتيح وقارئات الشاشة.",
    service4Name: "تحسين الأداء",
    service4Desc: "صفحات أخف تُحمّل أسرع وتعمل بسلاسة أكبر على كل جهاز.",
    processHeading: "كيف أعمل",
    processIntro: "عملية بسيطة تُبقيك على اطلاع من البداية إلى النهاية.",
    process1: "الاكتشاف",
    process2: "التخطيط",
    process3: "التنفيذ",
    process4: "المراجعة",
    faqHeading: "الأسئلة الشائعة",
    faq1Q: "كم يستغرق المشروع؟",
    faq1A: "يعتمد على حجم العمل. الصفحة الواحدة تستغرق عادة أياماً قليلة، والموقع الكامل من أسبوع إلى ثلاثة أسابيع.",
    faq2Q: "هل تعمل على تصاميم موجودة؟",
    faq2A: "نعم. يمكنني البناء انطلاقاً من تصميم لديك، أو المساعدة في تشكيل البنية قبل بدء التطوير.",
    faq3Q: "هل سيعمل الموقع على الجوال؟",
    faq3A: "نعم. كل صفحة مبنية لإعادة التدفق والبقاء قابلة للاستخدام على الشاشات الصغيرة.",
    contactTitle: "التواصل",
    contactSubtitle: "اختر الطريقة الأنسب لك، وسأعود إليك في أقرب وقت ممكن.",
    contactEmailLabel: "البريد الإلكتروني",
    contactEmailDesc: "الأفضل لتفاصيل المشروع والرسائل الطويلة.",
    contactPhoneLabel: "الهاتف",
    contactPhoneDesc: "متاح خلال ساعات العمل.",
    contactWhatsappLabel: "واتساب",
    contactWhatsappDesc: "للأسئلة السريعة والتحديثات القصيرة.",
    contactAvailabilityHeading: "التوفر",
    contactAvailabilityText: "متاح حالياً للمشاريع المستقلة والتعاون.",
    footerCopy: "© 2026 اسمك. جميع الحقوق محفوظة."
  },
  fr: {
    dir: "ltr",
    langAttr: "fr",
    title: "À propos | Portfolio",
    pageTitles: {
      about: "À propos | Portfolio",
      home: "Accueil | Portfolio",
      projects: "Projets | Portfolio",
      services: "Services | Portfolio",
      contact: "Contact | Portfolio"
    },
    skipToContent: "Aller au contenu principal",
    logoLabel: "Aller à la page d'accueil",
    menuTitle: "Menu",
    navHome: "Accueil",
    navAbout: "À propos",
    navProjects: "Projets",
    navServices: "Services",
    navContact: "Contact",
    settingsTitle: "Paramètres",
    appearance: "Apparence",
    light: "Mode Clair",
    dark: "Mode Sombre",
    language: "Langue",
    languageSelect: "Choisir la langue",
    closeMenu: "Fermer le menu",
    openMenu: "Ouvrir le menu latéral",
    closeSettings: "Fermer les paramètres",
    aboutTitle: "À propos de moi",
    aboutSubtitle: "Développeur Web | Portfolio",
    aboutIntro: "Je suis Nacer, développeur et programmeur de sites web originaire d’Algérie. Je possède une expertise technique complète dans l’ingénierie et la création d’applications et de plateformes numériques à partir de zéro, en intégrant ma formation en psychologie clinique pour offrir des expériences utilisateur exceptionnelles. Je conçois des interfaces performantes adaptées à tous les utilisateurs, avec un engagement total envers les normes de développement modernes et les normes d’accessibilité.",
    homeHeroHeading: "Développeur web de sites rapides et accessibles",
    homeHeroLead: "Je transforme les idées en interfaces claires et responsives qui fonctionnent pour tous, avec un accent sur la performance, l’accessibilité et un code maintenable.",
    homeCtaProjects: "Voir les projets",
    homeCtaContact: "Me contacter",
    homeServicesHeading: "Ce que je fais",
    homeServicesLead: "Un ensemble de services ciblés pour concevoir, construire et améliorer votre présence web.",
    homeServiceFrontendTitle: "Développement front-end",
    homeServiceFrontendDesc: "Des interfaces sémantiques et responsives en HTML, CSS et JavaScript.",
    homeServiceTailwindTitle: "Création de sites avec Tailwind CSS",
    homeServiceTailwindDesc: "Des sites web modernes et responsives conçus efficacement avec Tailwind CSS.",
    homeServiceBackendTitle: "Développement back-end",
    homeServiceBackendDesc: "APIs et logique serveur avec Node.js.",
    homeServiceAccessibleTitle: "Interfaces accessibles",
    homeServiceAccessibleDesc: "Des interfaces conformes à WCAG 2.2 AA, utilisables au clavier et avec les lecteurs d’écran.",
    homeServicePerformanceTitle: "Performance",
    homeServicePerformanceDesc: "Des pages rapides, avec des ressources légères et une structure maintenable.",
    homeAllServices: "Tous les services",
    homeWorkHeading: "Travaux sélectionnés",
    homeWorkLead: "Quelques projets qui montrent ma façon d’aborder le design et le développement.",
    homeProject1Title: "Site portfolio",
    homeProject1Desc: "Un portfolio multilingue et accessible avec thèmes clair et sombre.",
    homeProject2Title: "Tableau de bord analytique",
    homeProject2Desc: "Un tableau de bord responsive qui transforme des données complexes en décisions claires.",
    homeProject3Title: "Page d’atterrissage marketing",
    homeProject3Desc: "Une page orientée conversion, pensée pour la vitesse et la lecture mobile.",
    homeAllProjects: "Tous les projets",
    homeCtaHeading: "Travaillons ensemble",
    homeCtaLead: "Vous avez un projet en tête ? Je serais ravi d’en discuter.",
    projectsTitle: "Projets",
    projectsSubtitle: "Une sélection de travaux qui reflète ma façon de construire pour le web.",
    project1Title: "Site portfolio",
    project1Desc: "Un portfolio multilingue et accessible, avec thèmes clair et sombre et préférences persistantes.",
    project2Title: "Tableau de bord analytique",
    project2Desc: "Un tableau de bord responsive avec une visualisation claire et des contrôles utilisables au clavier.",
    project3Title: "Application de gestion de tâches",
    project3Desc: "Une petite application pour organiser les tâches, avec filtres, sauvegarde locale et parcours simple.",
    project4Title: "Page d’atterrissage marketing",
    project4Desc: "Une page mobile-first axée sur la clarté, la vitesse et un seul appel à l’action.",
    project5Title: "Plateforme de blog",
    project5Desc: "Une mise en page centrée sur le contenu, avec une typographie lisible et une structure d’article claire.",
    project6Title: "Application météo",
    project6Desc: "Une interface météo compacte qui présente les conditions actuelles en un coup d’œil.",
    servicesTitle: "Services",
    servicesSubtitle: "Une aide concrète pour concevoir, construire et améliorer votre site.",
    service1Name: "Développement de sites",
    service1Desc: "Des sites complets en HTML, CSS et JavaScript propres, de la mise en page au lancement.",
    serviceTailwindName: "Création de sites avec Tailwind CSS",
    serviceTailwindDesc: "Des sites web modernes et responsives conçus efficacement avec Tailwind CSS.",
    serviceBackendName: "Développement back-end",
    serviceBackendDesc: "APIs et logique serveur avec Node.js.",
    service2Name: "Design responsive",
    service2Desc: "Des interfaces qui s’adaptent des petits téléphones aux grands écrans.",
    service3Name: "Amélioration de l’accessibilité",
    service3Desc: "Audits et corrections pour atteindre WCAG 2.2 AA, clavier et lecteurs d’écran inclus.",
    service4Name: "Optimisation des performances",
    service4Desc: "Des pages plus légères, plus rapides et plus fluides sur chaque appareil.",
    processHeading: "Ma méthode",
    processIntro: "Un processus simple qui vous tient informé du début à la fin.",
    process1: "Découverte",
    process2: "Planification",
    process3: "Développement",
    process4: "Révision",
    faqHeading: "Questions fréquentes",
    faq1Q: "Combien de temps prend un projet ?",
    faq1A: "Cela dépend de l’ampleur. Une page prend généralement quelques jours, un site complet de une à trois semaines.",
    faq2Q: "Travaillez-vous avec des designs existants ?",
    faq2A: "Oui. Je peux partir d’un design existant ou aider à définir la structure avant le développement.",
    faq3Q: "Le site fonctionnera-t-il sur mobile ?",
    faq3A: "Oui. Chaque page est construite pour rester lisible et utilisable sur petit écran.",
    contactTitle: "Contact",
    contactSubtitle: "Choisissez la méthode qui vous convient — je vous répondrai dès que possible.",
    contactEmailLabel: "E-mail",
    contactEmailDesc: "Idéal pour les détails du projet et les messages longs.",
    contactPhoneLabel: "Téléphone",
    contactPhoneDesc: "Disponible pendant les heures de travail.",
    contactWhatsappLabel: "WhatsApp",
    contactWhatsappDesc: "Pour les questions rapides et les courts messages.",
    contactAvailabilityHeading: "Disponibilité",
    contactAvailabilityText: "Actuellement disponible pour des projets freelance et des collaborations.",
    footerCopy: "© 2026 Votre Nom. Tous droits réservés."
  }
};

/*
  خريطة ترجمة سمات HTML إلى خصائص DOM.
  data-i18n            -> نص العنصر
  data-i18n-aria-label -> سمة aria-label
  data-i18n-title      -> سمة title
*/
const I18N_TARGETS = {
  "data-i18n": { kind: "text" },
  "data-i18n-aria-label": { kind: "attribute", name: "aria-label" },
  "data-i18n-title": { kind: "attribute", name: "title" }
};

function applyTranslations(translation) {
  Object.entries(I18N_TARGETS).forEach(([attribute, target]) => {
    document.querySelectorAll(`[${attribute}]`).forEach((element) => {
      const value = translation[element.getAttribute(attribute)];
      if (typeof value !== "string") return;
      if (target.kind === "text") {
        element.textContent = value;
      } else {
        element.setAttribute(target.name, value);
      }
    });
  });
}

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
  } else {
    root.removeAttribute("data-theme");
  }

  document.querySelectorAll(".theme-option").forEach((option) => {
    const isActive = option.dataset.theme === theme;
    option.classList.toggle("is-active", isActive);
    option.setAttribute("aria-pressed", String(isActive));
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

  document.title = translation.pageTitles[document.body.dataset.page] || translation.title;

  applyTranslations(translation);

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
    const firstNavLink = sidebar.querySelector(".sidebar-nav .nav-link");
    if (firstNavLink) {
      firstNavLink.focus();
    } else {
      sidebarClose?.focus();
    }
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

/*
  لوحة الإعدادات: نمط Popover غير modal (نمط الـ Disclosure حسب WAI-ARIA APG).
  لا overlay ولا حجب للصفحة ولا حبس للتركيز، حتى يتمكّن المستخدم من رؤية
  أثر تغيير اللغة والمظهر مباشرة على الموقع (WCAG 2.1.2 / 2.4.11).
*/
function initSettingsDropdown() {
  const settingsToggle = document.getElementById("settings-toggle");
  const settingsDropdown = document.getElementById("settings-dropdown");
  const settingsClose = document.getElementById("settings-panel-close");

  if (!settingsToggle || !settingsDropdown) return;

  const isOpen = () => settingsDropdown.classList.contains("is-open");

  function openDropdown() {
    settingsDropdown.classList.add("is-open");
    settingsToggle.setAttribute("aria-expanded", "true");
  }

  function closeDropdown({ restoreFocus = true } = {}) {
    if (!isOpen()) return;
    settingsDropdown.classList.remove("is-open");
    settingsToggle.setAttribute("aria-expanded", "false");
    if (restoreFocus) {
      settingsToggle.focus();
    }
  }

  settingsToggle.addEventListener("click", () => {
    if (isOpen()) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  settingsClose?.addEventListener("click", () => closeDropdown());

  document.addEventListener("click", (event) => {
    if (!isOpen()) return;
    if (!settingsDropdown.contains(event.target)) {
      closeDropdown({ restoreFocus: false });
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
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

function moveFocusToMainContent() {
  const mainContent = document.getElementById("main-content");
  if (!mainContent) return;
  if (typeof mainContent.focus === "function") {
    try {
      mainContent.focus({ preventScroll: true });
    } catch (error) {
      mainContent.focus();
    }
  }
}

function initFocusManagement() {
  const isPageNavigation = document.referrer && document.referrer !== window.location.href;
  const hasNavigationEntry = performance.getEntriesByType && performance.getEntriesByType("navigation").length > 0;
  const navigationType = hasNavigationEntry ? performance.getEntriesByType("navigation")[0].type : null;

  if (navigationType === "navigate" || isPageNavigation) {
    moveFocusToMainContent();
  }
}

function init() {
  initSidebar();
  initSettingsDropdown();
  initSettings();
  loadPreferences();
  initFocusManagement();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
