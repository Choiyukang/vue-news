<template>
  <div>
      <li v-for="ak in ask" v-bind:key="ak.id">
    {{ak}}
  </li>
  </div>
</template>

<script>
import {fetchAskList} from '../api/index.js';

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