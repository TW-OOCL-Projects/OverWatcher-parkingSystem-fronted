import React, { Component } from 'react';
import { Table, Divider,Button,Input, Select,Row, Col,Icon} from 'antd';
import {createStore} from "redux";
import rootReducer from "../reducers";
import ParkingLotsApi from "../API/ParkingLotsApi";


const Option = Select.Option;

const Search = Input.Search;

const columns = [{
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: text => <a >{text}</a>,
}, {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '剩余车位',
    dataIndex: 'size',
    key: 'size',
}, {
    title: '初始车位',
    dataIndex: 'initSize',
    key: 'initSize',
}, {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
},{
    title: '操作',
    key: 'command',
    render: (text, record) => (
        <span>
        <a  className="ant-dropdown-link">修改 </a>
        <Divider type="vertical" />
        <a >关闭</a>
        </span>
    ),
}];

export default class Parkinglots extends Component{

    state = {
        selected: "name"
    };

    render(){
        const datas=(this.props.Parkinglots).map((lot,index)=>{
            const {id,name,size,status,initSize}=lot;
            return {key:index ,id,name,size,status,initSize}
        });

        const store = createStore(rootReducer);
        ParkingLotsApi.init(store.dispatch);
        return(
            <div>
                <Row>
                    <Col span={4} style={{textAlign:"left"}}><Button onClick={this.handleAdd} type="primary"> 新 建 </Button></Col>
                    {/* <Col span={8}></Col> */}
                    <Col span={16} offset={4} style={{textAlign:"right"}}>
                        <Select defaultValue={this.state.selected} style={{ width: 150 }} onChange={(value)=>{
                            this.setState({
                                selected:value
                            })
                        }}>
                            <Option value="name">名字</Option>
                            <Option value="size-less">剩余容量不大于</Option>
                            <Option value="size-more">剩余容量不小于</Option>
                            <Option value="status">状态</Option>
                        </Select>&nbsp;&nbsp;
                        <Search prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                onSearch={value => this.selectedByConditions(value,this.state.selected)} style={{ width: 200 }} enterButton="搜索"/>
                    </Col>
                </Row>
                <Table bordered columns={columns} dataSource={datas} style={{marginTop:"20px"}}/>
            </div>
        );
    }

    selectedByConditions(value,selected){
        if (value === "") {
            alert("请输入文本");
        } else {
            this.props.selectedParkingLotsByValue(value, selected);
        }
    }
}