import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';

let webapp = new Vue({
   el: "#app",
   template: "<App/>",
   components: {
       App
   }
});