import Vue from 'vue'
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';

Vue.use(Vuex);


//상태관리
export const store = new Vuex.Store({
    state:{
        news:[],
        ask:[],
        jobs:[],
        user:{},
        item:[],
    },
    getters:{
        // fetchedAsk(state){
        //     return state.asks;
        // },
        // fetchedItem(state){
        //     return state.item;
        // }
    },
    //API호출
    actions:actions,
    //API 호출 데이터 담기
    mutations:mutations
});



