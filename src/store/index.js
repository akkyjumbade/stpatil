import Vue from 'vue'
import Vuex from 'vuex'
// import resources from './modules/resources'
import { http } from '../functions'
Vue.use(Vuex)

const store = new Vuex.Store({
   state: {
      resources: {
         ...window.stateContext,
         name: ''
      }
   },
   mutations: {
      SET_RESOURCES: (state, payload) => {
         state = {
            ...state,
            ...payload
         }
      },
   },
   actions: {
      getResources: async (context) => {
         try {
            const { data } = await http.get('/app/resources')
            context.commit('SET_RESOURCES', data)
         } catch (error) {
            //
         }
      }
   },
   modules: {
      // resources
   }
})
store.dispatch('getResources')
export default store
