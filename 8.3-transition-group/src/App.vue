<template>
  
  <button @click="sortAZ">Sort A-Z</button>
  <button @click="sortZA" style="margin-left: 10px;">Sort Z-A</button>

  <transition-group
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
    :appear="true" tag="ul"
    mode="in-out">
    
    
    <li v-for="user, index in users" :key="index"> 
      {{ user }} <button @click="removeUser(user)">remove</button>
    </li>
    
  </transition-group>
  
</template>
 
<script lang="ts">
import { defineComponent } from 'vue'
import 'animate.css';


export default defineComponent({
  data() {
    return {
      users: ['Derson Ussuale', 'Melanie', 'Melissa', 'Wagiza'],
    }
  },
  methods: {
    sortAZ() {
      this.users = this.users.sort();
    },
    sortZA() {
      this.users = this.users.sort().reverse();
    },

    removeUser(user: string) {
      const index = this.users.indexOf(user);
      index !== -1 ? this.users.splice(index, 1) : this.users
      // console.log(this.users.indexOf(user))
      // this.users = this.users.filter( u => u!= user )
    }
  }
})
</script>

<style scoped>
  li {
    cursor: pointer;
    padding: 0 .2em;
    margin-top:0.2em;
  }

  .v-move 
  .v-enter-active,
  .v-leave-active{
    transition: all 0.7s;
  }

</style>