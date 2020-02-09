import { http } from "../../functions"

export default {
   // namespaced: true,
   state: {
      logo: '',
      mainCarousel: [
         {},
      ],
      productCategories: [
         {},
      ],
   },
   getters: {
      resources: (state) => {
         return state
      }
   },
   mutations: {
      SET_RESOURCES: (state, payload) => {
         console.log({ state, payload })
         state = {
            ...state,
            ...payload,
         }
      }
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
   }
}
