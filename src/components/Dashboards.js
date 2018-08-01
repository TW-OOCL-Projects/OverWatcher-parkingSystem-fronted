import React, { Component } from 'react';
import { Card, Col, Row,Progress } from 'antd';

export default class Dashboards extends Component{
    render(){

        return(
            <div>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="停车场A">
                            <Row>
                                <Col span={12}>
                                    <Progress type="circle" percent={75} />
                                </Col>
                                <Col span={12}>
                                    停车员：张三
                                </Col>
                            </Row>
                            <Col span={12}><b><br/>停车情况</b></Col>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="停车场B">
                            <Row>
                                <Col span={12}>
                                    <Progress type="circle" percent={75} />
                                </Col>
                                <Col span={12}>
                                    停车员：李四
                                </Col>
                            </Row>
                            <Col span={12}><b><br/>停车情况</b></Col>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="停车场C">
                            <Row>
                                <Col span={12}>
                                    <Progress type="circle" percent={75} />
                                </Col>
                                <Col span={12}>
                                    停车员：王五
                                </Col>
                            </Row>
                            <Col span={12}><b><br/>停车情况</b></Col>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="停车场A">
                            <Row>
                                <Col span={12}>
                                    <Progress type="circle" percent={75} />
                                </Col>
                                <Col span={12}>
                                    停车员：张三
                                </Col>
                            </Row>
                            <Col span={12}><b><br/>停车情况</b></Col>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="停车场B">
                            <Row>
                                <Col span={12}>
                                    <Progress type="circle" percent={75} />
                                </Col>
                                <Col span={12}>
                                    停车员：李四
                                </Col>
                            </Row>
                            <Col span={12}><b><br/>停车情况</b></Col>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="停车场C">
                            <Row>
                                <Col span={12}>
                                    <Progress type="circle" percent={75} />
                                </Col>
                                <Col span={12}>
                                    停车员：王五
                                </Col>
                            </Row>
                            <Col span={12}><b><br/>停车情况</b></Col>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}