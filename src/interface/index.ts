export interface Todo {
    _id: string;
    todo: string;
    completed: boolean;
}

export interface TodoFormProps {
    onFinish: (values: { todo: string }) => Promise<void>;
    loading: boolean;
    clientReady: boolean;
}

export interface TodoListProps {
    todos: Todo[];
    onComplete: (id: string) => Promise<void>;
    onDelete: (id: string) => Promise<void>;
    completed?: boolean;
}