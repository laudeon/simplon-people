import Vue from 'vue'
import Vuex from 'vuex'
import trainers from './modules/trainers'
import team from './modules/team'
import me from './modules/me'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const VIEWS = ['trainers', 'team']

export default new Vuex.Store({
  state: {
    activeView: VIEWS[0],
    districts: []
  },
  mutations: {
    switchView (state, payload) {
      if (!VIEWS.includes(payload)) {
        throw new Error('The passed view does not exist. Possible views are : trainers, team.')
      }

      state.activeView = payload
    },
    deduceDistricts (state) {
      let districtsArray = []

      // Add trainers related districts
      districtsArray.push(state.trainers.all.reduce((acc, trainer) => {
        if (!acc.includes(trainer.district)) {
          acc.push(trainer.district)
        }
        
        return acc
      }, []))

      // TODO Add team related districts

      state.districts = [...new Set([].concat(...districtsArray))]
    },
  },
  modules: {
    trainers,
    team,
    me
  },
  strict: debug
})