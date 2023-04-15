<template>
  <button @click="fShow">Toggle</button>

  <transition
    enter-active-class="animate__animated animate__fadeInLeft"
    leave-active-class="animate__animated animate__fadeInRight">
    <p v-show="show">I am Derson Ussuale, and i Love VueJs a lot</p>
  </transition>
  
</template>
 
<script lang="ts">
import { defineComponent } from 'vue'
import 'animate.css';

export default defineComponent({
  data() {
    return {
      show: true,
    }
  },
  methods: {
    fShow() {
      this.show = !this.show;
    }
  }
})
</script>

<style scoped></style>