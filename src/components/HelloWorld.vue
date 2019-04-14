<template>
  <div class="hello"><enos v-if="myApps" :effectnode="true" :apps="myApps"></enos></div>
</template>

<script>
import ENOSCompos from 'enos'

export default {
  components: {
    ...ENOSCompos
  },
  data () {
    return {
      myApps: []
    }
  },
  mounted () {
    // this.myApps = [
    //   {
    //     windowTitle: "Sample",
    //     compoName: "samsam",
    //     App: require("./apps/samsam.vue")
    //   }
    // ];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 100%;
}
</style>
