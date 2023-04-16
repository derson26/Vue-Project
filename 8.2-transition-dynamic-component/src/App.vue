<template>
  <ul>
    <li @click="fShow">Home</li>
    <li @click="fShow">Contact</li>
    <li @click="fShow">About</li>
  </ul>

  <transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
    :appear="true"
    mode="out-in">
    
    <component :is="currentComponent" />
  </transition>
  
</template>
 
<script lang="ts">
import { defineComponent } from 'vue'
import 'animate.css';
import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import About from './components/About.vue';


export default defineComponent({
  components: {
    Home,
    Contact,
    About,
  },
  data() {
    return {
      currentComponent: 'Home',
    }
  },
  methods: {
    fShow(event: Event) {
      const li = event.target as HTMLLIElement;
      // console.log(li.textContent)
      this.currentComponent = li.textContent || '';
    }
  }
})
</script>

<style scoped>
  li {
    cursor: pointer;
    display: inline-block;
    padding: 0 .2em;
  }

</style>