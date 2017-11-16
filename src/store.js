import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isCleared: false,
  buttons: [
    { number: 0, isActive: false, wall: ['top', 'left'] },
    { number: 1, isActive: false, wall: ['top'] },
    { number: 2, isActive: false, wall: ['top'] },
    { number: 3, isActive: false, wall: ['top'] },
    { number: 4, isActive: false, wall: ['top', 'right'] },
    { number: 5, isActive: false, wall: ['left'] },
    { number: 6, isActive: false, wall: [] },
    { number: 7, isActive: false, wall: [] },
    { number: 8, isActive: false, wall: [] },
    { number: 9, isActive: false, wall: ['right'] },
    { number: 10, isActive: false, wall: ['left'] },
    { number: 11, isActive: false, wall: [] },
    { number: 12, isActive: false, wall: [] },
    { number: 13, isActive: false, wall: [] },
    { number: 14, isActive: false, wall: ['right'] },
    { number: 15, isActive: false, wall: ['left'] },
    { number: 16, isActive: false, wall: [] },
    { number: 17, isActive: false, wall: [] },
    { number: 18, isActive: false, wall: [] },
    { number: 19, isActive: false, wall: ['right'] },
    { number: 20, isActive: false, wall: ['left', 'bottom'] },
    { number: 21, isActive: false, wall: ['bottom'] },
    { number: 22, isActive: false, wall: ['bottom'] },
    { number: 23, isActive: false, wall: ['bottom'] },
    { number: 24, isActive: false, wall: ['right', 'bottom'] }
  ]
}

const mutations = {
  reset (state) {
    state.isCleared = false
    for (let i = 0; i < state.buttons.length; i++) {
      state.buttons[i].isActive = false
    }
  },
  cheat (state) {
    for (let i = 0; i < state.buttons.length; i++) {
      state.buttons[i].isActive = true
    }
    state.isCleared = true
  },
  checkList (state) {
    let checkList = state.buttons.map(obj => obj.isActive)
    if (checkList.indexOf(false) === -1) {
      state.isCleared = true
    }
  }
}

const actions = {
  reset: ({ commit }) => commit('reset'),
  cheat: ({ commit }) => commit('cheat'),
  checkList: ({ commit }) => commit('checkList')
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
