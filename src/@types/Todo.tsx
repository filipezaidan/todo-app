export interface ITodo {
    id: number;
    title: string;
    status: boolean;
}

export type TodoContextType = {
    todos: ITodo[];
    saveTodo: (title: string) => void;
};