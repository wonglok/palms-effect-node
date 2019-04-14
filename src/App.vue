<template>
  <div id="app">
    <ENOS />
  </div>
</template>

<script>
import ENOS from './components/ENOS.vue'

export default {
  name: 'app',
  components: {
    ENOS
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html, #app, body{
  height: 100%;
  margin: 0px;
}
.full{
  width: 100%;
  height: 100%;
}
</style>
