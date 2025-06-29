<template>
    <div>
        <h2>Error! {{ error }}</h2>
        <button @click="handleError">Clear</button>
    </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';
const props = defineProps({
    error: Object as () => NuxtError
})

const handleError = () => {
    clearError({ redirect: '/' })
}
</script>