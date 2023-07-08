<template>
  <div id="app">
    <router-link to="/">Inicio</router-link>
    <router-link to="/profesores">Profesores</router-link>
    <router-link to="/clases">Clases</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

