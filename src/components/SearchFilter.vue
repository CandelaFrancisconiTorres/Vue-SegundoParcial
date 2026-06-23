<script setup>

defineProps({
  filtroTexto: String,
  filtroOrden: String,
  mostrarOrden: Boolean
})

defineEmits([
  'update:filtroTexto',
  'update:filtroOrden',
  'update:mostrarOrden'
])

</script>

<template>

<div class="filtros">

  <div class="search-box">
    <input
      type="text"
      :value="filtroTexto"
      @input="$emit('update:filtroTexto', $event.target.value)"
      placeholder="Buscar juegos o categoría"
    >
  </div>

  <div class="filtro-box">

    <button @click="$emit('update:mostrarOrden', !mostrarOrden)">
      🔽
    </button>

    <div v-if="mostrarOrden" class="dropdown-filtro">

      <p @click="$emit('update:filtroOrden', 'az')">A → Z</p>
      <p @click="$emit('update:filtroOrden', 'za')">Z → A</p>
      <p @click="$emit('update:filtroOrden', 'precio-asc')">Precio ↑</p>
      <p @click="$emit('update:filtroOrden', 'precio-desc')">Precio ↓</p>

    </div>

  </div>

</div>

</template>