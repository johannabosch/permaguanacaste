export interface Translations {
  // Navigation
  navigation: {
    projects: string;
    services: string;
    about: string;
    contact: string;
  };

  // Hero Section
  hero: {
    mainHeading: string;
    subHeading: string;
  };

  // Intro Section
  intro: {
    title: string;
    subtitle: string;
    description: string;
  };

  // Projects Section
  projects: {
    title: string;
    subtitle: string;
    items: {
      fincaPermaguanacaste: {
        title: string;
        year: string;
        category: string;
        details: string;
      };
      casaDelArbol: {
        title: string;
        year: string;
        category: string;
        details: string;
      };
      agroecologyWorkshop: {
        title: string;
        year: string;
        category: string;
        details: string;
      };
    };
  };

  // Services Section
  services: {
    title: string;
    subtitle: string;
    items: {
      masterplan: {
        title: string;
        description: string;
      };
      pools: {
        title: string;
        description: string;
      };
      foodSystems: {
        title: string;
        description: string;
      };
      soilHealth: {
        title: string;
        description: string;
      };
      landscapingMaintenance: {
        title: string;
        description: string;
      };
    };
  };

  // Our Story Section
  ourStory: {
    title: string;
    companyDescription: string;
    gabrielBio1: string;
    gabrielBio2: string;
  };

  // Contact Form
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successMessage: string;
      newMessage: string;
    };
  };

  // Footer
  footer: {
    quickLinks: string;
    followUs: string;
    contactInfo: string;
    getInTouch: string;
    emailLabel: string;
    phoneLabel: string;
    copyrightStart: string;
    copyrightEnd: string;
  };
}

export const translations: Record<'en' | 'es', Translations> = {
  en: {
    navigation: {
      projects: 'PROJECTS',
      services: 'SERVICES',
      about: 'ABOUT',
      contact: 'CONTACT',
    },
    hero: {
      mainHeading: 'Where water shapes the land, we build systems that thrive.',
      subHeading: 'Permaculture design and guidance, and the tools to bring your land to life.',
    },
    intro: {
      title: 'Regenerative Design',
      subtitle: 'for Guanacaste Province',
      description: 'We design resilient landscapes that work with nature, not against it. From biofiltered pools to thriving food forests, our permaculture approach creates abundance while restoring the land. Whether you\'re envisioning a family homestead or a commercial retreat, we bring together local wisdom and proven techniques to build something truly sustainable.',
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Each story here reflects our commitment to regenerative practice, whether transforming landscapes into thriving ecosystems or empowering communities with the knowledge to cultivate abundance from their own land.',
      items: {
        fincaPermaguanacaste: {
          title: 'Finca PermaGuanacaste',
          year: '2023',
          category: 'Residential Design',
          details: 'What was once a cattle pasture is now evolving into the living portfolio of PermaGuanacaste. This site is where we actively test, refine, and learn from our regenerative design projects. The work began with a full site assessment to guide long-term planning, including plant surveys, soil analysis, and mapping water flow. Three ponds are under development: a tiled swimming pond with a biofilter and bridge, alongside two ponds dedicated to aquatic plant propagation. Water management systems are being shaped to support these features, while a young food forest consisting of over 50 species is taking root. Ongoing efforts include house construction, composting systems, and expanding habitat plantings. Finca PermaGuanacaste is designed as a work in progress—an evolving landscape that grows with each season and each experiment.',
        },
        casaDelArbol: {
          title: 'La Casa del Árbol',
          year: '2016',
          category: 'Residential Design',
          details: 'Nestled in the rolling hills of Tilarán, this 7-acre family property has been home to two generations who have worked the land with respect and care. Over the years, traditional farming practices have gradually integrated with permaculture design. The property features newly established food forests that complement the natural landscape and existing agricultural areas. At the heart of the property sits a natural swimming pond, its waters filtered by a thriving community of aquatic plants that maintain the ecosystem\'s balance. The outdoor kitchen, built with local stone, serves as the family\'s gathering place where fresh harvests from the land are transformed into nourishing meals. This is another project close to home that represents a living portfolio of Permaguanacaste\'s work, and is a constant source of inspiration for our team.',
        },
        agroecologyWorkshop: {
          title: 'Agroecology Community Workshop',
          year: '2025',
          category: 'Community Workshops',
          details: 'A hands-on educational workshop that brought together local farmers and agroecology experts to share practical knowledge for sustainable agriculture. Over several days, participants learned to build effective greenhouses using low-cost materials, create and apply organic fertilizers, understand soil health through chromatography testing, and the fundamentals of fruit tree cultivation and care. This community-centered approach empowered local growers with accessible techniques that support both food security and environmental stewardship in the region.',
        },
      },
    },
    services: {
      title: 'Our Services',
      subtitle: 'We offer comprehensive permaculture design services tailored to the unique ecosystem of Guanacaste Province.',
      items: {
        masterplan: {
          title: 'Whole Systems Design Plan',
          description: 'Our concept development plan is a collaborative, hands-on process that blends your vision with our expertise to unlock the full potential of your land. Through open dialogue, in-depth site visits, and detailed assessments, we create a tailored roadmap that guides you from concept to implementation with clarity and confidence. The plan may include conceptual maps, planting layouts, system recommendations, phased timelines, and cost estimates—making it ideal for projects with multiple stages, complex landscapes, or diverse integrated systems.',
        },
        pools: {
          title: 'Biofiltered Swimming Pools',
          description: 'Building natural swimming pools is where our expertise truly shines. Experience the luxury of swimming in pure, living water in harmony with nature. Our biofiltered pools use plants and beneficial microbes to keep your water crystal clear without harsh chemicals. We work with the water on your land and guide you through material options, cost estimates, and designs tailored to your style and needs. From child-friendly family pools to peaceful retreats, each pool enhances your landscape and supports local biodiversity. Plus, we provide ongoing maintenance to keep your pool healthy, vibrant, and beautifully balanced for years to come.',
        },
        foodSystems: {
          title: 'Regenerative Food Systems',
          description: 'Transform your land into a thriving, productive ecosystem that nourishes both people and soil. We begin by assessing your site and leveraging our deep knowledge of local plants to design food forests and edible landscapes tailored to your environment. Using sustainable agroforestry and polyculture techniques that mimic natural forest systems, we carefully select and arrange species to build biodiversity, improve soil health, and ensure safe, abundant harvests year-round. Throughout the process, we prioritize practices that reduce external inputs and promote resilience, helping your food forest become more productive and self-sustaining over time.',
        },
        soilHealth: {
          title: 'Soil Health Management',
          description: 'Healthy soil is the foundation of all thriving ecosystems, and our expertise ensures yours reaches its full potential. We begin with thorough soil testing to assess quality and identify specific needs. Using this data, we tailor organic soil management practices that support beneficial microbial life, enhance water retention, and build lasting fertility. Our approach blends time-tested composting techniques with modern soil science, including the application of organic fertilizers and amendments. The result is living, nutrient-rich soil that promotes vigorous plant growth, sequesters carbon, and improves the overall health and resilience of your land.',
        },
        landscapingMaintenance: {
          title: 'Ongoing Landscape Care',
          description: 'Maintain the health and vitality of your regenerative landscape with our year-round, seasonally adapted care services. Guanacaste\'s unique blend of dry tropical forests, moist deciduous woodlands, and riverine ecosystems demands attentive stewardship through distinct wet and dry seasons. Whether you\'re on-site or away, our expert team provides tailored maintenance that respects these natural rhythms, from pruning and seasonal plantings during the rainy season to strategic soil building and water conservation efforts throughout the dry months. By aligning care with the land\'s ecological cycles, we help your landscape thrive sustainably and continue evolving in harmony with its environment.',
        },
      },
    },
    ourStory: {
      title: 'Our Story',
      companyDescription: 'Permaguanacaste was founded in 2020 out of a passion for reconnecting people with the land through thoughtful, regenerative design. Rooted in the unique ecosystems of Guanacaste, we combine local knowledge with international permaculture expertise to create landscapes that support both ecological health and community well-being. Our work is driven by a commitment to foster abundance, resilience, and lasting harmony between people and nature.',
      gabrielBio1: 'Born and raised in the heart of Guanacaste Province, our founder Gabriel grew up surrounded by the diverse ecosystems that define this remarkable region of Costa Rica. From the dry tropical forests to the fertile valleys, this land has been both his classroom and home. Growing up here meant learning to read the subtle signs of the seasons, understanding how water moves across the landscape, and developing a deep knowledge of native terrestrial and aquatic plants that thrive in this climate.',
      gabrielBio2: 'Gabriel\'s journey began with hands-on mechanical work, developing a practical understanding of systems and problem-solving. His passion for sustainable living led him to study permaculture techniques in Argentina, gaining expertise in regenerative agricultural practices and holistic land management. This foundation took him to Switzerland, where he spent ten years as part of a specialized company dedicated to building natural pools and restoring biodiversity to both agricultural and urban landscapes. Returning home to Guanacaste, he was driven by a vision to establish a company that would channel his experiences toward protecting and enhancing the natural heritage of his province, creating a bridge between traditional Costa Rican land wisdom and permaculture practices.',
    },
    contact: {
      title: 'Let\'s Create Something Beautiful Together',
      subtitle: 'Whether you\'re envisioning a thriving food forest, a crystal-clear biofiltered pool, or a complete landscape transformation, we\'re here to help bring your vision to life.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Tell us about your project...',
        submit: 'Send Message',
        submitting: 'Sending...',
        successTitle: 'Message Sent Successfully!',
        successMessage: 'Thank you for reaching out. We\'ll get back to you within 24 hours to discuss your project.',
        newMessage: 'Send Another Message',
      },
    },
    footer: {
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
      contactInfo: 'Contact Info',
      getInTouch: 'Get in Touch',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      copyrightStart: '© 2024 Permaguanacaste. All rights reserved.',
      copyrightEnd: 'Regenerative design for a sustainable future.',
    },
  },
  es: {
    navigation: {
      projects: 'PROYECTOS',
      services: 'SERVICIOS',
      about: 'NOSOTROS',
      contact: 'CONTACTO',
    },
    hero: {
      mainHeading: 'Donde el agua da forma a la tierra, construimos sistemas que prosperan.',
      subHeading: 'Diseño y guía de permacultura, y las herramientas para dar vida a tu tierra.',
    },
    intro: {
      title: 'Diseño Regenerativo',
      subtitle: 'para la Provincia de Guanacaste',
      description: 'Diseñamos paisajes resilientes que trabajan con la naturaleza, no en su contra. Desde piscinas biofiltradas hasta bosques comestibles prósperos, nuestro enfoque de permacultura crea abundancia mientras restaura la tierra. Ya sea que estés imaginando una finca familiar o un retiro comercial, combinamos la sabiduría local con técnicas probadas para construir algo verdaderamente sostenible.',
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Cada historia aquí refleja nuestro compromiso con la práctica regenerativa, ya sea transformando paisajes en ecosistemas prósperos o empoderando a las comunidades con el conocimiento para cultivar abundancia de su propia tierra.',
      items: {
        fincaPermaguanacaste: {
          title: 'Finca PermaGuanacaste',
          year: '2023',
          category: 'Diseño Residencial',
          details: 'Lo que una vez fue un pastizal para ganado ahora está evolucionando hacia el portafolio viviente de PermaGuanacaste. Este sitio es donde probamos activamente, refinamos y aprendemos de nuestros proyectos de diseño regenerativo. El trabajo comenzó con una evaluación completa del sitio para guiar la planificación a largo plazo, incluyendo estudios de plantas, análisis de suelo y mapeo del flujo de agua. Tres estanques están en desarrollo: un estanque de natación embaldosado con un biofiltro y puente, junto con dos estanques dedicados a la propagación de plantas acuáticas. Los sistemas de gestión del agua se están configurando para apoyar estas características, mientras que un joven bosque comestible compuesto por más de 50 especies está echando raíces. Los esfuerzos en curso incluyen construcción de casas, sistemas de compostaje y expansión de plantaciones de hábitat. Finca PermaGuanacaste está diseñada como un trabajo en progreso: un paisaje en evolución que crece con cada temporada y cada experimento.',
        },
        casaDelArbol: {
          title: 'La Casa del Árbol',
          year: '2016',
          category: 'Diseño Residencial',
          details: 'Ubicada en las colinas ondulantes de Tilarán, esta propiedad familiar de 7 acres ha sido hogar de dos generaciones que han trabajado la tierra con respeto y cuidado. A lo largo de los años, las prácticas agrícolas tradicionales se han integrado gradualmente con el diseño de permacultura. La propiedad cuenta con bosques comestibles recién establecidos que complementan el paisaje natural y las áreas agrícolas existentes. En el corazón de la propiedad se encuentra un estanque natural de natación, sus aguas filtradas por una próspera comunidad de plantas acuáticas que mantienen el equilibrio del ecosistema. La cocina al aire libre, construida con piedra local, sirve como lugar de reunión de la familia donde las cosechas frescas de la tierra se transforman en comidas nutritivas. Este es otro proyecto cercano a casa que representa un portafolio viviente del trabajo de Permaguanacaste, y es una fuente constante de inspiración para nuestro equipo.',
        },
        agroecologyWorkshop: {
          title: 'Taller Comunitario de Agroecología',
          year: '2025',
          category: 'Talleres Comunitarios',
          details: 'Un taller educativo práctico que reunió a agricultores locales y expertos en agroecología para compartir conocimientos prácticos para la agricultura sostenible. Durante varios días, los participantes aprendieron a construir invernaderos efectivos usando materiales de bajo costo, crear y aplicar fertilizantes orgánicos, entender la salud del suelo a través de pruebas de cromatografía, y los fundamentos del cultivo y cuidado de árboles frutales. Este enfoque centrado en la comunidad empoderó a los cultivadores locales con técnicas accesibles que apoyan tanto la seguridad alimentaria como la administración ambiental en la región.',
        },
      },
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Ofrecemos servicios integrales de diseño de permacultura adaptados al ecosistema único de la Provincia de Guanacaste.',
      items: {
        masterplan: {
          title: 'Plan de Diseño de Sistemas Integrales',
          description: 'Nuestro plan de desarrollo de conceptos es un proceso colaborativo y práctico que combina tu visión con nuestra experiencia para desbloquear todo el potencial de tu tierra. A través de diálogo abierto, visitas exhaustivas al sitio y evaluaciones detalladas, creamos una hoja de ruta personalizada que te guía desde el concepto hasta la implementación con claridad y confianza. El plan puede incluir mapas conceptuales, diseños de plantación, recomendaciones de sistemas, cronogramas por fases y estimaciones de costos, haciéndolo ideal para proyectos con múltiples etapas, paisajes complejos o diversos sistemas integrados.',
        },
        pools: {
          title: 'Piscinas Biofiltradas',
          description: 'La construcción de piscinas naturales es donde nuestra experiencia realmente brilla. Experimenta el lujo de nadar en agua pura y viva en armonía con la naturaleza. Nuestras piscinas biofiltradas utilizan plantas y microbios beneficiosos para mantener tu agua cristalina sin químicos agresivos. Trabajamos con el agua en tu tierra y te guiamos a través de opciones de materiales, estimaciones de costos y diseños adaptados a tu estilo y necesidades. Desde piscinas familiares amigables para niños hasta retiros pacíficos, cada piscina mejora tu paisaje y apoya la biodiversidad local. Además, proporcionamos mantenimiento continuo para mantener tu piscina saludable, vibrante y bellamente equilibrada durante años.',
        },
        foodSystems: {
          title: 'Sistemas Alimentarios Regenerativos',
          description: 'Transforma tu tierra en un ecosistema próspero y productivo que nutre tanto a las personas como al suelo. Comenzamos evaluando tu sitio y aprovechando nuestro profundo conocimiento de plantas locales para diseñar bosques comestibles y paisajes comestibles adaptados a tu ambiente. Usando técnicas sostenibles de agroforestería y policultivo que imitan los sistemas forestales naturales, seleccionamos y organizamos cuidadosamente las especies para construir biodiversidad, mejorar la salud del suelo y asegurar cosechas seguras y abundantes durante todo el año. A lo largo del proceso, priorizamos prácticas que reducen los insumos externos y promueven la resistencia, ayudando a que tu bosque comestible se vuelva más productivo y autosuficiente con el tiempo.',
        },
        soilHealth: {
          title: 'Gestión de la Salud del Suelo',
          description: 'El suelo saludable es la base de todos los ecosistemas prósperos, y nuestra experiencia asegura que el tuyo alcance su máximo potencial. Comenzamos con pruebas exhaustivas del suelo para evaluar la calidad e identificar necesidades específicas. Usando estos datos, adaptamos prácticas orgánicas de gestión del suelo que apoyan la vida microbiana beneficiosa, mejoran la retención de agua y construyen fertilidad duradera. Nuestro enfoque combina técnicas de compostaje probadas en el tiempo con ciencia moderna del suelo, incluyendo la aplicación de fertilizantes orgánicos y enmiendas. El resultado es suelo vivo y rico en nutrientes que promueve el crecimiento vigoroso de las plantas, secuestra carbono y mejora la salud general y resistencia de tu tierra.',
        },
        landscapingMaintenance: {
          title: 'Cuidado Continuo del Paisaje',
          description: 'Mantén la salud y vitalidad de tu paisaje regenerativo con nuestros servicios de cuidado durante todo el año, adaptados estacionalmente. La mezcla única de Guanacaste de bosques tropicales secos, bosques deciduos húmedos y ecosistemas ribereños demanda administración atenta a través de estaciones húmedas y secas distintas. Ya sea que estés en el sitio o ausente, nuestro equipo experto proporciona mantenimiento personalizado que respeta estos ritmos naturales, desde poda y plantaciones estacionales durante la temporada lluviosa hasta esfuerzos estratégicos de construcción de suelo y conservación de agua durante los meses secos. Al alinear el cuidado con los ciclos ecológicos de la tierra, ayudamos a que tu paisaje prospere sosteniblemente y continúe evolucionando en armonía con su ambiente.',
        },
      },
    },
    ourStory: {
      title: 'Nuestra Historia',
      companyDescription: 'Permaguanacaste fue fundada en 2020 por una pasión por reconectar a las personas con la tierra a través del diseño reflexivo y regenerativo. Arraigados en los ecosistemas únicos de Guanacaste, combinamos el conocimiento local con la experiencia internacional en permacultura para crear paisajes que apoyen tanto la salud ecológica como el bienestar comunitario. Nuestro trabajo está impulsado por un compromiso de fomentar la abundancia, resistencia y armonía duradera entre las personas y la naturaleza.',
      gabrielBio1: 'Nacido y criado en el corazón de la Provincia de Guanacaste, nuestro fundador Gabriel creció rodeado de los diversos ecosistemas que definen esta región notable de Costa Rica. Desde los bosques tropicales secos hasta los valles fértiles, esta tierra ha sido tanto su aula como su hogar. Crecer aquí significó aprender a leer las señales sutiles de las estaciones, entender cómo se mueve el agua a través del paisaje y desarrollar un conocimiento profundo de las plantas terrestres y acuáticas nativas que prosperan en este clima.',
      gabrielBio2: 'El viaje de Gabriel comenzó con trabajo mecánico práctico, desarrollando una comprensión práctica de sistemas y resolución de problemas. Su pasión por la vida sostenible lo llevó a estudiar técnicas de permacultura en Argentina, ganando experiencia en prácticas agrícolas regenerativas y gestión holística de la tierra. Esta base lo llevó a Suiza, donde pasó diez años como parte de una empresa especializada dedicada a construir piscinas naturales y restaurar la biodiversidad tanto en paisajes agrícolas como urbanos. Al regresar a casa a Guanacaste, fue impulsado por una visión de establecer una empresa que canalizaría sus experiencias hacia la protección y mejora del patrimonio natural de su provincia, creando un puente entre la sabiduría tradicional costarricense de la tierra y las prácticas de permacultura.',
    },
    contact: {
      title: 'Creemos Algo Hermoso Juntos',
      subtitle: 'Ya sea que estés imaginando un bosque comestible próspero, una piscina biofiltrada cristalina o una transformación completa del paisaje, estamos aquí para ayudar a dar vida a tu visión.',
      form: {
        name: 'Nombre Completo',
        email: 'Dirección de Correo Electrónico',
        subject: 'Asunto',
        message: 'Cuéntanos sobre tu proyecto...',
        submit: 'Enviar Mensaje',
        submitting: 'Enviando...',
        successTitle: '¡Mensaje Enviado Exitosamente!',
        successMessage: 'Gracias por contactarnos. Te responderemos dentro de 24 horas para discutir tu proyecto.',
        newMessage: 'Enviar Otro Mensaje',
      },
    },
    footer: {
      quickLinks: 'Enlaces Rápidos',
      followUs: 'Síguenos',
      contactInfo: 'Información de Contacto',
      getInTouch: 'Ponte en Contacto',
      emailLabel: 'Correo Electrónico',
      phoneLabel: 'Teléfono',
      copyrightStart: '© 2024 Permaguanacaste. Todos los derechos reservados.',
      copyrightEnd: 'Diseño regenerativo para un futuro sostenible.',
    },
  },
};
