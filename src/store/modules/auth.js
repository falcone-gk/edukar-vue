import axios from 'axios'
import router from '@/router'

const state = {
  username: null,
  token: null
}

const actions = {
  async register (form) {
    await axios.post('register', form)
    const userForm = new FormData()
    userForm.append('username', form.username)
    userForm.append('password', form.password)
    router.push({ name: 'login' })
  }
}

export default {
  state,
  actions
}
