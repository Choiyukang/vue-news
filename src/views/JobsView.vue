<template>
  <div>
<<<<<<< HEAD
    <li v-for="job in jobs" v-bind:key="job.id">
    {{job}}
      </li>
=======
    <li v-for="job in this.$store.state.jobs" v-bind:key="job.id">{{job}}</li>
>>>>>>> 5f14064fc4ca05a5680f180cdce005081d2918bb
  </div>
</template>

<script>
import {fetchJobsList} from '../api/index.js'
export default {
  data(){
    return{
      jobs:[]
    }
  },
  created(){
    fetchJobsList()
    .then(response => this.jobs = response.data)
    .catch(error=>console.log(error))
  }
}
</script>

<style>

</style>