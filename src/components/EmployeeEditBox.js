import React from 'react';
import {Form, Input, Button, Select, message} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

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
    constructor(props){
        super(props)
        this.state={
            employee:props.employeeMsg
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log("=== 修改后的员工信息 ===")
            console.log(values)
             this.props.editConfirm(this.props.employeeMsg.id,values,this.success)
            if (!err) {
                console.log('姓名：'+values.name+"\n职务："+values.role+"\n邮箱："+values.email+"\n电话："+values.phone+"用户"+values.username);
            }
        });
    };
    success=()=>{
        this.props.close()
        message.success('修改成功', 1);
    }
    render() {

        let {name,username,role,email,phone}=this.state.employee
        // console.log("=== role信息 ===")
        // console.log(this.state.employee)

         const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem
                    {...formItemLayout}
                    label="姓名"
                >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '用户名不能为空!' }],
                        initialValue:name
                    })(
                        <Input maxLength={20} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="用户名"
                >
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '用户名不能为空!' }],
                        initialValue:username
                    })(
                        <Input maxLength={20}/>
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
                        initialValue:role
                    })(
                        /*<Input type="text" placeholder="请输入职务" />*/
                        <Select defaultValue="11">
                            <Option value="employee">员工</Option>
                            <Option value="manager">经理</Option>
                        </Select>
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
                        initialValue:email
                    })(
                        <Input type="email" maxLength={20}/>
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
                        initialValue:phone
                    })(
                        <Input type="phone" maxLength={20}/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} style={{textAlign:"right"}}>
                    <Button type="primary" htmlType="submit">确定</Button>
                </FormItem>
            </Form>
        );
    }
}

const EditEmployeeBox = Form.create()(NormalLoginForm);

export default EditEmployeeBox;