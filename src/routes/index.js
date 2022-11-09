import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import CreateListView from "../views/CreateListView.js"
import bus from "@/utils/bus";
import { store } from "@/store";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news", //url 주소
      name: "news",
      component: NewsView, // url 주소로 갔을 때 표시될 컴포넌트
      beforeEnter: (to, from, next) => {
        // console.log('to',to) // 이동할 url라우팅정보
        // console.log('from',from) //현재위치 라우팅정보
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            next();
          })
          .catch(() => {
            bus.$emit("end:spinner");
          });
        //next(); //호출 안하면 이동 안함
      },
      // component: CreateListView('NewsView'),
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView, // url 주소로 갔을 때 표시될 컴포넌트
      // component: CreateListView("AskView"),
      beforeEnter: (to, from, next) => {
        // console.log('to',to) // 이동할 url라우팅정보
        // console.log('from',from) //현재위치 라우팅정보
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            next();
          })
          .catch(() => {
            bus.$emit("end:spinner");
          });
        //next(); //호출 안하면 이동 안함
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView, // url 주소로 갔을 때 표시될 컴포넌트
      // component: CreateListView("JobsView"),
      beforeEnter: (to, from, next) => {
        // console.log('to',to) // 이동할 url라우팅정보
        // console.log('from',from) //현재위치 라우팅정보
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            next();
          })
          .catch(() => {
            bus.$emit("end:spinner");
          });
        //next(); //호출 안하면 이동 안함
      },
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});
