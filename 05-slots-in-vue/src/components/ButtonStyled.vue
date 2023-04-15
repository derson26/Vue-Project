<template>
  <!-- <button class="primary">
    <slot />
    {{ text }}
  </button> -->

  <button class="primary">
    <!-- Add the style and icon you want using the String format -->
    <slot name="before"/>
    {{ text }}
    <slot name="after"/>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      default: 'Button name Defined',
    }
  }
})
</script>

<style scoped>
  .primary {
    background-color: #2d6cea;
    padding: 0.3rem 1em;
    color:aliceblue;
    border-radius: 5px;
    margin-left: 1em;
  }
</style>