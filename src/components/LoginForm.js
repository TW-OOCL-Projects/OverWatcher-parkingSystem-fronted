import React, { Component } from 'react';
import { Icon, Input, Button,Col,Card } from 'antd';
import axios from "axios";

export default class LoginForm extends Component {
    constructor(props){
        super(props)
        this.userName=React.createRef();
        this.pwd=React.createRef();

    }
    getEmployees(e){
        axios.post('http://localhost:9090/auth/login', {
            "username":this.userName.current.input.value,
            "password":this.pwd.current.input.value})
            .then((response) => {
                console.log(response);
                this.props.history.push('/Employees')
            }).catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return (
            <div style={{margin:100}}>
                <Col span={6} offset={9}>
                    <Card title="Login In" style={{boxShadow:"#ccc 5px 5px 20px 5px"}}>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               placeholder="请输入用户名"
                        ref={this.userName}/>
                        <br/><br/>
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password"
                               placeholder="请输入密码"
                        ref={this.pwd}/>
                        <br/><br/>
                        <Button type="primary" htmlType="submit" onClick={e => this.getEmployees()}
                            className="login-form-button" style={{width:"100%"}}>登录</Button> 
                    </Card>
                </Col>
            </div>
        );
    }
}
