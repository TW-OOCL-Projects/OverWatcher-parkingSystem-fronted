import React, { Component } from 'react';
import { Icon, Input, Button,Col,Card,message } from 'antd';
import axios from "axios";
import "../bubble.css";

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.userName=React.createRef();
        this.pwd=React.createRef();

    }
    getEmployees(e){
        let inputUser = this.userName.current.input.value;
        let inputPwd = this.pwd.current.input.value;
        if(inputUser+inputPwd===""){
            message.error('用户名或密码不能为空！',1);
        }else{
            axios.post('http://localhost:9090/auth/login', {
                "username":inputUser,
                "password":inputPwd})
                .then((response) => {
                    console.log(response);
                    this.props.history.push('/Employees')
                }).catch(function (error) {
                message.error('用户名或密码错误！',1);
                console.log(error);
            });
        }
    }
    render() {
        return (
            <div>
                <div className="search-bg hero" style={{marginBottom:100}}>
                    <div id="stars" className=""></div>
                    <div id="stars2" className=""></div>
                    <div id="stars3" className=""></div>
                </div>
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
