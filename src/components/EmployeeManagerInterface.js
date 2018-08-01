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
                                    <Link to="/employees"><Icon type="form" />员工管理</Link>
                                </Menu.Item>
                                <Menu.Item key="2" >
                                    <Link to="/parkinglots"><Icon type="form" />停车场管理</Link>
                                </Menu.Item>
                                <Menu.Item key="3" >
                                    <Link to="/parkingboys"><Icon type="form" />停车员管理</Link>
                                </Menu.Item>
                                <Menu.Item key="4" >
                                    <Link to="/dashboards"><Icon type="form" />停车场Dashboard</Link>
                                </Menu.Item>
                                <Menu.Item key="5" >
                                    <Link to="/orders"><Icon type="form" />订单管理</Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Route exact path="/employees" component={Employees} />
                            <Route path="/parkinglots" component={ParkingLots} />
                            <Route path="/parkingboys" component={ParkingBoys} />
                            <Route path="/dashboards" component={DashBoards} />
                            <Route path="/orders" component={Orders} />
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
const ParkingLots = () => (
    <div>
        <h2>ParkingLots</h2>
    </div>
);

const ParkingBoys = () => (
    <div>
        <h2>ParkingBoys</h2>
    </div>
);

const DashBoards = () => (
    <div>
        <h2>DashBoards</h2>
    </div>
);

const Orders = () => (
    <div>
        <h2>Orders</h2>
    </div>
);