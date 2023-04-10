
<template>
  <!-- List all Todos -->
  <div v-for=" todo, index in doneTodos" :key="index">
    <p>{{todo}} <button @click="changeSingleTodo(todo)">change done</button></p>
  </div>
  
  <!-- Change all done properties to true -->
  <button @click="changeAll">Change All Done to True</button>

</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  interface ITodos { 
    text: string,
    done: boolean,
  }

  export default defineComponent( {
    data() {
      return {
        todos: [] as ITodos[]
      }
    },
    // created
    created(){
      this.todos = [
        { text: 'Studying Typescript', done: true },
        { text: 'washing a dish', done: false },
        { text: 'Learning Nuxt.js', done: true }
      ]
    },
    // Computed
    computed: {
      doneTodos(): ITodos[] {
        return this.todos.filter( todo => todo.done);
      }
    },
    // watch
    watch: {
      todos(newTodo: ITodos[]){
        const verify = newTodo.every(({done}) => done == true);
        if(verify) alert(`All Todos are checked`);
      }
    },
    // methods
    methods: {
      changeSingleTodo(pTodo: ITodos): void {
        this.todos = this.todos.map( todo => todo.text === pTodo.text ? {...todo, done: !pTodo.done } : {...todo})
      },
      changeAll() {
        this.todos = this.todos.map(({ text }) => { return {text, done: true}})
      }
    },
  })
  
</script>

<style scoped></style>
