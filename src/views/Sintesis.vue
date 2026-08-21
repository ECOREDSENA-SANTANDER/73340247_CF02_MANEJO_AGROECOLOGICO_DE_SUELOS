<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La implementación de técnicas agroecológicas para el manejo y seguimiento del suelo agrícola es fundamental para fortalecer la sostenibilidad y productividad de los sistemas rurales, al permitir el reconocimiento de las condiciones del suelo, sus problemáticas y potencialidades. Este enfoque integra componentes físicos, biológicos, ambientales y productivos mediante prácticas de conservación, uso de materiales orgánicos y monitoreo de variables agroecológicas, favoreciendo el equilibrio ecológico y la mejora de la fertilidad del suelo. Asimismo, el uso de metodologías participativas, registros e instrumentos de medición facilita la observación, evaluación y toma de decisiones informadas sobre el manejo del agua, la fertilización y la planificación agrícola. En conjunto, estas acciones promueven la adopción de Buenas Prácticas Agrícolas y el cumplimiento de la normatividad ambiental, contribuyendo al desarrollo de sistemas productivos más sostenibles, eficientes y resilientes.
    
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Técnicas agroecológicas para el manejo y seguimiento del suelo agrícola, organizado en cuatro ejes principales. El primero, “Manejo agroecológico del suelo y aplicación de materiales orgánicos”, incluye características del cultivo, unidades de medida, aplicación de material orgánico, manejo de sustratos y prácticas de conservación del suelo. El segundo eje, “Técnicas y prácticas para el acondicionamiento del suelo agrícola”, abarca la labranza, sus tipos, su relación con la conservación del suelo y la seguridad y salud en el trabajo en labores agrícolas.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
