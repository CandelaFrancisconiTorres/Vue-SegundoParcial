<script setup>

defineProps({
  elemento: Object,
  calcularPrecio: Function
})

defineEmits(['agregar'])

</script>

<template>

<div class="card">

  <img :src="elemento.imagen" class="card-img">

  <div class="card-body">

    <h5>{{ elemento.nombre }}</h5>

    <p class="card-categoria">{{ elemento.categoria }}</p>

    <p class="card-description">{{ elemento.descripcion }}</p>

    <span v-if="elemento.oferta" class="badge bg-danger">
      Oferta
    </span>

    <div v-if="elemento.oferta">

      <div class="precio-anterior">
        $ {{ elemento.precio }}
      </div>

      <div class="precio">
        $ {{ calcularPrecio(elemento) }}
      </div>

    </div>

    <div v-else class="precio">
      $ {{ elemento.precio }}
    </div>

  </div>

  <button @click="$emit('agregar', elemento.id)">
    Agregar al carrito
  </button>

</div>

</template>