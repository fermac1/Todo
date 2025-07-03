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
        async fetchTodos() {
            try {
                const { data, error } = await useFetch('/api/todos')               

                // if (error) {
                //     throw new Error('Failed to fetch todos')
                // }

                if (error.value) {
                    throw new Error(error.value.message || 'Failed to fetch todos');
                }

                if (data.value) {
                    this.todos = data.value;
                }
                
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        },


        async addTodo(todo: { id: number, title: string, description: string, isCompleted: boolean, createdAt: string })
        {
            try {
                const { data, error } = await useFetch('/api/todos', {
                    method: 'POST',
                    body: todo
                })               

                if (error) {
                    throw new Error('Failed to add todos')
                }

                if (data.value) {
                    this.todos.push(data.value);
                }
                
            } catch (error) {
                console.error('Error adding todos:', error);
            }

        },

        async updateTodo(updateTodo: { id: number, title: string, description: string, isCompleted: boolean, createdAt: string })
        {
            try {
                const { data, error } = await useFetch('/api/todos', {
                    method: 'PUT',
                    body: updateTodo
                })               

                // if (error) {
                //     throw new Error('Failed to update todos')
                // }
                if (error.value) {
                    throw new Error(error.value.message || 'Failed to update todos');
                }

                if (data.value) {
                    this.todos.push(data.value);
                }
                
            } catch (error) {
                console.error('Error updating todos:', error);
            }
        },

        async deleteTodo(id: number)
        {
            // this.todos = this.todos.filter((todo) => todo.id!==id)
            try {
                const { data, error } = await useFetch(`/api/todos?id=${id}`, {
                    method: 'DELETE',
                    // body: { id }
                })               

                if (error.value) {
                    throw new Error(error.value.message || 'Failed to delete todos');
                }
                
            } catch (error) {
                console.error('Error deleting todos:', error);
            }
        },

        async updateMarkCompletedStatus(id: number)
        {
            const index = this.todos.findIndex(todo => todo.id === id);

            if (index === -1) {
                return 'Error';
            }
            const updateTodo = {
                ...this.todos[index],
                isCompleted: !this.todos[index].isCompleted
            } 

            try {
                const { data, error } = await useFetch('/api/todos', {
                    method: 'PUT',
                    body: updateTodo
                })               

                if (error.value) {
                    throw new Error(error.value.message || 'Failed to update todos');
                }
                
            } catch (error) {
                console.error('Error updating todos:', error);
            }
            
            if (index !== -1) {
                this.todos[index].isCompleted = !this.todos[index].isCompleted;
            }
        }
    },

    // persist: {
    //     storage: {
    //         getItem: (key) => {
    //             return new SecureLS({
    //                 encodingType: 'des',
    //                 encryptionSecret: '@#987asdui@'
    //             }).get(key);
    //         },
    //         setItem: (key, value) => {
    //             return new SecureLS({
    //                 encodingType: 'des',
    //                 encryptionSecret: '@#987asdui@'
    //             }).set(key, value);
    //         }
    //     }
    // }
})