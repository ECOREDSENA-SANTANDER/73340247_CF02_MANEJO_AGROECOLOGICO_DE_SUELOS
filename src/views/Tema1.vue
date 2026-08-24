<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Manejo agroecológico del suelo y aplicación de materiales orgánicos
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.pe-lg-0.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/tema1/1.png')
      .col-lg-7.ps-lg-0(data-aos="fade-left")
        .bg3.mb-0.p-4
          img.img-t.mb-4.mt-lg-1(src='@/assets/curso/tema1/2.svg', alt='')
          p.mb-0.mb-lg-2 El manejo agroecológico del suelo constituye una práctica fundamental para garantizar la sostenibilidad de los sistemas productivos agrícolas. A través de la aplicación de materiales orgánicos, el manejo adecuado de sustratos y la implementación de prácticas de conservación, es posible fortalecer la fertilidad del suelo, mejorar sus condiciones físicas, químicas y biológicas, y favorecer el desarrollo adecuado de los cultivos. Estas acciones permiten optimizar el uso de recursos naturales y promover sistemas agrícolas más resilientes y sostenibles.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Características del cultivo

    p.mb-5 Entre los principales aspectos que deben considerarse para el manejo adecuado de los cultivos dentro de los sistemas agrícolas se encuentran las características propias de cada especie vegetal, sus requerimientos productivos y las condiciones ambientales necesarias para su desarrollo. El análisis de estos elementos permite implementar prácticas agrícolas más eficientes, sostenibles y acordes con las condiciones del territorio. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items-center(titulo="Tipo de cultivo")
            .col-lg-7.mb-lg-0.mb-4
              p.mb-0 El tipo de cultivo determina gran parte de las prácticas de manejo agrícola que deben implementarse dentro del sistema productivo. Existen cultivos transitorios, permanentes, semipermanentes, hortícolas, frutales y forestales, cada uno con necesidades específicas relacionadas con preparación del suelo, fertilización, riego, control fitosanitario y cosecha. Conocer las características del cultivo permite planificar adecuadamente las labores agrícolas y mejorar las condiciones de producción.
            .col-lg-4.col-md-8.col-10
              img(src='@/assets/curso/tema1/4.png')
          .row.justify-content-center.align-items-center(titulo="Requerimientos nutricionales")
            .col-lg-7.mb-lg-0.mb-4
              p.mb-0 Cada cultivo necesita diferentes cantidades y tipos de nutrientes para desarrollarse correctamente. Elementos como nitrógeno, fósforo, potasio, calcio y materia orgánica cumplen funciones importantes en el crecimiento, floración y producción de las plantas. Identificar los requerimientos nutricionales permite aplicar materiales orgánicos y fertilizantes de manera adecuada, favoreciendo la fertilidad del suelo y el rendimiento agrícola.
            .col-lg-4.col-md-8.col-10
              img(src='@/assets/curso/tema1/5.png')
          .row.justify-content-center.align-items-center(titulo="Necesidades de agua")
            .col-lg-7.mb-lg-0.mb-4
              p.mb-0 El agua es un recurso fundamental para el desarrollo de los cultivos, debido a que participa en procesos de absorción de nutrientes, fotosíntesis y crecimiento vegetal. Cada especie presenta diferentes necesidades hídricas según su etapa de desarrollo, condiciones climáticas y tipo de suelo. El manejo adecuado del riego y la conservación de humedad favorecen el uso eficiente del recurso hídrico y fortalecen la sostenibilidad del sistema agrícola.
            .col-lg-4.col-md-8.col-10
              img(src='@/assets/curso/tema1/6.png')
          .row.justify-content-center.align-items-center(titulo="Adaptación climática")
            .col-lg-7.mb-lg-0.mb-4
              p.mb-0 Las condiciones climáticas como temperatura, humedad, precipitación, radiación solar y altitud influyen directamente sobre el comportamiento y productividad de los cultivos. La selección de especies adaptadas a las características climáticas del territorio favorece mejores condiciones de crecimiento, reduce riesgos productivos y fortalece la capacidad de adaptación frente a cambios ambientales.
            .col-lg-4.col-md-8.col-10
              img(src='@/assets/curso/tema1/7.png')
          .row.justify-content-center.align-items-center(titulo="Tipo de suelo adecuado")
            .col-lg-7.mb-lg-0.mb-4
              p.mb-0 Las propiedades físicas, químicas y biológicas del suelo determinan la capacidad de desarrollo de los cultivos. Factores como textura, drenaje, fertilidad, contenido de materia orgánica y pH influyen en la disponibilidad de nutrientes y en el crecimiento radicular de las plantas. Conocer el tipo de suelo adecuado para cada cultivo permite implementar prácticas de manejo y conservación más eficientes.
            .col-lg-4.col-md-8.col-10
              img(src='@/assets/curso/tema1/8.png')
          .row.justify-content-center.align-items-center(titulo="Ciclo vegetativo y productivo")
            .col-lg-7.mb-lg-0.mb-4
              p.mb-0 El ciclo vegetativo corresponde al tiempo que tarda el cultivo en completar sus diferentes etapas de desarrollo, desde la germinación hasta la cosecha. El conocimiento de estas etapas facilita la programación de actividades agrícolas como siembra, fertilización, control fitosanitario y cosecha, permitiendo mejorar la organización y el seguimiento del sistema productivo.
            .col-lg-4.col-md-8.col-10
              img(src='@/assets/curso/tema1/9.png')
          .row.justify-content-center.align-items-center(titulo="Resistencia a plagas y enfermedades")
            .col-lg-7.mb-lg-0.mb-4
              p.mb-0 La capacidad de los cultivos para tolerar o resistir plagas y enfermedades constituye un aspecto importante dentro del manejo agrícola sostenible. La selección de variedades resistentes disminuye pérdidas productivas, reduce el uso de agroquímicos y favorece el equilibrio biológico del sistema agrícola. Asimismo, permite fortalecer la sostenibilidad y sanidad de los cultivos dentro del territorio.
            .col-lg-4.col-md-8.col-10
              img(src='@/assets/curso/tema1/10.png')

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Unidades de medida: peso, volumen y área

    p.mb-5(data-aos="fade-left") Las unidades de medida son herramientas fundamentales en la agricultura, ya que permiten cuantificar, comparar y controlar diferentes aspectos del sistema productivo, como materiales, dimensiones del terreno, volúmenes de agua e insumos. Su correcta aplicación facilita la planificación y ejecución de actividades agrícolas como la preparación del suelo, siembra, fertilización, riego y cosecha, contribuyendo a una mayor eficiencia en el uso de los recursos. En los procesos agroecológicos, estas mediciones son esenciales para garantizar el uso responsable de insumos orgánicos y recursos naturales, evitando desperdicios y favoreciendo el seguimiento del sistema productivo. En general, las unidades de medida de peso, volumen y área permiten organizar y optimizar las labores agrícolas de manera precisa y sostenible.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema1/11.png')
      .col-lg-9
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Unidades de peso")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 Las unidades de peso se utilizan para medir y cuantificar la cantidad de materiales sólidos empleados dentro de las actividades agrícolas y agroecológicas. Estas mediciones permiten determinar con precisión las cantidades de abonos orgánicos, semillas, compostajes, materiales de siembra, cosechas y otros insumos necesarios para el desarrollo de las labores productivas.
                p.mb-4 El uso adecuado de las unidades de peso facilita la organización y planificación de actividades relacionadas con fertilización, preparación de mezclas, almacenamiento y distribución de materiales dentro del sistema agrícola. Asimismo, permite controlar las cantidades aplicadas en el suelo y en los cultivos, favoreciendo un manejo más eficiente y responsable de los recursos disponibles.
                p.mb-0 Entre las unidades de peso más utilizadas en agricultura se encuentran el gramo (g), kilogramo (kg) y tonelada (t), dependiendo de la cantidad de material que se necesite medir. Estas medidas son importantes para calcular dosis de aplicación, establecer cantidades de producción y realizar seguimiento al rendimiento agrícola.
          .tarjeta.color-a.p-4(titulo="Unidades de volumen")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 Las unidades de volumen permiten medir la cantidad de líquidos y materiales que ocupan un espacio determinado dentro de un recipiente. Estas medidas son fundamentales en las actividades agrícolas, debido a que facilitan el control y manejo de sustancias utilizadas en procesos de riego, fertilización, preparación de mezclas y aplicación de insumos líquidos dentro del sistema productivo.
                p.mb-4 En agricultura, las unidades de volumen se utilizan para cuantificar agua, bioles, fertilizantes líquidos, microorganismos, preparados naturales y otros materiales empleados en el manejo agroecológico de los cultivos y del suelo. Su correcta aplicación permite realizar mezclas adecuadas, controlar cantidades utilizadas y evitar desperdicios o excesos que puedan afectar las condiciones del sistema agrícola.
                p.mb-4 Entre las unidades de volumen más utilizadas se encuentran el litro (L), mililitro (mL) y metro cúbico (m³), dependiendo de la cantidad de material o líquido que se necesite medir. Estas medidas facilitan la organización de actividades agrícolas y permiten desarrollar procesos más precisos y eficientes dentro del manejo productivo.
                p.mb-0 El uso adecuado de las unidades de volumen contribuye a optimizar el aprovechamiento del agua y de los insumos líquidos, favoreciendo prácticas agrícolas más sostenibles y responsables con el ambiente. Asimismo, fortalece los procesos de seguimiento, control y planificación dentro del sistema productivo agrícola.
          .tarjeta.color-a.p-4(titulo="Unidades de área")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 Las unidades de área se emplean para medir y calcular superficies destinadas al establecimiento de cultivos y al desarrollo de diferentes actividades agrícolas dentro del sistema productivo. Estas medidas permiten determinar el tamaño de los terrenos, organizar la distribución de los cultivos y planificar adecuadamente las labores relacionadas con siembra, fertilización, riego y conservación del suelo.
                p.mb-4 El uso de unidades de área facilita la planificación agrícola, debido a que permite conocer con precisión el espacio disponible para la producción y establecer la cantidad de insumos, semillas y materiales necesarios según las dimensiones del terreno. Asimismo, contribuye a organizar las actividades productivas de manera más eficiente y acorde con las características del predio.
                p.mb-4 Entre las unidades de área más utilizadas en agricultura se encuentran el metro cuadrado (m²), utilizado para espacios pequeños o procesos de vivero; la hectárea (ha), empleada para medir grandes extensiones de terreno agrícola; y otras medidas locales utilizadas en diferentes regiones rurales. Estas unidades permiten realizar cálculos relacionados con densidad de siembra, distribución de cultivos y rendimiento productivo.
                p.mb-0 La correcta utilización de las unidades de área también favorece el seguimiento y control de las actividades agrícolas, permitiendo evaluar productividad, organizar registros y facilitar procesos de planificación y manejo agroecológico del suelo. Además, contribuye al uso eficiente del espacio productivo y al fortalecimiento de sistemas agrícolas más organizados y sostenibles.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Modos de aplicación de material orgánico

    p.mb-5(data-aos="fade-right") Los materiales orgánicos son utilizados para mejorar las condiciones del suelo y favorecer el desarrollo de los cultivos. Su aplicación debe realizarse de acuerdo con las necesidades del sistema productivo y las características del cultivo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tarjetaf.p-lg-5.p-4.mb-0
          SlyderA(tipo="b")(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6
                    h4.mb-4 Aplicación al voleo
                    p.mb-4.mb-lg-0 Consiste en distribuir el material orgánico de manera uniforme sobre toda la superficie del suelo. Este método se utiliza principalmente para aplicar compostajes, abonos orgánicos y otros materiales destinados a mejorar las condiciones generales del terreno. La aplicación al voleo favorece la incorporación de materia orgánica, mejora la fertilidad y contribuye a mantener una distribución más homogénea de nutrientes dentro del área cultivada.
                  .col-lg-6.col-md-7
                    img.mb-0.img-t.img-a(src="@/assets/curso/tema1/12.png")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6
                    h4.mb-4 Aplicación localizada
                    p.mb-4.mb-lg-0 Corresponde a la aplicación del material orgánico cerca de las raíces de las plantas o en puntos específicos del cultivo, permitiendo que los nutrientes sean aprovechados de manera más directa y eficiente. Este método facilita el suministro focalizado de nutrientes, reduce pérdidas de material y favorece el desarrollo radicular y el crecimiento adecuado de las plantas.
                  .col-lg-6.col-md-7
                    img.mb-0.img-t.img-a(src="@/assets/curso/tema1/13.png")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6
                    h4.mb-4 Aplicación en surcos
                    p.mb-4.mb-lg-0 Consiste en incorporar materiales orgánicos dentro de los surcos antes o durante la siembra. Esta práctica permite que los nutrientes queden disponibles en la zona donde se desarrollarán las raíces del cultivo, favoreciendo el crecimiento inicial de las plantas y mejorando las condiciones físicas y biológicas del suelo. Además, facilita la conservación de humedad y el aprovechamiento eficiente de los materiales aplicados.
                  .col-lg-6.col-md-7
                    img.mb-0.img-t.img-a(src="@/assets/curso/tema1/14.png")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6
                    h4.mb-4 Aplicación en cobertura
                    p.mb-4.mb-lg-0 Se realiza colocando residuos orgánicos, compostajes o materiales vegetales sobre la superficie del suelo alrededor de las plantas o en las áreas de cultivo. Esta práctica ayuda a conservar la humedad, disminuir procesos de erosión, regular la temperatura del suelo y reducir el crecimiento de arvenses. Asimismo, contribuye al incremento de materia orgánica y fortalece la actividad biológica presente en el sistema agrícola.
                  .col-lg-6.col-md-7
                    img.mb-0.img-t.img-a(src="@/assets/curso/tema1/15.png")

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Manejo de sustratos en sistemas agrícolas

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema1/16.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 El sustrato corresponde al material utilizado para favorecer el crecimiento y desarrollo de las plantas, especialmente en procesos de germinación, propagación y establecimiento de cultivos. Su función principal es proporcionar soporte físico a las raíces y generar condiciones adecuadas de humedad, aireación y disponibilidad de nutrientes, permitiendo un adecuado desarrollo vegetal dentro del sistema productivo.
            br 
            br 
            p.mb-0 El manejo adecuado de los sustratos es fundamental para garantizar la producción de plantas sanas y vigorosas, ya que las condiciones físicas, químicas y biológicas del material utilizado influyen directamente en procesos como germinación, absorción de agua, desarrollo radicular y crecimiento de las plantas. Un sustrato con características apropiadas facilita el establecimiento de los cultivos y contribuye a mejorar las condiciones de producción agrícola.
    
    .titu.p-2.mb-5(data-aos="fade-right")
      h4.mb-0.ps-3.pe-3 Características de un buen sustrato

    p.mb-5(data-aos="fade-left") Un buen sustrato debe presentar condiciones adecuadas que favorezcan el crecimiento, desarrollo y establecimiento de las plantas dentro del sistema productivo. La calidad del sustrato influye directamente en procesos como germinación, absorción de nutrientes, retención de agua y desarrollo de raíces, por lo que su selección y manejo son fundamentales para garantizar cultivos más saludables y productivos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/17.svg')
            h4.text-center.mb-4 Buena retención de humedad
            p.mb-0.text-center El sustrato debe tener la capacidad de conservar una cantidad adecuada de agua para mantener disponibles las condiciones de humedad necesarias para las plantas. Esta característica permite disminuir pérdidas rápidas de agua y favorece el suministro constante de humedad a las raíces, contribuyendo al adecuado desarrollo de los cultivos y reduciendo riesgos de estrés hídrico.
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/18.svg')
            h4.text-center.mb-4 Adecuada aireación
            p.mb-0.text-center La presencia de espacios porosos dentro del sustrato facilita la circulación de aire y el intercambio de oxígeno necesario para el desarrollo radicular y la actividad biológica. Una adecuada aireación evita problemas relacionados con exceso de humedad, compactación y deterioro de las raíces, favoreciendo condiciones más equilibradas para el crecimiento de las plantas.
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/19.svg')
            h4.text-center.mb-4 Disponibilidad de nutrientes
            p.mb-0.text-center Un buen sustrato debe aportar o facilitar la disponibilidad de nutrientes esenciales para el desarrollo de los cultivos. La presencia de materia orgánica y componentes ricos en nutrientes contribuye a fortalecer el crecimiento vegetal, mejorar el desarrollo de hojas, tallos y raíces, y favorecer procesos fisiológicos importantes para la productividad agrícola.
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/20.svg')
            h4.text-center.mb-4 Facilidad para el desarrollo radicular
            p.mb-0.text-center El sustrato debe permitir que las raíces crezcan, se expandan y se desarrollen adecuadamente. Una textura equilibrada y condiciones apropiadas de humedad y aireación facilitan la penetración de las raíces y favorecen la absorción de agua y nutrientes necesarios para el crecimiento de las plantas. Esto contribuye al fortalecimiento del cultivo y a un mejor rendimiento productivo.
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/21.svg')
            h4.text-center.mb-4 Bajo nivel de contaminación
            p.mb-0.text-center El sustrato debe encontrarse libre de sustancias tóxicas, residuos contaminantes, semillas de arvenses, plagas o microorganismos que puedan afectar el crecimiento de las plantas o deteriorar las condiciones del sistema productivo. El uso de materiales limpios y adecuadamente manejados favorece la producción de cultivos más sanos y disminuye riesgos fitosanitarios.

    .titu.p-2.mb-5(data-aos="fade-left")
      h4.mb-0.ps-3.pe-3 Tipos de sustratos

    p.mb-5(data-aos="fade-right") Los sustratos utilizados en los sistemas agrícolas cumplen funciones importantes relacionadas con el soporte de las plantas, la retención de humedad, la aireación y la disponibilidad de nutrientes. La selección del tipo de sustrato depende de las necesidades del cultivo, las condiciones ambientales y el propósito de producción, especialmente en actividades de germinación, propagación y establecimiento de plántulas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items-center(titulo="Tierra abonada")
            .col-lg-7.mb-lg-0.mb-4
              p.mb-0 La tierra abonada es uno de los sustratos más utilizados en actividades agrícolas debido a su capacidad para aportar nutrientes y favorecer el desarrollo de las plantas. Se obtiene mediante la mezcla de suelo con materia orgánica descompuesta, compostajes o abonos naturales. Este tipo de sustrato mejora la fertilidad, facilita la retención de humedad y proporciona condiciones adecuadas para el crecimiento radicular y el establecimiento de los cultivos.
            .col-lg-4.col-md-8.col-10
              img(src='@/assets/curso/tema1/22.png')
          .row.justify-content-center.align-items-center(titulo="<em>Compost</em>")
            .col-lg-7.mb-lg-0.mb-4
              p.mb-0 El #[em compost] es un sustrato orgánico producido a partir de la descomposición controlada de residuos vegetales, estiércoles y otros materiales orgánicos. Se caracteriza por su alto contenido de materia orgánica y nutrientes, contribuyendo al mejoramiento de las propiedades físicas, químicas y biológicas del suelo. El compost favorece la actividad microbiana, mejora la estructura del sustrato y fortalece el crecimiento saludable de las plantas.
            .col-lg-4.col-md-8.col-10
              img(src='@/assets/curso/tema1/23.png')
          .row.justify-content-center.align-items-center(titulo="Cascarilla de arroz")
            .col-lg-7.mb-lg-0.mb-4
              p.mb-0 La cascarilla de arroz es un material ligero utilizado principalmente para mejorar la aireación y el drenaje dentro de las mezclas de sustratos. Su estructura permite mantener espacios porosos que facilitan la circulación de aire y evitan problemas relacionados con exceso de humedad y compactación. Además, contribuye a mantener condiciones adecuadas para el desarrollo radicular y el crecimiento de las plantas.
            .col-lg-4.col-md-8.col-10
              img(src='@/assets/curso/tema1/24.png')
          .row.justify-content-center.align-items-center(titulo="Fibra de coco")
            .col-lg-7.mb-lg-0.mb-4
              p.mb-0 La fibra de coco es un material orgánico obtenido de la cáscara del coco y ampliamente utilizado por su capacidad para retener humedad y favorecer la aireación. Este sustrato presenta buena estabilidad, permite un adecuado desarrollo de raíces y facilita la disponibilidad de agua para las plantas. También es valorado en sistemas agrícolas sostenibles debido a su origen natural y su capacidad de reutilización.
            .col-lg-4.col-md-8.col-10
              img(src='@/assets/curso/tema1/25.png')
          .row.justify-content-center.align-items-center(titulo="Arena")
            .col-lg-7.mb-lg-0.mb-4
              p.mb-0 La arena se utiliza principalmente para mejorar el drenaje y evitar la compactación de los sustratos. Su incorporación en mezclas favorece la circulación de agua y aire, facilitando el crecimiento de las raíces y reduciendo problemas asociados al exceso de humedad. Además, contribuye a generar una textura más equilibrada dentro del sustrato, especialmente en procesos de germinación y propagación de plantas.
            .col-lg-4.col-md-8.col-10
              img(src='@/assets/curso/tema1/26.png')

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Prácticas de conservación del suelo

    p.mb-5(data-aos="fade-left") Las prácticas de conservación buscan proteger el suelo frente a procesos de degradación y pérdida de fertilidad.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Principales prácticas de conservación
        .tabla-a.tab1
          table
            thead
              tr
                th Práctica de conservación
                th Descripción
            tbody
              tr
                td Coberturas vegetales
                td Consisten en mantener plantas, residuos vegetales o materiales orgánicos sobre la superficie del suelo con el propósito de protegerlo frente a procesos de erosión, pérdida de humedad y cambios bruscos de temperatura. Las coberturas vegetales favorecen la conservación de agua, disminuyen el crecimiento de arvenses y contribuyen al mejoramiento de la actividad biológica y la fertilidad del suelo.
              tr
                td Rotación de cultivos
                td Corresponde a la alternancia de diferentes cultivos en una misma área durante distintos ciclos de producción. Esta práctica ayuda a conservar la fertilidad del suelo, disminuir la aparición de plagas y enfermedades y mejorar el aprovechamiento de nutrientes. Además, favorece el equilibrio biológico y fortaleza la sostenibilidad de los sistemas agrícolas.
              tr
                td Asociación de cultivos
                td Consiste en establecer diferentes especies vegetales dentro de un mismo espacio productivo con el fin de aprovechar mejor los recursos disponibles y fortalecer las relaciones biológicas entre plantas. La asociación de cultivos contribuye al control natural de plagas, mejora la cobertura del suelo y favorece la diversidad biológica dentro del sistema agrícola.
              tr
                td Uso de barreras vivas
                td Las barreras vivas corresponden a hileras de plantas o vegetación sembradas estratégicamente para proteger el suelo y disminuir el impacto del viento y del agua sobre el terreno. Estas barreras ayudan a reducir procesos de erosión, conservar humedad y proteger cultivos y fuentes hídricas, además de contribuir a la conservación de biodiversidad en el entorno productivo.
              tr
                td Incorporación de materia orgánica
                td Esta práctica consiste en adicionar materiales orgánicos como compostajes, abonos naturales, residuos vegetales o estiércoles al suelo con el propósito de mejorar sus propiedades físicas, químicas y biológicas. La materia orgánica favorece la fertilidad, mejora la estructura del suelo, incrementa la capacidad de retención de agua y fortalece la actividad microbiana.
              tr
                td Manejo adecuado del agua
                td Comprende el uso responsable y eficiente del recurso hídrico dentro de las actividades agrícolas. Incluye prácticas orientadas a optimizar el riego, evitar desperdicios y prevenir procesos de erosión o contaminación. El manejo adecuado del agua favorece el desarrollo de los cultivos, fortalece la conservación del suelo y contribuye a la sostenibilidad de los sistemas productivos.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
