import Vue from 'vue'
import Vuex from 'vuex'
import trainers from './modules/trainers'
import me from './modules/me'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    trainers,
    me
  },
  strict: debug
})