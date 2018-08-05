import React, {Component} from 'react';
import {Button, Card, Col, Icon, Input, message} from 'antd';
import axios from "axios";
import "../bubble.css";
import employeesApi from "../API/EmployeesApi";
import parkingLotApi from '../API/ParkingLotsApi'
import DashBoardsApi from '../API/DashBoardsApi'
import parkingBoyApi from '../API/ParkingBoysApi'
import order from '../API/orderApi'
import store from '../index'

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
                    if(response.data.msg!=="true"){
                        message.error(response.data.msg,1);
                    }else{
                        window.localStorage.token = response.data.token;
                        window.localStorage.roles = response.data.roles;
                        employeesApi.init(store.dispatch);
                        parkingLotApi.init(store.dispatch);
                        parkingBoyApi.init(store.dispatch);
                        DashBoardsApi.init(store.dispatch);
                        order.init(store.dispatch);
                        this.props.history.push('/manager/employees')
                    }
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
                    <div id="stars" className=""/>
                    <div id="stars2" className=""/>
                    <div id="stars3" className=""/>
                </div>
                <Col span={6} offset={9}>
                    <Card title="Login In" style={{boxShadow:"#ccc 5px 5px 20px 5px"}} className="login-box animated bounceIn">
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
