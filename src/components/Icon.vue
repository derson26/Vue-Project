<template>
    <i :class="iconClass" :style="{fontSize: sizeProp, color: colorProp}" @click="addAndRemoveFavorite()">    
      {{iconNameProp}}
    </i>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useStore } from 'vuex';
import { IUser, TColor, TIconClass, TIconName } from '../interfaces';

export default defineComponent({
  setup() {
    const store = useStore();
    return { store };
  },
  created () {
    this.setIconClass();
  },
  data() {
    return {
      iconClass: "material-symbols-outlined" as TIconClass,
    };
  },
  props: {
    sizeProp: {
      type: String,
      required: true,
    },
    iconNameProp: {
        type: String as PropType<TIconName>,
        required: true,
    },
    user: {
        type: Object as PropType<IUser>,
        required: false,
    },
    colorProp: {
        type: String as PropType<TColor>,
        required: true,
    },
  },
  methods: {
    addAndRemoveFavorite() {
      if (this.user) {
        
        if ( this.iconNameProp === "favorite" && this.iconClass === "material-symbols-outlined" ) {
          this.store.dispatch("actionAddToFavorite", this.user);
          this.iconClass = "material-symbols-rounded";
        } else if ( this.iconNameProp === "favorite" && this.iconClass === "material-symbols-rounded" ) {
          this.store.dispatch("actionRemoveFromFavorite", this.user);
          this.iconClass = "material-symbols-outlined";
        }

        if (this.iconNameProp === "close") {
          this.store.dispatch("actionRemoveFromFavorite", this.user);
        }
      }
    },
    setIconClass() {
        let favoriteListSize = this.store.getters.$favoriteSize;
        
        if (favoriteListSize > 0 && this.store.getters.$findUser(this.user)) {
          this.iconClass = "material-symbols-rounded";
        }
  
    },
  },
});
</script>

<style scoped>
.material-symbols-rounded {
  font-size: 2.5em;
}

.countFavorite {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
}

i, .countFavorite {
    cursor: pointer;
}
</style>