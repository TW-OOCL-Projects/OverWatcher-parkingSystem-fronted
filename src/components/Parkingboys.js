import React, {Component} from 'react';
import {Table, Divider, Button, Input, Select, Col, Icon, Row, Modal, Popconfirm, message} from 'antd';
import Transfers from "./Transfers";
import EditParkingByBox from "./ParkingBoyEditBox";

const Option = Select.Option;

const Search = Input.Search;


export default class ParkingBoy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: "name",
            editing: props.parkingBoys.map(emp=>false)
        };

    }

    columns = [{
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: text => <a>{text}</a>,
    }, {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    }, {
        title: '电话号码',
        dataIndex: 'phone',
        key: 'phone',
    }, {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
    }, {
        title: '操作',
        dataIndex: 'alive',
        key: 'alive',
        render: (text, record) => (
            <span>
                {record.alive ? (<Popconfirm
                        title="冻结后该停车员将无法登录，确定冻结吗？"
                        onConfirm={() => {
                            this.frozenOrActived(record)
                        }}
                    >
                        <a>冻结</a>
                    </Popconfirm>)
                    : (
                        <a onClick={() => {
                            this.frozenOrActived(record)
                        }}>激活</a>
                    )
                }
                    </span>
        ),
    }];

    edit = (record) => {
        console.log("=== 点击修改停车员信息 ===")
        console.log(this.props.parkingBoys)
        // this.setState ({
        //     editing:[1,1,1,1]
        // });
        console.log(this.state)
        this.setState(preState => {

            let newState = JSON.parse(JSON.stringify(this.state));
            console.log(preState)
            console.log(record)

            newState.editing[record.key] = true

            return newState
        })
        console.log(this.state)

    }

    finishActivated = () => {
        message.success('激活成功', 1);
    }
    finishFrozen = () => {
        message.success('冻结成功', 1);
    }
    frozenOrActived = (record) => {
        console.log("=== 冻结或激活的Parking Boy ===")
        console.log(record)
        const aliveStatus = !record.alive
        if (record.alive) {
            this.props.frozenOrUnfrozen(record.id, aliveStatus, this.finishFrozen)
        } else {
            this.props.frozenOrUnfrozen(record.id, aliveStatus, this.finishActivated)
        }
    }


    generateTransfer = (e) => {
        console.log("=============================== e =================================")
        console.log(this.props.parkingLots)
        const parkinglotLeftData = this.props.parkingLots.filter(lot =>
            (lot.status === "开放" && (lot.userId === 0))
        )
        const parkinglotRightData = this.props.parkingLots.filter(lot =>
            (lot.status === "开放" && (lot.userId === e.id))
        )
        console.log("=============================== after =================================")
        console.log(parkinglotLeftData);
        console.log(parkinglotRightData);
        return (
            <p style={{textAlign: "center", margin: 0}}><Transfers left={parkinglotLeftData} right={parkinglotRightData}
                                                                   id={e.id}/></p>)
    }

    selectedByConditions(value, selected) {
        if (value === "") {
            alert("请输入文本");
        } else {
            this.props.selectedParkingBoysByValue(value, selected);
        }
    }



    render() {
        // console.log("=== =============== ===")
        // console.log(this.props.parkingBoys)
        //
        // this.setState({
        //     editing:this.props.parkingBoys.map(boy=>false)
        // })
        // console.log(this.state.editing)

        const editing= this.props.parkingBoys.map(emp=>false);
        const datas = (this.props.parkingBoys).map((boy, index) => {
            const {id, name, email, phone, status, role,alive} = boy;
            return {key: index, id, name, email, phone, status, role,alive}
        });
        return (
            <div>
                <Row>
                    <Col span={4} style={{textAlign: "left"}}></Col>
                    {/* <Col span={8}></Col> */}
                    <Col span={16} offset={4} style={{textAlign: "right"}}>
                        <Select defaultValue={this.state.selected} style={{width: 120}} onChange={value => {
                            this.setState({
                                selected: value
                            })
                        }}>
                            <Option value="email">邮件</Option>
                            <Option value="name">姓名</Option>
                            <Option value="phone">电话</Option>
                            <Option value="status">状态</Option>
                        </Select>&nbsp;&nbsp;
                        <Search prefix={<Icon type="search" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                onSearch={value => this.selectedByConditions(value, this.state.selected)}
                                style={{width: 200}} enterButton="搜索"/>
                    </Col>
                </Row>

                <Table
                    bordered
                    columns={this.columns}
                    expandedRowRender={this.generateTransfer}
                    dataSource={datas}
                />
            </div>
        );
    }


}