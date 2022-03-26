import axios from 'axios'
import router from '@/router'

const state = {
  username: '',
  isAuthenticated: false
}

const getters = {
  getUsername: (state) => { return state.username },
  isAuthenticated: (state) => { return state.isAuthenticated }
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
        router.push('/')
      })
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}