<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Prueba sobre técnicas agroecológicas para el manejo del suelo agrícola',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar los conocimientos relacionados con las técnicas agroecológicas para el manejo, conservación y seguimiento del suelo agrícola, mediante el reconocimiento de prácticas sostenibles, variables agroecológicas, Buenas Prácticas Agrícolas y procesos de monitoreo dentro de los sistemas productivos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué busca la agroecología en los sistemas agrícolas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar únicamente la producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promover sistemas sostenibles y equilibrados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar completamente el uso del suelo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir todos los cultivos tradicionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es una función principal de la materia orgánica en el suelo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la infiltración de agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Compactar el terreno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejorar la fertilidad del suelo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar microorganismos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 3,
          texto: '¿Qué unidad se utiliza para medir superficie agrícola?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Litro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Kilogramo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gramo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Metro cuadrado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 4,
          texto: '¿Qué práctica ayuda a conservar la humedad del suelo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de cobertura vegetal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminación de coberturas vegetales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compactación del terreno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Quema de residuos vegetales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 5,
          texto: '¿Cuál es un ejemplo de abono orgánico?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Plástico agrícola.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cemento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Combustible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Compost.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 6,
          texto: '¿Qué permite la calibración de equipos?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la fertilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar la erosión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar registros agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Garantizar mediciones precisas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 7,
          texto: '¿Qué variable permite conocer la acidez del suelo?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Humedad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Temperatura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'pH.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cobertura vegetal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 8,
          texto: '¿Cuál es una práctica sostenible?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso excesivo de agroquímicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tala de bosques.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Quema de cobertura vegetal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rotación de cultivos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 9,
          texto: '¿Qué herramienta se utiliza para medir peso?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Balanza.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Termómetro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Higrómetro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Regla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 10,
          texto: '¿Qué favorece la labranza adecuada?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor erosión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Compactación del suelo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pérdida de nutrientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aireación del suelo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 11,
          texto: '¿Cuál es la finalidad del monitoreo agroecológico?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar los cultivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Observar y evaluar el sistema productivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar contaminación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar registros agrícolas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 12,
          texto: '¿Qué práctica protege el suelo frente a la erosión?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminación de vegetación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso de barreras vivas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Compactación constante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso excesivo de maquinaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 13,
          texto: '¿Qué instrumento mide temperatura?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Higrómetro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medidor de pH.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Balanza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Termómetro.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 14,
          texto: '¿Qué permite el manejo de registros agrícolas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desorganizar información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar seguimiento agrícola.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organizar y controlar actividades productivas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incrementar pérdidas de información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 15,
          texto: '¿Qué práctica ayuda a proteger las fuentes hídricas?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vertimiento de residuos contaminantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Conservación de bosques.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminación de cobertura vegetal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso excesivo de químicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 16,
          texto: '¿Cuál es un beneficio de las Buenas Prácticas Agrícolas?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar riesgos laborales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Favorecer la sostenibilidad agrícola.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar contaminación ambiental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Deteriorar el suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 17,
          texto: '¿Qué tipo de labranza evita remover el suelo?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Labranza convencional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Labranza intensiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Labranza cero.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Labranza mecánica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 18,
          texto: '¿Qué elemento protege al trabajador agrícola?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Casco.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cuchilla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Guadaña.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fertilizante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 19,
          texto: '¿Qué permite evaluar la humedad del suelo?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Seguimiento de variables agroecológicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Tala de árboles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminación de registros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Quema de residuos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
        {
          id: 20,
          texto: '¿Cuál es una finalidad de las prácticas sostenibles?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Deteriorar recursos naturales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir biodiversidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fortalecer sistemas agrícolas sostenibles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incrementar contaminación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre las técnicas agroecológicas para el manejo y seguimiento del suelo agrícola.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
