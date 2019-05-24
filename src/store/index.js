import Vue from 'vue'
import Vuex from 'vuex'
import trainers from './modules/trainers'
import team from './modules/team'
import me from './modules/me'
import utils from './utils'

Vue.use(Vuex)

const LISTS = ['trainers', 'team']
const DISTRICTS = [
  "DROM",
  "Auvergne-Rhône-Alpes",
  "Bourgogne-Franche-Comté",
  "Bretagne",
  "Centre-Val de Loire",
  "Corse",
  "Grand Est",
  "Hauts-de-France",
  "Île-de-France",
  "Normandie",
  "Nouvelle-Aquitaine",
  "Occitanie",
  "Pays de la Loire",
  "Provence-Alpes-Côte d'Azur"
]

export default new Vuex.Store({
  state: {
    activeList: LISTS[0],
    districts: DISTRICTS,
    activeDistrict: '',
    lastSearch: ''
  },
  mutations: {
    switchList (state, payload) {
      if (!LISTS.includes(payload)) {
        throw new Error(
          'The passed list does not exist. Possible lists are : trainers, team.'
          )
        }
        
      state.activeList = payload
      const listState = state[state.activeList]

      listState.filtered = utils.filterBy(state.activeDistrict, listState.all, 'district')
      listState.filtered = utils.filterAll(state.lastSearch, listState.filtered)
      listState.searched = listState.filtered
    },

    toggleDistricts (state, payload) {
      const listState = state[state.activeList]

      if (!DISTRICTS.includes(payload)) {
        throw new Error(
          'The passed district does not exist.'
        )
      }

      if (payload === state.activeDistrict) {
        state.activeDistrict = ''
      } else {
        state.activeDistrict = payload
      }

      listState.filtered = utils.filterBy(state.activeDistrict, listState.all, 'district')
      listState.filtered = utils.filterAll(state.lastSearch, listState.filtered)
      listState.searched = listState.filtered
    },

    search (state, payload) {
      const listState = state[state.activeList]
      const sanitizedPayload = utils.sanitizeString(payload)

      state.lastSearch = sanitizedPayload
      
      if (sanitizedPayload === '') {
        return listState.searched = listState.filtered
      }

      listState.searched = utils.filterAll(sanitizedPayload, listState.filtered)
    }
  },
  modules: {
    trainers,
    team,
    me
  },
  strict: true
})