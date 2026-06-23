<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const nombre = ref('')
const email = ref('')
const mensaje = ref('')
const enviado = ref(false)
const errores = ref({})

function validar() {
  errores.value = {}

  if (!nombre.value.trim())
    errores.value.nombre = 'El nombre es obligatorio.'

  if (!email.value.trim())
    errores.value.email = 'El email es obligatorio.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))
    errores.value.email = 'El email no es válido.'

  if (!mensaje.value.trim())
    errores.value.mensaje = 'El mensaje es obligatorio.'

  return Object.keys(errores.value).length === 0
}

function enviarFormulario() {
  if (!validar()) return

  enviado.value = true
  nombre.value = ''
  email.value = ''
  mensaje.value = ''
  errores.value = {}
}
</script>

<template>

  <Header :carritoCount="0" />

  <main>
    <h1 class="section-title">Contacto</h1>

    <div v-if="enviado" class="form-exito">
      ✅ ¡Mensaje enviado con éxito!
    </div>

    <form class="formulario-contacto" @submit.prevent="enviarFormulario">

      <div class="campo">
        <label for="nombre">Nombre</label>
        <input
          id="nombre"
          v-model="nombre"
          type="text"
          placeholder="Tu nombre"
        />
        <span v-if="errores.nombre" class="error">{{ errores.nombre }}</span>
      </div>

      <div class="campo">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="tu@email.com"
        />
        <span v-if="errores.email" class="error">{{ errores.email }}</span>
      </div>

      <div class="campo">
        <label for="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          v-model="mensaje"
          placeholder="Escribí tu mensaje..."
          rows="4"
        ></textarea>
        <span v-if="errores.mensaje" class="error">{{ errores.mensaje }}</span>
      </div>

      <button type="submit" class="btn-enviar">Enviar</button>

    </form>
  </main>

  <Footer />

</template>

<style scoped>
.formulario-contacto {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;
}
.campo {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.campo label {
  font-weight: bold;
}
.campo input,
.campo textarea {
  padding: 10px;
  border-radius: 10px;
  border: none;
  font-family: inherit;
  font-size: 14px;
}
.campo textarea {
  resize: vertical;
}
.error {
  color: #ff6b6b;
  font-size: 13px;
}
.btn-enviar {
  padding: 12px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #7c3aed, #22c55e);
  color: white;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  max-width: 200px;
}
.form-exito {
  padding: 12px 16px;
  background: rgba(34, 197, 94, 0.2);
  border-radius: 10px;
  margin-bottom: 16px;
  font-weight: bold;
}
</style>