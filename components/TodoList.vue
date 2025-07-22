<template>
    <div>
        <div class="no-todos" v-if="todos.length === 0"> No Todos</div>
        <ul>
          <!-- <li v-for="(todo, index) in todos" :key="index"> -->
           <li  v-for="(todo, index) in paginatedTodos"
            :key="todo.id">
            <span class="status-icon">
                <!-- {{ todo.isCompleted ? '✅' : '⏳' }} -->
                  <!-- {{ todo.isCompleted ? '✅' : <Icon name="eos-icons:hourglass" /> }} -->
                  <Icon v-if="todo.isCompleted" name="mdi:checkbox-marked"  class="icon completed-icon" />
                 <Icon v-else name="eos-icons:hourglass"  class="icon in-progress-icon" />
            </span>

            <NuxtLink :to="`/todos/${todo.id}`" class="todo-title">
                {{todo.title}}
            </NuxtLink>
              <!-- <span>{{ todo?.isCompleted ? 'Complete ' : 'In progress' }}</span> -->
                <NuxtLink :to="`/todos/edit/${todo?.id}`" class="edit-icon">
                    <Icon name="tdesign:edit" />
                </NuxtLink>
          </li>
   
        </ul>

        <!-- pagination -->
        <div v-if="totalPages > 1" class="pagination">
            <button @click="prevPage" :class="{ active: currentPage !== 1 }" :disabled="currentPage === 1">Prev</button>

            <button
                v-for="page in totalPages"
                :key="page"
                @click="goToPage(page)"
                :class="{ active: page === currentPage }"
            >
                {{ page }}
            </button>

            <button @click="nextPage" :class="{ active: currentPage !== totalPages }" :disabled="currentPage === totalPages">Next</button>
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
.no-todos {
  text-align: center;
  color: grey;
  margin-top: 2rem;
  font-size: 1.2rem;
}
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

.todo-title {
  flex: 1;
  text-align: left;
  color: #333;
  text-decoration: none;
  padding-left: 10px;
}

.todo-title:hover {
  text-decoration: none;
}


/* Completed: Green */
.completed-icon {
  color: #4CAF50; /* Material green */
}

/* In Progress: Amber/Orange */
.in-progress-icon {
  color: #FFA000; /* Material amber */
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

.pagination button:hover:not(.disabled):not(.active) {
  background-color: #f0f0f0;
}

/* Responsive styles */
@media (max-width: 600px) {
  li {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  li span {
    margin-top: 5px;
  }

  .pagination {
    gap: 5px;
  }

  .pagination button {
    font-size: 0.9rem;
    padding: 4px 8px;
  }
}
</style>