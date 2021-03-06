import Vue from 'vue'
import moment from 'moment'
import Antd from 'ant-design-vue'
import '@/assets/styles/main.less'
import VueI18n from 'vue-i18n'
import Prism from 'prismjs'
import locale from './assets/locales'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueBus from './vue-bus'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.getItem('language') || 'zhHans',
  messages: locale as any,
  silentTranslationWarn: true,
})

Prism.highlightAll()

Vue.use(Antd)
Vue.use(VueBus)
Vue.prototype.$moment = moment

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  mounted() {
    this.$router.push('/')
  },
}).$mount('#app')
