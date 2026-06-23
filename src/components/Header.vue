<script setup>

defineProps({
  carritoCount: Number
})

const emit = defineEmits(['openCart'])

</script>

<template>

<header class="site-header">

  <span class="logo">Gamefy</span>

  <nav class="nav-links">
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/catalogo">Catálogo</RouterLink>
    <RouterLink to="/nosotros">Nosotros</RouterLink>
    <RouterLink to="/contacto">Contacto</RouterLink>
  </nav>

  <div class="carrito-icono" @click="$emit('openCart')">

    <img src="/cart-icon.png" alt="carrito">

    <span v-if="carritoCount > 0" class="badge-carrito">
      {{ carritoCount }}
    </span>

  </div>

</header>

</template>