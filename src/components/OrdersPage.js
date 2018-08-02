import React, { Component } from 'react';
import MenuList from './MenuList';
import { BrowserRouter, Route } from "react-router-dom";
import Employees from '../containers/EmployeesContainer';
import Parkinglots from '../containers/ParkingLotsContainer'
import Parkingboys from '../containers/ParkingBoysContainer'
// import Dashboards from '../containers/ParkingLotDetailsContainer'
import Dashboards from '../components/Dashboards'
import Orders from '../containers/OrdersContainer'
import { Layout, Menu, Col,Avatar } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export default class OrdersPage extends Component{
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
                            <MenuList/>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Route path="/employees" component={Employees} />
                            <Route path="/parkingLots" component={Parkinglots} />
                            <Route path="/parkingboys" component={Parkingboys} />
                            <Route path="/dashboards" component={Dashboards} />
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