import { createApp } from 'vue'
import App from './App.vue'
import NcComponents from '../packages'
const app = createApp(App)
app.use(NcComponents)
app.mount('#app')
