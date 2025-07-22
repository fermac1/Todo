<template>
  <div class="page-wrapper">
    <div class="container">
      <Banner />
      <br />
      <TodoList :todos="recentTodos" />
    </div>

    <NuxtLink to="/todos/add/new" class="add-icon">
      <Icon name="tdesign:add" class="add-icon-inner" />
      <span class="icon-label">Add Todo</span>
    </NuxtLink>
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
.page-wrapper {
  overflow-x: hidden; /* Removes horizontal scroll bar */
  position: relative;
}

.container{
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  /* box-shadow: 0 0 5px rgba(0, 0, 0, 1); */
  margin: 20px auto;
  width: 500px;
}
.add-icon {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: #fff;
  border-radius: 50%;
  padding: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  cursor: pointer;

  /* For label positioning */
  position: fixed;
}

/* Icon size and color */
.add-icon-inner {
  font-size: 32px;
  color: #007bff;
  flex-shrink: 0;
}

/* Label styles */
.icon-label {
  position: fixed;
  right: 20px;
  bottom: 80px; /* below the icon (48px height + 20px padding + some space) */
  background: #007bff;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  user-select: none;
  z-index: 1001;
}

/* Show label on hover */
.add-icon:hover + .icon-label,
.add-icon:hover .icon-label {
  opacity: 1;
  pointer-events: auto;
}

/* Because label is inside the link, we want it to show on hover of add-icon */
.add-icon:hover .icon-label {
  opacity: 1;
  pointer-events: auto;
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