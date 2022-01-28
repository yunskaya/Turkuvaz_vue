import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import bootstrap from 'bootstrap'
import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css'
import jQuery from 'jquery';

const app = createApp(App)
app.use(jQuery)
app.use(bootstrap)
app.use(bootstrapCss)
app.use(router)
app.mount('#app')
