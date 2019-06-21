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

  async addTrainer ({ commit }, { gclient, payload, range }) {
    const trainer = new TrainerModel(payload)
    const valueRange = gclient.sheets.newValueRange()

    // Expected format:
    // [[... Cell values], ...more rows]
    valueRange.values = [utils.objectToArray(payload)]

    return gclient.sheets.spreadsheets.values.update({
      valueRange,
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      range: 'Formateur.rices!' + range
    }).then(response => {
      commit('addTrainer', payload)
    })    
  }
}

const mutations = {
  fetchTrainers (state, trainers) {
    state.all = trainers.map(trainer => new TrainerModel(trainer))
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
