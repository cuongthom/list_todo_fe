import {TodoListProps} from "../../interface";
import {Button} from "antd";

export const TodoList: React.FC<TodoListProps> = ({ todos, onComplete, onDelete, completed = false }) => {
    return (
        <div style={{ margin: "0 20px" }}>
            <h1>{completed ? "Công việc đã hoàn thành" : "Tất cả công việc"}</h1>
            <ul>
                {todos.filter((item) => item.completed === completed).map((item) => (
                    <li key={item._id}>
                        {item.todo}
                        {!completed && (
                            <Button style={{ margin: '0 20px' }} onClick={() => onComplete(item._id)}>
                                Hoàn thành
                            </Button>
                        )}
                        {completed && (
                            <Button style={{ margin: '0 20px' }} disabled>
                                Đã hoàn thành
                            </Button>
                        )}
                        <Button onClick={() => onDelete(item._id)}>Xóa</Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};