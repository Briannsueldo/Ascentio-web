import { useEffect, useMemo, useState, type FormEvent } from "react";
import { copy, type Content, type Language } from "./content";

const navIds = ["services", "work", "about", "contact"] as const;
const assets = {
  orbit: "/images/research/nisar-orbit.jpg",
};

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

function Noise() {
  return (
    <div className="noise" aria-hidden="true">
      <svg>
        <filter id="fine-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".82"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#fine-noise)" />
      </svg>
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
  return (
    <header className="site-header">
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
        {navIds.map((id) => (
          <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>
            {t.nav[id]}
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
        {t.nav.action}
        <Arrow diagonal />
      </a>
    </header>
  );
}

function Hero({ t }: { t: Content }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-backdrop" role="img" aria-label="NASA visualization of the NISAR satellite orbiting Earth">
        <img src={assets.orbit} alt="" fetchPriority="high" />
      </div>
      <div className="hero-main">
        <h1 id="hero-title" className="display">
          {t.hero.title}
        </h1>
        <p className="hero-lede">{t.hero.description}</p>
        <a className="hero-link" href="#services">
          {t.hero.action}
          <Arrow />
        </a>
      </div>
      <div className="hero-bottom">
        <a
          className="hero-credit"
          href="https://commons.wikimedia.org/wiki/File:NISAR_satellite_orbit_(SVS5615_-_2415).jpg"
          target="_blank"
          rel="noreferrer"
        >
          NISAR orbital visualization · NASA SVS · Public domain
          <Arrow diagonal />
        </a>
        <div className="hero-milestones" aria-label={t.hero.milestonesLabel}>
          {t.hero.milestones.map(([value, detail]) => (
            <div className="hero-milestone" key={value}>
              <strong>{value}</strong>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ t }: { t: Content }) {
  return (
    <section
      className="services-section"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="published-work" role="group" aria-label={t.work.publishedLabel}>
        <div className="page-width published-work-inner" data-reveal>
          <div className="published-work-copy">
            <h2 id="published-work-title">{t.work.publishedTitle}</h2>
            <p>{t.work.publishedDescription}</p>
          </div>
          <div className="published-work-marks" aria-label={t.work.publishedLabel}>
            {t.work.cases.map((item, index) => (
              <span className={`work-mark work-mark--${index + 1}`} key={item.name}>
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="page-width section-pad">
        <div className="section-top" data-reveal>
          <p>{t.services.intro}</p>
        </div>
        <div className="services-layout" data-reveal>
          <h2 id="services-title">{t.services.title}</h2>
          <ol className="services-list">
            {t.services.items.map((service, index) => (
              <li key={service.name}>
                <span className="service-number">0{index + 1}</span>
                <div className="service-copy">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function HistorySection({ t }: { t: Content }) {
  return (
    <section
      className="history-section section-pad"
      aria-labelledby="history-title"
    >
      <div className="page-width">
        <div className="history-head">
          <h2 id="history-title">{t.history.title}</h2>
          <p>{t.history.intro}</p>
        </div>
        <ol className="history-list">
          {t.history.entries.map((entry) => (
            <li key={entry.title}>
              <span className="history-date">{entry.date}</span>
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function WorkSection({ lang, t }: { lang: Language; t: Content }) {
  const [active, setActive] = useState(0);
  const selected = t.work.cases[active];
  return (
    <section
      className="work-section section-pad"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="page-width">
        <div className="work-head">
          <h2 id="work-title">{t.work.title}</h2>
          <p>{t.work.intro}</p>
        </div>
        <div className="work-layout">
          <div
            className="work-index"
            role="group"
            aria-label={
              lang === "en" ? "Published work" : "Proyectos publicados"
            }
          >
            {t.work.cases.map((item, index) => (
              <button
                type="button"
                className={active === index ? "work-row is-active" : "work-row"}
                key={item.name}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                aria-pressed={active === index}
              >
                <span className="work-title">
                  {item.name}
                  <small>{item.sector}</small>
                </span>
                <Arrow diagonal />
              </button>
            ))}
          </div>
          <article className="work-detail" aria-live="polite">
            <h3>{selected.name}</h3>
            <p>{selected.description}</p>
            <span>{selected.sector}</span>
          </article>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ t }: { t: Content }) {
  return (
    <section
      className="about-section section-pad"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="page-width">
        <div className="about-lead" data-reveal>
          <h2 id="about-title">{t.about.title}</h2>
          <p>{t.about.intro}</p>
        </div>
        <div className="principles" data-reveal>
          {[t.about.mission, t.about.vision, t.about.values].map(
            ([title, detail]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ lang, t }: { lang: Language; t: Content }) {
  const [prepared, setPrepared] = useState(false);
  const [error, setError] = useState("");
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
    const message = String(form.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setError(
        lang === "en"
          ? "Complete all fields to prepare your email."
          : "Completá todos los campos para preparar el correo.",
      );
      setPrepared(false);
      return;
    }
    setError("");
    setPrepared(true);
    window.location.href = mailto(
      lang === "en"
        ? `Project enquiry from ${name}`
        : `Consulta de proyecto de ${name}`,
      `${message}\n\n${lang === "en" ? "From" : "De"}: ${name}\nEmail: ${email}`,
    );
  };
  const workBody =
    lang === "en"
      ? "Hello Ascentio team, I would like to ask about working with you."
      : "Hola equipo de Ascentio, quisiera consultar sobre oportunidades para trabajar con ustedes.";
  return (
    <section
      className="contact-section section-pad"
      id="contact"
      aria-labelledby="contact-title"
    >
      <Noise />
      <div className="page-width contact-inner">
        <h2 id="contact-title">{t.contact.title}</h2>
        <p className="contact-intro">{t.contact.intro}</p>
        <a className="contact-email" href="mailto:contacto@ascentio.com.ar">
          contacto@ascentio.com.ar
          <Arrow diagonal />
        </a>
        <div className="contact-lower">
          <div className="contact-details">
            <div className="contact-links">
              {t.contact.locations.map(([city, address, url]) => (
                <a href={url} target="_blank" rel="noreferrer" key={city}>
                  <strong>{city}</strong>
                  <span>{address}</span>
                  <Arrow diagonal />
                </a>
              ))}
              <a href="https://wa.link/gqpht4" target="_blank" rel="noreferrer">
                <strong>WhatsApp</strong>
                <span>+54 9 358 402-3515</span>
                <Arrow diagonal />
              </a>
            </div>
            <p className="careers-note">
              {t.contact.work}{" "}
              <a
                href={mailto(
                  lang === "en" ? "Work with us" : "Trabajá con nosotros",
                  workBody,
                )}
              >
                {t.contact.workAction}
                <Arrow />
              </a>
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <p>{lang === "en" ? "Or write a message" : "O escribinos"}</p>
            <label>
              {t.contact.name}
              <input autoComplete="name" name="name" required />
            </label>
            <label>
              {t.contact.email}
              <input autoComplete="email" name="email" type="email" required />
            </label>
            <label>
              {t.contact.message}
              <textarea name="message" rows={3} required />
            </label>
            {error && (
              <p className="form-feedback form-feedback--error" role="alert">
                {error}
              </p>
            )}
            {prepared && (
              <p className="form-feedback" role="status">
                {t.contact.formNote}
              </p>
            )}
            <button type="submit">
              {t.contact.send}
              <Arrow />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer({ lang, t }: { lang: Language; t: Content }) {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <a className="wordmark" href="#top">
          <span>ASCENTIO</span>
          <small>TECHNOLOGIES</small>
        </a>
        <div className="footer-links">
          <span>{t.footer.follow}</span>
          <a
            href="https://www.instagram.com/ascentio.technologies/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram <Arrow diagonal />
          </a>
          <a
            href="https://www.linkedin.com/company/ascentio/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Arrow diagonal />
          </a>
          <a
            href="https://es.linkedin.com/company/ascentio-europe"
            target="_blank"
            rel="noreferrer"
          >
            Ascentio Europe <Arrow diagonal />
          </a>
          <a
            href="https://www.certipedia.com/quality_marks/9108648427?locale=es&certificate_number=01+10006+1529931"
            target="_blank"
            rel="noreferrer"
          >
            {t.footer.quality} <Arrow diagonal />
          </a>
        </div>
      </div>
      <div className="page-width footer-bottom">
        <span>
          © {new Date().getFullYear()} {t.footer.rights}
        </span>
        <a href="#contact">{t.nav.contact}</a>
        <span>
          {lang === "en" ? "Argentina and Spain" : "Argentina y España"}
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>("en");
  const t = copy[lang];
  useEffect(() => {
    document.documentElement.lang = lang;
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
      <a className="skip-link" href="#main">
        {lang === "en" ? "Skip to content" : "Ir al contenido"}
      </a>
      <Header
        lang={lang}
        t={t}
        onLanguage={() => setLang((value) => (value === "en" ? "es" : "en"))}
      />
      <main id="main">
        <Hero t={t} />
        <ServicesSection t={t} />
        <HistorySection t={t} />
        <WorkSection lang={lang} t={t} />
        <AboutSection t={t} />
        <ContactSection lang={lang} t={t} />
      </main>
      <Footer lang={lang} t={t} />
    </>
  );
}
