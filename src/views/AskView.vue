<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
// import bus from '@/utils/bus';
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';

export default {
  components:{
    ListItem,
  },
  // mounted(){
  //   bus.$emit("end:spinner");
  // }
  mixins:[ListMixin],
};
</script>

<style scoped>

</style>