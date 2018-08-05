import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from "react-router-dom";
import store from "../index";
import employeesApi from "../API/EmployeesApi";
import parkingLotApi from '../API/ParkingLotsApi'
import DashBoardsApi from '../API/DashBoardsApi'
import parkingBoyApi from '../API/ParkingBoysApi'
import order from '../API/orderApi'

export default class MenuList extends Component {
    constructor(props) {
        super(props);
    }
    reflushEmployee=()=>{
        employeesApi.init(store.dispatch);
    };
    reflushParkinglot=()=>{
        parkingLotApi.init(store.dispatch);
    };
    reflushParkingboy=()=>{
        parkingBoyApi.init(store.dispatch);
    };
    reflushDashBoards=()=>{
        DashBoardsApi.init(store.dispatch);
    };
    reflushOrder=()=>{
        order.init(store.dispatch);
    };
    render() {
        console.log(window.location.pathname);
        return (
            <Menu defaultSelectedKeys={[window.location.pathname]} >
                {window.localStorage.roles==="管理员"&&
                <Menu.Item key="/manager/employees" onClick={()=>this.reflushEmployee()}>
                    <Link to="/manager/employees"><Icon type="form"/>员工管理</Link>
                </Menu.Item>}
                <Menu.Item key="/manager/parkinglots" onClick={()=>this.reflushParkinglot()}>
                    <Link to="/manager/parkinglots"><Icon type="form"/>停车场管理</Link>
                </Menu.Item>
                <Menu.Item key="/manager/parkingboys" onClick={()=>this.reflushParkingboy()}>
                    <Link to="/manager/parkingboys"><Icon type="form"/>停车员管理</Link>
                </Menu.Item>
                <Menu.Item key="/manager/dashboards" onClick={()=>this.reflushDashBoards()}>
                    <Link to="/manager/dashboards"><Icon type="form"/>停车场Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="/manager/orders" onClick={()=>this.reflushOrder()}>
                    <Link to="/manager/orders"><Icon type="form"/>订单管理</Link>
                </Menu.Item>
            </Menu>
        );
    }
}
