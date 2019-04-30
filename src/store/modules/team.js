import Employee from '../models/employee'

const state = {
  all: [],
  filtered: []
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

  async addEmployee ({ commit }, payload) {
    const employee = new Employee(payload)
    // await post employee...
    commit('addEmployee', employee)
  }
}

const mutations = {
  fetchTeam (state, team) {
    state.all = team.map(employee => new Employee(employee))
    state.filtered = state.all
  },

  filter (state, payload) {
    state.filtered = state.all.filter(employee => 
      Object.keys(employee).some(key => {
        if(typeof employee[key] === 'string') {
          return employee[key].toLowerCase().includes(payload.toLowerCase())
        }

        return false
      })
    )
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
