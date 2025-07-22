<template>
    <nav>
        <!-- <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/todos">All Todos</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/todos/add/new">Add Todos</NuxtLink>
            </li>
        </ul> -->
        
        <span>Welcome To Our Todo App!</span>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>

</script>

<style scoped>
nav{
    background-color: #333;
    color: #fff;
    padding: 1rem;
    margin: 0;
    width: 100vw; /* Force full viewport width */
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    box-sizing: border-box;
    overflow: hidden;
}

ul, span{
    list-style: none;
    display: flex;
    gap: 1rem;
}
ul{
    justify-content: flex-end;
    margin: 0;
    padding: 0;
}

a{
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover{
    color: #ddd;
    text-decoration: none;
}

/* Responsive styles */
@media (max-width: 600px) {
  ul {
    flex-direction: row;
    gap: 0.5rem;
    overflow-x: hidden;
  }

  nav {
    padding: 1rem 0.5rem;
  }
}
</style>