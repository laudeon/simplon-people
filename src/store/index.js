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
  "Provence-Alpes-Côte d’Azur"
]

export default new Vuex.Store({
  state: {
    activeList: LISTS[0],
    districts: DISTRICTS,
    activeDistricts: []
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

      listState.filtered = utils.ifIncludes(state.activeDistricts, listState.all, 'district')
      listState.searched = listState.filtered
    },

    toggleDistricts (state, payload) {
      const listState = state[state.activeList]
      const index = state.activeDistricts.indexOf(payload)

      if (!DISTRICTS.includes(payload)) {
        throw new Error(
          'The passed district does not exist.'
        )
      }

      if (index > -1) {
        state.activeDistricts.splice(index, 1)
      } else {
        state.activeDistricts.push(payload)
      }

      listState.filtered = utils.ifIncludes(state.activeDistricts, listState.all, 'district')
      listState.searched = listState.filtered
    },

    search (state, payload) {
      const listState = state[state.activeList]
      const sanitizedPayload = utils.sanitizeString(payload)
      
      if (payload === '') {
        return listState.searched = listState.filtered
      }

      listState.searched = listState.filtered.filter(employee => 
        Object.keys(employee).some(key => {
          if(typeof employee[key] === 'string') {
            const sanitizedEmployee = utils.sanitizeString(employee[key])
            return sanitizedEmployee.includes(sanitizedPayload)
          }
  
          return false
        })
      )
    }
  },
  modules: {
    trainers,
    team,
    me
  },
  strict: true
})