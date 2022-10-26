<template>
  <div>
    <li v-for="ask in asks" v-bind:key="ask.id">{{ask}}</li>
  </div>
</template>

<script>
import {fetchAskList} from '../api/index.js'
export default {
 data(){
  return {
    asks:[],
  }
 },

 created(){
  fetchAskList()
  .then(response => {
      this.asks = response.data;
    })
  .catch(error => console.log(error))
 }
}
</script>

<style>

</style>