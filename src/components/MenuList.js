import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

export default class MenuList extends Component {

  render() {
    return (
        <Menu defaultSelectedKeys={['1']} >
            <Menu.Item key="1" ><Icon type="form" />员工管理</Menu.Item>
            <Menu.Item key="2" ><Icon type="form" />停车场管理</Menu.Item>
            <Menu.Item key="3" ><Icon type="form" />停车员管理</Menu.Item>
            <Menu.Item key="4" ><Icon type="form" />停车场Dashboard</Menu.Item>
            <Menu.Item key="5" ><Icon type="form" />订单管理</Menu.Item>
        </Menu>
    );
  }
}
