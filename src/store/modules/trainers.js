import TrainerModel from '../models/TrainerModel'
import utils from '../utils'

const state = {
  all: [],
  filtered: [],
  searched: []
}

const getters = {
  getByEmail: (state) => 
    (trainerEmail) => 
      state.all.find(trainer => trainer.email === trainerEmail)
}

const actions = {
  async fetchTrainers ({ commit }, gclient) {
    return gclient.sheets.spreadsheets.values.get({
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      range: 'Formateur.rices!A2:N'
    }).then(response => {
      commit('fetchTrainers', response.result.values)
    })
  },

  async updateTrainer ({ commit }, { gclient, payload }) {
    const valueRange = gclient.sheets.newValueRange()

    // Expected format:
    // [[... Cell values], ...more rows]
    valueRange.values = [utils.objectToArray(payload)]

    return gclient.sheets.spreadsheets.values.update({
      valueRange,
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      range: 'Formateur.rices!A' + payload.rowNumber
    }).then(() => {
      commit('addTrainer', payload)
    })    
  },

  async addTrainer ({ commit }, { gclient, payload, rownNumber }) {
    const valueRange = gclient.sheets.newValueRange()

    // Expected format:
    // [[... Cell values], ...more rows]
    valueRange.values = [utils.objectToArray(payload)]

    return gclient.sheets.spreadsheets.values.update({
      valueRange,
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      range: 'Formateur.rices!A' + rownNumber
    }).then(() => {
      commit('addTrainer', payload)
    })    
  }
}

const mutations = {
  fetchTrainers (state, trainers) {
    state.all = trainers.map((trainer, key) => new TrainerModel(trainer, key))
    state.filtered = state.all
    state.searched = state.filtered
  },

  addTrainer (state, trainer) {
    state.all.push(trainer)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
