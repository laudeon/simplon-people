import EmployeeModel from '../models/EmployeeModel'
import utils from '../utils'

const state = {
  all: [],
  filtered: [],
  searched: []
}

const getters = {
  getByEmail: (state) => 
    (employeeEmail) => 
      state.all.find(employee => employee.email === employeeEmail)
}

const actions = {
  async fetchTeam ({ commit }, gclient) {
    return gclient.sheets.spreadsheets.values.get({
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      range: 'DIUT ∕ CME ∕ PP!A2:M'
    }).then(response => {
      commit('fetchTeam', response.result.values)
    })
  },

  async updateEmployee ({ commit }, { gclient, payload }) {
    const valueRange = gclient.sheets.newValueRange()

    // Expected format:
    // [[... Cell values], ...more rows]
    valueRange.values = [utils.objectToArray(payload)]

    return gclient.sheets.spreadsheets.values.update({
      valueRange,
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      range: 'DIUT ∕ CME ∕ PP!A' + payload.rowNumber
    }).then(() => {
      commit('addEmployee', payload)
    })    
  },

  async addEmployee ({ commit }, { gclient, payload, rownNumber }) {
    const valueRange = gclient.sheets.newValueRange()

    // Expected format:
    // [[... Cell values], ...more rows]
    valueRange.values = [utils.objectToArray(payload)]

    return gclient.sheets.spreadsheets.values.update({
      valueRange,
      spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
      range: 'DIUT ∕ CME ∕ PP!A' + rownNumber
    }).then(() => {
      commit('addEmployee', payload)
    })    
  }
}

const mutations = {
  fetchTeam (state, team) {
    state.all = team.map((employee, key) => new EmployeeModel(employee, key))
    state.filtered = state.all
    state.searched = state.filtered
  },

  addEmployee (state, employee) {
    state.all.push(employee)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
