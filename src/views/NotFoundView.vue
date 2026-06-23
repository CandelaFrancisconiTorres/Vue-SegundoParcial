<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<template>

  <Header :carritoCount="0" />

  <main>
    <h1 class="section-title">Página no encontrada</h1>
    <p>La ruta ingresada no existe.</p>
    <RouterLink to="/">← Volver al inicio</RouterLink>
  </main>

  <Footer />

</template>