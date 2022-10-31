<template>
  <div>
     <p v-for="item in askItems" v-bind:key="item.id">
    <a v-bind:href="item.url">{{item.title}} </a>
    <small> {{item.time_ago}} by {{item.uesr}}</small>
  </p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {

computed:{
  ...mapGetters({
    askItems:'fetchedAsk'
  })
// #2
// ...mapState({
//   state: state=> state.ask
// })
  //#1
  // ask(){
  //   return this.$store.state.ask
  // }
},
 created(){
  // this.$store.dispatch('FETCH_ASKS')
 }

}
</script>

<style>

</style>