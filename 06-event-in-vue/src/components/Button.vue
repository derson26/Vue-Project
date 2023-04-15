<template>
  <button v-on:click.once="$emit('passingUsers', users)">button</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      users: {
        name: "Derson Ussuale",
        id:1,
      }
    }
  }
})
</script>

<style scoped></style>