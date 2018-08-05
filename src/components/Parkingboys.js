import React, {Component} from 'react';
import {Table, Divider, Button, Input, Select, Col, Icon, Row, Modal, Popconfirm, message} from 'antd';
import Transfers from "./Transfers";
import EditEmployeeBox from "./EmployeeEditBox";

const Option = Select.Option;

const Search = Input.Search;


export default class Employees extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: "name",
            editing: props.parkingBoys.map(boy => false)
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
                        <a className="ant-dropdown-link" onClick={() => {
                            this.edit(record)
                        }}>修改 </a>
                    <Modal
                        title="修改员工信息"
                        visible={this.state.editing[record.key]}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={null}
                    >
                        <EditEmployeeBox parkingBoyMsg={record} close={this.handleCancel}
                                         editConfirm={this.props.confirm}/>
                    </Modal>
                        <Divider type="vertical"/>
                {record.alive ? (<Popconfirm
                        title="冻结后该用户将无法登录，确定冻结吗？"
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
        this.setState(preState => {
            console.log("=== 点击修改 ===")
            let newState = JSON.parse(JSON.stringify(this.state));
            console.log(newState)
            console.log(record)

            newState.editing[record.key] = true

            return newState
        })
    }

    finishActivated = () => {
        message.success('激活成功', 1);
    }
    finishFrozen = () => {
        message.success('冻结成功', 1);
    }
    frozenOrActived = (record) => {
        console.log("停车兄弟表格\n---------------------------")
        console.log(record)
        const aliveStatus = !record.alive
        if (record.alive) {
            this.props.frozenOrUnfrozen(record.id, aliveStatus, this.finishFrozen)
        } else {
            this.props.frozenOrUnfrozen(record.id, aliveStatus, this.finishActivated)
        }
    }

    handleCancel = (e) => {
        console.log("=== 模态框关闭 ===");
        console.log(e);
        this.setState({
            editing: this.props.Employees.map(emp => false),
            visible: false
        });
    };


    render() {

        const datas = (this.props.parkingBoys).map((boy, index) => {
            const {id, name, email, phone, status, role,alive} = boy;
            return {key: index, id, name, email, phone, status, role,alive}
        });
        return (
            <div>
                <Row>
                    <Col span={4} style={{textAlign: "left"}}></Col>
                    {/* <Col span={8}></Col> */}
                    <Col span={16} offset={4} style={{textAlign: "right", marginBottom: "20px"}}>
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
}