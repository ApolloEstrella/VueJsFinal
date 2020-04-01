import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 9, // The TV inventory
    person: { LastName: '', FirstName: ''}
  },
  
  getters: {
    // Here we will create a getter
    person: state => state.person.LastName
  },
  
  mutations: {
    // Here we will create Jenny
    increment: (state: any) => {
      state.count++
    },

    changeName: (state: any) => {
      state.person.LastName = 'janpol'
    }
  },
  
  actions: {
    // Here we will create Larry
  }
});