<template>
  <button :class="['button-styled', color]">
    Button
    <span>Derson Ussuale</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type TColor = 'primary' | 'danger' | 'success';

export default defineComponent({
  props: {
    color: {
      type: String, // or [String, Number, Object]
      default: 'primary',
      // required: false
      validator: (value: TColor) => {
        return ['primary', 'danger', 'success'].includes(value)
      }
    },
    
  }
})
</script>

<style scoped>
  .button-styled {
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
  /* background-color: #2d6cea; */
}

.success {
  background-color: green;
}

.danger {
  background-color: red;
}

.primary {
  background-color: #2d6cea;
}
</style>