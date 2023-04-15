
import ButtonStyled from './components/ButtonStyled.vue';

<template>
  <ButtonStyled :user="user" color="primary"></ButtonStyled>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonStyled from "./components/ButtonStyled.vue";

export default defineComponent({
  components: {
    ButtonStyled,
  },
  data() {
    return {
      user: {
        name: 'Derson Ussuale',
        id: 1,
      }
    }
  }
  
});
</script>
<style scoped>
/* Child Styled */
  .button-styled ::v-deep(span)  {
    color: black;
  }
</style>
