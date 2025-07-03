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
    {
      innerHTML: 'console.log("All Todos Page")'
    }
  ]
})

onMounted(async() => {
  await todoStore.fetchTodos()
})

</script>

<style scoped>

</style>