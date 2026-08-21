<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Seguimiento y control de variables agroecológicas del suelo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.pe-lg-0.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/tema3/1.png')
      .col-lg-7.ps-lg-0(data-aos="fade-left")
        .bg3.mb-0.p-4
          img.img-t.mb-4.mt-lg-2(src='@/assets/curso/tema3/3.svg', alt='')
          p.mb-0.mb-lg-2 El seguimiento de las condiciones del suelo es una práctica clave en los sistemas agrícolas, ya que permite identificar cambios en la fertilidad, humedad, actividad biológica y disponibilidad de nutrientes, mediante procesos de observación, medición y análisis. Este monitoreo facilita detectar problemáticas como erosión, compactación o pérdida de materia orgánica, apoyando la toma de decisiones para mejorar el manejo del suelo y la productividad de los cultivos. Asimismo, el registro de variables agroecológicas como pH, temperatura, humedad y cobertura vegetal permite evaluar el estado del terreno y orientar prácticas como la fertilización, el riego y la conservación del suelo. En conjunto, este seguimiento fortalece la planificación agrícola, la sostenibilidad del sistema productivo y la conservación de los recursos naturales.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Conceptos básicos de medición, registro y control
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        img(src='@/assets/curso/tema3/4.png')

    p.mb-4 La medición, el registro y el control son procesos fundamentales dentro del manejo agroecológico del suelo y del seguimiento de los sistemas productivos agrícolas. 

    p.mb-5 Estas actividades permiten obtener, organizar y analizar información relacionada con las condiciones del suelo, el desarrollo de los cultivos y el comportamiento de diferentes variables agroecológicas presentes en el sistema agrícola.

    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-left")
      .col-lg-4.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4.mb-md-4
        .bg7.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema3/5.svg')
          p.mb-0 #[b La medición] consiste en cuantificar o determinar valores relacionados con variables del suelo y del cultivo, utilizando técnicas, instrumentos y equipos adecuados. Entre las variables que pueden medirse se encuentran humedad, temperatura, pH, crecimiento de plantas, cantidad de materia orgánica y condiciones ambientales. Este proceso permite conocer el estado actual del sistema productivo y evaluar las condiciones necesarias para el desarrollo adecuado de los cultivos.
      .col-lg-4.col-md-6.ps-lg-0.pe-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-4
        .bg8.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema3/6.svg')
          p.mb-0 #[b El registro] corresponde a la organización y almacenamiento de la información obtenida durante las mediciones y observaciones realizadas en campo. Los datos registrados pueden incluir fechas, resultados de mediciones, actividades agrícolas desarrolladas, aplicación de insumos y observaciones sobre el comportamiento del cultivo y del suelo. El uso de formatos y registros facilita el seguimiento de las actividades agrícolas y permite mantener información organizada para procesos de análisis y evaluación.
      .col-lg-4.col-md-6.ps-lg-0.ps-md-0.mb-0
        .bg9.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema3/7.svg')
          p.mb-0.text-white #[b El control] consiste en analizar la información recopilada con el propósito de identificar cambios, verificar resultados y evaluar el comportamiento del sistema productivo a lo largo del tiempo. Este proceso permite reconocer problemáticas, establecer acciones correctivas y fortalecer la toma de decisiones relacionadas con manejo del suelo, fertilización, conservación y planificación agrícola.

    .cajon.color-primario.p-4.mb-5(data-aos="fade-left")
      p.mb-0 La aplicación adecuada de procesos de medición, registro y control favorece el desarrollo de sistemas productivos más organizados, eficientes y sostenibles, contribuyendo al mejoramiento de las condiciones del suelo y a la optimización de las actividades agrícolas.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Importancia de la medición, control y registro

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema3/8.svg')
            h4.text-center.mb-4 Facilita el seguimiento agrícola
            p.mb-0.text-center La medición y el registro de información permiten realizar un monitoreo constante de las condiciones del suelo y del desarrollo de los cultivos. Esto facilita identificar cambios, evaluar resultados y hacer seguimiento al comportamiento del sistema productivo durante las diferentes etapas de producción agrícola.
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema3/9.svg')
            h4.text-center.mb-4 Permite organizar información
            p.mb-0.text-center El manejo adecuado de registros agrícolas favorece la organización de datos relacionados con actividades productivas, aplicación de insumos, condiciones climáticas y resultados obtenidos en campo. La información organizada facilita consultas posteriores y contribuye a mejorar los procesos de planificación y control agrícola.
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema3/10.svg')
            h4.text-center.mb-4 Favorece la toma de decisiones
            p.mb-0.text-center El análisis de la información obtenida mediante mediciones y registros permite tomar decisiones fundamentadas sobre manejo del suelo, fertilización, riego y conservación de recursos naturales. Esto contribuye a implementar prácticas más eficientes y adecuadas a las necesidades del sistema productivo.
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema3/11.svg')
            h4.text-center.mb-4 Contribuye a mejorar la productividad
            p.mb-0.text-center El seguimiento de variables agroecológicas permite identificar factores que afectan el desarrollo de los cultivos y establecer acciones orientadas a mejorar las condiciones de producción. Un adecuado control de las actividades agrícolas favorece el aprovechamiento eficiente de recursos y fortalece el rendimiento productivo del sistema agrícola.
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema3/12.svg')
            h4.text-center.mb-4 Apoya procesos de evaluación agroecológica
            p.mb-0.text-center La medición y control de variables facilitan evaluar el impacto de las prácticas agroecológicas implementadas dentro del sistema productivo. Esto permite analizar resultados relacionados con conservación del suelo, sostenibilidad ambiental y comportamiento de los cultivos, fortaleciendo procesos de mejoramiento continuo y manejo responsable de los recursos naturales.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Variables agroecológicas del suelo

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.mb-lg-0.mb-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/13.png')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema3/14.svg')
          .col-lg-10
            p.mb-0 Las variables agroecológicas corresponden a las características y condiciones que permiten analizar el estado, comportamiento y funcionamiento del suelo dentro de los sistemas productivos agrícolas. Estas variables proporcionan información importante sobre las propiedades físicas, químicas y biológicas del suelo, así como sobre las condiciones ambientales que influyen en el desarrollo de los cultivos y en la sostenibilidad del sistema agrícola.
        p.mb-0 El seguimiento de variables agroecológicas facilita identificar cambios relacionados con fertilidad, humedad, temperatura, compactación, disponibilidad de nutrientes y actividad biológica, permitiendo evaluar cómo las prácticas de manejo implementadas afectan las condiciones del suelo y la productividad agrícola. A través de este análisis es posible reconocer problemáticas, establecer acciones de mejora y fortalecer la conservación de los recursos naturales.
    
    p.mb-5 Asimismo, las variables agroecológicas contribuyen a comprender la interacción entre suelo, clima, agua, vegetación y actividades agrícolas, favoreciendo procesos de planificación y toma de decisiones dentro del sistema productivo. El monitoreo constante de estas variables permite desarrollar estrategias orientadas a mejorar las condiciones de producción, conservar la fertilidad del suelo y promover prácticas agrícolas más sostenibles y responsables con el ambiente.

    .cajon.color-primario.p-4.mb-5(data-aos="fade-left")
      p.mb-0 Entre las principales variables agroecológicas evaluadas se encuentran humedad del suelo, temperatura, pH, contenido de materia orgánica, cobertura vegetal, presencia de microorganismos, infiltración de agua y desarrollo de los cultivos. La medición y análisis de estas variables fortalecen el seguimiento agroecológico y contribuyen al desarrollo de sistemas productivos más resilientes, eficientes y adaptados a las condiciones del territorio.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 3.
          | Variables principales
        .tabla-a.tab1
          table
            thead
              tr
                th Variable agroecológica
                th Descripción
            tbody
              tr
                td Humedad
                td La humedad del suelo corresponde a la cantidad de agua presente en el terreno y disponible para las plantas. Esta variable es fundamental para el desarrollo de los cultivos, ya que influye en la absorción de nutrientes, la actividad biológica y los procesos fisiológicos de las plantas. Un adecuado nivel de humedad favorece el crecimiento vegetal y contribuye a mantener condiciones óptimas dentro del sistema productivo.
              tr
                td Temperatura
                td La temperatura del suelo influye directamente sobre la germinación, el desarrollo radicular y la actividad de microorganismos presentes en el sistema agrícola. Cambios excesivos de temperatura pueden afectar el crecimiento de las plantas y alterar procesos biológicos importantes. El seguimiento de esta variable permite identificar condiciones adecuadas para el manejo de los cultivos y la conservación del suelo.
              tr
                td pH
                td El pH es una medida utilizada para determinar el nivel de acidez o alcalinidad del suelo. Esta variable influye en la disponibilidad de nutrientes y en la actividad biológica presente en el terreno. Un pH adecuado favorece la absorción de nutrientes por parte de las plantas y contribuye al desarrollo saludable de los cultivos.
              tr
                td Materia orgánica
                td La materia orgánica corresponde a residuos vegetales y animales en proceso de descomposición presentes en el suelo. Su presencia mejora la fertilidad, fortalece la actividad microbiana, aumenta la capacidad de retención de agua y contribuye a mejorar las propiedades físicas, químicas y biológicas del suelo.
              tr
                td Cobertura vegetal
                td La cobertura vegetal corresponde a las plantas o residuos vegetales que protegen la superficie del suelo. Esta variable ayuda a disminuir procesos de erosión, conservar humedad y regular la temperatura del terreno. Además, favorece la conservación de biodiversidad y contribuye al fortalecimiento de sistemas agrícolas sostenibles.
              tr
                td Actividad biológica
                td La actividad biológica hace referencia a la presencia y acción de microorganismos, insectos y otros organismos vivos dentro del suelo. Estos organismos participan en procesos naturales como descomposición de materia orgánica, reciclaje de nutrientes y mejoramiento de la fertilidad. Una alta actividad biológica indica condiciones favorables para la sostenibilidad y equilibrio del sistema agrícola.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Técnicas de seguimiento y monitoreo agroecológico
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        img(src='@/assets/curso/tema3/15.png')

    p.mb-5 El monitoreo agroecológico es el conjunto de prácticas orientadas a observar, medir, registrar y evaluar las condiciones del sistema productivo agrícola, permitiendo conocer el comportamiento del suelo, los cultivos y el entorno ambiental. A través de este proceso se identifican cambios físicos, químicos y biológicos, así como problemáticas como erosión, compactación, pérdida de fertilidad o presencia de plagas, lo que facilita la toma de decisiones para mejorar la producción y conservar los recursos naturales. Asimismo, el seguimiento de variables agroecológicas y prácticas sostenibles permite evaluar la efectividad de acciones como el manejo del suelo, la aplicación de materia orgánica, la cobertura vegetal y el uso del agua. En conjunto, el monitoreo fortalece la planificación agrícola y contribuye al desarrollo de sistemas productivos más sostenibles, resilientes y eficientes.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 4.
          | Técnicas utilizadas
        .tabla-a.tab1
          table
            thead
              tr
                th Técnica utilizada
                th Descripción
            tbody
              tr
                td Observación directa
                td La observación directa consiste en analizar visualmente las condiciones del suelo, los cultivos y el entorno productivo para identificar cambios, problemáticas o características relevantes dentro del sistema agrícola. Esta técnica permite reconocer aspectos relacionados con humedad, presencia de arvenses, estado de las plantas, erosión, compactación y actividad biológica, facilitando una evaluación rápida y contextualizada de las condiciones del sistema productivo.
              tr
                td Registro fotográfico
                td El registro fotográfico corresponde a la toma de imágenes que permiten documentar el estado del suelo, el desarrollo de los cultivos y las prácticas agrícolas implementadas. Esta técnica facilita comparar cambios a lo largo del tiempo, respaldar procesos de seguimiento y mantener evidencia visual relacionada con actividades productivas, conservación ambiental y comportamiento de las variables agroecológicas.
              tr
                td Muestreo de suelo
                td El muestreo de suelo consiste en recolectar porciones representativas del terreno para realizar análisis relacionados con fertilidad, humedad, textura, pH y contenido de materia orgánica. Esta técnica permite obtener información precisa sobre las condiciones del suelo y facilita la toma de decisiones relacionadas con fertilización, manejo agroecológico y conservación de recursos naturales.
              tr
                td Seguimiento de cultivos
                td El seguimiento de cultivos comprende la observación y evaluación periódica del crecimiento y desarrollo de las plantas durante las diferentes etapas del ciclo productivo. Esta técnica permite identificar problemas fitosanitarios, deficiencias nutricionales, cambios en el desarrollo vegetal y efectos de las prácticas de manejo implementadas, favoreciendo el control y mejoramiento de las condiciones de producción.
              tr
                td Evaluación de cobertura vegetal
                td La evaluación de cobertura vegetal permite analizar la presencia de plantas, residuos vegetales o coberturas orgánicas sobre la superficie del suelo. Esta técnica facilita identificar el nivel de protección del terreno frente a erosión, pérdida de humedad y cambios de temperatura, además de evaluar el aporte de las coberturas al fortalecimiento de la biodiversidad y la conservación del sistema productivo.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Equipos e instrumentos de medición

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-prima.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema3/16.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 Los equipos e instrumentos utilizados en el seguimiento agroecológico permiten realizar mediciones y evaluaciones de variables agrícolas, ambientales y productivas, facilitando la obtención de información precisa sobre el suelo, los cultivos y el entorno. Su uso contribuye al monitoreo de factores como humedad, temperatura, pH, precipitación y crecimiento de las plantas, lo que apoya la toma de decisiones en prácticas como fertilización, riego y conservación del suelo. Además, estos instrumentos permiten registrar y analizar datos de forma organizada, favoreciendo el seguimiento del sistema productivo y la evaluación de resultados a lo largo del tiempo. Entre los más utilizados se encuentran termómetros, medidores de pH, cintas métricas, balanzas, pluviómetros e higrómetros, esenciales para el manejo sostenible de los sistemas agrícolas.

    .titu.p-2.mb-5
      h4.mb-0.ps-3.pe-3 Equipos básicos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tarjetaf.p-lg-5.p-4.mb-0
          SlyderA(tipo="b")(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6
                    h4.mb-4 Termómetro
                    p.mb-4.mb-lg-0 El termómetro es un instrumento utilizado para medir la temperatura del ambiente o del suelo dentro del sistema productivo. Esta medición permite conocer las condiciones térmicas que influyen en procesos como germinación, desarrollo de cultivos, actividad biológica y disponibilidad de nutrientes. El seguimiento de la temperatura facilita identificar cambios ambientales y establecer prácticas de manejo adecuadas para favorecer el crecimiento de las plantas.
                  .col-lg-6.col-md-7
                    img.mb-0.img-t.img-a(src="@/assets/curso/tema3/17.png")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6
                    h4.mb-4 Cinta métrica
                    p.mb-4.mb-lg-0 La cinta métrica se utiliza para medir distancias, longitudes, alturas y dimensiones dentro de las actividades agrícolas. Este instrumento facilita labores relacionadas con delimitación de terrenos, establecimiento de surcos, distribución de cultivos y evaluación del crecimiento de plantas. Su uso contribuye a mejorar la organización y planificación de las actividades productivas.
                  .col-lg-6.col-md-7
                    img.mb-0.img-t.img-a(src="@/assets/curso/tema3/18.png")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6
                    h4.mb-4 Balanza
                    p.mb-4.mb-lg-0 La balanza es un instrumento empleado para determinar el peso de materiales, insumos agrícolas, cosechas y muestras de suelo. Permite realizar mediciones precisas necesarias para procesos de aplicación de materiales orgánicos, fertilización, comercialización y control de producción. El uso adecuado de la balanza favorece un manejo más eficiente y organizado de los recursos dentro del sistema agrícola.
                  .col-lg-6.col-md-7
                    img.mb-0.img-t.img-a(src="@/assets/curso/tema3/19.png")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6
                    h4.mb-4 Medidor de pH
                    p.mb-4.mb-lg-0 El medidor de pH es un equipo utilizado para determinar el nivel de acidez o alcalinidad del suelo o del agua. Esta información es importante porque el pH influye en la disponibilidad de nutrientes y en el desarrollo de los cultivos. El monitoreo de esta variable facilita la implementación de prácticas orientadas al mejoramiento de las condiciones del suelo y al manejo adecuado de fertilización y enmiendas orgánicas.
                  .col-lg-6.col-md-7
                    img.mb-0.img-t.img-a(src="@/assets/curso/tema3/20.png")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6
                    h4.mb-4 Higrómetro
                    p.mb-4.mb-lg-0 El higrómetro es un instrumento utilizado para medir la humedad del ambiente o del suelo. Esta medición permite evaluar la disponibilidad de agua y las condiciones necesarias para el desarrollo de los cultivos. El control de la humedad favorece el manejo eficiente del riego, la conservación de recursos hídricos y el seguimiento de las condiciones ambientales dentro del sistema productivo.
                  .col-lg-6.col-md-7
                    img.mb-0.img-t.img-a(src="@/assets/curso/tema3/21.png")

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Calibración de equipos y manejo de registros

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.mb-lg-0.mb-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/22.png')
      .col-lg-7
        img.img-t.mb-3(src='@/assets/curso/tema3/23.svg')
        p.mb-0 La calibración es el proceso de ajustar y verificar los equipos e instrumentos utilizados en las actividades agrícolas para garantizar mediciones precisas, confiables y acordes con las condiciones reales del sistema productivo. En el manejo agroecológico del suelo, este proceso es esencial para el correcto funcionamiento de instrumentos como medidores de pH, balanzas, termómetros e higrómetros, asegurando información confiable para el seguimiento de variables agrícolas y ambientales. Una adecuada calibración mejora la eficiencia de las labores agrícolas, facilita el control de los procesos productivos y apoya la toma de decisiones en aspectos como fertilización, riego y conservación del suelo, además de prevenir errores que puedan afectar los cultivos o el uso de los recursos.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 5.
          | Importancia de la calibración
        .tabla-a.tab1
          table
            thead
              tr
                th Importancia de la calibración
                th Descripción
            tbody
              tr
                td Reduce errores en mediciones
                td La calibración permite identificar y corregir fallas o desviaciones en los equipos, disminuyendo errores durante la toma de datos y garantizando resultados más confiables. Esto facilita obtener información precisa sobre las condiciones del suelo y del sistema productivo.
              tr
                td Mejora precisión de resultados
                td El ajuste adecuado de los instrumentos favorece mediciones más exactas relacionadas con variables como humedad, temperatura, peso y pH. La precisión de los resultados permite desarrollar análisis más confiables y fortalecer procesos de seguimiento agrícola.
              tr
                td Favorece el control agrícola
                td Los equipos correctamente calibrados permiten realizar un monitoreo más eficiente de las actividades agrícolas y de las condiciones del sistema productivo. Esto facilita el control de procesos relacionados con aplicación de insumos, manejo del agua y seguimiento del desarrollo de los cultivos.
              tr
                td Permite un seguimiento adecuado
                td La calibración garantiza que la información registrada durante el monitoreo agroecológico sea consistente y comparable a lo largo del tiempo. Esto favorece el análisis de cambios en las condiciones del suelo y fortalece la toma de decisiones relacionadas con manejo y conservación agrícola.
              tr
                td Manejo organizado de registros
                td El manejo organizado de registros facilita almacenar información sobre actividades, resultados y condiciones del sistema productivo. Los registros permiten documentar datos obtenidos mediante mediciones, observaciones y procesos de seguimiento, contribuyendo a mejorar la planificación, evaluación y control de las actividades agrícolas.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
