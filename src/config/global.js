export default {
  global: {
    Name: 'Técnicas agroecológicas para el manejo y seguimiento del suelo agrícola',
    Description:
      'El componente formativo orienta el desarrollo de conocimientos y prácticas relacionadas con la aplicación de materiales orgánicos y enmiendas para el mejoramiento de las condiciones del suelo, así como el seguimiento de sus características físicas, químicas y biológicas mediante técnicas de manejo agroecológico. A través de este proceso formativo, se promueve la conservación de la fertilidad, el uso sostenible de los recursos naturales y el fortalecimiento de sistemas productivos agrícolas más sostenibles y resilientes.',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Manejo agroecológico del suelo y aplicación de materiales orgánicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Técnicas y prácticas para el acondicionamiento del suelo agrícola',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Seguimiento y control de variables agroecológicas del suelo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Verificación de Buenas Prácticas Agrícolas y normatividad en el manejo agroecológico del suelo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Abono orgánico',
      significado:
        'Material de origen natural utilizado para mejorar la fertilidad y las condiciones del suelo agrícola.',
    },
    {
      termino: 'Agroecología',
      significado:
        'Enfoque que integra principios ecológicos y prácticas sostenibles dentro de los sistemas agrícolas.',
    },
    {
      termino: 'Biofertilizante',
      significado:
        'Producto elaborado con microorganismos o materiales orgánicos que favorecen el desarrollo de las plantas y mejoran el suelo.',
    },
    {
      termino: 'Calibración',
      significado:
        'Proceso de ajuste y verificación de equipos e instrumentos para garantizar mediciones precisas y confiables.',
    },
    {
      termino: 'Cobertura vegetal',
      significado:
        'Vegetación o residuos vegetales que protegen el suelo frente a erosión, pérdida de humedad y degradación.',
    },
    {
      termino: '<em>Compost</em>',
      significado:
        'Abono orgánico obtenido mediante descomposición controlada de residuos orgánicos.',
    },
    {
      termino: 'Conservación del suelo',
      significado:
        'Conjunto de prácticas orientadas a proteger y mantener las propiedades físicas, químicas y biológicas del suelo.',
    },
    {
      termino: 'Fertilidad',
      significado:
        'Capacidad del suelo para suministrar nutrientes y condiciones adecuadas para el crecimiento de las plantas.',
    },
    {
      termino: 'Humedad',
      significado: 'Cantidad de agua presente en el suelo o en el ambiente.',
    },
    {
      termino: 'Labranza',
      significado:
        'Conjunto de actividades realizadas para preparar y acondicionar el suelo antes de la siembra.',
    },
    {
      termino: 'Materia orgánica',
      significado:
        'Residuos vegetales o animales descompuestos que aportan nutrientes y mejoran las condiciones del suelo.',
    },
    {
      termino: 'Monitoreo agroecológico',
      significado:
        'Seguimiento y evaluación de variables relacionadas con el suelo, los cultivos y el ambiente dentro del sistema agrícola.',
    },
    {
      termino: 'pH',
      significado:
        'Medida utilizada para determinar el nivel de acidez o alcalinidad del suelo.',
    },
    {
      termino: 'Sustrato',
      significado:
        'Material utilizado para favorecer la germinación y el desarrollo de las plantas.',
    },
    {
      termino: 'Variables agroecológicas',
      significado:
        'Factores físicos, químicos y biológicos que permiten evaluar el comportamiento y estado del sistema productivo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ingenierizando. (s. f.). Instrumentos de medición. Ingenierizando.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (s. f.). Índice de normatividad. Instituto Colombiano Agropecuario (ICA).',
      link: '',
    },
    {
      referencia:
        'Larrosa Arnal. (s. f.). Labranza: qué es y tipos de labranza. Larrosa Arnal.',
      link: '',
    },
    {
      referencia:
        'Lumiform. (s. f.). Buenas prácticas agrícolas: definición, importancia y lista de verificación. Lumiform.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (s. f.). Normativa ambiental. Ministerio de Ambiente y Desarrollo Sostenible.',
      link: '',
    },
    {
      referencia:
        'SignificadosWeb. (s. f.). Concepto de labranza: qué es, definición. SignificadosWeb.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto Temático',
          centro: 'Centro Agroturístico – Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico – Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth González Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
