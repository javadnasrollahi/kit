import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import fa from 'vuetify/es5/locale/fa'

Vue.use(Vuetify, {
  options: {
    customProperties: true
  },
  iconfont: 'fa',
  lang: {
    locales: { fa },
    current: 'fa'
  },
  theme: {
    //! رنگ های پرکاربرد در این قسمت تنظیم شود.
    myPrimary: "#34495e",
    myRed: "#a73826",
  }
})
