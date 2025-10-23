export const agentsData = [
    {
      id: "estela",
      nombre: "Estela",
      categoria: "Salud y Bienestar",
      subsector: "Clínicas Estéticas",
      rol: "Agente IA para Clínicas Estéticas",
      personalidad: "Recepcionista Virtual",
      funcionClave1: "Guía a potenciales pacientes",
      funcionClave2: "Agenda tratamientos",
      beneficioCentral: "Aumenta la tasa de conversión de leads en un 25%",
      precio: "$39 USD / mes",
      imagen: "/images/Samanta.jpg", // Reusamos imagen por ahora
      color: "pink",
      descripcion: `Estela es tu recepcionista virtual que nunca duerme. Guía a tus potenciales pacientes desde la primera consulta hasta el agendamiento de su tratamiento, respondiendo al instante sus dudas sobre servicios y precios.`,
      beneficios: [
        "Agendamiento inteligente de citas y valoraciones.",
        "Seguimiento post-tratamiento y resolución de FAQs.",
        "Aumenta la tasa de conversión de leads en un 25%."
      ],
      faqs: [
        { pregunta: "¿Necesito saber de tecnología para usarla?", respuesta: "No, Estela está lista para usar. Nuestro equipo te guía paso a paso." },
        { pregunta: "¿Se integra con mi sistema de citas?", respuesta: "Sí, podemos conectarla a los principales sistemas de agendamiento." },
      ],
      integracion: {
        compatibilidadCanal: ["Web", "WhatsApp", "Instagram DM"],
        requisitosConexion: "Se requiere acceso de administrador a la Web/CMS y una cuenta de WhatsApp Business API.",
        funcionesMarcaBlanca: "Personalización total de logo y colores del widget, adaptación de mensajes y flujos."
      }
    },
    {
      id: "gael",
      nombre: "Gael",
      categoria: "Salud y Bienestar",
      subsector: "Odontología",
      rol: "Agente IA para Odontología",
      personalidad: "Asistente Preciso",
      funcionClave1: "Triage de síntomas",
      funcionClave2: "Gestiona la agenda",
      beneficioCentral: "Reduce las ausencias (no-shows) en un 40%",
      precio: "$39 USD / mes",
      imagen: "/images/Gael.jpg", // Imagen de Gael
      color: "blue",
      descripcion: `Gael es el asistente preciso y tranquilizador para tu clínica dental. Realiza un triage de síntomas, clasifica urgencias y gestiona la agenda para que tu equipo se enfoque en los pacientes.`,
      beneficios: [
        "Triage de síntomas y clasificación de urgencias.",
        "Recordatorio de citas y confirmación de asistencia.",
        "Reduce las ausencias (no-shows) en un 40%."
      ],
      faqs: [
        { pregunta: "¿Puede manejar recordatorios de citas?", respuesta: "Sí, envía recordatorios automáticos por WhatsApp para reducir las ausencias." },
        { pregunta: "¿Entiende términos dentales?", respuesta: "Está pre-entrenado con terminología odontológica común." },
      ]
    },
    {
      id: "kai",
      nombre: "Kai",
      categoria: "Salud y Bienestar",
      subsector: "Gimnasios y Fitness",
      rol: "Agente IA para Gimnasios y Fitness",
      personalidad: "Coach Motivador",
      funcionClave1: "Gestiona altas y bajas",
      funcionClave2: "Envía rutinas y motivación",
      beneficioCentral: "Incrementa la retención de miembros en un 15%",
      precio: "$29 USD / mes",
      imagen: "/images/Catalina.jpg", // Reusamos imagen por ahora
      color: "orange",
      descripcion: `Kai es el coach motivador que tu gimnasio necesita. Gestiona altas y bajas, envía rutinas y mantiene a tus miembros comprometidos con mensajes de motivación personalizados.`,
      beneficios: [
        "Gestión de altas, bajas y renovaciones.",
        "Envío de rutinas y mensajes de motivación.",
        "Incrementa la retención de miembros en un 15%."
      ],
      faqs: [
        { pregunta: "¿Puede gestionar pagos de membresías?", respuesta: "Sí, puede enviar recordatorios de pago e integrarse con pasarelas." },
        { pregunta: "¿Los mensajes de motivación son personalizables?", respuesta: "Totalmente. Puedes adaptar el tono y la frecuencia." },
      ]
    },
    {
      id: "rocky",
      nombre: "Rocky",
      categoria: "Salud y Bienestar",
      subsector: "Veterinarias",
      rol: "Agente IA para Clínicas Veterinarias",
      personalidad: "Asistente Amigable",
      funcionClave1: "Agenda citas y recordatorios",
      funcionClave2: "Triage de síntomas básicos",
      beneficioCentral: "Mejora la comunicación y fidelización",
      precio: "$39 USD / mes",
      imagen: "/images/Rocky.jpg", // Imagen de Rocky
      color: "brown",
      descripcion: "Rocky es el asistente amigable para tu clínica veterinaria. Agenda citas, envía recordatorios de vacunación y realiza un triage de síntomas básicos para que puedas enfocarte en el cuidado de las mascotas.",
      beneficios: [
        "Agendamiento y recordatorios automáticos para citas y vacunas.",
        "Triage de síntomas para identificar casos de urgencia.",
        "Mejora la comunicación y fidelización de los dueños de mascotas."
      ],
      faqs: [
        { pregunta: "¿Puede gestionar el historial de los pacientes?", respuesta: "Puede integrarse con sistemas de gestión para acceder a historiales básicos." },
        { pregunta: "¿Cómo maneja las emergencias?", respuesta: "Está entrenado para reconocer palabras clave de emergencia y dirigir al usuario a un contacto humano de inmediato." },
      ]
    },
    {
      id: "fenix",
      nombre: "Fénix",
      categoria: "Servicios Profesionales",
      subsector: "Inmobiliarias",
      rol: "Agente IA para Inmobiliarias",
      personalidad: "Agente Analítico",
      funcionClave1: "Califica leads 24/7",
      funcionClave2: "Agenda visitas a propiedades",
      beneficioCentral: "Libera más de 10 horas semanales a cada agente",
      precio: "$49 USD / mes",
      imagen: "/images/Cristian.jpg", // Reusamos imagen por ahora
      color: "blue",
      descripcion: `Fénix es el agente analítico y eficiente que califica leads 24/7. Distingue entre compradores serios, vendedores y curiosos, agendando visitas solo con los prospectos de mayor potencial.`,
      beneficios: [
        "Calificación automática de leads (comprador/vendedor).",
        "Agendamiento de visitas a propiedades 24/7.",
        "Libera más de 10 horas semanales a cada agente."
      ],
      faqs: [
        { pregunta: "¿Cómo califica a los leads?", respuesta: "Mediante una serie de preguntas clave pre-configuradas para el sector inmobiliario." },
        { pregunta: "¿Se integra con portales como Zillow o Idealista?", respuesta: "Puede integrarse para capturar leads de múltiples fuentes." },
      ],
      integracion: {
        compatibilidadCanal: ["Web", "WhatsApp", "Facebook Messenger"],
        requisitosConexion: "Se requiere acceso de administrador a la Web/CRM y, opcionalmente, credenciales de portales inmobiliarios para integración avanzada.",
        funcionesMarcaBlanca: "Personalización de marca, adaptación de flujos de calificación y agendamiento."
      }
    },
    {
      id: "lex",
      nombre: "Lex",
      categoria: "Servicios Profesionales",
      subsector: "Despachos de Abogados",
      rol: "Agente IA para Despachos de Abogados",
      personalidad: "Asistente Legal",
      funcionClave1: "Calificación inicial de casos",
      funcionClave2: "Recolecta documentación preliminar",
      beneficioCentral: "Optimiza el tiempo de los abogados",
      precio: "$49 USD / mes",
      imagen: "/images/Lex.jpg", // Imagen de Lex
      color: "darkblue",
      descripcion: "Lex es el asistente legal que optimiza la captación de clientes. Realiza una calificación inicial de casos, agenda consultas y recolecta documentación preliminar de forma discreta y profesional.",
      beneficios: [
        "Filtro y calificación automática de nuevos casos.",
        "Recolección de información y documentos clave.",
        "Optimiza el tiempo de los abogados en tareas administrativas."
      ],
      faqs: [
        { pregunta: "¿Garantiza la confidencialidad de la información?", respuesta: "Absolutamente. Opera bajo estrictos protocolos de seguridad y privacidad de datos." },
        { pregunta: "¿Se puede personalizar el cuestionario de calificación?", respuesta: "Sí, se adapta a las diferentes áreas de práctica legal (familia, mercantil, etc.)." },
      ]
    },
    {
      id: "zoe",
      nombre: "Zoe",
      categoria: "E-commerce y Retail",
      subsector: "Tienda de Moda",
      rol: "Agente IA para Tiendas de Moda",
      personalidad: "Asesora de Estilo",
      funcionClave1: "Recomienda productos",
      funcionClave2: "Gestión de devoluciones",
      beneficioCentral: "Aumenta el valor del carrito promedio (AOV) en un 20%",
      imagen: "/images/Zoe.jpg", // Imagen de Zoe
      color: "pink",
      descripcion: `Zoe es tu asesora de estilo virtual. Recomienda productos, resuelve dudas de tallas y gestiona devoluciones, convirtiendo visitantes en compradores leales y aumentando el valor de cada carrito.`,
      beneficios: [
        "Asistente de compra y recomendador de productos.",
        "Gestión de devoluciones y seguimiento de pedidos.",
        "Aumenta el valor del carrito promedio (AOV) en un 20%."
      ],
      faqs: [
        { pregunta: "¿Funciona con Shopify?", respuesta: "Sí, se integra perfectamente con Shopify y otras plataformas de e-commerce." },
        { pregunta: "¿Puede mostrar productos del catálogo?", respuesta: "Sí, puede mostrar imágenes y enlaces de productos directamente en el chat." },
      ],
      integracion: {
        compatibilidadCanal: ["Web", "WhatsApp", "Instagram DM", "Facebook Messenger"],
        requisitosConexion: "Se requiere acceso de administrador a la plataforma de e-commerce (ej. Shopify, WooCommerce) y, opcionalmente, credenciales de WhatsApp Business API.",
        funcionesMarcaBlanca: "Personalización de marca, adaptación de recomendaciones de productos y gestión de devoluciones."
      }
    },
    {
      id: "aurora",
      nombre: "Aurora",
      categoria: "E-commerce y Retail",
      subsector: "Turismo y Hotelería",
      rol: "Agente IA para Turismo y Hotelería",
      personalidad: "Agente de Viajes",
      funcionClave1: "Asistente de reservas",
      funcionClave2: "Recomienda actividades",
      beneficioCentral: "Aumenta las reservas directas",
      precio: "$49 USD / mes",
      imagen: "/images/Aurora.jpg", // Imagen de Aurora
      color: "purple",
      descripcion: "Aurora es tu agente de viajes 24/7. Ayuda a los usuarios a encontrar y reservar vuelos y hoteles, recomienda actividades y resuelve dudas sobre destinos, todo de forma automática.",
      beneficios: [
        "Asistente de reservas para vuelos, hoteles y actividades.",
        "Recomendaciones personalizadas basadas en las preferencias del viajero.",
        "Aumenta las reservas directas y mejora la experiencia del cliente."
      ],
      faqs: [
        { pregunta: "¿Se puede integrar con motores de reserva como Amadeus?", respuesta: "Sí, puede conectarse a los principales GDS y sistemas de reserva." },
        { pregunta: "¿Ofrece soporte en varios idiomas?", respuesta: "Sí, Aurora puede ser configurada para atender a viajeros de todo el mundo." },
      ]
    },
    {
      id: "atlas",
      nombre: "Atlas",
      categoria: "Gestión y Operaciones",
      subsector: "Recursos Humanos",
      rol: "Agente IA para Recursos Humanos",
      personalidad: "Automatizador de RRHH",
      funcionClave1: "Onboarding de empleados",
      funcionClave2: "Responde dudas sobre políticas",
      beneficioCentral: "Automatiza el 70% de tareas repetitivas de RRHH",
      precio: "$39 USD / mes",
      imagen: "/images/Atlas.jpg", // Imagen de Atlas
      color: "green",
      descripcion: `Atlas automatiza las tareas repetitivas de RRHH. Guía a los nuevos empleados en su onboarding, responde dudas sobre políticas internas y gestiona solicitudes de vacaciones, liberando a tu equipo.`,
      beneficios: [
        "Onboarding de nuevos empleados y resolución de dudas.",
        "Gestión de solicitudes de vacaciones y ausencias.",
        "Automatiza el 70% de las tareas repetitivas de RRHH."
      ],
      faqs: [
        { pregunta: "¿Es seguro para manejar datos de empleados?", respuesta: "Sí, cumple con los estándares de seguridad y privacidad de datos." },
        { pregunta: "¿Se puede entrenar con nuestras políticas internas?", respuesta: "Por supuesto, lo alimentamos con tu base de conocimiento específica." },
      ],
      integracion: {
        compatibilidadCanal: ["Web", "Slack", "Microsoft Teams"],
        requisitosConexion: "Se requiere acceso de administrador a la intranet/plataforma de RRHH y, opcionalmente, integración con sistemas de gestión de vacaciones.",
        funcionesMarcaBlanca: "Personalización de marca, adaptación de políticas internas y flujos de onboarding."
      }
    },
    {
      id: "orion",
      nombre: "Orion",
      categoria: "Gestión y Operaciones",
      subsector: "Finanzas y Startups",
      rol: "Agente IA para Finanzas y Startups",
      personalidad: "Analista Financiero",
      funcionClave1: "Responde sobre métricas clave",
      funcionClave2: "Automatiza seguimiento de KPIs",
      beneficioCentral: "Claridad instantánea sobre métricas financieras",
      precio: "$59 USD / mes",
      imagen: "/images/Jhoan.jpg", // Reusamos imagen por ahora
      color: "darkgreen",
      descripcion: "Orion es el analista financiero que toda startup necesita. Responde preguntas sobre métricas clave (MRR, Churn, LTV), ayuda a interpretar reportes y automatiza el seguimiento de KPIs.",
      beneficios: [
        "Claridad instantánea sobre métricas financieras clave.",
        "Automatización de la reportería financiera básica.",
        "Educa y alinea al equipo en torno a los KPIs importantes."
      ],
      faqs: [
        { pregunta: "¿Se integra con Quickbooks o Stripe?", respuesta: "Sí, puede conectarse a fuentes de datos como Stripe, Quickbooks y hojas de cálculo." },
        { pregunta: "¿Puede generar gráficos?", respuesta: "Puede generar resúmenes y tablas de datos; la visualización se realiza en el dashboard al que se integre." },
      ]
    }
  ];