import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import type createGlobe from "cobe";
import { copy, type Content, type Language } from "./content";
import { SITE_URL, languagePaths, seo } from "./seo";

const navItems = [
  { key: "services", href: "#services-section" },
  { key: "space", href: "#ground-segment-section" },
  { key: "work", href: "#work" },
  { key: "about", href: "#about-section" },
] as const;

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" fill="none">
      <path
        d={diagonal ? "M5 13 13 5M6 5h7v7" : "M2 9h12M9 3l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

function Noise({ id }: { id: string }) {
  return (
    <div className="noise" aria-hidden="true">
      <svg>
        <filter id={id}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".82"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${id})`} />
      </svg>
    </div>
  );
}

function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const shell = canvas?.parentElement;
    if (!canvas || !shell) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let globe: ReturnType<typeof createGlobe> | undefined;
    let frame = 0;
    let phi = 0.35;
    let lastSize = 0;
    let isVisible = true;
    let disposed = false;
    // Loaded lazily so the WebGL library stays out of the main bundle
    // and is never evaluated during build-time pre-rendering.
    let globeFactory: typeof createGlobe | undefined;

    const animate = () => {
      frame = 0;
      if (!globe || !isVisible || reducedMotion) return;
      phi += 0.0012;
      globe.update({ phi });
      frame = window.requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (!frame && !reducedMotion && isVisible && globe) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    const resize = () => {
      const size = Math.round(canvas.getBoundingClientRect().width);
      if (!globeFactory || size < 2 || size === lastSize) return;
      const createGlobe = globeFactory;

      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      globe?.destroy();
      try {
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        globe = createGlobe(canvas, {
          width: Math.round(size * pixelRatio),
          height: Math.round(size * pixelRatio),
          devicePixelRatio: pixelRatio,
          phi,
          theta: 0.18,
          dark: 0.28,
          scale: 1.02,
          diffuse: 1.25,
          mapSamples: 24000,
          mapBrightness: 4.5,
          baseColor: [0.09, 0.17, 0.36],
          markerColor: [0.64, 0.78, 1],
          glowColor: [0.20, 0.40, 0.88],
          opacity: 1,
          offset: [0, 0],
          markers: [],
        });
        lastSize = size;
        shell.classList.remove("globe-fallback-active");
        startAnimation();
      } catch {
        globe = undefined;
        shell.classList.add("globe-fallback-active");
      }
    };

    const sizeObserver = new ResizeObserver(resize);
    sizeObserver.observe(canvas);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) startAnimation();
      else if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    });
    visibilityObserver.observe(shell);

    import("cobe")
      .then(({ default: factory }) => {
        if (disposed) return;
        globeFactory = factory;
        resize();
      })
      .catch(() => {
        if (!disposed) shell.classList.add("globe-fallback-active");
      });

    return () => {
      disposed = true;
      sizeObserver.disconnect();
      visibilityObserver.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      globe?.destroy();
    };
  }, []);

  return (
    <div className="globe-shell">
      <canvas ref={canvasRef} aria-hidden="true" />
      <span className="globe-fallback" />
    </div>
  );
}

function Header({
  lang,
  onLanguage,
  t,
}: {
  lang: Language;
  onLanguage: () => void;
  t: Content;
}) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;

      setHidden((isHidden) => {
        if (open || currentScrollY < 48 || direction < -3) return false;
        if (direction > 3) return true;
        return isHidden;
      });
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, [open]);

  return (
    <header
      className={`site-header${hidden && !open ? " site-header--hidden" : ""}`}
      onFocusCapture={() => setHidden(false)}
    >
      <a
        className="wordmark"
        href="#top"
        aria-label="Ascentio Technologies home"
      >
        <span>ASCENTIO</span>
        <small>TECHNOLOGIES</small>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-label={t.nav.menu}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
      <nav
        className={open ? "main-nav main-nav--open" : "main-nav"}
        aria-label="Main navigation"
      >
        {navItems.map(({ key, href }) => (
          <a
            href={href}
            key={key}
            onClick={() => {
              setOpen(false);
              setHidden(false);
            }}
          >
            {t.nav[key]}
          </a>
        ))}
        <button
          className="language-toggle"
          type="button"
          onClick={onLanguage}
          aria-label={`Switch language to ${t.nav.language}`}
        >
          {lang === "en" ? "ES" : "EN"}
        </button>
      </nav>
      <a className="header-contact" href="#contact">
        {t.nav.contact}
        <Arrow diagonal />
      </a>
    </header>
  );
}

function Hero({ t }: { t: Content }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-visual" aria-hidden="true">
        <Globe />
      </div>
      <Noise id="hero-noise" />
      <div className="hero-main">
        <h1 id="hero-title" className="display">
          {t.hero.title}
        </h1>
        <p className="hero-lede">{t.hero.description}</p>
        <a className="hero-link" href="#services-title">
          {t.hero.action}
          <Arrow />
        </a>
      </div>
      <PartnersSection t={t} />
      {/* <div className="hero-bottom">
        <div
          className="hero-milestones"
          role="group"
          aria-label={t.hero.milestonesLabel}
        >
          {t.hero.milestones.map(([value, detail]) => (
            <div className="hero-milestone" key={value}>
              <strong>{value}</strong>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}

const partnerLogos = [
  { name: "CONAE", file: "Conae 4.png" },
  { name: "EPEC", file: "Epec_arreglo1 1.png" },
  { name: "INVAP", file: "Invap2 5.png" },
  { name: "Metropower Silexis", file: "Silexis 4.png" },
  { name: "Cartocor", file: "cartocor_arreglo1 1.png" },
  { name: "GMV", file: "gmv_arreglo2 1.png" },
  { name: "ON-AIR", file: "on-air 5.png" },
  { name: "TELUS International", file: "telus2 4.png" },
  { name: "TGN", file: "tgn_arreglo1 1.png" },
];

function PartnersSection({ t }: { t: Content }) {
  const logoSet = (duplicate = false) => (
    <ul
      className="partners-logo-set"
      aria-hidden={duplicate || undefined}
    >
      {partnerLogos.map((logo) => (
        <li key={logo.name}>
          <img
            src={encodeURI(`${import.meta.env.BASE_URL}/images/logos/${logo.file}`)}
            alt={duplicate ? "" : logo.name}
            loading="lazy"
            decoding="async"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="partners-section" aria-labelledby="partners-title">
      <div className="page-width">
        <div className="partners-heading">
          <div className="partners-copy">
            <h2 id="partners-title">{t.partners.title}</h2>
            <p>{t.partners.description}</p>
          </div>
        </div>
      </div>
      <div className="partners-marquee">
        <div className="partners-marquee-track">
          {logoSet()}
          {logoSet(true)}
        </div>
      </div>
    </div>
  );
}

function ServicesSection({ t }: { t: Content }) {
  return (
    <section
      className="services-section"
      id="services-section"
      aria-labelledby="services-title"
    >
      <div className="page-width section-pad">
        <div className="services-heading" data-reveal>
          <h2 id="services-title">{t.services.title}</h2>
        </div>
        <ol className="services-list" data-reveal>
          {t.services.items.map((service, index) => (
            <li key={service.name}>
              <span className="service-number">0{index + 1}</span>
              <div className="service-copy">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
              <svg
                className="service-arrow"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 12h15m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </li>
          ))}
        </ol>
        <ImpactSection t={t} />
      </div>
    </section>
  );
}

function HistorySection({ t }: { t: Content }) {
  const completedEntries = t.history.entries.slice(0, 6);
  const upcomingEntries = t.history.entries.slice(6);

  const renderEntry = (
    entry: (typeof t.history.entries)[number],
    future = false,
  ) => (
    <li
      className={`history-item${future ? " is-future" : ""}`}
      key={`${entry.date}-${entry.title}`}
      data-reveal
    >
      <div className="history-copy">
        <span className="history-marker" aria-hidden="true" />
        <time className="history-date" dateTime={entry.date}>
          {entry.date}
        </time>
        <h3 className="history-milestone"><span>{entry.title}</span></h3>
        <p className="history-detail">{entry.detail}</p>
      </div>
    </li>
  );

  return (
    <section
      className="history-section section-pad"
      aria-labelledby="history-title"
    >
      <div className="page-width">
        <div className="history-head" data-reveal>
          <h2 id="history-title">{t.history.title}</h2>
          <p>{t.history.intro}</p>
        </div>
        <div className="history-track">
          <svg
            className="history-arc"
            viewBox="0 0 1200 280"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path className="history-arc-guide" d="M 0 252 C 190 52 400 0 600 0 C 800 0 1010 52 1200 252" />
            <path className="history-arc-line" d="M 0 270 C 190 70 400 15 600 15 C 800 15 1010 70 1200 270" />
            <path className="history-arc-stems" d="M 100 179 V 280 M 300 66 V 280 M 500 20 V 280 M 700 20 V 280 M 900 66 V 280 M 1100 179 V 280" />
            <circle cx="100" cy="179" r="5" />
            <circle cx="300" cy="66" r="5" />
            <circle cx="500" cy="20" r="5" />
            <circle cx="700" cy="20" r="5" />
            <circle cx="900" cy="66" r="5" />
            <circle className="history-arc-current-ring" cx="1100" cy="179" r="12" />
            <ellipse className="history-arc-orbit" cx="1100" cy="179" rx="19" ry="6" transform="rotate(-32 1100 179)" />
            <circle className="history-arc-current" cx="1100" cy="179" r="5" />
          </svg>
          <ol className="history-list" aria-label={t.history.title}>
            {completedEntries.map((entry) => renderEntry(entry))}
          </ol>
        </div>
        {upcomingEntries.length > 0 && (
          <div className="history-upcoming" data-reveal>
            <h3 className="history-upcoming-title">{t.history.upcomingLabel}</h3>
            <ol className="history-upcoming-list" aria-label={t.history.upcomingLabel}>
              {upcomingEntries.map((entry) => renderEntry(entry, true))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}

function GroundSegmentSection({ t }: { t: Content }) {
  return (
    <section
      className="ground-segment-section"
      id="ground-segment-section"
      aria-labelledby="ground-segment-title"
    >
      <div className="page-width ground-segment-intro" data-reveal>
        <p className="about-principle-label ground-segment-label">{t.groundSegment.label}</p>
        <h2 id="ground-segment-title">
          {t.groundSegment.title.map((word, index) => (
            <span key={word}>{index > 0 ? " " : ""}{word}</span>
          ))}
        </h2>
      </div>
      <div className="page-width ground-segment-stack">
        <ol className="ground-segment-list">
          {t.groundSegment.cards.map((card, index) => (
            <li className="ground-segment-card" key={card.title}>
              <div className="ground-card-panel">
                <img className="ground-card-logo" src="/images/logos/asc_logo.png" alt="" aria-hidden="true" />
                <div className="ground-card-main">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
              <div className="ground-card-details">
                <ul className="ground-card-detail-list">
                  {card.items.map(([label, description], itemIndex) => (
                    <li key={label}>
                      <span className="ground-item-number">{String(itemIndex + 1).padStart(2, "0")}</span>
                      <h4>{label}</h4>
                      <p>{description}</p>
                    </li>
                  ))}
                </ul>
                <span className="ground-card-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function WorkSection({ lang, t }: { lang: Language; t: Content }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section
      className="work-section section-pad"
      id="work"
      aria-labelledby="work-title"
    >
      <Noise id="work-noise" />
      <div className="page-width">
        <div className="work-head">
          <h2 id="work-title">{t.work.title}</h2>
          <p>
            {t.work.intro.split(t.work.introAccent)[0]}
            <span className="work-intro-accent">{t.work.introAccent}</span>
            {t.work.intro.split(t.work.introAccent)[1]}
          </p>
        </div>
        <ol
          className="work-cards"
          aria-label={lang === "en" ? "Published work" : "Proyectos publicados"}
          data-reveal
        >
          {t.work.cases.map((item, index) => {
            const isOpen = activeIndex === index;
            const descriptionId = `work-description-${index}`;

            return (
              <li
                className={isOpen ? "work-card is-open" : "work-card"}
                key={item.name}
              >
                <button
                  className="work-card-button"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={descriptionId}
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                >
                  <img
                    className="work-card-image"
                    src={`${import.meta.env.BASE_URL}${item.image}`}
                    alt={`${item.name} — ${item.sector}`}
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="work-card-top">
                    <span className="work-card-sector">{item.sector}</span>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                  <span
                    className="work-card-name work-card-name--collapsed"
                    aria-hidden={isOpen}
                  >
                    {item.name}
                  </span>
                  <span
                    className="work-card-expanded-content"
                    id={descriptionId}
                    aria-hidden={!isOpen}
                  >
                    <span className="work-card-name work-card-name--expanded">
                      {item.name}
                    </span>
                    <span className="work-card-description">
                      {item.description}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function ImpactSection({ t }: { t: Content }) {
  return (
    <div className="impact-strip" role="group" aria-label={t.impact.label}>
      <ul className="impact-grid">
        {t.impact.items.map((item) => (
          <li className="impact-item" key={item.value} data-reveal>
            <strong className="impact-value">{item.value}</strong>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AboutSection({ t }: { t: Content }) {
  const [introBeforeAccent, introAfterAccent] = t.about.intro.split(t.about.introAccent);

  return (
    <section
      className="about-section section-pad"
      id="about-section"
      aria-labelledby="about-title"
    >
      <div className="page-width">
        <div className="about-hero" id="about-hero" data-reveal>
          <img
            //src=`/images/aboutus.png`
            src={`${import.meta.env.BASE_URL}/images/aboutus.png`}
            alt={t.about.imageAlt}
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
          <h2 id="about-title">{t.about.title}</h2>
        </div>
        <p className="about-principle-label" data-reveal>{t.about.eyebrow}</p>
        <div className="about-lead" data-reveal>
          <p className="about-intro">
            {introBeforeAccent}
            <span className="about-intro-accent">{t.about.introAccent}</span>
            {introAfterAccent}
          </p>
          <p className="about-supporting">{t.about.supporting}</p>
        </div>
        <div className="principles" data-reveal>
          {[
            { item: t.about.mission, icon: "mission" },
            { item: t.about.vision, icon: "vision" },
            { item: t.about.values, icon: "values" },
          ].map(({ item: [title, detail], icon }) => (
            <article key={title}>
              <span className="principle-icon" aria-hidden="true">
                {icon === "mission" ? (
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M12 7v5l3 2" />
                    <path d="M12 1.5v2M22.5 12h-2M12 22.5v-2M1.5 12h2" />
                  </svg>
                ) : icon === "vision" ? (
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M2.5 12s3.4-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.4 6.5-9.5 6.5S2.5 12 2.5 12Z" />
                    <circle cx="12" cy="12" r="2.8" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="5" r="2.5" />
                    <circle cx="5" cy="18" r="2.5" />
                    <circle cx="19" cy="18" r="2.5" />
                    <path d="m10.8 7.2-4.5 8.6M13.2 7.2l4.5 8.6M7.5 18h9" />
                  </svg>
                )}
              </span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ lang, t }: { lang: Language; t: Content }) {
  const [error, setError] = useState("");
  const [messageOpen, setMessageOpen] = useState(false);
  const [topic, setTopic] = useState<string>(t.contact.topics[0]);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const mailto = useMemo(
    () => (subject: string, body: string) =>
      `mailto:contacto@ascentio.com.ar?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    [],
  );
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setError(
        lang === "en"
          ? "Complete all fields to prepare your email."
          : "Completá todos los campos para preparar el correo.",
      );
      return;
    }
    setError("");
    window.location.href = mailto(
      lang === "en"
        ? `${topic}: ${name}`
        : `${topic}: ${name}`,
      `${message}\n\n${lang === "en" ? "From" : "De"}: ${name}\nEmail: ${email}${company ? `\n${lang === "en" ? "Organization" : "Organización"}: ${company}` : ""}`,
    );
  };
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (messageOpen && !dialog.open) dialog.showModal();
    if (!messageOpen && dialog.open) dialog.close();
  }, [messageOpen]);
  return (
    <section
      className="contact-section section-pad"
      id="contact"
      aria-labelledby="contact-title"
    >
      <Noise id="contact-noise" />
      <div className="page-width contact-inner">
        <div className="contact-orbits" aria-hidden="true">
          <span className="contact-orbit contact-orbit--outer">
            <span className="contact-orbit-dot contact-orbit-dot--blue" />
          </span>
          <span className="contact-orbit contact-orbit--inner">
            <span className="contact-orbit-dot contact-orbit-dot--white" />
          </span>
        </div>
        <div className="contact-callout">
          <p className="contact-eyebrow">{t.contact.eyebrow}</p>
          <h2 id="contact-title">{t.contact.title}</h2>
          <p className="contact-intro">{t.contact.intro}</p>
          <div className="contact-actions">
            <button className="contact-write-button" type="button" onClick={() => { setError(""); setMessageOpen(true); }}>
              {t.contact.write}<Arrow />
            </button>
            <a className="contact-email" href="mailto:contacto@ascentio.com.ar">contacto@ascentio.com.ar</a>
          </div>
          <a className="contact-whatsapp" href="https://wa.link/gqpht4" target="_blank" rel="noreferrer">
            {lang === "en" ? "or chat on WhatsApp" : "o escribinos por WhatsApp"} · +54 9 358 402-3515
          </a>
        </div>
      </div>
      <dialog ref={dialogRef} className="contact-dialog" aria-labelledby="contact-dialog-title" onClose={() => setMessageOpen(false)} onClick={(event) => { if (event.target === dialogRef.current) setMessageOpen(false); }}>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-dialog-header">
            <div>
              <p className="contact-eyebrow">{t.contact.modalEyebrow}</p>
              <h3 id="contact-dialog-title">{t.contact.modalTitle}</h3>
            </div>
            <button className="contact-dialog-close" type="button" aria-label={t.contact.close} onClick={() => setMessageOpen(false)}>×</button>
          </div>
          <fieldset className="contact-topics">
            <legend>{t.contact.topicPrompt}</legend>
            <div className="contact-topic-options">
              {t.contact.topics.map((item) => (
                <button key={item} type="button" className={topic === item ? "is-selected" : ""} aria-pressed={topic === item} onClick={() => setTopic(item)}>{item}</button>
              ))}
            </div>
          </fieldset>
          <div className="contact-form-grid">
            <label>{t.contact.name}<input autoComplete="name" name="name" placeholder={t.contact.namePlaceholder} required /></label>
            <label>{t.contact.email}<input autoComplete="email" name="email" type="email" placeholder={t.contact.emailPlaceholder} required /></label>
          </div>
          <label>{t.contact.company} <span>({t.contact.optional})</span><input autoComplete="organization" name="company" placeholder={t.contact.companyPlaceholder} /></label>
          <label>{t.contact.message}<textarea name="message" rows={4} placeholder={t.contact.messagePlaceholder} required /></label>
          {error && <p className="form-feedback form-feedback--error" role="alert">{error}</p>}
          <div className="contact-form-footer">
            <p>{t.contact.formNote}</p>
            <div>
              <button className="contact-cancel" type="button" onClick={() => setMessageOpen(false)}>{t.contact.cancel}</button>
              <button className="contact-submit" type="submit">{t.contact.send}<Arrow /></button>
            </div>
          </div>
        </form>
      </dialog>
    </section>
  );
}

function Footer({ lang, t, onLanguage }: { lang: Language; t: Content; onLanguage: () => void }) {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <div className="footer-columns">
          <section className="footer-column" aria-labelledby="footer-offices">
            <h2 id="footer-offices">{t.footer.offices}</h2>
            {t.contact.locations.map(([city, address, url]) => (
              <a className="footer-office" href={url} target="_blank" rel="noreferrer" key={city}>
                <span>{city} — {address}</span>
              </a>
            ))}
          </section>
          <nav className="footer-column" aria-labelledby="footer-navigate">
            <h2 id="footer-navigate">{t.footer.navigate}</h2>
            <a href="#services-title">{t.nav.services}</a>
            <a href="#work-title">{t.nav.work}</a>
            <a href="#about-title">{t.nav.about}</a>
            <a href={`mailto:contacto@ascentio.com.ar?subject=${encodeURIComponent(lang === "en" ? "Work with us" : "Trabajá con nosotros")}`}>{t.footer.careers}</a>
          </nav>
          <nav className="footer-column" aria-labelledby="footer-follow">
            <h2 id="footer-follow">{t.footer.follow}</h2>
            <a href="https://www.instagram.com/ascentio.technologies/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/company/ascentio/" target="_blank" rel="noreferrer">LinkedIn</a>
          </nav>
          <nav className="footer-column" aria-labelledby="footer-more">
            <h2 id="footer-more">{t.footer.more}</h2>
            <a href="https://es.linkedin.com/company/ascentio-europe" target="_blank" rel="noreferrer">Ascentio Europe</a>
            <a href="https://www.certipedia.com/quality_marks/9108648427?locale=es&certificate_number=01+10006+1529931" target="_blank" rel="noreferrer">{t.footer.quality}</a>
          </nav>
        </div>
        <div className="footer-watermark" aria-hidden="true">ASCENTIO</div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {t.footer.rights}</span>
          <div className="footer-bottom-actions">
            <button type="button" onClick={onLanguage} aria-label={lang === "en" ? "Switch language to Spanish" : "Cambiar idioma a inglés"}>EN / ES</button>
            <a href="#top">{t.footer.backTop} ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function setMeta(selector: string, value: string) {
  document.querySelector(selector)?.setAttribute("content", value);
}

export default function App({ initialLang = "en" }: { initialLang?: Language }) {
  const [lang, setLang] = useState<Language>(initialLang);
  const t = copy[lang];
  useEffect(() => {
    const meta = seo[lang];
    const url = `${SITE_URL}${languagePaths[lang]}`;
    document.documentElement.lang = lang;
    document.title = meta.title;
    setMeta('meta[name="description"]', meta.description);
    setMeta('meta[property="og:title"]', meta.title);
    setMeta('meta[property="og:description"]', meta.description);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[property="og:locale"]', meta.locale);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    // Keep the address bar on the URL that matches the visible language,
    // so shared links and bookmarks open in the right language.
    if (window.location.pathname !== languagePaths[lang]) {
      window.history.replaceState(null, "", `${languagePaths[lang]}${window.location.hash}`);
    }
  }, [lang]);
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!targets.length) return;

    targets.forEach((target) => {
      target.dataset.revealState = "pending";
    });
    document.documentElement.classList.add("has-reveal");

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.dataset.revealState = "visible";
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Header
        lang={lang}
        t={t}
        onLanguage={() => setLang((value) => (value === "en" ? "es" : "en"))}
      />
      <main id="main">
        <Hero t={t} />
        <WorkSection lang={lang} t={t} />
        <HistorySection t={t} />
        <GroundSegmentSection t={t} />
        <ServicesSection t={t} />
        <AboutSection t={t} />
        <ContactSection lang={lang} t={t} />
      </main>
      <Footer lang={lang} t={t} onLanguage={() => setLang((value) => (value === "en" ? "es" : "en"))} />
    </>
  );
}
