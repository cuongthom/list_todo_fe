import {Button, Form, Input} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {TodoFormProps} from "../../interface";

export const TodoForm: React.FC<TodoFormProps> = ({form, onFinish, loading, clientReady}) => {


    return (
        <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
            <Form.Item
                name="todo"
                rules={[
                    {required: true, message: 'vui lòng nhập công việc'},
                    {max: 30, message: 'công việc không quá 30 chữ'}
                ]}
            >
                <Input prefix={<UserOutlined/>} placeholder="Nhập công việc"/>
            </Form.Item>
            <Form.Item shouldUpdate>
                {() => (
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={
                            loading ||
                            !clientReady ||
                            !form.isFieldsTouched(true) ||
                            !!form.getFieldsError().filter(({errors}) => errors.length).length
                        }
                    >
                        Thêm công việc
                    </Button>
                )}
            </Form.Item>
        </Form>
    );
};
