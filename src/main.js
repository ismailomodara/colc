import { createApp } from 'vue'
import App from './App.vue'

// Element UI
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/en'

// Styling
import '@/assets/scss/cl-main.scss'

// Router
import router from './router'

const app = createApp(App)

app.use(ElementPlus, { locale })
app.use(router)

app.mount('#app')
