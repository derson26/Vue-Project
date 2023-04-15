
import ButtonStyled from './components/ButtonStyled.vue';

<template>
  <ButtonStyled color="danger"></ButtonStyled>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonStyled from "./components/ButtonStyled.vue";

export default defineComponent({
  components: {
    ButtonStyled,
  },
});
</script>
<style scoped>
/* Child Styled */
  .button-styled ::v-deep(span)  {
    color: black;
  }
</style>
