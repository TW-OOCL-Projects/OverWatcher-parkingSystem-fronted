import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from "react-router-dom";
export default class MenuList extends Component {

  render() {
    return (
        <Menu defaultSelectedKeys={['1']} >
            <Menu.Item key="1" >
                <Link to="/Employees"><Icon type="form" />员工管理</Link>
            </Menu.Item>
            <Menu.Item key="2" >
                <Link to="/ParkingLots"><Icon type="form" />停车场管理</Link>
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
    );
  }
}
