<template>
  <div>
    <ul>
      <li v-on:click="getItem">Home</li>
      <li v-on:click="getItem">About</li>
      <li v-on:click="getItem">Contact</li>
    </ul>
  </div>

  <component :is="currentView"/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import About from './components/About.vue';
  import Contact from './components/Contact.vue';
  import Home from './components/Home.vue'; 

  export default defineComponent({
    components: { Home, Contact, About},
    data() {
      return {
        currentView: 'Home'
      }
    },
    methods:{
      getItem(event:Event) {
        const li = event.target as HTMLLIElement;
        // console.log(li.innerText)
        this.currentView = li.innerText;
      }
    }
  })
</script>

<style scoped>
  li {
    cursor: pointer;
    display: inline-block;
    padding: 0 .3em;
  }

  ul {
    list-style: none;
  }
</style>
