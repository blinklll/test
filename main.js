import Vue from 'vue'
import App from './App'
import _ from 'lodash'

Vue.config.productionTip = false

Vue.prototype.$_ = _;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
