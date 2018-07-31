import React, { Component } from 'react';
import { Icon, Input, Button,Col,Card } from 'antd';
import { History } from 'react-router';
export default class LoginForm extends React.Component {
    enterEmployeeTable(e){
        this.props.history.push('/Employees')
    }
    render() {
        return (
            <div style={{margin:100}}>
                <Col span={6} offset={9}>
                    <Card title="Login In" style={{boxShadow:"#ccc 5px 5px 20px 5px"}}>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               placeholder="请输入用户名"/>
                        <br/><br/>
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password"
                               placeholder="请输入密码" />
                        <br/><br/>
                        <Button type="primary" htmlType="submit" onClick={e => this.enterEmployeeTable()}
                            className="login-form-button" style={{width:"100%"}}>登录</Button> 
                    </Card>
                </Col>
            </div>
        );
    }
}
