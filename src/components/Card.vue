<template>
  <!-- Card -->
  <div
    v-if="user"
    :class="[borderStyle, 'p-1 relative w-96 sm:w-auto', 'hover:drop-shadow', 'transition-all ease-in-out duration-100']">
    <figure>
      <img :src="user.avatar" :alt="user.first_name + 'picture'" class="rounded-full w-40 h-40"/>
      <figcaption>{{ user.first_name }} {{ user.last_name }}</figcaption>
    </figure>

    <!-- Icon Component inside card-->
    <Icon :user="user" :colorProp="colorProp" :iconNameProp="iconNameProp" sizeProp="1.5em" id="icon" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Icon from "../components/Icon.vue";
import { TColor, IUser, TCustomBorder, TIconName, TIconClass } from "../interfaces";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    return { store };
  },
  components: {
    Icon,
  },
  data() {
    return {
      iconClass: "material-symbols-outlined" as TIconClass,
    };
  },
  props: {
    user: {
      type: Object as PropType<IUser>,
      required: true,
    },
    colorProp: {
      type: String as PropType<TColor>,
      required: true,
    },
    iconNameProp: {
      type: String as PropType<TIconName>,
      required: true,
    },
    borderStyle: {
      type: String as PropType<TCustomBorder>,
      required: true,
    },
  },
});
</script>
    
<style scoped>
#icon {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>