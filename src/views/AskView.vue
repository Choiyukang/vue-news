<template>
  <div>
<<<<<<< HEAD
      <li v-for="ak in ask" v-bind:key="ak.id">
    {{ak}}
  </li>
=======
    <li v-for="ask in askItems" v-bind:key="ask.id">{{ask}}</li>
>>>>>>> 5f14064fc4ca05a5680f180cdce005081d2918bb
  </div>
</template>

<script>
<<<<<<< HEAD
import {fetchAskList} from '../api/index.js';
=======
import { mapGetters, mapState } from 'vuex'
>>>>>>> 5f14064fc4ca05a5680f180cdce005081d2918bb

export default {
  data(){
    return{
      ask:[]
    }
  },

  created(){
    fetchAskList()
      .then(response => this.ask = response.data)
      .catch(error => console.log(error));
  }

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