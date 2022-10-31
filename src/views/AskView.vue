<template>
  <div>
     <p v-for="item in askItems" v-bind:key="item.id">
    <router-link :to="`item/${item.id}`">{{item.title}}</router-link>
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
  this.$store.dispatch('FETCH_ASKS')
 }

}
</script>

<style>

</style>