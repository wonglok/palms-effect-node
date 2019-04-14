<template>
  <div class="hello">
    <enos ref="enos" :effectnode="true" :apps="myApps"></enos>

    <div class="logo">
      <a href="http://palms.polyu.edu.hk/" alt="PALMS Website">
        <img class="logo-img" src="../assets/logo.png" alt="">
      </a>
    </div>
  </div>

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
  methods: {
    onClickMenu () {
      this.show = !this.show
      this.renderMe()
    },
    renderMe () {
      let toggler = document.querySelector('.sb-toggle-left')
      if (toggler) {
        toggler.click()
      }
      let enos = document.querySelector('.enos-yo-div')
      if (enos) {
        enos.style.visbility = this.show ? 'visible' : 'hidden'
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      // this.$refs['enos'].view = 'enos'
    })
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
.logo{
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 10;
}
.logo-img{
  max-width: 130px;
  margin: 10px;
  margin-bottom: 5px;
  background: #272727;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 50px 0px #464646;
  cursor: pointer;
}
</style>
