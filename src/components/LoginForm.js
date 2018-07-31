import React, { Component } from 'react';
import { Icon, Input, Button,Col } from 'antd';

export default class NormalLoginForm extends React.Component {

    render() {
        return (
            <div style={{margin:100}}>
                <Col span={6} offset={9}>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                           placeholder="请输入用户名" span={4}/>
                    <br/><br/>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password"
                           placeholder="请输入密码" />
                    <br/><br/>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{width:"100%"}}>登录</Button>
                </Col>
            </div>
        );
    }
}
