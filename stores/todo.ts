import { defineStore } from 'pinia'
import SecureLS from 'secure-ls'

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [] as Array<{
            id: number,
            title: string,
            description: string,
            isCompleted: boolean,
            createdAt: string
        }>,
    }),
     
    getters: {
        getTodoById:(state)=>(id:number)=>state.todos.find((todo)=>todo.id === id)
    }, 

    actions: {
        addTodo(todo: { id: number, title: string, description: string, isCompleted: boolean, createdAt: string })
        {
            this.todos.push(todo);
        },

        updateTodo(updateTodo: { id: number, title: string, description: string, isCompleted: boolean, createdAt: string })
        {
            const index = this.todos.findIndex((todo) => todo.id === updateTodo.id)

            if (index!== -1) {
                this.todos[index] = updateTodo;
            }
        },

        deleteTodo(id: number)
        {
            this.todos = this.todos.filter((todo) => todo.id!==id)
        },

        updateMarkCompletedStatus(id: number)
        {
            const index = this.todos.findIndex(
                (todo) => todo.id === id
            )
            
            if (index !== -1) {
                this.todos[index].isCompleted = !this.todos[index].isCompleted;
            }
        }
    },

    persist: {
        storage: {
            getItem: (key) => {
                return new SecureLS({
                    encodingType: 'des',
                    encryptionSecret: '@#987asdui@'
                }).get(key);
            },
            setItem: (key, value) => {
                return new SecureLS({
                    encodingType: 'des',
                    encryptionSecret: '@#987asdui@'
                }).set(key, value);
            }
        }
    }
})