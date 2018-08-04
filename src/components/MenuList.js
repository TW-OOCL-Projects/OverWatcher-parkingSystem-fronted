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
        console.log(window.localStorage.roles);
        return (
            <Menu defaultSelectedKeys={['1']} >
                {window.localStorage.roles==="管理员"&&
                <Menu.Item key="1" onClick={()=>this.reflushEmployee()}>
                    <Link to="/Employees"><Icon type="form"/>员工管理</Link>
                </Menu.Item>}
                <Menu.Item key="2" onClick={()=>this.reflushParkinglot()}>
                    <Link to="/parkinglots"><Icon type="form"/>停车场管理</Link>
                </Menu.Item>
                <Menu.Item key="3" onClick={()=>this.reflushParkingboy()}>
                    <Link to="/parkingboys"><Icon type="form"/>停车员管理</Link>
                </Menu.Item>
                <Menu.Item key="4" onClick={()=>this.reflushDashBoards()}>
                    <Link to="/dashboards"><Icon type="form"/>停车场Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="5" onClick={()=>this.reflushOrder()}>
                    <Link to="/orders"><Icon type="form"/>订单管理</Link>
                </Menu.Item>
            </Menu>
        );
    }
}
