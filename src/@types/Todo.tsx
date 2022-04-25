export interface ITodo {
    id: number;
    title: string;
    status: boolean;
}

export type TodoContextType = {
    todos: ITodo[];
    addTodo: (title: string) => void;
    delTodo: (id: number) => void;
};