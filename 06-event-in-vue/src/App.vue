<template>
  <Button @passingUsers="action($event)"></Button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from './components/Button.vue';

type IUser = {
  name: string,
  id: number,
}

export default defineComponent({
  components: {
    Button,
  },

  methods: {
    action(event: IUser) {
      console.log(event)
    }
  }
})
</script>

<style scoped></style>