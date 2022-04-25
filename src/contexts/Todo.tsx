import { createContext, useState } from 'react';
import { ITodo, TodoContextType } from '../@types/Todo'

export const TodoContext = createContext<TodoContextType | null>(null);


function TodoProvider({ children }: any) {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = (title: string) => {
        const newTodo: ITodo = {
            id: Math.random(),
            title: title,
            status: false,
        };
        setTodos(prevState => [...prevState, newTodo]);
    }

    const delTodo = (id: number) => {
        let todosFilter = todos.filter((item) => item.id !== id)

        setTodos(todosFilter)
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, delTodo }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;