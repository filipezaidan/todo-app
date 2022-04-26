export interface ITodo {
    id: number;
    title: string;
    status: boolean;
}

export type TodoContextType = {
    todos: ITodo[];
    filterTodos: ITodo[];
    addTodo: (title: string) => void;
    delTodo: (id: number) => void;
    updateTodo: (id: number) => void;
    filterTodo: (controller: string) => void;
    clearFilter: () => void;
};