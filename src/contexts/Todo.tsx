//Libraries
import { createContext, useState, useEffect } from 'react';
//Interfaces
import { ITodo, TodoContextType } from '../@types/Todo'

export const TodoContext = createContext<TodoContextType | {}>({});

function TodoProvider({ children }: any) {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [filterTodos, setFilterTodos] = useState<ITodo[]>(todos);

    const addTodo = (title: string) => {
        const newTodo: ITodo = {
            id: Math.random(),
            title: title,
            status: false,
        };
        setTodos(prevState => [...prevState, newTodo]);
    }

    const delTodo = (id: number) => {
        let todosFilter = todos.filter((todo) => todo.id !== id)
        setTodos(todosFilter)
    }

    const updateTodo = (id: number) => {
        todos.filter((todo) => {
            if (todo.id === id) {
                todo.status = !todo.status;
                setTodos([...todos]);
            }
        });
    };


    const filterTodo = (controller: string) => {
        let filter: ITodo[] = [];

        if (controller !== 'All') {
            if (controller === 'Active') {
                filter = todos.filter((todo) => todo.status === false)
            } else {
                filter = todos.filter((todo) => todo.status === true)
            }
            setFilterTodos(filter)
        } else {
            setFilterTodos(todos);
        }
    };

    const clearTodoCompleted = () => {
        let filter = todos.filter((todo) => todo.status !== true)
        setTodos(filter);
    }

    useEffect(() => {
        console.log(todos)
        setFilterTodos(todos)
    }, [todos])


    return (
        <TodoContext.Provider value={{
            todos,
            filterTodos,
            addTodo,
            delTodo,
            updateTodo,
            filterTodo,
            clearTodoCompleted,
            setFilterTodos,
            setTodos
        }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;