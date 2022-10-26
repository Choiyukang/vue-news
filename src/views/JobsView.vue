<template>
  <div>
    <li v-for="job in this.$store.state.jobs" v-bind:key="job.id">{{job}}</li>
  </div>
</template>

<script>
export default {


 created(){
  this.$store.dispatch('FETCH_JOBS')
 }
}
</script>

<style>

</style>