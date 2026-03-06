import '@dialpad/dialtone/css-default-theme'
import '@dialpad/dialtone/css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
