import {useEffect, useState} from 'react';
import './App.css';
import todoService from "./services/todoService";
import toast from "react-hot-toast";
import {Todo} from "./interface";
import {TodoForm} from "./components/form/TodoForm.tsx";
import {TodoList} from "./components/item/ListUl.tsx";
import {Form} from "antd";


function App() {
    const [loading, setLoading] = useState<boolean>(false);
    const [clientReady, setClientReady] = useState<boolean>(false);
    const [todos, setTodos] = useState<Todo[]>([]);
    const [form] = Form.useForm();

    const onFinish = async (values: { todo: string }) => {
        try {
            setLoading(true);
            await todoService.addTodo({todo: values.todo, completed: false});
            toast.success("Đã thêm công việc");
            getAllTodo();
            form.resetFields()
        } catch (err) {
            console.log(err);
            toast.error(`${values.todo} đã có`)
        } finally {
            setLoading(false);
        }
    };

    const getAllTodo = async () => {
        try {
            setLoading(true);
            const res = await todoService.getAllTodo();
            setTodos(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const completedTodo = async (id: string) => {
        if (!id) {
            toast.error("không tìm thấy id");
            return;
        }
        try {
            setLoading(true);
            await todoService.updateTodo({_id: id, completed: true});
            toast.success("Hoàn thành công việc");
            getAllTodo();
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const deleteTodo = async (id: string) => {
        if (!id) {
            toast.error("không tìm thấy id");
            return;
        }
        try {
            setLoading(true);
            await todoService.deleteTodo(id);
            toast.success("Xóa thành công");
            getAllTodo();
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        setClientReady(true);
        getAllTodo();
    }, []);
    return (
        <div className="form-container">
            <TodoForm form={form} onFinish={onFinish} loading={loading} clientReady={clientReady}/>
            <div style={{display: 'flex'}}>
                <TodoList todos={todos} onComplete={completedTodo} onDelete={deleteTodo}/>
                <TodoList todos={todos} onComplete={completedTodo} onDelete={deleteTodo} completed/>
            </div>
        </div>
    );
}

export default App;