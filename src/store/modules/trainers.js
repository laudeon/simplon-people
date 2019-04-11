import Trainer from '../models/trainer'

const state = {
  all: [],
  filtered: []
}

const getters = {
  getByEmail: (state) => 
    (trainerEmail) => 
      state.all.find(trainer => trainer.email === trainerEmail)
}

const actions = {
  async fetchTrainers ({ commit }, gclient) {
    gclient.sheets.spreadsheets.values.get({
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      range: 'Formateur.rices!A2:M'
    }).then(response => {
      commit('fetchTrainers', response.result.values)
    })
  },

  async addTrainer ({ commit }, payload) {
    const trainer = new Trainer(payload)
    // await post trainer...
    commit('addTrainer', trainer)
  }
}

const mutations = {
  fetchTrainers (state, trainers) {
    state.all = trainers.map(trainer => new Trainer(trainer))
    state.filtered = state.all
  },

  filter (state, payload) {
    state.filtered = state.all.filter(trainer => 
      Object.keys(trainer).some(key => {
        if(typeof trainer[key] === 'string') {
          return trainer[key].includes(payload)
        }

        return false
      })
    )
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
