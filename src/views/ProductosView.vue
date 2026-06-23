<script setup>
import { ref, computed, onMounted } from 'vue'

import Header from '../components/Header.vue'
import SearchFilter from '../components/SearchFilter.vue'
import GameCard from '../components/GameCard.vue'
import CartPanel from '../components/CartPanel.vue'
import Footer from '../components/Footer.vue'

import { juegos } from '../data/juegos'

const STORAGE_KEY = "carrito"

const carrito = ref([])
const carritoCount = ref(0)

const mostrarCarrito = ref(false)
const mostrarOrden = ref(false)

const filtroTexto = ref("")
const filtroOrden = ref("")

function loadCart() {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(carrito.value))
}

onMounted(() => {
  carrito.value = loadCart()
  carrito.value.forEach(item => {
    carritoCount.value += item.cantidad
  })
})

function calcularPrecio(juego) {
  return juego.oferta ? juego.precio * 0.9 : juego.precio
}

const juegosFiltrados = computed(() => {
  let resultado = [...juegos]

  if (filtroTexto.value) {
    resultado = resultado.filter(j =>
      j.nombre.toLowerCase().includes(filtroTexto.value.toLowerCase()) ||
      j.categoria.toLowerCase().includes(filtroTexto.value.toLowerCase())
    )
  }

  if (filtroOrden.value === "precio-asc") {
    resultado.sort((a, b) => calcularPrecio(a) - calcularPrecio(b))
  }
  if (filtroOrden.value === "precio-desc") {
    resultado.sort((a, b) => calcularPrecio(b) - calcularPrecio(a))
  }
  if (filtroOrden.value === "az") {
    resultado.sort((a, b) => a.nombre.localeCompare(b.nombre))
  }
  if (filtroOrden.value === "za") {
    resultado.sort((a, b) => b.nombre.localeCompare(a.nombre))
  }

  return resultado
})

function agregarAlPedido(id) {
  const juego = juegos.find(p => p.id === id)
  const item = carrito.value.find(p => p.id === id)

  if (item) item.cantidad++
  else {
    carrito.value.push({
      id: juego.id,
      nombre: juego.nombre,
      precio: calcularPrecio(juego),
      cantidad: 1
    })
  }

  carritoCount.value++
  saveCart()
}

function eliminarDelCarrito(id) {
  const item = carrito.value.find(p => p.id === id)
  if (item) carritoCount.value -= item.cantidad
  carrito.value = carrito.value.filter(p => p.id !== id)
  saveCart()
}

function vaciarCarrito() {
  carrito.value = []
  carritoCount.value = 0
  localStorage.removeItem(STORAGE_KEY)
}

function calcularTotalCarrito() {
  return carrito.value.reduce((t, i) => t + i.precio * i.cantidad, 0)
}
</script>

<template>

<Header
  :carritoCount="carritoCount"
  @openCart="mostrarCarrito = true"
/>

<CartPanel
  :carrito="carrito"
  :mostrarCarrito="mostrarCarrito"
  :calcularTotalCarrito="calcularTotalCarrito"
  @cerrar="mostrarCarrito = false"
  @eliminar="eliminarDelCarrito"
  @vaciar="vaciarCarrito"
/>

<main>

  <h1 class="section-title">Catálogo</h1>

  <SearchFilter
    :filtroTexto="filtroTexto"
    :filtroOrden="filtroOrden"
    :mostrarOrden="mostrarOrden"
    @update:filtroTexto="filtroTexto = $event"
    @update:filtroOrden="filtroOrden = $event"
    @update:mostrarOrden="mostrarOrden = $event"
  />

  <section class="cards-container" v-if="juegosFiltrados.length">

    <GameCard
      v-for="juego in juegosFiltrados"
      :key="juego.id"
      :elemento="juego"
      :calcularPrecio="calcularPrecio"
      @agregar="agregarAlPedido"
    />

  </section>

</main>

<Footer />

</template>