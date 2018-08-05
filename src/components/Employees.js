import React, {Component} from 'react';
import {Table, Divider, Button, Input, Select, Row, Col, Icon, Modal, Popconfirm,message} from 'antd';
import WrappedNormalLoginForm from "../containers/NewEmployeeContainer";

const Option = Select.Option;

const Search = Input.Search;


export default class Employees extends Component {
    constructor(props) {
        super(props)
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
    },
        {
            title: '职务',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: '操作',
            dataIndex: 'alive',
            key: 'alive',
            render: (text, record) => (
                <span>
                        <a className="ant-dropdown-link">修改 </a>
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
                            <a onClick={()=>{
                                this.frozenOrActived(record)
                            }}>激活</a>
                        )
                    }
                    </span>
            )
        }];
    finishActivated=()=>{
        message.success('激活成功', 1);
    }
    finishFrozen=()=>{
        message.success('冻结成功', 1);
    }
    frozenOrActived = (record) => {
        console.log("员工表格\n---------------------------")
        console.log(record)
        const aliveStatus=!record.alive
        if (record.alive) {
            this.props.frozenOrUnfrozen(record.id,aliveStatus,this.finishFrozen)
        }else {
            this.props.frozenOrUnfrozen(record.id,aliveStatus,this.finishActivated)
        }
    }

    state = {
        visible: false,
        selected: "name",
    };

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
    hideModal = () => {
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

    render() {
        const datas = (this.props.Employees).map((emp, index) => {
            const {id, name, email, phone, role, alive} = emp;
            return {key: index, id, name, email, phone, role, alive}
        });

        return (
            <div>
                <Row>
                    <Col span={4} style={{textAlign: "left"}}><Button onClick={this.showModal}
                                                                      type="primary"> 新建员工 </Button></Col>
                    <Modal
                        title="新建员工"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={null}
                    >
                        <WrappedNormalLoginForm hideModal={this.hideModal}/>
                    </Modal>
                    <Col span={16} offset={4} style={{textAlign: "right"}}>
                        <Select defaultValue={this.state.selected} style={{width: 120}} onChange={value => {
                            this.setState({
                                selected: value
                            })
                        }}>
                            <Option value="email">邮箱</Option>
                            <Option value="name">姓名</Option>
                            <Option value="phone">手机号</Option>
                            <Option value="role">职务</Option>
                        </Select>&nbsp;&nbsp;
                        <Search prefix={<Icon type="search" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                onSearch={value => this.selectedByConditions(value, this.state.selected)}
                                style={{width: 200}}
                                enterButton="搜索"/>
                    </Col>
                </Row>
                <Table bordered columns={this.columns} dataSource={datas} style={{marginTop: "20px"}}/>
            </div>
        );
    }

    selectedByConditions(value, selected) {
        if (value === "") {
            alert("请输入文本");
        } else {
            this.props.selectedEmployeeByValue(value, selected);
        }
    }
}