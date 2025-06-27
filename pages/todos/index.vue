<template>
  <div>
    <h1>All Todos</h1>
    <TodoList :todos="todos"/>
  </div>
</template>

<script lang="ts" setup>
const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)

</script>

<style scoped>

</style>