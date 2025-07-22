<template>
  <form @submit.prevent="handleSubmit()">
    <div>
        <h3>{{ isEdit ? 'Edit Todo' : 'Create Todo' }}</h3>
    </div>
    <div>
        <label for="title">Title</label>
        <input type="text" id="title" v-model="form.title" required/>
    </div>
    <div>
        <label for="description">Description</label>
        <textarea type="text" id="description" v-model="form.description" required/>
    </div>
    <button type="submit" class="btn-success">{{ isEdit ? 'Update' : 'Add' }}</button>
  </form>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
const router = useRouter()
const todoStore = useTodoStore();

const props = defineProps({
    todo: {
        type: Object as PropType<{ id: number, title: string, description: string, isCompleted: boolean, createdAt: string }>,
        required: true,
    },
    isEdit: {
        type: Boolean as PropType<boolean>,
        required: true,
    }
});

const form = ref({ ...props.todo })

const handleSubmit = () => {
    if (props.isEdit) {
        todoStore.updateTodo(form.value)
    } else {
        form.value.id = Date.now();
        todoStore.addTodo(form.value)
    }

    router.push(`/todos/${form.value.id}`);
}

watch(() => props.todo, (newTodo) => {
    form.value = newTodo
})
</script>

<style scoped>
form{
    max-width: 350px;
    background-color: #fff;
    padding: 20px;
    margin: 20px auto;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 1);
}

div{
    margin-bottom: 10px;
}
div h3{
    text-align: center;
}
label{
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
}

input, textarea {
    width: 100%;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
button {
    border-radius: 4px;
    width: 100%;
    background-color: #333;
}

/* Responsive styles */
@media (max-width: 600px) {
  form {
    max-width: 250px;
    width: 100%;
  }
}
</style>