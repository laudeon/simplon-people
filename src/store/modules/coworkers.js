import CoworkerModel from '../models/CoworkerModel'
import utils from '../utils'

const state = {
  all: [],
  filtered: [],
  searched: []
}

const getters = {
  getByEmail: (state) => 
    (coworkerEmail) => 
      state.all.find(coworker => coworker.email === coworkerEmail)
}

const actions = {
  async fetchCoworkers ({ commit }, gclient) {
    return gclient.sheets.spreadsheets.values.get({
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      range: 'DIUT ∕ CME ∕ PP!A2:T'
    }).then(response => {
      commit('fetchCoworkers', response.result.values)
    })
  },

  async updateCoworker ({ commit }, { gclient, payload }) {
    const valueRange = gclient.sheets.newValueRange()

    // Expected format:
    // [[... Cell values], ...more rows]
    valueRange.values = [utils.objectToArray(payload)]

    return gclient.sheets.spreadsheets.values.update({
      valueRange,
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      range: 'DIUT ∕ CME ∕ PP!A' + payload.rowNumber
    }).then(() => {
      commit('updateCoworker', payload)
    })    
  },

  async addCoworker ({ commit }, { gclient, payload, rownNumber }) {
    const valueRange = gclient.sheets.newValueRange()

    // Expected format:
    // [[... Cell values], ...more rows]
    valueRange.values = [utils.objectToArray(payload)]

    return gclient.sheets.spreadsheets.values.update({
      valueRange,
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      range: 'DIUT ∕ CME ∕ PP!A' + rownNumber
    }).then(() => {
      commit('addCoworker', payload)
    })    
  }
}

const mutations = {
  fetchCoworkers (state, coworkers) {
    state.all = coworkers.map((coworker, key) => new CoworkerModel(coworker, key))
    state.filtered = state.all
    state.searched = state.filtered
  },

  addCoworker (state, coworker) {
    state.all.push(coworker)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
