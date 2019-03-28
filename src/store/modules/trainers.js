import Trainer from '../models/trainer'

const state = {
  all: []
}

const getters = {
  getByEmail: (state) => 
    (trainerEmail) => 
      state.all.find(trainer => trainer.email === trainerEmail)
}

const actions = {
  async fetchTrainers ({ commit }) {
    // await fetch trainers...
    commit('fetchTrainers', /* trainers payload*/)
  },

  async addTrainer ({ commit }, payload) {
    const trainer = new Trainer(payload)
    // await post trainer...
    commit('addTrainer', trainer)
  }
}

const mutations = {
  fetchTrainers (state, trainers) {
    state.all = state.all.concat(trainers)
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
