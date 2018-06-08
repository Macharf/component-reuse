// use full vue.js here, with template compiler included:
import Vue from 'vue/dist/vue'
window.vm = new Vue({
  el: '#app',
  data : {
  	boxStyle : {
  		width : '200px',
  		height : '200px',
  		background : '#cfc'
  	}
  },
  template: '<div :style="boxStyle">使用poi实现组件复用</div>',
})