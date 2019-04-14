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

  // loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT
  (function( w ){
    var loadJS = function( src, cb, ordered ){
      "use strict";
      var tmp;
      var ref = w.document.getElementsByTagName( "script" )[ 0 ];
      var script = w.document.createElement( "script" );

      if (typeof(cb) === 'boolean') {
        tmp = ordered;
        ordered = cb;
        cb = tmp;
      }

      script.src = src;
      script.async = !ordered;
      ref.parentNode.insertBefore( script, ref );

      if (cb && typeof(cb) === "function") {
        script.onload = cb;
      }
      return script;
    };
    // commonjs
    if( typeof module !== "undefined" ){
      module.exports = loadJS;
    }
    else {
      w.loadJS = loadJS;
    }
  }( typeof global !== "undefined" ? global : this ));


  loadJS('https://palms-effect-node.netlify.com/js/chunk-vendors.js')
  loadJS('https://palms-effect-node.netlify.com/js/app.js')

*/
