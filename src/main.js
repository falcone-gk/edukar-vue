import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vue3 mq
import { Vue3Mq } from 'vue3-mq'

// Vuex and axios
import store from './store'
import axios from 'axios'

// FontAwesome plugin
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

axios.defaults.baseURL = 'http://localhost:8000'

library.add(fas, fab)

const mainApp = createApp(App)
mainApp.component('font-awesome-icon', FontAwesomeIcon)
mainApp.use(Vue3Mq)
mainApp.use(store)
mainApp.use(router)
mainApp.mount('#app')
