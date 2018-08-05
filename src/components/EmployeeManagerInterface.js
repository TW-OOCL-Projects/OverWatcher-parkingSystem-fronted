import React, {Component} from 'react';
import MenuList from './MenuList';
import {BrowserRouter, Route} from "react-router-dom";
import Employees from '../containers/EmployeesContainer';
import Parkinglots from '../containers/ParkingLotsContainer'
import Parkingboys from '../containers/ParkingBoysContainer'
import Dashboards from '../containers/DashBoardsContainer'
import Orders from '../containers/OrdersContainer'
import {Avatar, Col, Layout, Menu,Button,Icon,message,Popconfirm} from 'antd';
import axios from "axios";

const { Header, Content, Footer, Sider } = Layout;
let url = `https://over-back.herokuapp.com`;
export default class EmployeeManagerInterface extends Component{
    logout=()=>{
        message.loading('正在登出帐号..', 2)
            .then(() => {
                window.localStorage.roles = undefined;
                axios({
                    method: 'put',
                    url: `${url}/logout`,
                    data:{ id:window.localStorage.id}
                });
                this.props.history.push('/');
                message.success('退出成功！', 2.5);
            });
    };
    render(){
        console.log(window.localStorage.roles);
        if(window.localStorage.roles === "undefined"){
            this.props.history.push('/')
        }
        let role = window.localStorage.roles;
        let auth = true;
        if (role !== "管理员" && role !== "经理") {
            auth = false;
            // return (<div style={{fontSize:"20px"}}>抱歉，您没有权限访问！</div>);
        }

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
                        Welcome to OverWatcher Parking System!
                    </Col>
                    <Col span={6} offset={6} style={{textAlign:"right"}}>
                        <Avatar style={{ backgroundColor: '#1890ff' }} icon="user"/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{color:"#fff"}}>
                            您好，{window.localStorage.username} [{window.localStorage.roles}]！
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Popconfirm placement="left" title={"您确认要退出登录吗？"} onConfirm={this.logout} okText="Yes" cancelText="No">
                        <Button  type="primary">
                            <Icon type="poweroff" /> 退出登录
                        </Button>
                    </Popconfirm>
                        </Col>
                    </Menu>
                </Header>
                <Content style={{padding: '50px 150px'}}>
                    <BrowserRouter>

                        {auth === true ? (
                            <Layout style={{padding: '24px 0', background: '#fff'}}>
                                <Sider width={200} style={{background: '#fff'}}>
                                    <MenuList match={this.props.match}/>
                                </Sider>
                                <Content style={{padding: '0 24px', minHeight: 280}}>
                                    <Route path="/manager/employees" component={Employees}/>
                                    <Route path="/manager/parkinglots" component={Parkinglots}/>
                                    <Route path="/manager/parkingboys" component={Parkingboys}/>
                                    <Route path="/manager/dashboards" component={Dashboards}/>
                                    <Route path="/manager/orders" component={Orders}/>
                                </Content>
                            </Layout>
                        ) : (
                            <div style={{fontSize: "20px"}}>抱歉，您没有权限访问！</div>
                        )}

                    </BrowserRouter>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Parking System ©2018 Created by OOCL.ITA.OverWatcher
                </Footer>
            </Layout>
        );
    }
}