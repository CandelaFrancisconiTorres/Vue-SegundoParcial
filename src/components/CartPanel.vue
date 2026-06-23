<script setup>

defineProps({
  carrito: Array,
  mostrarCarrito: Boolean,
  calcularTotalCarrito: Function
})

const emit = defineEmits(['cerrar', 'eliminar', 'vaciar'])

</script>

<template>

<div v-if="mostrarCarrito" class="overlay" @click="$emit('cerrar')"></div>

<aside :class="['carrito-panel', { activo: mostrarCarrito }]">

  <div class="carrito-header">
    <h2>Tu carrito</h2>
    <button @click="$emit('cerrar')">✕</button>
  </div>

  <div class="carrito-body">

    <p v-if="carrito.length === 0">El carrito está vacío</p>

    <div v-for="item in carrito" :key="item.id" class="carrito-item">

      <p><strong>{{ item.nombre }}</strong></p>
      <p>Cantidad: {{ item.cantidad }}</p>
      <p>Precio unitario ${{ item.precio.toLocaleString('es-AR') }}</p>

      <button @click="$emit('eliminar', item.id)">
        Eliminar
      </button>

    </div>

  </div>

  <div class="carrito-footer" v-if="carrito.length">

    <p>
      <strong>Total:</strong>
      ${{ calcularTotalCarrito().toLocaleString('es-AR') }}
    </p>

    <button @click="$emit('vaciar')">
      Vaciar carrito
    </button>

  </div>

</aside>

</template>