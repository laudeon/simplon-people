import TrainerModel from '../models/TrainerModel'

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

  async addTrainer ({ commit }, payload) {
    const trainer = new TrainerModel(payload)
    // await post trainer...
    commit('addTrainer', trainer)
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
