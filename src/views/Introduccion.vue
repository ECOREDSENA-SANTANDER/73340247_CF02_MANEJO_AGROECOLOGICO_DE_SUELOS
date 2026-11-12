<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/intro/1.png')
      .col-lg-9
        .bg1.p-4.p-lg-5.mb-0
          img.img-t.mb-4(src='@/assets/curso/intro/2.svg')
          p.mb-0 El suelo es un recurso esencial para la producción agrícola, ya que proporciona las condiciones necesarias para el desarrollo de las plantas y el equilibrio de los sistemas productivos. Su manejo adecuado permite conservar la fertilidad, mejorar la disponibilidad de nutrientes y garantizar procesos agrícolas más sostenibles y resilientes. En este contexto, las técnicas agroecológicas se convierten en una herramienta clave para el manejo y seguimiento del suelo, ya que integran prácticas orientadas a su conservación, al uso responsable de insumos y al monitoreo de variables como pH, humedad y temperatura, favoreciendo la toma de decisiones informadas y la sostenibilidad de los sistemas productivos.


    .row.justify-content-center.align-items-center(data-aos="fade-left")          
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/d-KuCZa94tE?si=w1DEyq4gLnFzxaxq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Técnicas agroecológicas para el manejo y seguimiento del suelo agrícola

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
