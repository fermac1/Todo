<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/todos">All Todos</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/todos/add/new">Add Todos</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>

</script>

<style scoped>
nav{
    background-color: #333;
    color: #ffffff;
    padding: 1rem;
}

ul{
    list-style: none;
    display: flex;
    gap: 1rem;
}

a{
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover{
    color: #ddd;
    text-decoration: underline;
}
</style>