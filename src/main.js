import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import 'lib-flexible'
// import 'babel-polyfill'
import VueI18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css'
import { Carousel, CarouselItem, Image, Popover } from 'element-ui'
// import '../rem.js'
import MetaInfo from 'vue-meta-info'

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Image)
Vue.use(Popover)
Vue.use(VueI18n)
Vue.use(MetaInfo)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'zh',
  messages: {
    'zh': require('@/assets/lang/zh.json'),
    'en': require('@/assets/lang/en.json')
  }
})

Vue.config.productionTip = false

// setRem()

new Vue({
  router,
  i18n,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('custom-render-event'))
  }
}).$mount('#app')
