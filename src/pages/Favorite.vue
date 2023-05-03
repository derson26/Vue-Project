<template>
  <main
    class="box-border grid justify-center sm:justify-normal sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 xl:grid-cols-5 gap-2 p-2">
    
    <Card
      :borderStyle="borderStyle" 
      colorProp='red' 
      iconClassProp="material-symbols-outlined"
      v-for="user in listAllUserFavorite" 
      :user="user"
      iconNameProp="close" 
      />
  </main>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';
import Card from "../components/Card.vue";
import { IUser, TCustomBorder, } from "../interfaces";
import { useStore } from "vuex";

export default defineComponent({
    setup() {
      const store = useStore();
      
      return { store };
    },
  components: {
    Card,
  },
  create() {

  },
  data() {
    return {
      borderStyle: 'border-solid border-2 border-black-600' as TCustomBorder,
    };
  }, 
  computed: {
    listAllUserFavorite() {
      return this.store.getters.$GetAllFavoriteUsers as IUser[];
    },
    
  },
});
</script>

<style scoped></style>