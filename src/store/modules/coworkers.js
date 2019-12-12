import CoworkerModel from '../models/CoworkerModel'
import utils from '../utils'

const COWORKER_SHEET_ID = '0'
const COWORKER_RANGE_BASE = 'DIUT ∕ CdpF ∕ partenaires!A'
const COWORKER_RANGE_ALL = `${COWORKER_RANGE_BASE}2:T`

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
      range: COWORKER_RANGE_ALL
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
      range: COWORKER_RANGE_BASE + payload.rowNumber
    }).then(() => {
      commit('updateCoworker', payload)
    })    
  },

  async addCoworker ({ commit }, { gclient, payload, rowNumber }) {
    const valueInputOption = 'RAW'
    const range = COWORKER_RANGE_BASE + rowNumber
    // Expected format:
    // [[... Cell values], ...more rows]
    let values = [utils.objectToArray(payload)]

    await gclient.sheets.spreadsheets.values.update({
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      range,
      valueInputOption,
      resource: { values },
    })
    
    commit('addCoworker', payload)   
  },

  async addBackgroundToRow (placeholder, { gclient, rowNumber, color }) {
    const requests = [
        {
          "repeatCell": {
            "range": {
              "sheetId": COWORKER_SHEET_ID,
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
