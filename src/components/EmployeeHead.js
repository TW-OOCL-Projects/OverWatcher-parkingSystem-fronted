import React, { Component } from 'react';
import { Avatar } from 'antd';
import { Row, Col } from 'antd';

export default class EmployeeHead extends Component{
    render(){
        return(
            <Row>
                <Col span={8}></Col>
                <Col span={8}></Col>
                <Col span={8} style={{textAlign:"right"}}><Avatar style={{ backgroundColor: '#87d068' }} icon="user" /></Col>
            </Row>
        );
    }
}