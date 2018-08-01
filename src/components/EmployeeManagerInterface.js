import React, { Component } from 'react';
import MenuList from './MenuList';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Employees from './Employees';
import { Layout, Menu, Col,Avatar,Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export default class EmployeeManagerInterface extends Component{
    render(){
        return(
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '64px' }}
                >
                    <Col span={8} offset={2} style={{color:"#fff",fontSize:"1.5em",textAlign:"left"}}>
                        Welcome to OverWatch Parking System!
                    </Col>
                    <Col span={12} style={{textAlign:"right"}}><Avatar style={{ backgroundColor: '#87d068' }} icon="user" /></Col>
                </Menu>
            </Header>
            <Content style={{ padding: '50px 150px' }}>
                <BrowserRouter>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider width={200} style={{ background: '#fff' }}>
                            {/*<MenuList/>*/}
                            <Menu defaultSelectedKeys={['1']} >
                                    <Menu.Item key="1" >
                                        <Link to="/Employees">
                                            <Icon type="form" />员工管理
                                        </Link>
                                    </Menu.Item>


                                    <Menu.Item key="2" >
                                        <Link to="/ParkingLots">
                                            <Icon type="form" />停车场管理
                                        </Link>
                                    </Menu.Item>
                                <Menu.Item key="3" ><Icon type="form" />停车员管理</Menu.Item>
                                <Menu.Item key="4" ><Icon type="form" />停车场Dashboard</Menu.Item>
                                <Menu.Item key="5" ><Icon type="form" />订单管理</Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Route exact path="/Employees" component={Employees} />
                            <Route path="/ParkingLots" component={About} />
                            {/*<Employees/>*/}
                        </Content>
                    </Layout>
                </BrowserRouter>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Parking System ©2018 Created by OOCL.ITA.OverWatcher
            </Footer>
        </Layout>
        );
    }
}
const About = () => (
    <div>
        <h2>About</h2>
    </div>
);