import React from 'react';
import { Form, Input,Button } from 'antd';

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
                console.log('姓名：'+values.userName+"\n职务："+values.role+"\n邮箱："+values.email+"\n电话："+values.phone);
                this.props.createEmployee(values);
                this.props.hideModal();
                this.props.form.resetFields()
            }
        });
    };

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
                        <Input placeholder="请输入姓名" maxLength={20}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="职务"
                >
                    {getFieldDecorator('role', {
                        rules: [{
                            required: true, message: '职务不能为空!',
                        }],
                    })(
                        <Input type="text" placeholder="请输入职务" />
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
                        <Input type="email" placeholder="请输入邮箱" maxLength={20}/>
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
                        <Input type="phone" placeholder="请输入电话号码" maxLength={20}/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} style={{textAlign:"right"}}>
                    <Button type="primary" htmlType="submit">确定</Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;