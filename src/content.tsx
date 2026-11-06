export type Language = 'en' | 'es';

export const copy = {
  en: {
    nav: { services: 'Services', space: 'Space Engineering', work: 'Our work', about: 'Company', contact: 'Contact', menu: 'Open navigation', language: 'Español' },
    hero: {
      title: <>Systems for<br />critical missions</>,
      description: 'Ascentio designs, develops and operates high-availability systems for aerospace, industrial, energy and telecommunications sectors.',
      action: 'Explore capabilities',
      milestonesLabel: 'Company milestones',
      milestones: [['18+', 'Years of experience'], ['High-impact', 'Aerospace projects']],
    },
    partners: {
      title: 'Trusted by industry leaders',
      description: 'Organizations that worked with Ascentio',
    },
    services: {
      title: 'Engineering to operation',
      intro: 'We are an Argentine technology-based company dedicated to the design, development and operation of complex high-availability systems for the aerospace, industrial, energy and telecommunications sectors.',
      items: [
        { name: 'Engineering', description: 'Our expert engineers perform thorough requirements analysis and create detailed, customized designs for each system, ensuring solutions that drive your business success.' },
        { name: 'Hardware and Firmware Development', description: 'We innovate in hardware and firmware with highly specialized teams that develop diversified technological solutions, using agile methodologies to offer efficiency and superior quality.' },
        { name: 'Software Development', description: 'We develop custom software with dedicated teams that deliver flexible and innovative solutions, designed to optimize your processes and maximize your competitiveness.' },
        { name: 'Testing', description: 'Our testing team redefines quality through automation and rigorous test definition, ensuring reliability and excellence at every stage of development.' },
        { name: 'Deployment and Integration', description: 'We drive your digital transformation with a DevOps approach: our team of experts in automated deployment and integration (CI/CD) guarantees agile and secure implementations.' },
        { name: 'Operation and Maintenance', description: 'We have a highly experienced operations team that optimizes processes and guarantees continuity and efficiency in all your operational activities.' },
      ],
    },
    impact: {
      label: 'Ascentio impact',
      items: [
        { value: '+18', description: 'Over 18 years of experience' },
        { value: '+100k', description: 'Remote monitoring devices via IoT system' },
        { value: '6', description: 'High-impact aerospace projects' },
        { value: '+1000k', description: 'Certified engineering and development hours' },
      ],
    },
    history: {
      title: 'A Journey of Mission Success',
      intro: 'Our experience in the space sector is reflected in our participation in the SAC-D, SAOCOM, and NAOS missions, as well as in our growing presence and expansion in Europe.',
      upcomingLabel: 'Upcoming missions',
      entries: [
        { date: '2008', title: 'Company Foundation', detail: 'Ascentio begins its work in space engineering.' },
        { date: '2011', title: 'SAC-D Mission', detail: 'Ground segment development and mission operations.' },
        { date: '2018', title: 'SAOCOM 1A Mission', detail: 'Mission ground segment, operations development and data storage design.' },
        { date: '2020', title: 'SAOCOM 1B Mission', detail: 'Mission ground segment, operations development and data storage design.' },
        { date: '2025', title: 'NAOS Mission', detail: 'Mission work supporting the ground segment and operations.' },
        { date: '2026', title: 'Ascentio Europe', detail: 'Opening of the first European office to strengthen regional operations and local partnerships.' },
        { date: '2027', title: 'SABIA MAR Mission', detail: 'Published upcoming work includes mission operations and ground segment for SABIA MAR.' },
        { date: '2028', title: 'Genesis Mission', detail: 'Published upcoming work includes ground-segment critical design for Genesis.' },
      ],
    },
    groundSegment: {
      title: ['Advanced', 'Ground Segment'],
      label: 'Space Engineering',
      cards: [
        {
          title: 'Mission Control Centers',
          description: 'We develop the critical software infrastructure required to operate satellites securely and efficiently.',
          items: [
            ['Real-Time Monitoring', 'Visualization of telemetry and health status for both the platform and the payload.'],
            ['Command & Control', 'Secure transmission of telecommands for remote satellite operations.'],
            ['Alarm Management', 'Automated systems for early detection of on-orbit anomalies.'],
            ['Robust Infrastructure', 'Solutions engineered for 24/7 operations with high availability.'],
          ],
        },
        {
          title: 'Science Data Production Centers',
          description: 'We implement high performance processing systems to manage the information captured by satellite instruments.',
          items: [
            ['Ingestion & Processing', 'Capture of raw data and multi-level processing (L0, L1, L2, etc.).'],
            ['Archiving & Cataloging', 'Secure, organized storage for high volumes of historical mission data.'],
            ['Distribution', 'Agile interfaces for scientists and end-users to access generated data products.'],
          ],
        },
        {
          title: 'Mission Planning Systems',
          description: 'We create advanced tools to coordinate satellite activities, maximizing mission return.',
          items: [
            ['Activity Scheduling', 'Defining when and where the satellite should capture images, gather measurements, or downlink data.'],
            ['Resource Management', 'Balancing power budgets, on-board memory, and communication windows with ground stations.'],
            ['Conflict Resolution', 'Automated algorithms to prevent overlaps in critical mission tasks.'],
          ],
        },
        {
          title: 'Mission Simulation Systems',
          description: 'We provide virtual environments that replicate the behavior of both the spacecraft and the ground segment.',
          items: [
            ['Operator Training', 'Preparing flight teams in a safe, simulated environment prior to launch.'],
            ['Procedure Validation', 'Testing critical maneuvers and contingency plans without risk to the flight hardware.'],
            ['Software Testing', 'Verification of new versions and patches before uploading them to the satellite in flight.'],
          ],
        },
        {
          title: 'Systems Engineering',
          description: 'We provide end-to-end systems engineering support, ensuring the reliability, performance, and mission readiness of complex space systems through:',
          items: [
            ['Requirements Management', 'Full-lifecycle management of mission and system requirements. Utilizing industry standards, providing software tools and leading rigorous traceability processes.'],
            ['Detailed Systems Design', 'Development of secure, resilient, and mission-compliant architectures, supported by comprehensive design documentation and technical artifacts.'],
            ['Phase Review Support', 'Expert preparation and participation in formal lifecycle reviews (e.g., PDR, CDR), delivering the necessary technical data packages and presentations to ensure program milestone approval.'],
            ['Operations Design', 'Definition and optimization of Concept of Operations (ConOps) and standard operating procedures to maximize mission efficiency.'],
            ['Verification & Validation (V&V)', 'Comprehensive compliance validation of system, operational, and mission requirements through rigorous design analysis, simulations, and testing campaigns.'],
          ],
        },
        {
          title: 'Maritime Intelligence',
          description: 'We develop Maritime Intelligence solutions leveraging our deep expertise in complex data processing, advanced Computer Vision, and Artificial Intelligence (AI).',
          items: [
            ['Real-Time Monitoring', 'Continuous tracking and management of maritime and port assets.'],
            ['AI-Driven Analysis', 'Automated detection and classification of vessels and activities.'],
            ['Operational Control', 'Transforming raw data into actionable insights for enhanced security and port efficiency.'],
          ],
        },
      ],
    },
    work: {
      title: 'Technology in operation',
      intro: 'We are an Argentine technology-based company dedicated to the design, development and operation of complex high-availability systems for the aerospace, industrial, energy and telecommunications sectors.',
      introAccent: 'Argentine',
      cases: [
        { name: 'EPEC', sector: 'Energy', description: 'We transform energy management with Smart Metering solutions that integrate the remote reading of 70,000 meters using cutting-edge technology.', image: '/images/works/epec.png' }, // taste-skill-ignore: project copy supplied verbatim by the user.
        { name: 'TELUS International', sector: 'Telecommunications', description: 'We drive technological excellence through the development of software for Canada’s largest telecommunications company.', image: '/images/works/telus.png' },
        { name: 'SABIA MAR', sector: 'Aerospace', description: 'We redefine space exploration through the development of the Ground Segment, upgrading systems and infrastructure through automated deployments and scalable solutions.', image: '/images/works/sabiamar.png' },
        { name: 'Argentine Naval Prefecture', sector: 'Maritime Intelligence', description: 'We innovate in maritime intelligence with advanced solutions for monitoring and protecting Argentina’s coastlines.', image: '/images/works/prefecture.png' },
      ],
    },
    about: {
      title: 'About us',
      imageAlt: 'Ascentio Technologies engineering office',
      eyebrow: 'Our principles',
      intro: 'We specialize in designing, developing, and delivering high-availability software solutions',
      introAccent: 'software solutions',
      supporting: 'Strong focus on redundancy, contingency, and business continuity, engineered to perform in the most demanding production environments.',
      mission: ['Our mission', 'To create an innovation-driven ecosystem where ideas become high-impact technology, supported by R&D and continuous learning.'],
      vision: ['Our vision', 'To become a global benchmark in high-availability solutions for mission-critical systems, recognized for innovation, reliability and technical excellence.'],
      values: ['Our values', 'Excellence, accountability and respect for people. Collaboration amplifies talent to deliver innovative and sustainable results.'],
    },
    contact: {
      eyebrow: 'Contact',
      title: <>Have a mission<br />in mind?</>,
      intro: 'Share an idea or project with the Ascentio team.',
      write: 'Write a message',
      modalEyebrow: 'New message',
      modalTitle: 'Tell us about your mission',
      topicPrompt: "What’s this about?",
      topics: ['New project', 'Partnership', 'Careers', 'Other'],
      name: 'First and last name', email: 'Email address', company: 'Company or organization', optional: 'optional', message: 'Project or message', send: 'Send message', cancel: 'Cancel', close: 'Close message form',
      namePlaceholder: 'Jane Doe', emailPlaceholder: 'you@company.com', companyPlaceholder: 'Agency, company or university', messagePlaceholder: 'Tell us about the mission, timeline and what you need from us.',
      locations: [
        ['Córdoba', 'Av. Rafael Núñez 5220 PB C', 'https://maps.app.goo.gl/1NC5W3T8yWdAjGEQA'],
        ['Río Cuarto', 'Pedro Nolasco Rodríguez (Norte) 455', 'https://maps.google.com/?q=Pedro+Nolasco+Rodr%C3%ADguez+455%2C+R%C3%ADo+Cuarto%2C+C%C3%B3rdoba%2C+Argentina'],
        ['Spain', 'Edificio Polivalente IV, Campus de Tarifa, ULPGC, Las Palmas de Gran Canaria, 35017', 'https://maps.google.com/?q=Edificio+Polivalente+IV%2C+Campus+de+Tarifa%2C+ULPGC%2C+Las+Palmas+de+Gran+Canaria%2C+35017%2C+Spain'],
      ],
      work: 'Interested in working with us?', workAction: 'Ask about opportunities',
      formNote: 'Opens your email app with the message ready.',
    },
    footer: { offices: 'Offices', navigate: 'Navigate', follow: 'Follow', more: 'More', careers: 'Careers', backTop: 'Back to top', quality: 'Quality mark reference', rights: 'Ascentio Technologies' },
  },
  es: {
    nav: { services: 'Servicios', space: 'Ingeniería espacial', work: 'Proyectos', about: 'Empresa', contact: 'Contacto', menu: 'Abrir navegación', language: 'English' },
    hero: {
      title: <>Sistemas para<br />misiones críticas</>,
      description: 'Ascentio diseña, desarrolla y opera sistemas de alta disponibilidad para los sectores aeroespacial, industrial, energético y de telecomunicaciones.',
      action: 'Explorar capacidades',
      milestonesLabel: 'Hitos de la empresa',
      milestones: [['18+', 'Años de experiencia'], ['Alto impacto', 'Proyectos aeroespaciales']],
    },
    partners: {
      title: 'La confianza de líderes de la industria',
      description: 'Organizaciones que trabajaron con Ascentio',
    },
    services: {
      title: 'Ingeniería y operación',
      intro: 'Somos una empresa argentina de base tecnológica dedicada al diseño, desarrollo y operación de sistemas complejos de alta disponibilidad para los sectores aeroespacial, industrial, energético y de telecomunicaciones.',
      items: [
        { name: 'Ingeniería', description: 'Nuestros ingenieros expertos realizan un análisis exhaustivo de requisitos y crean diseños detallados y personalizados para cada sistema, asegurando soluciones que impulsan el éxito de su negocio.' },
        { name: 'Desarrollo de hardware y firmware', description: 'Innovamos en hardware y firmware con equipos altamente especializados que desarrollan soluciones tecnológicas diversas, utilizando metodologías ágiles para ofrecer eficiencia y calidad superior.' },
        { name: 'Desarrollo de software', description: 'Desarrollamos software a medida con equipos dedicados que ofrecen soluciones flexibles e innovadoras, diseñadas para optimizar sus procesos y maximizar su competitividad.' },
        { name: 'Pruebas', description: 'Nuestro equipo de pruebas redefine la calidad mediante la automatización y una definición rigurosa de ensayos, garantizando confiabilidad y excelencia en cada etapa del desarrollo.' },
        { name: 'Despliegue e integración', description: 'Impulsamos su transformación digital con un enfoque DevOps: nuestro equipo experto en despliegue e integración automatizados (CI/CD) garantiza implementaciones ágiles y seguras.' },
        { name: 'Operación y mantenimiento', description: 'Contamos con un equipo de operaciones altamente experimentado que optimiza procesos y garantiza continuidad y eficiencia en todas sus actividades operativas.' },
      ],
    },
    impact: {
      label: 'Impacto de Ascentio',
      items: [
        { value: '+18', description: 'Más de 18 años de experiencia' },
        { value: '+100k', description: 'Dispositivos de monitoreo remoto mediante sistema IoT' },
        { value: '6', description: 'Proyectos aeroespaciales de alto impacto' },
        { value: '+1000k', description: 'Horas certificadas de ingeniería y desarrollo' },
      ],
    },
    history: {
      title: 'Un recorrido de misiones exitosas',
      intro: 'Nuestra experiencia en el sector espacial se refleja en nuestra participación en las misiones SAC-D, SAOCOM y NAOS, junto con nuestra proyección y presencia en Europa.',
      upcomingLabel: 'Misiones futuras',
      entries: [
        { date: '2008', title: 'Fundación de la empresa', detail: 'Ascentio inicia su trabajo en ingeniería espacial.' },
        { date: '2011', title: 'Misión SAC-D', detail: 'Desarrollo del segmento terreno y operaciones de misión.' },
        { date: '2018', title: 'Misión SAOCOM 1A', detail: 'Segmento terreno, desarrollo de operaciones y diseño de almacenamiento de datos.' },
        { date: '2020', title: 'Misión SAOCOM 1B', detail: 'Segmento terreno, desarrollo de operaciones y diseño de almacenamiento de datos.' },
        { date: '2025', title: 'Misión NAOS', detail: 'Trabajo de misión para el segmento terreno y las operaciones.' },
        { date: '2026', title: 'Ascentio Europa', detail: 'Apertura de la primera oficina europea para fortalecer las operaciones regionales y las alianzas locales.' },
        { date: '2027', title: 'Misión SABIA MAR', detail: 'El trabajo futuro publicado incluye operaciones de misión y segmento terreno para SABIA MAR.' },
        { date: '2028', title: 'Misión Genesis', detail: 'El trabajo futuro publicado incluye diseño crítico del segmento terreno para Genesis.' },
      ],
    },
    groundSegment: {
      title: ['Segmento terreno', 'avanzado'],
      label: 'Ingeniería espacial',
      cards: [
        {
          title: 'Centros de control de misión',
          description: 'Desarrollamos la infraestructura de software crítica para operar satélites de forma segura y eficiente.',
          items: [
            ['Monitoreo en tiempo real', 'Visualización de telemetría y estado de salud de la plataforma y la carga útil.'],
            ['Comando y control', 'Transmisión segura de telecomandos para operaciones satelitales remotas.'],
            ['Gestión de alarmas', 'Sistemas automatizados para la detección temprana de anomalías en órbita.'],
            ['Infraestructura robusta', 'Soluciones diseñadas para operaciones 24/7 con alta disponibilidad.'],
          ],
        },
        {
          title: 'Centros de producción de datos científicos',
          description: 'Implementamos sistemas de procesamiento de alto rendimiento para gestionar la información capturada por instrumentos satelitales.',
          items: [
            ['Ingesta y procesamiento', 'Captura de datos brutos y procesamiento multinivel (L0, L1, L2, etc.).'],
            ['Archivo y catalogación', 'Almacenamiento seguro y organizado de grandes volúmenes de datos históricos de misión.'],
            ['Distribución', 'Interfaces ágiles para que científicos y usuarios accedan a los productos de datos generados.'],
          ],
        },
        {
          title: 'Sistemas de planificación de misión',
          description: 'Creamos herramientas avanzadas para coordinar las actividades satelitales y maximizar el rendimiento de la misión.',
          items: [
            ['Programación de actividades', 'Definición de cuándo y dónde el satélite debe capturar imágenes, reunir mediciones o transmitir datos.'],
            ['Gestión de recursos', 'Equilibrio de presupuestos de energía, memoria a bordo y ventanas de comunicación con estaciones terrenas.'],
            ['Resolución de conflictos', 'Algoritmos automatizados para evitar superposiciones en tareas críticas de misión.'],
          ],
        },
        {
          title: 'Sistemas de simulación de misión',
          description: 'Proveemos entornos virtuales que replican el comportamiento de la nave espacial y del segmento terreno.',
          items: [
            ['Capacitación de operadores', 'Preparación de los equipos de vuelo en un entorno simulado y seguro antes del lanzamiento.'],
            ['Validación de procedimientos', 'Prueba de maniobras críticas y planes de contingencia sin riesgo para el hardware de vuelo.'],
            ['Pruebas de software', 'Verificación de nuevas versiones y parches antes de cargarlos al satélite en vuelo.'],
          ],
        },
        {
          title: 'Ingeniería de sistemas',
          description: 'Brindamos soporte integral de ingeniería de sistemas para asegurar la confiabilidad, el rendimiento y la preparación para misión de sistemas espaciales complejos mediante:',
          items: [
            ['Gestión de requisitos', 'Gestión integral de los requisitos de misión y sistema durante todo su ciclo de vida. Aplicamos estándares de la industria, proveemos herramientas de software y lideramos procesos rigurosos de trazabilidad.'],
            ['Diseño detallado de sistemas', 'Desarrollo de arquitecturas seguras, resilientes y alineadas con la misión, respaldadas por documentación de diseño y artefactos técnicos completos.'],
            ['Soporte para revisiones de fase', 'Preparación experta y participación en revisiones formales del ciclo de vida (por ejemplo, PDR y CDR), con paquetes de datos técnicos y presentaciones para respaldar la aprobación de hitos.'],
            ['Diseño de operaciones', 'Definición y optimización del concepto de operaciones (ConOps) y de procedimientos operativos estándar para maximizar la eficiencia de la misión.'],
            ['Verificación y validación (V&V)', 'Validación integral del cumplimiento de requisitos de sistema, operación y misión mediante análisis de diseño, simulaciones y campañas de pruebas rigurosas.'],
          ],
        },
        {
          title: 'Inteligencia marítima',
          description: 'Desarrollamos soluciones de inteligencia marítima con nuestra experiencia en procesamiento de datos complejos, visión artificial avanzada e inteligencia artificial (IA).',
          items: [
            ['Monitoreo en tiempo real', 'Seguimiento y gestión continua de activos marítimos y portuarios.'],
            ['Análisis basado en IA', 'Detección y clasificación automatizadas de embarcaciones y actividades.'],
            ['Control operativo', 'Transformación de datos en información útil para mejorar la seguridad y la eficiencia portuaria.'],
          ],
        },
      ],
    },
    work: {
      title: 'Tecnología en operación',
      intro: 'Somos una empresa argentina de base tecnológica dedicada al diseño, desarrollo y operación de sistemas complejos de alta disponibilidad para los sectores aeroespacial, industrial, energético y de telecomunicaciones.',
      introAccent: 'argentina',
      cases: [
        { name: 'EPEC', sector: 'Energía', description: 'Transformamos la gestión energética con soluciones de medición inteligente que integran la lectura remota de 70.000 medidores mediante tecnología de vanguardia.', image: '/images/works/epec.png' },
        { name: 'TELUS International', sector: 'Telecomunicaciones', description: 'Impulsamos la excelencia tecnológica mediante el desarrollo de software para la mayor empresa de telecomunicaciones de Canadá.', image: '/images/works/telus.png' },
        { name: 'SABIA MAR', sector: 'Aeroespacial', description: 'Redefinimos la exploración espacial mediante el desarrollo del segmento terreno, actualizando sistemas e infraestructura con despliegues automatizados y soluciones escalables.', image: '/images/works/sabiamar.png' },
        { name: 'Prefectura Naval Argentina', sector: 'Inteligencia marítima', description: 'Innovamos en inteligencia marítima con soluciones avanzadas para monitorear y proteger las costas argentinas.', image: '/images/works/prefecture.png' },
      ],
    },
    about: {
      title: 'Sobre nosotros',
      imageAlt: 'Oficina de ingeniería de Ascentio Technologies',
      eyebrow: 'Nuestros principios',
      intro: 'Nos especializamos en diseñar, desarrollar y entregar soluciones de software de alta disponibilidad',
      introAccent: 'soluciones de software',
      supporting: 'Con un fuerte enfoque en redundancia, contingencia y continuidad del negocio, diseñadas para funcionar en los entornos de producción más exigentes.',
      mission: ['Nuestra misión', 'Crear un ecosistema de innovación donde las ideas se transforman en tecnología de alto impacto, respaldada por I+D y formación continua.'],
      vision: ['Nuestra visión', 'Ser un referente global en soluciones de alta disponibilidad para sistemas críticos, reconocidos por innovación, confiabilidad y excelencia tecnológica.'],
      values: ['Nuestros valores', 'Excelencia, compromiso y respeto por las personas. La colaboración potencia el talento para alcanzar resultados innovadores y sostenibles.'],
    },
    contact: {
      eyebrow: 'Contacto',
      title: <>¿Tenés una misión<br />en mente?</>,
      intro: 'Compartí una idea o proyecto con el equipo de Ascentio.',
      write: 'Escribir un mensaje',
      modalEyebrow: 'Nuevo mensaje',
      modalTitle: 'Contanos sobre tu misión',
      topicPrompt: '¿Sobre qué querés hablar?',
      topics: ['Nuevo proyecto', 'Alianzas', 'Búsquedas laborales', 'Otro'],
      name: 'Nombre y apellido', email: 'Correo electrónico', company: 'Empresa u organización', optional: 'opcional', message: 'Proyecto o mensaje', send: 'Enviar mensaje', cancel: 'Cancelar', close: 'Cerrar formulario',
      namePlaceholder: 'Nombre Apellido', emailPlaceholder: 'vos@empresa.com', companyPlaceholder: 'Agencia, empresa o universidad', messagePlaceholder: 'Contanos sobre la misión, los plazos y qué necesitás.',
      locations: [
        ['Córdoba', 'Av. Rafael Núñez 5220 PB C', 'https://maps.app.goo.gl/1NC5W3T8yWdAjGEQA'],
        ['Río Cuarto', 'Pedro Nolasco Rodríguez (Norte) 455', 'https://maps.google.com/?q=Pedro+Nolasco+Rodr%C3%ADguez+455%2C+R%C3%ADo+Cuarto%2C+C%C3%B3rdoba%2C+Argentina'],
        ['España', 'Edificio Polivalente IV, Campus de Tarifa, ULPGC, Las Palmas de Gran Canaria, 35017', 'https://maps.google.com/?q=Edificio+Polivalente+IV%2C+Campus+de+Tarifa%2C+ULPGC%2C+Las+Palmas+de+Gran+Canaria%2C+35017%2C+Spain'],
      ],
      work: '¿Te interesa trabajar con nosotros?', workAction: 'Consultar oportunidades',
      formNote: 'Se abrirá tu aplicación de correo con el mensaje listo.',
    },
    footer: { offices: 'Oficinas', navigate: 'Navegación', follow: 'Seguinos', more: 'Más', careers: 'Trabajá con nosotros', backTop: 'Volver arriba', quality: 'Referencia de calidad', rights: 'Ascentio Technologies' },
  },
} as const;

export type Content = (typeof copy)[Language];
