const state = {
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  jobTitle: '',
  district: '',
  description: '',
  logged: false
}

const getters = {

}

const actions = {
  
}

const mutations = {
  logged (state, payload) {
    state.logged = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
