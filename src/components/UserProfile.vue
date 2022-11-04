<template>
  <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">

            <slot name="username">
              <!-- 상위컴포넌트에서 정의할 영역 -->
            </slot>

            <slot name="time">
                <!-- 상위컴포넌트에서 정의할 영역 -->
            </slot>
            <slot name="karma">

            </slot>
        </div>
       
        <h2>{{info.title}}</h2>
      </div>
</template>

<script>
export default {
  props:{
    info: Object,
  },
 computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
}
.fa-user{
  font-size: 2.5rem;
}
.user-description{
  padding-left: 8px;
}
.time{
  font-size: 0.7rem;
}
</style>