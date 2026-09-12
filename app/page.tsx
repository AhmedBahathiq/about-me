"use client";

import { useEffect, useState } from "react";

type Language = "ar" | "en";

const publicAsset = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`;

const content = {
  ar: {
    nav: [
      ["الرئيسية", "#home"],
      ["عني", "#about"],
      ["أعمالي", "#projects"],
      ["المسار", "#journey"],
    ],
    contact: "تواصل معي",
    available: "متاح للتدريب والتعاون",
    intro: "أحمد يوسف عمر باحاذق",
    titleA: "أحوّل الأفكار إلى",
    titleB: "تجارب رقمية ذكية.",
    heroText:
      "طالب ذكاء اصطناعي ومطور يعتمد على الذكاء الاصطناعي لبناء مواقع سريعة، واضحة، ومصممة حول تجربة المستخدم.",
    seeWork: "شاهد أعمالي",
    download: "تحميل السيرة",
    profileRole: "مهندس ذكاء اصطناعي",
    profileSub: "AI-Assisted Developer",
    location: "جدة، السعودية",
    stats: [
      ["AI", "التخصص الجامعي"],
      ["04", "مشاريع منجزة"],
      ["02", "شهادات احترافية"],
      ["65", "كلمة في الدقيقة"],
    ],
    sectionOne: "01 / من أنا",
    aboutTitle: "أتعلم بسرعة، أبني بذكاء، وأهتم بالتفاصيل.",
    aboutText:
      "أدرس بكالوريوس الذكاء الاصطناعي في جامعة جدة، وأحوّل ما أتعلمه إلى منتجات رقمية حقيقية. أحب النماذج الأولية السريعة، حل المشكلات، وبناء واجهات عربية متجاوبة باستخدام أدوات الذكاء الاصطناعي الحديثة.",
    principle: "ما يميزني",
    principleText:
      "أجمع بين فهم الذكاء الاصطناعي وسرعة تحويل الأفكار إلى نماذج عملية.",
    skillsLabel: "التقنيات والأدوات",
    sectionTwo: "02 / مشاريع منجزة",
    projectsTitle: "أفكار تحولت إلى منتجات تعمل.",
    projectsSub: "استعرض كل منتج، وافتح النسخة المباشرة أو التطبيق أو الكود المتاح.",
    liveProject: "مشروع مباشر",
    live: "فتح المشروع",
    website: "زيارة الموقع",
    appStore: "App Store",
    googlePlay: "Google Play",
    openSourceProject: "مشروع مفتوح المصدر",
    code: "عرض الكود",
    projects: [
      {
        tag: "منصة دراسية • ويب وiOS • 2026",
        title: "دربك الدراسي",
        desc: "منصة عربية متكاملة لتنظيم الدراسة واليوم: المهام والجداول والمعدل، جلسات التركيز، الملاحظات، الأهداف والإنجازات، بتجربة متزامنة على الويب والجوال.",
      },
      {
        tag: "محاكاة وكلاء مستقلة • 2026",
        title: "آيتوبيا",
        desc: "عالم جزيرة حي لوكلاء ذكاء اصطناعي مستقلين يتحدثون ويجمعون الموارد ويبنون العلاقات والمجتمع، بينما يستطيع الجميع متابعة حياتهم وأحداثهم مباشرة.",
      },
      {
        tag: "متجر عربي • 2026",
        title: "لذيذ يا حامض",
        desc: "متجر عربي متجاوب لطلب ورق العنب عبر واتساب، مع خيارات الاستلام والتوصيل، حساب تلقائي، والتحقق من رقم الجوال السعودي.",
      },
      {
        tag: "واجهة شخصية • 2026",
        title: "السيرة الذاتية",
        desc: "تجربة ويب شخصية لعرض الملف المهني والسيرة بأسلوب تفاعلي، مبنية باستخدام HTML وCSS وJavaScript.",
      },
    ],
    sectionThree: "03 / التعليم والشهادات",
    journeyTitle: "مساري الأكاديمي",
    education: "التعليم",
    university: "جامعة جدة",
    degree: "بكالوريوس العلوم في الذكاء الاصطناعي",
    college: "كلية علوم وهندسة الحاسب",
    expected: "2024 — 2029 (متوقع)",
    awards: "الشهادات الاحترافية",
    certificates: [
      ["مقدمة في الذكاء الاصطناعي", "IBM عبر Coursera • فبراير 2026"],
      ["HTML وCSS وJavaScript", "Udemy / YouAccel • مايو 2020"],
    ],
    resumeEyebrow: "السيرة الذاتية",
    resumeTitle: "التفاصيل الكاملة، في ملف واحد.",
    resumeText:
      "استعرض تعليمي، مهاراتي، شهاداتي وتفاصيل المشروع، أو حمّل نسخة PDF للاحتفاظ بها.",
    resumeButton: "تحميل ملف PDF",
    sectionFour: "04 / لنبني شيئًا رائعًا",
    contactTitle: "عندك فكرة؟ خلّنا نتكلم.",
    contactText:
      "مفتوح لفرص التدريب، المشاريع التقنية والتعاون في حلول الذكاء الاصطناعي وتطوير الويب.",
    copy: "نسخ البريد",
    copied: "تم النسخ",
    email: "إرسال بريد",
    follow: "تجدني أيضًا على",
    footer: "صُمم وطُوّر باهتمام في جدة.",
  },
  en: {
    nav: [
      ["Home", "#home"],
      ["About", "#about"],
      ["Work", "#projects"],
      ["Journey", "#journey"],
    ],
    contact: "Contact me",
    available: "Open to internships & collaborations",
    intro: "Ahmed Yousef Omar Bahathiq",
    titleA: "I turn ideas into",
    titleB: "smart digital experiences.",
    heroText:
      "Artificial Intelligence student and AI-assisted developer building fast, thoughtful websites around real user needs.",
    seeWork: "Explore my work",
    download: "Download CV",
    profileRole: "AI Engineer",
    profileSub: "AI-Assisted Developer",
    location: "Jeddah, Saudi Arabia",
    stats: [
      ["AI", "Field of study"],
      ["04", "Completed projects"],
      ["02", "Professional certificates"],
      ["65", "Words per minute"],
    ],
    sectionOne: "01 / About me",
    aboutTitle: "I learn fast, build smart, and care about the details.",
    aboutText:
      "I am pursuing a BSc in Artificial Intelligence at the University of Jeddah and turning what I learn into real digital products. I enjoy rapid prototyping, problem-solving, and building responsive Arabic-first experiences with modern AI tools.",
    principle: "What I bring",
    principleText:
      "I combine an understanding of AI with the speed to turn ideas into practical prototypes.",
    skillsLabel: "Stack & tools",
    sectionTwo: "02 / Completed projects",
    projectsTitle: "Ideas turned into working products.",
    projectsSub: "Explore each product through its live experience, app, or available source code.",
    liveProject: "Live project",
    live: "Open project",
    website: "Visit website",
    appStore: "App Store",
    googlePlay: "Google Play",
    openSourceProject: "Open-source project",
    code: "View source",
    projects: [
      {
        tag: "Study platform • Web & iOS • 2026",
        title: "Darbak Study",
        desc: "An Arabic-first study and daily planning platform for tasks, schedules, GPA tracking, focus sessions, notes, goals, and achievements across web and mobile.",
      },
      {
        tag: "Autonomous agent simulation • 2026",
        title: "Aitopia",
        desc: "A persistent island world where autonomous AI agents talk, gather resources, form relationships, and build a society while anyone can follow their lives and events in real time.",
      },
      {
        tag: "Arabic storefront • 2026",
        title: "Lazeez Yahamid",
        desc: "A responsive Arabic storefront for ordering grape leaves through WhatsApp, with pickup and delivery options, automatic totals, and Saudi mobile validation.",
      },
      {
        tag: "Personal experience • 2026",
        title: "Curriculum Vitae",
        desc: "An interactive personal web experience for presenting a professional profile and resume, built with HTML, CSS, and JavaScript.",
      },
    ],
    sectionThree: "03 / Education & certificates",
    journeyTitle: "My academic journey",
    education: "Education",
    university: "University of Jeddah",
    degree: "Bachelor of Science in Artificial Intelligence",
    college: "College of Computer Science and Engineering",
    expected: "2024 — 2029 (Expected)",
    awards: "Professional certificates",
    certificates: [
      ["Introduction to Artificial Intelligence", "IBM via Coursera • February 2026"],
      ["HTML, CSS & JavaScript", "Udemy / YouAccel • May 2020"],
    ],
    resumeEyebrow: "Curriculum vitae",
    resumeTitle: "The full story, in one document.",
    resumeText:
      "Explore my education, skills, certificates, and project details, or save a PDF copy for later.",
    resumeButton: "Download PDF",
    sectionFour: "04 / Let's build something great",
    contactTitle: "Have an idea? Let's talk.",
    contactText:
      "Open to internships, technical projects, and collaborations in AI solutions and web development.",
    copy: "Copy email",
    copied: "Copied",
    email: "Send an email",
    follow: "Find me on",
    footer: "Designed and built with care in Jeddah.",
  },
} as const;

const skillGroups = [
  ["CORE", "HTML", "CSS", "JavaScript", "Git", "Vibe Coding"],
  ["AI & CODE", "AI-Assisted Development", "Python", "Java", "Node.js"],
  ["TOOLS", "Claude", "Codex", "Replit", "Figma", "Canva"],
];

export default function Home() {
  const [language, setLanguage] = useState<Language>("ar");
  const [copied, setCopied] = useState(false);
  const t = content[language];
  const isArabic = language === "ar";

  const navigateToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    event.stopPropagation();

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    const top = href === "#home" ? 0 : target.getBoundingClientRect().top + window.scrollY;
    window.history.replaceState(null, "", href);
    window.scrollTo({ top, left: 0, behavior: "auto" });
    event.currentTarget.blur();
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [language, isArabic]);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      observer.disconnect();
    };
  }, [language]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("ahmedbahathiq1@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="site-shell" dir={isArabic ? "rtl" : "ltr"}>
      <div className="cursor-glow" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home" onClick={(event) => navigateToSection(event, "#home")} aria-label={isArabic ? "العودة للرئيسية" : "Back to home"}>
          <span className="brand-mark">AB</span>
          <span className="brand-copy">
            AHMED
            <small>AI / DEV</small>
          </span>
        </a>

        <nav className="nav-links" aria-label={isArabic ? "التنقل الرئيسي" : "Primary navigation"}>
          {t.nav.map(([label, href]) => (
            <a href={href} key={href} onClick={(event) => navigateToSection(event, href)}>{label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="language-toggle"
            type="button"
            onClick={() => setLanguage(isArabic ? "en" : "ar")}
            aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
          >
            <span className={isArabic ? "" : "active"}>EN</span>
            <i aria-hidden="true" />
            <span className={isArabic ? "active" : ""}>ع</span>
          </button>
          <a className="nav-contact" href="#contact" onClick={(event) => navigateToSection(event, "#contact")}>{t.contact}</a>
        </div>
      </header>

      <section className="hero section" id="home">
        <div className="hero-copy reveal">
          <div className="availability"><span />{t.available}</div>
          <p className="eyebrow">{t.intro}</p>
          <h1>
            {t.titleA}<br />
            <span>{t.titleB}</span>
          </h1>
          <p className="hero-lead">{t.heroText}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects" onClick={(event) => navigateToSection(event, "#projects")}>
              {t.seeWork}<span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href={publicAsset("Ahmed_Bahathiq_CV.pdf")} download>
              {t.download}<span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="portrait-stage reveal">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="portrait-card">
            <div className="portrait-topline">
              <span>AHMED.B</span><span>01 / 26</span>
            </div>
            <div className="portrait-wrap">
              <img src={publicAsset("ahmed-bahathiq.jpeg")} alt={isArabic ? "الصورة الشخصية لأحمد باحاذق" : "Portrait of Ahmed Bahathiq"} />
              <div className="scan-line" aria-hidden="true" />
            </div>
            <div className="portrait-meta">
              <div><strong>{t.profileRole}</strong><span>{t.profileSub}</span></div>
              <span className="location-dot">{t.location}</span>
            </div>
          </div>
          <div className="floating-chip chip-ai">AI<span>ENGINEER</span></div>
          <div className="floating-chip chip-projects"><b>04</b><span>PROJECTS</span></div>
        </div>
      </section>

      <section className="stats-strip reveal" aria-label={isArabic ? "إحصاءات سريعة" : "Quick facts"}>
        {t.stats.map(([value, label]) => (
          <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </section>

      <section className="section about" id="about">
        <div className="section-heading reveal">
          <p className="section-number">{t.sectionOne}</p>
          <h2>{t.aboutTitle}</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy reveal">
            <p>{t.aboutText}</p>
            <div className="principle-card">
              <span className="principle-icon">✦</span>
              <div><h3>{t.principle}</h3><p>{t.principleText}</p></div>
            </div>
          </div>
          <div className="skill-stack reveal">
            <p className="mini-label">{t.skillsLabel}</p>
            {skillGroups.map(([group, ...skills], index) => (
              <div className="skill-group" key={group} style={{ "--delay": `${index * 0.08}s` } as React.CSSProperties}>
                <span>{group}</span>
                <div>{skills.map((skill) => <b key={skill}>{skill}</b>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>ARTIFICIAL INTELLIGENCE</span><i>✦</i><span>VIBE CODING</span><i>✦</i>
          <span>WEB EXPERIENCES</span><i>✦</i><span>RAPID PROTOTYPING</span><i>✦</i>
          <span>ARTIFICIAL INTELLIGENCE</span><i>✦</i><span>VIBE CODING</span><i>✦</i>
          <span>WEB EXPERIENCES</span><i>✦</i><span>RAPID PROTOTYPING</span><i>✦</i>
        </div>
      </div>

      <section className="section projects" id="projects">
        <div className="section-heading projects-heading reveal">
          <div><p className="section-number">{t.sectionTwo}</p><h2>{t.projectsTitle}</h2></div>
          <p>{t.projectsSub}</p>
        </div>

        <article className="project-card project-featured reveal">
          <a className="project-visual visual-darbak" href="https://www.darbakstudy.com/" target="_blank" rel="noreferrer" aria-label={`${t.website}: ${t.projects[0].title}`}>
            <div className="browser-bar"><i /><i /><i /><span>darbakstudy.com</span></div>
            <div className="darbak-mock">
              <aside className="darbak-side"><b>د</b><span /><span /><span /><span /></aside>
              <div className="darbak-main">
                <small>صباح الخير يا أحمد</small>
                <strong>جاهز ليوم دراسي منتج؟</strong>
                <div className="darbak-metrics"><span><b>7س 25د</b><small>هذا الأسبوع</small></span><span><b>78%</b><small>إنجاز المهام</small></span><span><b>4.62</b><small>المعدل الحالي</small></span></div>
                <div className="darbak-tasks"><b>مهام اليوم</b><i /><i /><i /></div>
              </div>
            </div>
            <span className="visual-arrow">↗</span>
          </a>
          <div className="project-info">
            <div className="project-kicker"><span>{t.liveProject}</span><i /></div>
            <p>{t.projects[0].tag}</p>
            <h3>{t.projects[0].title}</h3>
            <p className="project-desc">{t.projects[0].desc}</p>
            <div className="tech-row"><span>Web</span><span>iOS</span><span>Productivity</span><span>Arabic / English</span></div>
            <div className="project-actions">
              <a className="text-link primary-link" href="https://www.darbakstudy.com/" target="_blank" rel="noreferrer">{t.website}<span>↗</span></a>
              <a className="text-link app-store-link" href="https://apps.apple.com/kz/app/%D8%AF%D8%B1%D8%A8%D9%83-%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A/id6794216378" target="_blank" rel="noreferrer">{t.appStore}<span>↗</span></a>
              <a className="text-link play-store-link" href="https://play.google.com/store/apps/details?id=app.darbak.study&amp;hl=ar" target="_blank" rel="noreferrer">{t.googlePlay}<span>↗</span></a>
            </div>
          </div>
        </article>

        <article className="project-card project-reverse reveal">
          <a className="project-visual visual-aitopia" href="https://aitopia.ahmedbahathiq.com/" target="_blank" rel="noreferrer" aria-label={`${t.live}: ${t.projects[1].title}`}>
            <div className="browser-bar"><i /><i /><i /><span>aitopia.ahmedbahathiq.com</span></div>
            <div className="aitopia-mock">
              <div className="aitopia-water" />
              <div className="aitopia-island">
                <span className="island-zone zone-forest">الغابة</span>
                <span className="island-zone zone-spring">النبع</span>
                <span className="island-zone zone-camp">المخيم</span>
                <i className="agent-dot agent-one">س</i>
                <i className="agent-dot agent-two">ن</i>
                <i className="agent-dot agent-three">ر</i>
              </div>
              <div className="aitopia-feed"><small>سجل الجزيرة</small><span /><span /><span /></div>
            </div>
            <span className="visual-arrow">↗</span>
          </a>
          <div className="project-info">
            <div className="project-kicker"><span>{t.openSourceProject}</span><i /></div>
            <p>{t.projects[1].tag}</p>
            <h3>{t.projects[1].title}</h3>
            <p className="project-desc">{t.projects[1].desc}</p>
            <div className="tech-row"><span>React</span><span>TypeScript</span><span>Cloudflare</span><span>OpenAI</span></div>
            <div className="project-actions">
              <a className="text-link primary-link" href="https://aitopia.ahmedbahathiq.com/" target="_blank" rel="noreferrer">{t.live}<span>↗</span></a>
              <a className="text-link" href="https://github.com/AhmedBahathiq/aitopia-agent-world" target="_blank" rel="noreferrer">{t.code}<span>↗</span></a>
            </div>
          </div>
        </article>

        <article className="project-card reveal">
          <a className="project-visual visual-lazeez" href="https://ahmedbahathiq.github.io/lazeez-yahamid/" target="_blank" rel="noreferrer" aria-label={`${t.live}: ${t.projects[2].title}`}>
            <div className="browser-bar"><i /><i /><i /><span>lazeez-yahamid</span></div>
            <div className="storefront-mock">
              <div className="store-nav"><b>لذيذ يا حامض</b><span>السلة ٢</span></div>
              <div className="store-hero"><small>طازج • لذيذ • يوصل لبابك</small><strong>ورق عنب<br />بطعم البيت</strong><span>اطلب الآن</span></div>
              <div className="store-products"><i /><i /><i /></div>
            </div>
            <span className="visual-arrow">↗</span>
          </a>
          <div className="project-info">
            <div className="project-kicker"><span>{t.liveProject}</span><i /></div>
            <p>{t.projects[2].tag}</p>
            <h3>{t.projects[2].title}</h3>
            <p className="project-desc">{t.projects[2].desc}</p>
            <div className="tech-row"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>WhatsApp</span></div>
            <div className="project-actions">
              <a className="text-link primary-link" href="https://ahmedbahathiq.github.io/lazeez-yahamid/" target="_blank" rel="noreferrer">{t.live}<span>↗</span></a>
              <a className="text-link" href="https://github.com/AhmedBahathiq/lazeez-yahamid" target="_blank" rel="noreferrer">{t.code}<span>↗</span></a>
            </div>
          </div>
        </article>

        <article className="project-card project-reverse reveal">
          <a className="project-visual visual-cv" href="https://ahmedbahathiq.github.io/cv/" target="_blank" rel="noreferrer" aria-label={`${t.live}: ${t.projects[3].title}`}>
            <div className="browser-bar"><i /><i /><i /><span>ahmed / cv</span></div>
            <div className="resume-mock">
              <div className="resume-side"><div className="mock-avatar">AB</div><b>AHMED<br />BAHATHIQ</b><span /><span /><span /></div>
              <div className="resume-main"><small>AI ENGINEER</small><strong>EXPERIENCE</strong><i /><i /><i /><strong>SKILLS</strong><div><span>AI</span><span>WEB</span><span>CODE</span></div></div>
            </div>
            <span className="visual-arrow">↗</span>
          </a>
          <div className="project-info">
            <div className="project-kicker"><span>{t.liveProject}</span><i /></div>
            <p>{t.projects[3].tag}</p>
            <h3>{t.projects[3].title}</h3>
            <p className="project-desc">{t.projects[3].desc}</p>
            <div className="tech-row"><span>HTML</span><span>CSS</span><span>JavaScript</span></div>
            <div className="project-actions">
              <a className="text-link primary-link" href="https://ahmedbahathiq.github.io/cv/" target="_blank" rel="noreferrer">{t.live}<span>↗</span></a>
              <a className="text-link" href="https://github.com/AhmedBahathiq/cv" target="_blank" rel="noreferrer">{t.code}<span>↗</span></a>
            </div>
          </div>
        </article>
      </section>

      <section className="section journey" id="journey">
        <div className="section-heading reveal">
          <p className="section-number">{t.sectionThree}</p>
          <h2>{t.journeyTitle}</h2>
        </div>
        <div className="journey-grid">
          <div className="education-panel reveal">
            <p className="mini-label">{t.education}</p>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <p>{t.expected}</p>
              <h3>{t.university}</h3>
              <strong>{t.degree}</strong>
              <span>{t.college}</span>
            </div>
          </div>
          <div className="awards-panel reveal">
            <p className="mini-label">{t.awards}</p>
            {t.certificates.map(([name, issuer], index) => (
              <div className="award-row" key={`${name}-${issuer}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{name}</strong><small>{issuer}</small></div>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-banner reveal">
          <div className="resume-orb" aria-hidden="true">CV</div>
          <div><p className="section-number">{t.resumeEyebrow}</p><h3>{t.resumeTitle}</h3><p>{t.resumeText}</p></div>
          <a className="button button-light" href={publicAsset("Ahmed_Bahathiq_CV.pdf")} download>{t.resumeButton}<span>↓</span></a>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-card reveal">
          <p className="section-number">{t.sectionFour}</p>
          <h2>{t.contactTitle}</h2>
          <p className="contact-lead">{t.contactText}</p>
          <a className="email-display" href="mailto:ahmedbahathiq1@gmail.com">
            <span>ahmedbahathiq1</span><i>@gmail.com</i><b>↗</b>
          </a>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:ahmedbahathiq1@gmail.com">{t.email}<span>↗</span></a>
            <button className="button button-secondary" type="button" onClick={copyEmail}>{copied ? t.copied : t.copy}<span>{copied ? "✓" : "□"}</span></button>
          </div>
          <div className="social-row">
            <span>{t.follow}</span>
            <a href="https://github.com/AhmedBahathiq" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/ahmed-bahathiq-b2bb31361/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://www.tiktok.com/@_41ff_" target="_blank" rel="noreferrer">TikTok ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#home" onClick={(event) => navigateToSection(event, "#home")}><span className="brand-mark">AB</span><span className="brand-copy">AHMED<small>AI / DEV</small></span></a>
        <p>{t.footer}</p>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}

