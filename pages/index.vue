<template>
  <div class="container">
    <Banner />
    <br>
    <TodoList :todos="recentTodos"/>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
    layout: "default"
})
const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)

// const recentTodos = computed(()=>todos.value.slice(-3).reverse())
const recentTodos = computed(()=>todos.value)
</script>

<style scoped>
.container{
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  /* box-shadow: 0 0 5px rgba(0, 0, 0, 1); */
  margin: 20px auto;
  width: 700px;
}
</style>

<!-- <template>
  <div class="container">
    <h1>Todo App</h1>
    <p>Manage your tasks efficiently</p>
  </div>
</template>

<script lang="ts" setup>
 
</script>

<style scoped>
.container {
  margin: auto;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
} -->
<!-- </style> -->