import Vue from 'vue'
import Vuex from 'vuex'
import profile from '../store/profile'

Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        profile
    }
})