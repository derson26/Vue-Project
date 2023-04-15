<template>
  <div class="cards">
    
    <figure class="card" v-for="user, index in listAllUsers" :key="index" :class="user.classProperty">
      <!-- You can use eg. v-bind:url or :url -->
      <img :src="user.avatar" :alt="user.first_name + 'picture'" />
      <figcaption>
        <p>{{ user.email }}</p>
        <p>{{ fullName(user) }}</p>
        <p>{{ user.id }}</p>
        <button @click="changeBorder(user)">Change border</button>
      </figcaption>
    </figure>

  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

interface IUser extends IBorder {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface IBorder {
  classProperty: "border-none" | "border-blue";
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
        classProperty: "border-none",
      },
      {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
        classProperty: "border-none",
      },
      {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
        classProperty: "border-none",
      },
    ];
  },
  computed: {
    listAllUsers(): IUser[] {
      return this.users;
    },

    // Writable Computed
    fullName() {
      return (user: IUser) => `${user.first_name} ${user.last_name}`;
    },
  },

  methods: {
    changeBorder(user: IUser) {

      user['classProperty'] === 'border-none' ? user['classProperty'] = 'border-blue': user['classProperty'] = 'border-none'
      
      this.users = this.users.map((u: IUser) => u.id === user.id ? user : {...u, classProperty: 'border-none'})
    }
  },
});
</script>

<style scoped>
.cards {
  display: flex;
  border: 1px solid red;
  width: 90vw;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0.4em;
  box-sizing: border-box;
}

.card {
  margin: 0 auto;
}

img {
  width: 100%;
  height: 10rem;
}

.border-none {
  box-shadow: none;
  transition: .23s all ease-in-out;
}

.border-blue {
  box-shadow: 0px 0px 10px rgb(186, 186, 229);
  /* overflow: hidden; */
  transition: .29s all ease-in-out;
  border-radius: 10px;
}
</style>
