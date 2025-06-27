<template>
  <TodoForm  :todo="todo" :isEdit="isEdit"/>
</template>

<script lang="ts" setup>
  const route = useRoute();
  const todoStore = useTodoStore()
  const { todos } = storeToRefs(todoStore)

  const isEdit = computed(() => route.params.action === 'edit' );

  const todo = ref({
    id: 0,
    title: '',
    description: '',
    isCompleted: false,
    createdAt: new Date().toISOString()
  })

  onMounted(() => {
    if(isEdit.value) {
      const todoId = Number(route.params.type);
      const foundTodo = todos?.value.find((t) => t.id === todoId);

      if(foundTodo){
        todo.value = {...foundTodo}
      }
    }
  });
</script>

<style scoped>

</style>