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
class NewParkingLotForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('名称：'+values.name+"\n初始车位："+values.size);
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
                    label="名称"
                >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '停车场名称不能为空!' }],
                    })(
                        <Input placeholder="请输入停车场名称" maxLength={20}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="初始容量"
                >
                    {getFieldDecorator('size', {
                        rules: [{
                            required: true, message: '初始容量不能为空!',
                        }],
                    })(
                        <Input type="number" placeholder="请输入初始容量" />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} style={{textAlign:"right"}}>
                    <Button type="primary" htmlType="submit">确定添加</Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedParkingLotForm = Form.create()(NewParkingLotForm);

export default WrappedParkingLotForm;