import React from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem
                    {...formItemLayout}
                    label="姓名"
                >
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '用户名不能为空!' }],
                    })(
                        <Input placeholder="请输入姓名" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="邮箱"
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: '请输入有效邮箱地址！',
                        }, {
                            required: true, message: '邮箱不能为空!',
                        }],
                    })(
                        <Input type="email" placeholder="请输入邮箱" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="电话"
                >
                    {getFieldDecorator('phone', {
                        rules: [{
                            required: true, message: '电话号码不能为空!',
                        }],
                    })(
                        <Input type="email" placeholder="请输入电话号码" />
                    )}
                </FormItem>
                <FormItem>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;