<template>

  <ul v-show="show">
    <li>{{ user.id }}</li>
    <li>{{ user.name }}</li>
  </ul>

  <button :class="['button-styled', color]" @click="f_show">
    Button
    <span>Derson Ussuale</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

type TUser = {
  name: String,
  id: number
}

type TColor = 'primary' | 'danger' | 'success';

export default defineComponent({
  data() {
    return {
      show: true,
    }
  },
  props: {
    color: {
      type: String, // or [String, Number, Object]
      default: 'primary',
      // required: false
      validator: (value: TColor) => {
        return ['primary', 'danger', 'success'].includes(value)
      }
    },
    user: {
      type: Object as PropType<TUser>,
      required: true,
    }
  },
  methods: {
    f_show() {
      this.show = !this.show
    }
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