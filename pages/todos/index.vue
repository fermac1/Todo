<template>
  <div>
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

</style>