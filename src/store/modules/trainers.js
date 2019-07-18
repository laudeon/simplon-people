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
      range: 'Formateur.rices!A2:T'
    }).then(response => {
      commit('fetchTrainers', response.result.values)
    })
  },

  async updateTrainer ({ commit }, { gclient, payload }) {
    let values
    const range = 'Formateur.rices!A' + payload.rowNumber
    const path = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.VUE_APP_SPREADSHEET_ID}/values/${range}:append`

    // Expected format:
    // [[... Cell values], ...more rows]
    values = [utils.objectToArray(payload)]
    
    return gclient.request({
      path: path,
      method: 'POST',
      resource: { values: values }
    }).then(response => {
      window.console.log(response)
      commit('addTrainer', payload)
    })
    // return gclient.sheets.spreadsheets.values.update({
    //   body: valueRange,
    //   spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
    //   range: 'Formateur.rices!A' + payload.rowNumber
    // }).then(() => {
    //   commit('addTrainer', payload)
    // })    
  },
  
  async addTrainer ({ commit }, { gclient, payload, rowNumber }) {
    const valueInputOption = 'RAW'
    // Expected format:
    // [[... Cell values], ...more rows]
    let values = [utils.objectToArray(payload)]

    return gclient.sheets.spreadsheets.values.append({
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      range: 'Formateur.rices!A' + rowNumber,
      valueInputOption,
      resource: { values: values }
    }).then(response => {
      window.console.log(response)
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
    state.all.push(new TrainerModel(trainer, trainer.rowNumber))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
