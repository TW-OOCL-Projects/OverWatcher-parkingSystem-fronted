import React, { Component } from 'react';
import { Layout } from 'antd';
import MenuList from './MenuList';
import EmployeeHead from './EmployeeHead';
import Employees from './Employees';
const { Header, Sider, Content } = Layout;

export default class EmployeeManagerInterface extends Component{
    render(){
        return(
            <Layout>
                <Header><EmployeeHead/></Header>
                <Layout>
                    <Sider><MenuList/></Sider>
                    <Content><Employees/></Content>
                </Layout>
            </Layout>
        );
    }
}