<template>
  <header>
    <nav class="flex w-full px-1 md:px-4 lg:px-6 items-center h-16 border-2">
      <router-link to="/">
        <h3>Users</h3>
      </router-link>
      <span class="flex-1"></span>

      <!-- Icon component -->
      <router-link to="/favorite">
        <div class="icon_box">
          <Icon id="icon" iconNameProp="favorite" colorProp="red"  :iconClassProp="iconClass" sizeProp="1.5em"/>
          <span id="countFavorite" :style="{color: 'red'}" >{{ countFavorites() }}</span>
        </div>
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import Icon from "../components/Icon.vue";
import { TIconClass } from "../interfaces";

export default defineComponent({
  setup() {
    const store = useStore();
    const iconClass: TIconClass =  'material-symbols-outlined';
    const countFavorite = computed(()=>store.getters.$favoriteSize);

    return { store, countFavorite, iconClass };
  },
  components: {
    Icon,
  },
  methods: {
    countFavorites() {
      return this.countFavorite
    }
  }
});
</script>

<style scoped>
  .icon_box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }

  

</style>