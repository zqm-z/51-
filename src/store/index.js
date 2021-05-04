import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    detailData: '3627',
    setData: []
  },
  mutations: {
    setdetailData(state, data) {
      state.detailData = data
    },
    setVuexShop(state, data) {
      state.setData = data
    }
  },
  actions: {
  },
  modules: {
  }
})
