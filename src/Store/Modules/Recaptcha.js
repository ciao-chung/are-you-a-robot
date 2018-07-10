export default {
  state: {
    data: {},
  },
  mutations: {
    'recaptcha.set.data': (state, data) => {
      state.data = data
    },
  },
  actions: {
    'recaptcha.set.data': (context, data) => {
      context.commit('recaptcha.set.data', data)
    },
  },
  getters: {
    recaptcha: (state) => {
      return state.data
    }
  },
}