<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas y prácticas para el acondicionamiento del suelo agrícola

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 El acondicionamiento del suelo comprende el conjunto de prácticas orientadas a mejorar las condiciones físicas y productivas del terreno para favorecer el establecimiento y desarrollo de los cultivos. Estas técnicas permiten optimizar la estructura del suelo, facilitar el manejo agrícola y fortalecer procesos de conservación y sostenibilidad dentro del sistema productivo.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Concepto e importancia de la labranza

    p.mb-5(data-aos="fade-left") La labranza corresponde al conjunto de actividades y prácticas realizadas sobre el suelo con el propósito de prepararlo para la siembra y mejorar sus condiciones físicas, favoreciendo el desarrollo adecuado de los cultivos. Estas actividades pueden realizarse mediante herramientas manuales, equipos agrícolas o maquinaria, dependiendo de las características del sistema productivo y de las condiciones del terreno.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema2/2.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 La labranza permite acondicionar el suelo para facilitar procesos como germinación, crecimiento radicular, infiltración de agua y circulación de aire. Además, contribuye a incorporar materiales orgánicos, controlar arvenses y mejorar la estructura del terreno para favorecer el establecimiento y desarrollo de las plantas.
            br
            br
            p.mb-0 El tipo y nivel de labranza aplicado deben responder a las necesidades del cultivo y a las condiciones ambientales del territorio, ya que un manejo inadecuado puede generar afectaciones relacionadas con compactación, erosión y pérdida de fertilidad. Por esta razón, en los sistemas agroecológicos se promueven prácticas de labranza orientadas a la conservación del suelo y al uso sostenible de los recursos naturales.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 2.
          | Importancia de la labranza
        .tabla-a.tab1
          table
            thead
              tr
                th Importancia de la labranza
                th Descripción
            tbody
              tr
                td Favorece la aireación del suelo
                td La labranza permite aflojar el terreno y generar espacios porosos que facilitan la circulación de aire dentro del suelo. Esta aireación favorece la respiración de las raíces y de los microorganismos presentes en el sistema agrícola, contribuyendo a mejorar la actividad biológica y las condiciones para el crecimiento de las plantas.
              tr
                td Facilita el desarrollo de raíces
                td Al mejorar la estructura y disminuir la compactación del suelo, la labranza facilita la penetración y expansión de las raíces. Esto permite que las plantas puedan absorber de manera más eficiente agua y nutrientes, favoreciendo un crecimiento más fuerte y saludable de los cultivos.
              tr
                td Mejora la infiltración de agua
                td La remoción y acondicionamiento del suelo favorecen el ingreso y distribución del agua dentro del terreno. Esta condición ayuda a conservar humedad, disminuye escorrentías superficiales y contribuye a un mejor aprovechamiento del recurso hídrico por parte de los cultivos.
              tr
                td Permite incorporar materia orgánica
                td La labranza facilita la integración de compostajes, abonos orgánicos y residuos vegetales dentro del suelo. La incorporación de estos materiales contribuye al mejoramiento de la fertilidad, fortalece la actividad microbiana y favorece el mantenimiento de las propiedades físicas, químicas y biológicas del terreno.
              tr
                td Facilita el control de arvenses
                td Las labores de labranza ayudan a disminuir la presencia de arvenses que compiten con los cultivos por agua, luz y nutrientes. Esto favorece mejores condiciones para el desarrollo de las plantas cultivadas y facilita la organización y manejo del sistema productivo agrícola.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema2/3.png')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.color-primario.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="<i>Podcast</i>: Tipos de labranza"
                :audio="require_src('@/assets/actividad/audio/CF02_73340247_Manejo_agroecologico_de_suelos.mp3')"
              ).mb-4
                p.mb-0 Se invita a los aprendices a escuchar el #[em podcast] sobre los tipos de labranza, en el que podrán conocer sus principales características, diferencias y efectos sobre el suelo y los cultivos, fortaleciendo así sus conocimientos para la implementación de prácticas de manejo sostenible del suelo.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Relación entre labranza y conservación del suelo

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.mb-lg-0.mb-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/4.png')
      .col-lg-7
        .row.justify-content-center.mb-1
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema2/5.svg')
          .col-lg-10
            p.mb-0 Las prácticas de labranza influyen directamente sobre las condiciones físicas, químicas y biológicas del suelo, debido a que modifican su estructura, nivel de compactación, capacidad de retención de agua y actividad biológica. Por esta razón, la forma en que se realiza la preparación del terreno puede contribuir tanto a la conservación como al deterioro de los recursos presentes en el sistema productivo.
        p.mb-0 Una labranza adecuada permite mejorar las condiciones del suelo para el establecimiento y desarrollo de los cultivos, favoreciendo procesos relacionados con infiltración de agua, aireación, incorporación de materia orgánica y desarrollo radicular. Sin embargo, cuando estas prácticas se realizan de manera excesiva o inadecuada, pueden generar procesos de degradación, pérdida de fertilidad y disminución de la sostenibilidad agrícola.

    p.mb-5(data-aos="fade-right") Dentro de los enfoques agroecológicos, se promueven prácticas de labranza orientadas a reducir el impacto sobre el suelo y conservar sus propiedades naturales, favoreciendo el equilibrio ambiental y el manejo sostenible de los sistemas productivos. A continuación, algunas ventajas al elegir una práctica de labranza adecuada.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/6.svg')
            h4.text-center.mb-4 Reducir procesos de compactación
            p.mb-0.text-center Una labranza adecuada ayuda a disminuir la compactación del suelo causada por el tránsito constante de personas, animales o maquinaria agrícola. Al aflojar el terreno y mejorar la distribución de espacios porosos, se facilita la circulación de aire, agua y nutrientes dentro del suelo. Esto favorece el desarrollo de raíces y fortalece las condiciones necesarias para el crecimiento adecuado de los cultivos.
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/7.svg')
            h4.text-center.mb-4 Favorecer la infiltración de agua
            p.mb-0.text-center Las labores de labranza contribuyen a mejorar la capacidad del suelo para absorber y almacenar agua. Un terreno adecuadamente acondicionado permite que el agua ingrese de manera más eficiente, disminuyendo escorrentías superficiales y reduciendo riesgos de erosión. Esta condición favorece la conservación de humedad y mejora la disponibilidad de agua para las plantas durante su desarrollo.
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/8.svg')
            h4.text-center.mb-4 Mejorar la aireación
            p.mb-0.text-center La remoción controlada del suelo facilita el intercambio de gases y la circulación de aire dentro del terreno. Una adecuada aireación favorece la respiración de raíces y microorganismos presentes en el suelo, fortaleciendo procesos biológicos relacionados con descomposición de materia orgánica y disponibilidad de nutrientes para los cultivos.
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/9.svg')
            h4.text-center.mb-4 Conservar la estructura del suelo
            p.mb-0.text-center La aplicación adecuada de prácticas de labranza permite mantener el equilibrio entre partículas minerales, materia orgánica y espacios porosos del suelo. Esto contribuye a conservar una estructura estable, favoreciendo la retención de humedad, el desarrollo radicular y la resistencia frente a procesos de degradación. La conservación de la estructura también facilita el manejo agrícola y mejora las condiciones productivas del sistema.
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/10.svg')
            h4.text-center.mb-4 Disminuir procesos erosivos
            p.mb-0.text-center La implementación de prácticas de labranza orientadas a la conservación ayuda a reducir la pérdida de suelo causada por agua y viento. El mantenimiento de coberturas vegetales, residuos orgánicos y niveles adecuados de remoción protege la superficie del terreno y disminuye el impacto de factores climáticos sobre el suelo. Esto favorece la conservación de nutrientes y fortalece la sostenibilidad de las actividades agrícolas.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Seguridad y salud en el trabajo durante labores agrícolas

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema2/11.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 La seguridad y salud en el trabajo comprende el conjunto de medidas, acciones y prácticas orientadas a prevenir accidentes, disminuir riesgos y proteger la integridad física y el bienestar de las personas durante el desarrollo de actividades agrícolas. En los sistemas productivos rurales, las labores relacionadas con manejo de herramientas, aplicación de insumos, uso de equipos y acondicionamiento del suelo pueden generar riesgos que afectan la salud y seguridad de los trabajadores si no se implementan medidas preventivas adecuadas.
            br 
            br 
            p.mb-0 La adopción de prácticas seguras favorece ambientes de trabajo más organizados y responsables, contribuyendo a reducir accidentes, prevenir enfermedades laborales y mejorar las condiciones para el desarrollo de las actividades agrícolas. Asimismo, fortalece la protección de los recursos naturales y promueve una cultura de autocuidado dentro del sistema productivo.

    p.mb-5(data-aos="fade-right") Recomendaciones básicas:

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema2/12.png')
      .col-lg-9
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Utilizar elementos de protección personal")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 El uso de elementos de protección personal permite disminuir riesgos asociados a golpes, cortaduras, inhalación de sustancias, exposición al sol y contacto con materiales peligrosos. Entre los implementos más utilizados se encuentran guantes, botas, gafas de seguridad, tapabocas, sombreros y ropa adecuada para el trabajo agrícola. Estos elementos ayudan a proteger diferentes partes del cuerpo y favorecen condiciones laborales más seguras durante el desarrollo de las actividades productivas.
          .tarjeta.color-a.p-4(titulo="Mantener herramientas en buen estado")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Las herramientas y equipos agrícolas deben mantenerse limpios, organizados y en condiciones adecuadas de funcionamiento para evitar accidentes y mejorar la eficiencia del trabajo. Revisar periódicamente el estado de machetes, palas, azadones, fumigadoras y demás implementos permite identificar daños, desgastes o fallas que puedan representar riesgos para las personas. El mantenimiento adecuado también contribuye a prolongar la vida útil de los equipos y facilitar las labores agrícolas.
          .tarjeta.color-a.p-4(titulo="Organizar adecuadamente el área de trabajo")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Mantener organizados los espacios de trabajo favorece la movilidad, disminuye riesgos de caídas y facilita el desarrollo seguro de las actividades agrícolas. La correcta ubicación de herramientas, materiales e insumos permite evitar accidentes relacionados con obstrucciones, objetos cortantes o derrames de sustancias. Además, un área limpia y ordenada mejora las condiciones de trabajo y contribuye a una mayor eficiencia en las labores productivas.
          .tarjeta.color-a.p-4(titulo="Manipular correctamente insumos y equipos")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 La manipulación adecuada de materiales orgánicos, fertilizantes, herramientas y equipos agrícolas es fundamental para prevenir accidentes y afectaciones a la salud. Es importante seguir instrucciones de uso, utilizar las cantidades recomendadas y evitar prácticas que puedan generar contaminación o riesgos físicos. Asimismo, el manejo responsable de fumigadoras y otros equipos facilita la protección del trabajador y del ambiente.
          .tarjeta.color-a.p-4(titulo="Evitar prácticas inseguras")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Las prácticas inseguras, como el uso inadecuado de herramientas, la manipulación descuidada de equipos o la realización de actividades sin protección, incrementan la posibilidad de accidentes y lesiones. Por esta razón, es necesario promover hábitos de autocuidado, respetar normas de seguridad y desarrollar las actividades agrícolas de manera responsable y organizada.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
