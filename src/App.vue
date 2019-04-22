<template>
  <div id="appappapp" class="yoenos">
    <ENOS />
  </div>
</template>

<script>
import ENOS from './components/ENOS.vue'

export default {
  name: 'appappapp',
  components: {
    ENOS
  }
}
</script>

<style>
#appappapp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html, #appappapp, body{
  height: 100%;
  margin: 0px;
}
.full{
  width: 100%;
  height: 100%;
}
</style>
