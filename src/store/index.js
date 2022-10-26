import Vue from 'vue'
import Vuex from 'vuex';
import {fetchNewsList} from '../api/index.js';

Vue.use(Vuex);


//상태관리
export const store = new Vuex.Store({
    state:{
        news:[]
    },
    //API호출
    actions:{
        FETCH_NEWS(context){
            fetchNewsList()
            .then(response => {
                console.log(response.data)
                context.commit('SET_NEWS',response.data)
            })
            .catch(error => console.log(error))
        },
    },
    //API 호출 데이터 담기
    mutations:{
        SET_NEWS(state, news){
            state.news = news;
        },
    }
});



