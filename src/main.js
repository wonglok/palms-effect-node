import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let baseCSS = `
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 10;
    height: 100%;
    background-color: #f1f1f1;
`

document.querySelector('html').style.overflow = 'hidden'

let base = document.createElement('div')
base.style.cssText = baseCSS
document.body.appendChild(base)

new Vue({
  render: h => h(App)
}).$mount(base)

/*

<script src="https://palms-effect-node.netlify.com/js/chunk-vendors.js"></script>
<script src="https://palms-effect-node.netlify.com/js/app.js"></script>

*/
