<template>
  <button @click="fShow">Toggle</button>

  <transition>
    <p v-show="show">I am Derson Ussuale, and i Love VueJs a lot</p>
  </transition>
  
</template>
 
<script lang="ts">
import { defineComponent } from 'vue'

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

<style scoped>
  .v-enter-from, .v-leave-to { opacity:0}
  .v-enter-active, .v-leave-active { transition: opacity 0.5s;}
  /* .v-leave-active { transition: opacity 0.5s} */
  /* .v-leave-to { opacity:0 } */

</style>