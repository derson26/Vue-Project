
<template>
  <figure>
    <img :src="listAllUsers()[0].url" alt="">
  </figure>
</template>


<script lang="ts">
import { defineComponent } from "vue";

interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export default defineComponent({
  data() {
    return {
      users: [] as IUser[],
    };
  },
  created() {
    this.users = [
      {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
      {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
      },
    ];
  },
  computed: {
    listAllUsers() {
      return this.users
    }
  }
});
</script>

<style scoped>
</style>
