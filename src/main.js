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
base.id = 'enos-yo-div'
base.style.cssText = baseCSS
document.body.appendChild(base)

new Vue({
  render: h => h(App)
}).$mount(base)

/*

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
  base.id = 'enos-yo-div'
  base.style.cssText = baseCSS
  document.body.appendChild(base)

  let iframe = document.createElement('iframe')
  iframe.style.width = '100%'
  iframe.style.height = '100%'
  iframe.src = 'http://palms-effect-node.netlify.com'
  base.appendChild(iframe)

*/
