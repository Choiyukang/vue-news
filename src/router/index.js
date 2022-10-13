import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routers:[
        {
            path:'/', //url 주소
            component:'', // url 주소로 갔을 때 표시될 컴포넌트
        },
        {
            path:'',
            component:'',
        },
        {
            path:'',
            component:'',
        }
    ]
});
