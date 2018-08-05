import React, { Component } from 'react';
import { Table, Divider,Button,Input, Select,Row, Col,Icon,Modal} from 'antd';
import {createStore} from "redux";
import rootReducer from "../reducers";
import ParkingLotsApi from "../API/ParkingLotsApi";
import WrappedParkingLotForm from '../containers/NewParkingLotContainer'
import {message} from "antd/lib/index";

const Option = Select.Option;

const Search = Input.Search;

export default class Parkinglots extends Component{

    state = {
        selected: "name"
    };
    constructor(props) {
        super(props);
        this.columns = [{
            title: 'Id',
            dataIndex: 'parkingLotId',
            key: 'parkingLotId',
            render: text => <a>{text}</a>,
        }, {
            title: '名称',
            dataIndex: 'parkingLotName',
            key: 'parkingLotName',
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
        }, {
            title: '操作',
            key: 'command',
            render: (text, record) => {
                if(record.size===record.initSize){
                    return(
                        <span>
                            <a onClick={() =>this.update(record.parkingLotId, record.status)}>{record.status=="开放" ? '关闭' : '开放'}</a>
                        </span>
                    )}
            },
        }];
    }

    update=(parkinglotId,bfstatus)=>{
        // console.log(parkinglotId)
        let parkinglotStatus="";
        if(bfstatus == '开放'){
            parkinglotStatus = "关闭"
        }else {
            parkinglotStatus = "开放"
        }
        // console.log(parkinglotStatus)
        this.props.alterParkinglotStatus(parkinglotId,parkinglotStatus)
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    // handleOk = (e) => {
    //     console.log(e);
    //     this.setState({
    //         visible: false,
    //     });
    // };
    hideModal = () =>{
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render(){
        const datas=(this.props.Parkinglots).map((lot,index)=>{
            const {parkingLotId,parkingLotName,size,status,initSize}=lot;
            return {key:index ,parkingLotId,parkingLotName,size,status,initSize}
        });

        const store = createStore(rootReducer);
        ParkingLotsApi.init(store.dispatch);
        const columns = this.columns;
        return(
            <div>
                <Row>
                    <Col span={4} style={{textAlign:"left"}}><Button onClick={this.showModal} type="primary"> 新建停车场 </Button></Col>
                    <Modal
                        title="新建停车场"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={null}
                    >
                        <WrappedParkingLotForm hideModal={this.hideModal}/>
                    </Modal>
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
            message.error("请输入搜索条件！",2);
        } else {
            this.props.selectedParkingLotsByValue(value, selected);
        }
    }
}