<template>
  <div>
    <section>
      <!-- 짐룬상세내역 -->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`user/${fetchedItem.user}`">{{fetchedItem.user}}></router-link>
           <div class="time">
            {{fetchedItem.time_ago}}
          </div>
        </div>
       
        <h2>{{fetchedItem.title}}</h2>
      </div>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {


computed:{
  ...mapGetters(['fetchedItem']),
  // coomentItem(){
  //   return this.$store.state.item;
  // }
},
created(){
  const itemId = this.$route.params.id;
  this.$store.dispatch('FETCH_ITEM',itemId);
},

}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
}
.fa-user{
  font-size: 2.5rem;
}
.user-description{
  padding-left: 8px;
}
.time{
  font-size: 0.7rem;
}
</style>