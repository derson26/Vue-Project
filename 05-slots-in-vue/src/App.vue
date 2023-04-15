<template>

<ButtonStyled>
    <template v-slot:before>
      <font-awesome-icon icon="fa-solid fa-user-secret" />
    </template>
  </ButtonStyled>

  <ButtonStyled>
    <template v-slot:after>
      <font-awesome-icon icon="fa-solid fa-user-secret" />
    </template>
  </ButtonStyled>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonStyled from './components/ButtonStyled.vue';

export default defineComponent({
  components: {
    ButtonStyled,
  }
})
</script>

<style scoped>

</style>
