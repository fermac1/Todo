<template>
  <div class="container">
    <h1>All Todos</h1>
    <TodoList :todos="todos"/>
  </div>
</template>

<script lang="ts" setup>
const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)

useHead({
  title: 'Nuxt - All Todos',
  meta: [
    { name: 'description', content: 'All Todos' },
    { name: 'keywords', content: 'Nuxt, Todos' }
  ],
  script: [
    
  ]
})

</script>

<style scoped>
.container{
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  /* box-shadow: 0 0 5px rgba(0, 0, 0, 1); */
  margin: 20px auto;
  max-width: 500px;
}

/* Responsive styles */
@media (max-width: 600px) {
  .container {
    max-width: 250px;
    width: 100%;
  }
}
</style>