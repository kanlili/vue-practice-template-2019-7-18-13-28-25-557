import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
const store =new Vuex.Store({
    state:{
        count:0,
        inputNumber:0
    },
    mutations:{
        // initInputNumber(state,number){
        //     state.inputNumber=number;
        // },
        add(state){
            state.count++;
        },
        sub(state){
            state.count--;
        }
    },
    getters:{
        result:state=>{
         return state.count;
       }
    }
    
})
export default store