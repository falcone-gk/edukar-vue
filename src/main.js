import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// FontAwesome plugin
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab)

const mainApp = createApp(App)
mainApp.component('font-awesome-icon', FontAwesomeIcon)
mainApp.use(router)
mainApp.mount('#app')
