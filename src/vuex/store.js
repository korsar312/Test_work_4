import {createStore} from "vuex";

const store = createStore({
    state () {
        return {
            lists:[],
        }
    },
    mutations: {
        addProperty(state, payload){
            payload.obj[payload.property] = payload.value
        }
    },
})

export default store
