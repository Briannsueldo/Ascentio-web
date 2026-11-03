import { useEffect, useMemo, useState, type FormEvent } from "react";
import { copy, type Content, type Language } from "./content";

const navIds = ["space", "services", "work", "about", "contact"] as const;
const assets = {
  orbit: "/images/research/nisar-orbit.jpg",
  ground: "/images/research/goldstone-dss23.jpg",
  payload: "/images/research/nisar-payload.jpg",
  control: "/images/research/apollo-mission-control.jpg",
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

function AnimatedBeam() {
  return (
    <svg
      className="mission-beam"
      viewBox="0 0 1000 250"
      role="img"
      aria-labelledby="beam-title beam-desc"
      preserveAspectRatio="none"
    >
      <title id="beam-title">Space mission signal path</title>
      <desc id="beam-desc">
        An illustrative path connects a spacecraft, a ground segment and mission
        operations.
      </desc>
      <path
        className="beam-track"
        d="M54 182 C220 30 330 50 500 152 S785 227 946 65"
      />
      <path
        className="beam-line"
        d="M54 182 C220 30 330 50 500 152 S785 227 946 65"
      />
      <circle className="beam-node" cx="54" cy="182" r="5" />
      <circle className="beam-node" cx="500" cy="152" r="5" />
      <circle className="beam-node" cx="946" cy="65" r="5" />
      <circle className="beam-pulse" r="4">
        <animateMotion
          dur="8s"
          repeatCount="indefinite"
          path="M54 182 C220 30 330 50 500 152 S785 227 946 65"
        />
      </circle>
    </svg>
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
    <header className="site-header page-width">
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
    <section className="hero page-width" id="top" aria-labelledby="hero-title">
      <div className="hero-meta">
        <span>Argentina · Engineering</span>
        <span>Córdoba · Río Cuarto · Spain</span>
      </div>
      <div className="hero-main">
        <h1 id="hero-title" className="display">
          {t.hero.title}
        </h1>
        <p className="hero-lede">{t.hero.description}</p>
      </div>
      <div className="hero-foot">
        <span className="scroll-cue">Scroll to explore</span>
        <a className="hero-link" href="#space">
          {t.hero.action}
          <Arrow />
        </a>
      </div>
    </section>
  );
}

function MissionSection({ t }: { t: Content }) {
  return (
    <section
      className="mission-section"
      id="space"
      aria-labelledby="space-title"
    >
      <Noise />
      <div className="page-width mission-inner">
        <div className="mission-heading">
          <h2 id="space-title">{t.space.title}</h2>
          <p className="mission-intro">{t.space.intro}</p>
        </div>
        <div className="path-labels">
          <span>Spacecraft</span>
          <span>Ground segment</span>
          <span>Mission operations</span>
        </div>
        <div className="beam-wrap">
          <AnimatedBeam />
        </div>
        <div className="path-copy">
          <p>{t.space.pathCopy}</p>
          <a href="#services" className="line-link">
            {t.space.more}
            <Arrow />
          </a>
        </div>
        <div className="mission-capabilities">
          {t.space.items.map(([title, description]) => (
            <article key={title} className="mission-capability">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="mission-image-band">
        <figure className="mission-photo mission-photo--wide">
          <img
            src={assets.ground}
            alt="NASA Deep Space Network's Goldstone DSS-23 antenna"
            loading="lazy"
            width="1920"
            height="1439"
          />
          <figcaption>
            <span>Ground network · Goldstone, California</span>
            <a
              href="https://commons.wikimedia.org/wiki/File:NASA_Deep_Space_Network%E2%80%99s_New_Goldstone_Antenna_Goes_Online_(PIA26778).jpg"
              target="_blank"
              rel="noreferrer"
            >
              NASA/JPL-Caltech · Public domain <Arrow diagonal />
            </a>
          </figcaption>
        </figure>
        <figure className="mission-photo mission-photo--narrow">
          <img
            src={assets.orbit}
            alt="NASA visualization of NISAR in orbit around Earth"
            loading="lazy"
            width="1920"
            height="1080"
          />
          <figcaption>
            <span>Orbital observation · NISAR</span>
            <a
              href="https://commons.wikimedia.org/wiki/File:NISAR_satellite_orbit_(SVS5615_-_2415).jpg"
              target="_blank"
              rel="noreferrer"
            >
              NASA SVS · Public domain <Arrow diagonal />
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function ServicesSection({ t }: { t: Content }) {
  return (
    <section
      className="services-section section-pad"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="page-width">
        <div className="section-top">
          <p>{t.services.intro}</p>
        </div>
        <div className="services-layout">
          <h2 id="services-title">{t.services.title}</h2>
          <ol className="services-list">
            {t.services.items.map((service) => (
              <li key={service}>
                <span>{service}</span>
                <Arrow />
              </li>
            ))}
          </ol>
        </div>
        <div className="systems-strip">
          <figure>
            <img
              src={assets.payload}
              alt="NASA/JPL technicians preparing the NISAR science payload in a cleanroom"
              width="1920"
              height="1440"
              loading="lazy"
            />
            <figcaption>
              <a
                href="https://commons.wikimedia.org/wiki/File:Preparing_the_NISAR_Science_Payload_for_a_Trip_to_India_(PIA25566).jpg"
                target="_blank"
                rel="noreferrer"
              >
                NISAR science payload / NASA JPL-Caltech · Public domain{" "}
                <Arrow diagonal />
              </a>
            </figcaption>
          </figure>
          <div className="systems-strip-copy">
            <h3>Systems engineering</h3>
            <p>{t.services.supporting}</p>
            <span>Requirements · Integration · Verification</span>
          </div>
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
        <div className="about-lead">
          <h2 id="about-title">{t.about.title}</h2>
          <p>{t.about.intro}</p>
        </div>
        <div className="principles">
          {[t.about.mission, t.about.vision, t.about.values].map(
            ([title, detail]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ),
          )}
        </div>
        <figure className="history-photo">
          <img
            src={assets.control}
            alt="NASA Mission Operations Control Room during Apollo 9 in March 1969"
            width="1920"
            height="1316"
            loading="lazy"
          />
          <figcaption>
            <span>Mission operations · Apollo 9, 1969</span>
            <a
              href="https://commons.wikimedia.org/wiki/File:Mission_Operations_Control_Room_during_Apollo_9.jpg"
              target="_blank"
              rel="noreferrer"
            >
              NASA · Public domain <Arrow diagonal />
            </a>
          </figcaption>
        </figure>
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
        <MissionSection t={t} />
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
