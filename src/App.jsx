import React from "react";
import { DownOutlined, SmileOutlined, UploadOutlined } from "@ant-design/icons";
import {
    Dropdown,
    Space,
    Checkbox,
    DatePicker,
    Form,
    Button,
    Input,
    Radio,
    Select,
    InputNumber,
    Upload,
    message,
    Image,
    List,
    Table,
} from "antd";
import dayjs from "dayjs";

const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
];

const dataSource = [
    {
        key: "1",
        name: "Mike",
        age: 32,
        address: "10 Downing Street",
    },
    {
        key: "2",
        name: "John",
        age: 42,
        address: "10 Downing Street",
    },
];

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
    },
];

const dateFormat = "YYYY/MM/DD";
const onFinish = (values) => {
    console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};
const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const props = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
        authorization: "authorization-text",
    },
    onChange(info) {
        if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const items = [
    {
        key: "1",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                1st menu item
            </a>
        ),
    },
    {
        key: "2",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            >
                2nd menu item (disabled)
            </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
    },
    {
        key: "3",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
            >
                3rd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: "4",
        danger: true,
        label: "a danger item",
    },
];

const onChangeCheckBox = (e) => {
    console.log(`checked = ${e.target.checked}`);
};
const onChangeTextNum = (value) => {
    console.log("changed", value);
};

const App = () => (
    <>
        <div>
            <Dropdown
                menu={{
                    items,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        Hover me
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
        <div>
            <Button type="text">Text Button</Button>
        </div>
        <div>
            <Checkbox onChange={onChangeCheckBox}>Checkbox</Checkbox>
        </div>
        <div>
            <DatePicker
                defaultValue={dayjs("2015/01/01", dateFormat)}
                format={dateFormat}
            />
        </div>
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
        <div>
            <Input placeholder="Basic usage" />
        </div>
        <div>
            <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                onChange={onChangeTextNum}
            />
        </div>
        <div>
            <Radio>Radio</Radio>
        </div>
        <div>
            <Select
                defaultValue="lucy"
                style={{
                    width: 120,
                }}
                onChange={handleChange}
                options={[
                    {
                        value: "jack",
                        label: "Jack",
                    },
                    {
                        value: "lucy",
                        label: "Lucy",
                    },
                    {
                        value: "Yiminghe",
                        label: "yiminghe",
                    },
                    {
                        value: "disabled",
                        label: "Disabled",
                        disabled: true,
                    },
                ]}
            />
        </div>
        <div>
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
        </div>
        <div>
            <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
        </div>
        <div>
            <List
                size="large"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
        </div>
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    </>
);
export default App;