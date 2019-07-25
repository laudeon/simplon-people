import TrainerModel from '../models/TrainerModel'
import utils from '../utils'

const TRAINER_SHEET_ID = '702284441'

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
    const response = await gclient.sheets.spreadsheets.values.get({
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      range: 'Formateur.rices!A2:T'
    })

    commit('fetchTrainers', response.result.values)
  },

  async updateTrainer ({ commit }, { gclient, payload }) {
    const valueInputOption = 'RAW'
    const range = 'Formateur.rices!A' + payload.rowNumber
    let values

    // Expected format:
    // [[... Cell values], ...more rows]
    values = [utils.objectToArray(payload)]
    
    await gclient.sheets.spreadsheets.values.update({
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      range: range,
      valueInputOption,
      resource: { values: values }
    })
    
    commit('updateTrainer', payload)    
  },
  
  async addTrainer ({ commit }, { gclient, payload, rowNumber }) {
    const valueInputOption = 'RAW'
    const range = 'Formateur.rices!A' + rowNumber
    // Expected format:
    // [[... Cell values], ...more rows]
    let values = [utils.objectToArray(payload)]

    await gclient.sheets.spreadsheets.values.append({
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      range,
      valueInputOption,
      resource: { values: values }
    })

    commit('addTrainer', payload)
  },

  async addBackgroundToRow (placeholder, { gclient, rowNumber, color }) {
    const requests = [
        {
          "repeatCell": {
            "range": {
              "sheetId": TRAINER_SHEET_ID,
              "startRowIndex": (rowNumber - 1),
              "endRowIndex": rowNumber
            },
            "cell": {
              "userEnteredFormat": {
                "backgroundColor": color,
              }
            },
            "fields": "userEnteredFormat(backgroundColor)"
          }
        }
      ]

    await gclient.sheets.spreadsheets.batchUpdate({
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      requests: requests
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
  },

  updateTrainer (state, trainer) {
    utils.updateByEmail(trainer, state.all)
    utils.updateByEmail(trainer, state.filtered)
    utils.updateByEmail(trainer, state.searched)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
