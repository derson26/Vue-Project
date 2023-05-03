<template>
  <!-- Navbar component -->
  <Navbar />
  <!-- <Content /> -->
  <router-view></router-view>
  
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'
import Content from './pages/Content.vue'

export default defineComponent({
  components: {
    Navbar,
    // Content,
  },
})
</script>

<style scoped>

</style>