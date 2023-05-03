<template>
  <main
    class="box-border grid justify-center sm:justify-normal sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 xl:grid-cols-5 gap-2 p-2"
  >
    <Card
      v-for="user in listAllUser"
      :borderStyle="borderStyle" 
      colorProp="red" 
      iconNameProp="favorite"
      :user="user"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "../components/Card.vue";
import { IUser, TCustomBorder, TIconClass } from "../interfaces";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    return { store };
  },
  components: {
    Card,
  },
  data() {
    return {
      iconClass: 'material-symbols-outlined' as TIconClass,
      borderStyle: 'border-solid border-2 border-black-600' as TCustomBorder,
    }
  },
  created() {
    this.store.dispatch("fetchUsers");


  },
  computed: {
    listAllUser() {
      return this.store.getters.$GetAllUsers as IUser[];
    },
    setIconClass() {
      return (user: IUser) => {
        let favoriteListSize = this.store.getters.$favoriteSize;
        // this.store.getters.$findUser(user);
        console.log(user, this.store.getters.$findUser(user))
        return 'material-symbols-outlined'
      }
    }
  },
});
</script>

<style scoped></style>