import Vue from 'vue'

import VueGoogleApi from 'vue-google-api'
import VueFlashMessage from 'vue-flash-message'
import Loading from 'vue-loading-overlay'
import VModal from 'vue-js-modal'

import App from './App.vue'
import store from './store'
import errorHandler from './plugins/errorHandler'
import accountFilter from './filters/account'
import simplonlineFilter from './filters/simplonline'

import 'vue-flash-message/dist/vue-flash-message.min.css'
import 'vue-loading-overlay/dist/vue-loading.css'

const gapiConfig = {
  apiKey: process.env.VUE_APP_SPREADSHEET_API_KEY,
  clientId: process.env.VUE_APP_SPREADSHEET_CLIENT_ID,
  scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"]
}

Vue.config.productionTip = false

Vue.use(VueGoogleApi, gapiConfig)
Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 4000,
    important: true,
    pauseOnInteract: true
  }
})
Vue.use(Loading, {
  'is-full-page': true,
  'color': '#ce0033'
})
Vue.use(VModal)
Vue.use(errorHandler)

Vue.filter('isSOCAccountActive', accountFilter)
Vue.filter('hasSimplonline', simplonlineFilter)

const app = new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

// only available during E2E tests
if (window.Cypress) {
  window.app = app
}
