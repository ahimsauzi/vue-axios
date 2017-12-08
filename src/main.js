// This file runs before any component loads.
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

/* Axios global defaults
  to inspect header go to dev tools
  and select network tab click on the request
  and view headers.
 */
axios.defaults.baseURL = 'https://vue-axios-2ed90.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'someKey'
axios.defaults.headers.get['Accepts'] = 'application/json'
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
