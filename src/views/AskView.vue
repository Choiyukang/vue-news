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

}
</script>

<style>

</style>