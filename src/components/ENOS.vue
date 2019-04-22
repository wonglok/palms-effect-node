<template>
  <div class="hello">
    <enos ref="enos" :effectnode="true" :apps="myApps"></enos>

    <div class="intro" v-if="intro">
      <h1>
        Active Visual Creative Coding
      </h1>
      <h2>
        for PALMS
      </h2>
      <p>
        Welcome to a new active learning method to teach creative visual 3D programming called "EffectNode".
      </p>
      <p>
        Here is a place for front end developers to explore different programming templates to start creating and maniuplating cool visual effects.
      </p>
      <p>
        Developers can jump straight into making creative logic just by dragging and dropping modules, connecting them with nodes, to create awesome effects!  Any questions, feel free to contact us!
      </p>
      <div>
        <iframe src="https://player.vimeo.com/video/309798896?loop=1&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
      <div class="enter" @click="start">ENTER</div>
    </div>
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
      intro: true,
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
    },
    start () {
      this.intro = false
      this.$refs['enos'].view = 'projects'
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs['enos'].view = 'main'
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
.intro p{
  font-size: 18px;
  font-weight: 500;
}
.intro{
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 10;
  width: calc(100% - 30px - 30px);
}
.enter{
  padding: 14px 40px;
  display: inline-block;
  height: 40px;
  font-size: 30px;
  font-weight: 600;
  background-color: white;
  box-shadow: 0px 0px 50px 0px silver;
  border-radius: 14px;
  color: #8998fa;
  line-height: 40px;
  text-align: center;
  border: #bfc4e6 solid 1px;
  margin: 20px;
  cursor: pointer;
  margin-left: 0px;
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
