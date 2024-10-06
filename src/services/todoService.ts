import axiosClient from "./axiosClient.ts";

const todoService = {
    getAllTodo: async () => {
        const url = '/v1/getTodo';
        return await axiosClient.get(url);
    },
    addTodo: async (body: object) => {
        const url = '/v1/todo';
        return await axiosClient.post(url, body);
    },
    updateTodo: async (body: object) => {
        const url = '/v1/update-completed';
        return await axiosClient.post(url, body);
    },
    deleteTodo: async (id: string) => {
        const url = '/v1/delete';
        return await axiosClient.post(url, {_id: id});
    },
};

export default todoService;
