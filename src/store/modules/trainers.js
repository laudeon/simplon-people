import TrainerModel from '../models/TrainerModel'
import utils from '../utils'

const TRAINER_SHEET_ID = '702284441'
const TRAINER_RANGE_BASE = 'Formateur.rices!A'
const TRAINER_RANGE_ALL = `${TRAINER_RANGE_BASE}2:W`

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
      range: TRAINER_RANGE_ALL
    })

    commit('fetchTrainers', response.result.values)
  },

  async updateTrainer ({ commit }, { gclient, payload }) {
    const valueInputOption = 'RAW'
    const range = TRAINER_RANGE_BASE + payload.rawData.rowNumber
    // Expected format:
    // [[... Cell values], ...more rows]
    const values = [utils.objectToArray(payload.data)]
    
    await gclient.sheets.spreadsheets.values.update({
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      range,
      valueInputOption,
      resource: { values }
    })
    
    commit('updateTrainer', payload.rawData)    
  },
  
  async addTrainer ({ commit }, { gclient, payload, rowNumber }) {
    const valueInputOption = 'RAW'
    const range = TRAINER_RANGE_BASE + rowNumber
    // Expected format:
    // [[... Cell values], ...more rows]
    const values = [utils.objectToArray(payload)]

    await gclient.sheets.spreadsheets.values.append({
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      range,
      valueInputOption,
      resource: { values }
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
    state.filtered = [...state.all]
    state.searched = [...state.filtered]
  },

  addTrainer (state, trainer) {
    state.all.push(new TrainerModel(trainer, trainer.rowNumber))
  },

  updateTrainer (state, trainer) {
    state.all = [...utils.updateByEmail(trainer, state.all)]
    state.filtered = [...utils.updateByEmail(trainer, state.filtered)]
    state.searched = [...utils.updateByEmail(trainer, state.searched)]
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
