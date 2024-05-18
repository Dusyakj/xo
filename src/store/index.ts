import { createStore } from 'vuex'

export default createStore({
  state: {
    win: 0,
    current: 0
  },
  getters: {
  },
  mutations: {
    toWin(state, value){
      state.win = value
    },
    changeCurrent(state, value){
      state.current = value
    },
  },
  actions: {
  },
  modules: {
  }
})
