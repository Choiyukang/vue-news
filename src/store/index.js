import Vue from 'vue'
import Vuex from 'vuex';
import {fetchAskList, fetchJobsList, fetchNewsList} from '../api/index.js';

Vue.use(Vuex);


//상태관리
export const store = new Vuex.Store({
    state:{
        news:[],
        asks:[],
        jobs:[]
    },
    getters:{
        fetchedAsk(state){
            return state.asks;
        }
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
        FETCH_ASKS({commit}){
            fetchAskList()
            .then(({data}) => commit('SET_ASKS',data))
            .catch(error => console.log(error))
        },
        FETCH_JOBS({commit}){
            fetchJobsList()
            .then(({data}) => {
                commit('SET_JOBS',data)
            })
            .catch(error => console.log(error))
        }

    },
    //API 호출 데이터 담기
    mutations:{
        SET_NEWS(state, news){
            state.news = news;
        },
        SET_ASKS(state, asks){
            state.asks = asks;
        },
        SET_JOBS(state, jobs){
            state.jobs = jobs;
        },
    }
});



