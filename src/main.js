import Vue from 'vue'
import VueGoogleApi from 'vue-google-api'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
const config = {
  apiKey: process.env.VUE_APP_SPREADSHEET_API_KEY,
  clientId: process.env.VUE_APP_SPREADSHEET_CLIENT_ID,
  scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"]
}
Vue.use(VueGoogleApi, config)

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if (window.Cypress) {
  // only available during E2E tests
  window.app = app
}
