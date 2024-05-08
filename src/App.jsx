import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Cascader,
    Checkbox,
    ColorPicker,
    DatePicker,
    TimePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Slider,
    Switch,
    TreeSelect,
    Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const App = () => {
    return (
        <>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item label="Checkbox" name="checkbox" valuePropName="checked">
                    <Checkbox>Checkbox</Checkbox>
                </Form.Item>

                <Form.Item label="Radio" name="radio">
                    <Radio.Group>
                        <Radio value="apple" name="apple"> Apple </Radio>
                        <Radio value="pear" name="pear"> Pear </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="Input" name="input">
                    <Input />
                </Form.Item>

                <Form.Item label="Select" name="select">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="TreeSelect">
                    <TreeSelect
                        treeData={[
                            {
                                title: 'Light',
                                value: 'light',
                                children: [
                                    {
                                        title: 'Bamboo',
                                        value: 'bamboo',
                                    },
                                ],
                            },
                        ]}
                    />
                </Form.Item>

                <Form.Item label="Cascader">
                    <Cascader
                        options={[
                            {
                                value: 'zhejiang',
                                label: 'Zhejiang',
                                children: [
                                    {
                                        value: 'hangzhou',
                                        label: 'Hangzhou',
                                    },
                                ],
                            },
                        ]}
                    />
                </Form.Item>

                <Form.Item label="DatePicker" name="datePicker">
                    <DatePicker />
                </Form.Item>

                <Form.Item label="TimePicker" name="timePicker">
                    <TimePicker />
                </Form.Item>

                <Form.Item label="TextArea">
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item label="Switch" valuePropName="checked">
                    <Switch />
                </Form.Item>

                <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload action="/upload.do" listType="picture-card">
                        <button
                            style={{
                                border: 0,
                                background: 'none',
                            }}
                            type="button"
                        >
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </button>
                    </Upload>
                </Form.Item>

                <Form.Item label="Button">
                    <Button>Button</Button>
                </Form.Item>

                <Form.Item label="Slider">
                    <Slider />
                </Form.Item>

                <Form.Item label="ColorPicker">
                    <ColorPicker />
                </Form.Item>
            </Form>
        </>
    );
};
export default App ;