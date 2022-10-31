<template>
  <div>
    <li v-for="ask in askItems" v-bind:key="ask.id">{{ask}}</li>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data(){
    return{
      ask:[]
    }
  },

  // created(){
  //   fetchAskList()
  //     .then(response => this.ask = response.data)
  //     .catch(error => console.log(error));
  // }

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