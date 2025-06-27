<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
        <NuxtLink :to="`/todos/${todo.id}`">{{todo.title}}</NuxtLink>
        <span>{{ todo.isCompleted}}</span>
    </li>
    <!-- <li>
        <NuxtLink :to="`/todos/${1}`">{{'Title 2'}}</NuxtLink>
        <span>{{ 'not completed' }}</span>
    </li>
    <li>
        <NuxtLink :to="`/todos/${1}`">{{'Title 3'}}</NuxtLink>
        <span>{{ 'completed' }}</span>
    </li> -->
  </ul>
</template>

<script lang="ts" setup>
// import type { PropType } from 'vue';

defineProps({
    todos: {
        type: Array as PropType<Array < { id: number, title: string, isCompleted: boolean } >>
        }
    })
</script>

<style scoped>
ul{
    list-style: none;
    padding: 0;
}
li{
    margin-bottom: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #f9f9f9;
}
</style>