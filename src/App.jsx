import React from 'react';
import {
    Checkbox,
    Form,
    Input
} from 'antd';
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

                <Form.Item label="Input" name="input">
                    <Input />
                </Form.Item>
            </Form>
            <div className="max-w-md mx-auto mt-8 w-full h-350 ">
                <form
                    className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-grey-500"
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="input"
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                        />
                    </div>
                    
                    
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="checkbox"
                        >
                            Checkbox
                        </label>
                        <input
                            className="mr-2 leading-tight"
                            id="checkbox"
                            type="checkbox"
                            name="checkbox"
                        />
                    </div>
                    
                </form>
            </div>
        </>
    );
};
export default App ;
