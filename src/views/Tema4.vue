<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Verificación de Buenas Prácticas Agrícolas y normatividad en el manejo agroecológico del suelo

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-9
        .bg1.p-4.p-lg-5.mb-0
          img.img-t.mb-4(src='@/assets/curso/tema4/2.svg')
          p.mb-0 La verificación de las Buenas Prácticas Agrícolas (BPA) y de la normatividad en el manejo agroecológico del suelo es fundamental para asegurar actividades agrícolas seguras, responsables y sostenibles. Estas prácticas orientan el uso adecuado de los recursos naturales, el manejo del suelo, la protección ambiental y el uso responsable de insumos, contribuyendo a sistemas productivos más eficientes y a la reducción de riesgos ambientales. Además, el cumplimiento de la normatividad permite evaluar el estado del sistema productivo, verificar el desarrollo correcto de las actividades y promover el mejoramiento continuo en la conservación del suelo y la sostenibilidad agrícola.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema4/1.png')

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Verificación de Buenas Prácticas Agrícolas (BPA)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        img(src='@/assets/curso/tema4/3.png')
    
    p.mb-5 Las Buenas Prácticas Agrícolas (BPA) son un conjunto de orientaciones y procedimientos que buscan reducir riesgos de contaminación en la producción agrícola, garantizando la #[b inocuidad y seguridad alimentaria] de los productos. Su implementación responde a la creciente preocupación por enfermedades transmitidas por alimentos, asociadas a microorganismos como #[em Salmonella y Escherichia coli], y a la exigencia de mercados que solicitan sistemas de producción más seguros y controlados. La certificación en BPA permite evidenciar el cumplimiento de criterios de calidad, higiene y sostenibilidad mediante herramientas como listas de chequeo, registros y evaluaciones. Su verificación, a través de la observación y el seguimiento del sistema productivo, permite identificar fortalezas y aspectos de mejora relacionados con el manejo del suelo, los insumos y las condiciones de producción agrícola.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Importancia de la verificación de las BPA

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Permite identificar prácticas adecuadas e inadecuadas dentro del sistema productivo")
            .col-lg-12
              p.mb-0 La verificación de las Buenas Prácticas Agrícolas facilita reconocer si las actividades desarrolladas en el sistema productivo se realizan de manera correcta y acorde con criterios agroecológicos. Esto permite identificar fortalezas, corregir errores y establecer acciones de mejora relacionadas con manejo del suelo, uso de insumos, organización del trabajo y conservación ambiental.
          .row.align-items-center(titulo="Favorece el cumplimiento de normas ambientales y de seguridad agrícola")
            .col-lg-12
              p.mb-0 La aplicación y seguimiento de las BPA contribuyen al cumplimiento de normas orientadas a la protección del ambiente, el manejo responsable de los recursos naturales y la seguridad de las personas durante las labores agrícolas. Esto ayuda a prevenir riesgos de contaminación, accidentes y afectaciones relacionadas con prácticas inadecuadas dentro del sistema productivo.
          .row.align-items-center(titulo="Facilita el seguimiento de las actividades agrícolas y del manejo del suelo")
            .col-lg-12
              p.mb-0 La verificación permite realizar un control más organizado sobre las actividades desarrolladas en el sistema agrícola, facilitando el seguimiento de prácticas relacionadas con fertilización, conservación del suelo, manejo del agua y uso de herramientas e insumos. Este proceso contribuye a evaluar resultados y fortalecer el manejo sostenible del sistema productivo.
          .row.align-items-center(titulo="Contribuye a mejorar la organización y eficiencia del sistema productivo")
            .col-lg-12
              p.mb-0 La implementación de Buenas Prácticas Agrícolas favorece la planificación y organización de las actividades productivas, permitiendo optimizar recursos, mejorar procesos de trabajo y aumentar la eficiencia en las labores agrícolas. Un sistema organizado facilita el cumplimiento de actividades y fortalece la productividad agrícola.
          .row.align-items-center(titulo="Fortalece la sostenibilidad y conservación de los recursos naturales")
            .col-lg-12
              p.mb-0 Las BPA promueven prácticas orientadas a conservar el suelo, proteger fuentes hídricas, mantener la biodiversidad y reducir impactos ambientales negativos. Esto contribuye al desarrollo de sistemas agrícolas más sostenibles, resilientes y responsables con el ambiente y con las necesidades del territorio.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema4/4.png')

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Normatividad ambiental y ecológica aplicada al sector agrícola

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema4/5.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 La normatividad ambiental corresponde al conjunto de leyes, normas y lineamientos orientados a proteger los recursos naturales y regular las actividades agrícolas para disminuir impactos ambientales negativos. Estas disposiciones buscan promover el uso sostenible del suelo, el agua, la biodiversidad y demás recursos presentes en el territorio.
            br 
            br 
            p.mb-0 En el sector agrícola, la normatividad ambiental establece medidas relacionadas con el manejo adecuado de residuos, protección de fuentes hídricas, conservación de ecosistemas y uso responsable de insumos agrícolas. Asimismo, promueve prácticas orientadas a prevenir la contaminación y fortalecer la sostenibilidad de los sistemas productivos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 6.
          | Importancia y normatividad ambiental
        .tabla-a.tab6
          table
            thead
              tr
                th Aspecto importante de la normatividad ambiental
                th Descripción ampliada
                th Normas vigentes relacionadas en Colombia
            tbody
              tr
                td Conservación del suelo y recursos hídricos
                td La normatividad ambiental promueve la protección y conservación del suelo y de las fuentes hídricas mediante prácticas orientadas al uso responsable de los recursos naturales. Esto incluye acciones relacionadas con conservación de cobertura vegetal, manejo adecuado del agua, disminución de contaminación y prevención de procesos de degradación del suelo. La protección de estos recursos es fundamental para garantizar la sostenibilidad de los sistemas productivos y la seguridad alimentaria.
                td Ley 99 de 1993, Decreto 1076 de 2015; Política Nacional para la Gestión Integral del Recurso Hídrico.
              tr
                td Protección de la biodiversidad
                td Las normas ambientales buscan proteger las especies de flora y fauna presentes en los ecosistemas agrícolas y rurales. Esto incluye la conservación de bosques, corredores biológicos, cercas vivas e hábitats naturales que favorecen el equilibrio ecológico y la sostenibilidad ambiental. La protección de la biodiversidad fortalece procesos naturales como polinización, control biológico y conservación de recursos genéticos.
                td Ley 99 de 1993; Convenio sobre Diversidad Biológica adoptado por Ley 165 de 1994; Decreto 1076 de 2015.
              tr
                td Manejo adecuado de residuos y sustancias contaminantes
                td La legislación ambiental establece lineamientos para el manejo responsable de residuos agrícolas, envases, sustancias químicas y materiales contaminantes, con el fin de evitar afectaciones al suelo, al agua y a la salud humana. Estas medidas incluyen almacenamiento seguro, disposición adecuada y reducción de riesgos asociados al uso de insumos agrícolas.
                td Resolución 2184 de 2019, Decreto 1076 de 2015; Resolución ICA 30021 de 2017 sobre BPA
              tr
                td Prevención de erosión y degradación ambiental
                td La normatividad promueve prácticas orientadas a disminuir procesos de erosión, compactación y deterioro del suelo mediante acciones de conservación y manejo sostenible. Entre estas prácticas se encuentran coberturas vegetales, barreras vivas, rotación de cultivos y manejo adecuado de la labranza. La prevención de degradación ambiental contribuye a conservar la fertilidad y productividad del suelo.
                td Ley 99 de 1993, Decreto 1076 de 2015; Resolución 30021 de 2017 del ICA.
              tr
                td Promoción de prácticas agrícolas sostenibles
                td Las normas ambientales y agropecuarias fomentan la implementación de prácticas productivas responsables que favorezcan el equilibrio entre producción agrícola y conservación ambiental. Estas prácticas incluyen manejo agroecológico, uso eficiente del agua, conservación de suelos y disminución de impactos ambientales negativos.
                td Resolución ICA 30021 de 2017; Decreto 1071 de 2015; Política Nacional de Producción y Consumo Sostenible.
              tr
                td Cumplimiento de medidas de seguridad y salud en el trabajo
                td La normatividad colombiana establece medidas orientadas a proteger la salud y seguridad de las personas que desarrollan actividades agrícolas. Esto incluye uso de elementos de protección personal, manejo seguro de herramientas y prevención de riesgos laborales dentro del sistema productivo.
                td Decreto 1072 de 2015; Ley 1562 de 2012; Resolución 0312 de 2019.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Importancia de la conservación ambiental en sistemas productivos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.mb-lg-0.mb-4.d-none.d-lg-block
        img(src='@/assets/curso/tema4/6.png')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema4/7.svg')
          .col-lg-10
            p.mb-0 La conservación ambiental es fundamental para mantener el equilibrio ecológico y garantizar la disponibilidad de recursos necesarios para la producción agrícola. La protección del suelo, el agua, la vegetación y la biodiversidad permite fortalecer la sostenibilidad de los sistemas productivos y disminuir los impactos generados por las actividades humanas.
        p.mb-4 Las prácticas de conservación favorecen la fertilidad del suelo, mejoran la disponibilidad de agua y contribuyen a mantener condiciones adecuadas para el desarrollo de los cultivos. Asimismo, ayudan a prevenir problemáticas como erosión, contaminación y pérdida de biodiversidad.

        p.mb-0 Beneficios de la conservación ambiental:

    .row.justify-content-center.align-items.mb-4
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .bg4.p-3.h-100
          p.mb-0.text-center.text-white #[b Protección de recursos naturales como suelo, agua, aire y vegetación mediante prácticas sostenibles.]  
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .bg4.p-3.h-100
          p.mb-0.text-center.text-white #[b Conservación de la biodiversidad y sus funciones en el equilibrio del sistema agrícola.]
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .bg4.p-3.h-100
          p.mb-0.text-center.text-white #[b Reducción de impactos ambientales como erosión, contaminación y degradación del suelo.] 

    .row.justify-content-center.align-items.mb-5
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .bg5.p-3.h-100
          p.mb-0.mb-lg-3.mt-lg-3.text-center #[b Fortalecimiento de la productividad agrícola mediante mejores condiciones del entorno.]
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .bg5.p-3.h-100
          p.mb-0.mb-lg-3.mt-lg-3.text-center #[b Mejora de las condiciones del suelo y del agua, favoreciendo su calidad y disponibilidad.]
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .bg5.p-3.h-100
          p.mb-0.mb-lg-3.mt-lg-3.text-center #[b Promoción de sistemas agrícolas sostenibles, resilientes y responsables con el ambiente.] 

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Manejo de formatos y registros agrícolas

    p.mb-5 Los formatos y registros agrícolas son herramientas clave para la organización, control y seguimiento de las actividades en los sistemas productivos, ya que permiten recopilar y organizar información sobre labores agrícolas, manejo del suelo, insumos y condiciones ambientales. Su uso facilita el control de las actividades, la evaluación de resultados y la toma de decisiones basadas en información confiable. En el manejo agroecológico del suelo, permiten documentar prácticas como la aplicación de materia orgánica y el seguimiento de variables agroecológicas, apoyando la sostenibilidad del sistema. Además, contribuyen a la eficiencia productiva, la trazabilidad y el cumplimiento de las Buenas Prácticas Agrícolas y la normatividad ambiental.



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 7.
          | Información a registrar
        .tabla-a.tab1
          table
            thead
              tr
                th Información que puede registrarse
                th Descripción
            tbody
              tr
                td Fecha de actividades agrícolas
                td El registro de fechas permite llevar control sobre las labores realizadas dentro del sistema productivo, como preparación del suelo, siembra, fertilización, riego, control de arvenses y cosecha. Esta información facilita organizar cronogramas de trabajo y realizar seguimiento al desarrollo de las actividades agrícolas.
              tr
                td Aplicación de materiales orgánicos e insumos
                td Los registros relacionados con aplicación de compost, abonos orgánicos, fertilizantes y otros insumos permiten controlar cantidades utilizadas, fechas de aplicación y áreas intervenidas. Esto favorece el manejo responsable de recursos y facilita evaluar resultados sobre el comportamiento del suelo y de los cultivos.
              tr
                td Resultados de seguimiento del suelo
                td La información obtenida mediante monitoreo agroecológico puede registrarse para analizar variables como humedad, pH, temperatura, materia orgánica y condiciones físicas del suelo. Estos registros permiten comparar cambios a lo largo del tiempo y fortalecer procesos de evaluación y conservación del sistema productivo.
              tr
                td Condiciones climáticas y productivas
                td El registro de lluvias, temperatura, humedad ambiental y comportamiento de los cultivos facilita identificar factores que influyen en la producción agrícola. Esta información contribuye a mejorar la planificación y a establecer estrategias más adecuadas frente a cambios climáticos y condiciones ambientales.
              tr
                td Observaciones sobre cultivos y manejo agrícola
                td Las observaciones relacionadas con crecimiento de plantas, presencia de plagas, enfermedades, desarrollo vegetativo y estado general de los cultivos permiten fortalecer el seguimiento técnico y facilitar la toma de decisiones relacionadas con manejo agrícola.
              tr
                td Uso de herramientas y equipos
                td El control sobre utilización, mantenimiento y estado de herramientas y equipos agrícolas contribuye a mejorar la organización de las actividades productivas y favorece condiciones de trabajo más seguras y eficientes dentro del sistema agrícola.
              tr
                td Importancia de los registros agrícolas
                td El manejo organizado de formatos y registros agrícolas contribuye al seguimiento eficiente de las actividades productivas, fortalece los procesos de control y planificación y favorece el desarrollo de sistemas agrícolas más organizados, sostenibles y responsables con el manejo de los recursos naturales.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Prácticas sostenibles para el manejo agroecológico del suelo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        img(src='@/assets/curso/tema4/8.png')
    
    p.mb-5 Las prácticas sostenibles son un conjunto de técnicas y acciones orientadas a conservar el suelo, proteger los recursos naturales y promover sistemas agrícolas más eficientes y responsables con el ambiente. Su aplicación busca mantener la fertilidad del suelo, la disponibilidad de agua y la biodiversidad, reduciendo problemas como la erosión, la compactación y la pérdida de nutrientes. Además, favorecen procesos naturales como la descomposición de materia orgánica, el reciclaje de nutrientes y la actividad de microorganismos, mejorando las condiciones físicas, químicas y biológicas del suelo. En conjunto, estas prácticas optimizan el uso de insumos, fortalecen la productividad y contribuyen al desarrollo de sistemas agrícolas más resilientes y acordes con la agroecología.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 8.
          | Prácticas sostenibles
        .tabla-a.tab1
          table
            thead
              tr
                th Práctica sostenible
                th Descripción
            tbody
              tr
                td Uso de abonos orgánicos y biofertilizantes
                td La utilización de compost, estiércoles, bioles y otros biofertilizantes favorece el mejoramiento de la fertilidad del suelo y fortalece la actividad biológica. Estos materiales aportan nutrientes, mejoran la retención de humedad y contribuyen a reducir el uso de fertilizantes químicos contaminantes.
              tr
                td Rotación y asociación de cultivos
                td La rotación y asociación de cultivos permiten diversificar la producción agrícola, disminuir la presencia de plagas y enfermedades y mejorar el aprovechamiento de nutrientes en el suelo. Estas prácticas favorecen el equilibrio ecológico y fortalecen la sostenibilidad del sistema productivo.
              tr
                td Conservación de cobertura vegetal
                td El mantenimiento de coberturas vegetales protege el suelo frente a procesos de erosión, pérdida de humedad y cambios extremos de temperatura. Además, favorece la conservación de biodiversidad y mejora las condiciones físicas y biológicas del terreno.
              tr
                td Manejo eficiente del agua
                td El uso adecuado del agua mediante prácticas de conservación, almacenamiento y riego eficiente permite optimizar este recurso y disminuir pérdidas por escorrentía o desperdicio. Esto contribuye a fortalecer la sostenibilidad y productividad de los sistemas agrícolas.
              tr
                td Reducción del uso de productos contaminantes
                td La disminución en el uso de agroquímicos y sustancias contaminantes ayuda a proteger el suelo, el agua y la salud humana. La implementación de alternativas agroecológicas favorece sistemas agrícolas más seguros y responsables con el ambiente.
              tr
                td Protección de bosques y fuentes hídricas
                td La conservación de áreas forestales y fuentes de agua contribuye al mantenimiento del equilibrio ambiental, la regulación hídrica y la conservación de biodiversidad. Estas acciones fortalecen la sostenibilidad de los sistemas productivos y la disponibilidad de recursos naturales.
              tr
                td Incorporación de materia orgánica al suelo
                td La incorporación de residuos vegetales y materiales orgánicos mejora la estructura, fertilidad y capacidad de retención de agua del suelo. Asimismo, favorece la actividad microbiana y fortalece los procesos naturales presentes dentro del sistema agrícola.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
