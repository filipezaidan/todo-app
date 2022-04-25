import { createContext, useState } from 'react';
import { ITodo, TodoContextType } from '../@types/Todo'
export const TodoContext = createContext<TodoContextType | null>(null);


function TodoProvider({ children }: any) {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const saveTodo = (title: string) => {
        const newTodo: ITodo = {
            id: Math.random(),
            title: title,
            status: false,
        };
        setTodos(prevState => [...prevState, newTodo]);
    }

    return (
        <TodoContext.Provider value={{ todos, saveTodo }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;