import axios from 'axios'
import router from '@/router'

const state = {
  username: '',
  isAuthenticated: false,
  signupError: false,
  loginError: false
}

const getters = {
  getUsername: (state) => { return state.username },
  isAuthenticated: (state) => { return state.isAuthenticated },
  getSignupError: (state) => { return state.signupError },
  getLoginError: (state) => { return state.loginError }
}

const actions = {
  async register (form) {
    await axios.post('register', form)
    const userForm = new FormData()
    userForm.append('username', form.username)
    userForm.append('password', form.password)
    router.push({ name: 'login' })
  },
  login ({ commit }, form) {
    axios
      .post('api/account/login', form)
      .then(response => {
        localStorage.setItem('token', response.data.token)
        const data = {
          username: form.username,
          auth: true
        }
        commit('setUserAuth', data)
        commit('setLoginErrorValue', false)
        router.push('/')
      })
      .catch(() => {
        commit('setLoginErrorValue', true)
      })
  },
  logout ({ commit }) {
    localStorage.removeItem('token')
    const data = {
      username: '',
      isAuthenticated: false
    }
    commit('setUserAuth', data)
    router.push({ name: 'login' })
  },
  getUsernameByToken ({ commit }) {
    const url = '/api/account/user/' + localStorage.getItem('token')
    axios
      .get(url)
      .then(response => {
        const data = {
          username: response.data.username,
          auth: true
        }
        commit('setUserAuth', data)
      })
  }
}

const mutations = {
  setUserAuth (state, data) {
    state.username = data.username
    state.isAuthenticated = data.auth
  },
  setLoginErrorValue (state, value) {
    state.loginError = value
  },
  setSignupErrorValue (state, value) {
    state.signupError = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
