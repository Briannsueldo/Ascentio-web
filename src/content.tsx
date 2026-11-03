export type Language = 'en' | 'es';

export const copy = {
  en: {
    nav: { services: 'Capabilities', work: 'Our work', about: 'Company', contact: 'Contact', action: 'Start a conversation', menu: 'Open navigation', language: 'Español' },
    hero: {
      title: <>Systems for<br />critical missions</>,
      description: 'Ascentio designs, develops and operates high-availability systems for aerospace, industrial, energy and telecommunications sectors.',
      action: 'Explore capabilities',
      milestonesLabel: 'Company milestones',
      milestones: [['18+', 'Years of experience'], ['High-impact', 'Aerospace projects']],
    },
    services: {
      title: <>Engineering<br />to operation</>,
      intro: 'A connected set of disciplines for complex, high-availability systems.',
      items: [
        { name: 'Engineering', description: 'Customized engineering solutions through expert analysis, requirements definition, and system design.' },
        { name: 'Hardware and Firmware Development', description: 'Innovative hardware and firmware solutions developed by specialized teams using agile methodologies.' },
        { name: 'Software Development', description: 'Tailored software solutions designed to optimize processes and drive business growth.' },
        { name: 'Testing', description: 'Automated testing and quality assurance to ensure reliable, high-performing solutions.' },
        { name: 'Deployment and Integration', description: 'Seamless and secure deployments powered by DevOps practices and CI/CD automation.' },
        { name: 'Operation and Maintenance', description: 'Reliable operations and ongoing maintenance to ensure system continuity and efficiency.' },
      ],
    },
    history: {
      title: 'Built through mission work',
      intro: 'Ascentio’s published space history spans company formation, satellite missions, ground-segment operations and European expansion.',
      entries: [
        { date: '2008', title: 'Company founded', detail: 'Ascentio begins its work in space engineering.' },
        { date: 'Mission', title: 'SAC-D', detail: 'Ground segment development and mission operations.' },
        { date: 'Missions', title: 'SAOCOM 1A and 1B', detail: 'Mission ground segment, operations development and data storage design.' },
        { date: 'Belgium · Luxembourg', title: 'NAOS', detail: 'Operative tools for the mission.' },
        { date: '2025', title: 'Ascentio Europe', detail: 'Opening of the first European office to strengthen regional operations and local partnerships.' },
        { date: 'Upcoming', title: 'SABIA MAR and Genesis', detail: 'Published upcoming work includes mission operations and ground segment for SABIA MAR, and ground-segment critical design for Genesis.' },
      ],
    },
    work: {
      title: 'Technology in operation',
      intro: 'Selected work published by Ascentio across space, energy, telecommunications and maritime monitoring.',
      publishedLabel: 'Organizations and missions in published work',
      publishedTitle: 'Organizations and missions',
      publishedDescription: 'Organizations and missions represented in Ascentio’s published work.',
      cases: [
        { name: 'SABIA MAR', sector: 'Aerospace', description: 'Ground segment development, automated deployments and scalable system upgrades for space exploration.' },
        { name: 'EPEC', sector: 'Energy', description: 'Smart metering solutions integrating remote readings from 70,000 meters.' },
        { name: 'TELUS International', sector: 'Telecommunications', description: 'Software development for Canada’s largest telecommunications company.' },
        { name: 'Argentine Naval Prefecture', sector: 'Maritime intelligence', description: 'Solutions for monitoring and protecting Argentina’s coastlines.' },
      ],
      preview: 'Select a project to view its published image.',
    },
    about: {
      title: 'A company built for continuity',
      intro: 'Ascentio designs, develops and delivers high-availability software with a focus on redundancy, contingency and business continuity. Its industrial-grade applications are built for demanding production environments.',
      mission: ['Our mission', 'To create an innovation-driven ecosystem where ideas become high-impact technology, supported by R&D and continuous learning.'],
      vision: ['Our vision', 'To become a global benchmark in high-availability solutions for mission-critical systems, recognized for innovation, reliability and technical excellence.'],
      values: ['Our values', 'Excellence, accountability and respect for people. Collaboration amplifies talent to deliver innovative and sustainable results.'],
    },
    contact: {
      title: <>Talk to<br />Ascentio</>,
      intro: 'Share an idea or project with the Ascentio team.',
      name: 'First and last name', email: 'Email address', message: 'Project or message', send: 'Prepare email',
      locations: [
        ['Córdoba', 'Av. Rafael Núñez 5220 PB C', 'https://maps.app.goo.gl/1NC5W3T8yWdAjGEQA'],
        ['Río Cuarto', 'Pedro Nolasco Rodríguez (Norte) 455', 'https://maps.google.com/?q=Pedro+Nolasco+Rodr%C3%ADguez+455%2C+R%C3%ADo+Cuarto%2C+C%C3%B3rdoba%2C+Argentina'],
        ['Spain', 'Edificio Polivalente IV, Campus de Tarifa, ULPGC, Las Palmas de Gran Canaria, 35017', 'https://maps.google.com/?q=Edificio+Polivalente+IV%2C+Campus+de+Tarifa%2C+ULPGC%2C+Las+Palmas+de+Gran+Canaria%2C+35017%2C+Spain'],
      ],
      work: 'Interested in working with us?', workAction: 'Ask about opportunities',
      formNote: 'Your email app will open with this message addressed to contacto@ascentio.com.ar.',
    },
    footer: { follow: 'Follow Ascentio', quality: 'View quality mark reference', rights: 'Ascentio Technologies' },
  },
  es: {
    nav: { services: 'Capacidades', work: 'Proyectos', about: 'Empresa', contact: 'Contacto', action: 'Iniciar conversación', menu: 'Abrir navegación', language: 'English' },
    hero: {
      title: <>Sistemas para<br />misiones críticas</>,
      description: 'Ascentio diseña, desarrolla y opera sistemas de alta disponibilidad para los sectores aeroespacial, industrial, energético y de telecomunicaciones.',
      action: 'Explorar capacidades',
      milestonesLabel: 'Hitos de la empresa',
      milestones: [['18+', 'Años de experiencia'], ['Alto impacto', 'Proyectos aeroespaciales']],
    },
    services: {
      title: <>Ingeniería<br />y operación</>,
      intro: 'Un conjunto integrado de disciplinas para sistemas complejos de alta disponibilidad.',
      items: [
        { name: 'Ingeniería', description: 'Soluciones de ingeniería a medida mediante análisis experto, definición de requisitos y diseño de sistemas.' },
        { name: 'Desarrollo de hardware y firmware', description: 'Soluciones innovadoras de hardware y firmware desarrolladas por equipos especializados con metodologías ágiles.' },
        { name: 'Desarrollo de software', description: 'Soluciones de software a medida para optimizar procesos e impulsar el crecimiento del negocio.' },
        { name: 'Pruebas', description: 'Pruebas automatizadas y aseguramiento de calidad para garantizar soluciones confiables y de alto rendimiento.' },
        { name: 'Despliegue e integración', description: 'Despliegues seguros y fluidos con prácticas DevOps y automatización CI/CD.' },
        { name: 'Operación y mantenimiento', description: 'Operación confiable y mantenimiento continuo para garantizar la continuidad y eficiencia del sistema.' },
      ],
    },
    history: {
      title: 'Experiencia construida en misiones',
      intro: 'La trayectoria espacial publicada de Ascentio abarca la fundación de la empresa, misiones satelitales, operaciones de segmento terreno y expansión europea.',
      entries: [
        { date: '2008', title: 'Fundación de la empresa', detail: 'Ascentio inicia su trabajo en ingeniería espacial.' },
        { date: 'Misión', title: 'SAC-D', detail: 'Desarrollo del segmento terreno y operaciones de misión.' },
        { date: 'Misiones', title: 'SAOCOM 1A y 1B', detail: 'Segmento terreno, desarrollo de operaciones y diseño de almacenamiento de datos.' },
        { date: 'Bélgica · Luxemburgo', title: 'NAOS', detail: 'Herramientas operativas para la misión.' },
        { date: '2025', title: 'Ascentio Europe', detail: 'Apertura de la primera oficina europea para fortalecer las operaciones regionales y las alianzas locales.' },
        { date: 'Próximamente', title: 'SABIA MAR y Genesis', detail: 'El trabajo futuro publicado incluye operaciones de misión y segmento terreno para SABIA MAR, y diseño crítico del segmento terreno para Genesis.' },
      ],
    },
    work: {
      title: 'Tecnología en operación',
      intro: 'Trabajos publicados por Ascentio en espacio, energía, telecomunicaciones y monitoreo marítimo.',
      publishedLabel: 'Organizaciones y misiones en trabajos publicados',
      publishedTitle: 'Organizaciones y misiones',
      publishedDescription: 'Organizaciones y misiones incluidas en los trabajos publicados por Ascentio.',
      cases: [
        { name: 'SABIA MAR', sector: 'Aeroespacial', description: 'Desarrollo del segmento terreno, despliegues automatizados y actualización escalable de sistemas para la exploración espacial.' },
        { name: 'EPEC', sector: 'Energía', description: 'Soluciones de medición inteligente que integran lecturas remotas de 70.000 medidores.' },
        { name: 'TELUS International', sector: 'Telecomunicaciones', description: 'Desarrollo de software para la mayor empresa de telecomunicaciones de Canadá.' },
        { name: 'Prefectura Naval Argentina', sector: 'Inteligencia marítima', description: 'Soluciones para el monitoreo y la protección de las costas argentinas.' },
      ],
      preview: 'Seleccioná un proyecto para ver su imagen publicada.',
    },
    about: {
      title: 'Una empresa para la continuidad',
      intro: 'Ascentio diseña, desarrolla y entrega software de alta disponibilidad con foco en redundancia, contingencia y continuidad operativa. Sus aplicaciones industriales se adaptan a entornos de producción exigentes.',
      mission: ['Nuestra misión', 'Crear un ecosistema de innovación donde las ideas se transforman en tecnología de alto impacto, respaldada por I+D y formación continua.'],
      vision: ['Nuestra visión', 'Ser un referente global en soluciones de alta disponibilidad para sistemas críticos, reconocidos por innovación, confiabilidad y excelencia tecnológica.'],
      values: ['Nuestros valores', 'Excelencia, compromiso y respeto por las personas. La colaboración potencia el talento para alcanzar resultados innovadores y sostenibles.'],
    },
    contact: {
      title: <>Contactá a<br />Ascentio</>,
      intro: 'Compartí una idea o proyecto con el equipo de Ascentio.',
      name: 'Nombre y apellido', email: 'Correo electrónico', message: 'Proyecto o mensaje', send: 'Preparar correo',
      locations: [
        ['Córdoba', 'Av. Rafael Núñez 5220 PB C', 'https://maps.app.goo.gl/1NC5W3T8yWdAjGEQA'],
        ['Río Cuarto', 'Pedro Nolasco Rodríguez (Norte) 455', 'https://maps.google.com/?q=Pedro+Nolasco+Rodr%C3%ADguez+455%2C+R%C3%ADo+Cuarto%2C+C%C3%B3rdoba%2C+Argentina'],
        ['España', 'Edificio Polivalente IV, Campus de Tarifa, ULPGC, Las Palmas de Gran Canaria, 35017', 'https://maps.google.com/?q=Edificio+Polivalente+IV%2C+Campus+de+Tarifa%2C+ULPGC%2C+Las+Palmas+de+Gran+Canaria%2C+35017%2C+Spain'],
      ],
      work: '¿Te interesa trabajar con nosotros?', workAction: 'Consultar oportunidades',
      formNote: 'Se abrirá tu aplicación de correo con el mensaje dirigido a contacto@ascentio.com.ar.',
    },
    footer: { follow: 'Seguí a Ascentio', quality: 'Ver referencia de calidad', rights: 'Ascentio Technologies' },
  },
} as const;

export type Content = (typeof copy)[Language];
