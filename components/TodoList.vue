<template>
    <div>
        <div v-if="todos.length === 0"> No Todos</div>
        <ul>
          <!-- <li v-for="(todo, index) in todos" :key="index"> -->
           <li  v-for="(todo, index) in paginatedTodos"
        :key="todo.id">
            <NuxtLink :to="`/todos/${todo.id}`">
                {{todo.title}}
            </NuxtLink>
              <span>{{ todo?.isCompleted ? 'Complete ' : 'In progress' }}</span>
          </li>
   
        </ul>

        <!-- pagination -->
        <div v-if="totalPages > 1" class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">Prev</button>

            <button
                v-for="page in totalPages"
                :key="page"
                @click="goToPage(page)"
                :class="{ active: page === currentPage }"
            >
                {{ page }}
            </button>

            <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>

    </div>
</template>

<script lang="ts" setup>
// import type { PropType } from 'vue';

const props = defineProps({
    todos: {
        type: Array as PropType<Array < { id: number, title: string, isCompleted: boolean } >>
        }
})

    const currentPage = ref(1)
const pageSize = 5

const totalPages = computed(() => Math.ceil(props.todos.length / pageSize) || Math.ceil(props.todos.length / pageSize))

const paginatedTodos = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return props.todos.slice(start, start + pageSize)
})

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

function goToPage(page: number) {
  currentPage.value = page
}
</script>

<style scoped>
ul{
    list-style: none;
    padding: 0;
}
li{
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
}
li:hover{
    background-color: #f1f1f1;
}

.pagination {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
}
.pagination button {
  padding: 6px 12px;
  border: none;
  background-color: #eee;
  cursor: pointer;
  border-radius: 4px;
}
.pagination button.active {
  background-color: #333;
  color: #fff;
}
.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>