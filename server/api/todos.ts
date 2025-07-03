import { defineEventHandler, readBody, getQuery } from "h3";

const todos = [
    {
        id: 1,
        title: 'Title 1',
        isCompleted: false,
        createdAt: new Date().toISOString()
    }
    
]

export default defineEventHandler(async (event) => {
    const { req, res } = event;

    if (req.method === 'GET') {
        return todos;
    }

    //Add new todo
    if (req.method === 'POST') {
        const newTodo = await readBody(event);
        todos.push(newTodo);
        return {
            value: newTodo,
            success: true,
            statusCode: 201
        
        };
    }

    //update existing todo
    if (req.method === 'PUT') {
        const updateTodo = await readBody(event);
        const todoIndex = todos.findIndex((todo) => todo.id === updateTodo.id)

        if (todoIndex !== -1) {
            todos[todoIndex] = updateTodo;
            return {
                value: updateTodo,
                success: true,
                statusCode: 200
            }
        }else {
            return {
                value: null,
                statusCode: 404
            }
        }
    }

    // delete existing todo
    // if (req.method === 'DELETE') {
    //     const { id } = await readBody(event);
    //     const todoIndex = todos.findIndex((todo) => todo.id === id)

    //     if (todoIndex !== -1) {
    //         todos.splice(todoIndex, 1);
    //         return {
    //             value: null,
    //             success: true,
    //             statusCode: 204
    //         }
    //     } else {
    //         return {
    //             value: null,
    //             statusCode: 404
    //         }
    //     }
    // }

    if (req.method === 'DELETE') {
        const { id } = getQuery(event); // ✅ Use query instead of readBody
        const parsedId = Number(id);
        console.log('Received ID:', id, 'Parsed ID:', parsedId);
        const todoIndex = todos.findIndex(todo => todo.id === parsedId);
        console.log('Matching todo index:', todoIndex);
        if (todoIndex !== -1) {
            todos.splice(todoIndex, 1);
            return {
                value: null,
                success: true,
                statusCode: 204
            };
        } else {
            return {
                value: null,
                statusCode: 404,
                success: false
            };
        }
    }

    return { error: 'invalid method' }
})