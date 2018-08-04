import React, {Component} from 'react';
import {Table, Divider, Button, Input, Select, Col, Icon, Row} from 'antd';
import Transfers from "./Transfers";

const Option = Select.Option;

const Search = Input.Search;

const columns = [{
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
    key: 'command',
    render: (text, record) => (
        <span>
        <a className="ant-dropdown-link">修改 </a>
        <Divider type="vertical"/>
        <a>冻结</a>
      </span>
    ),
}];


export default class Employees extends Component {
    state = {
        selected: "name"
    };

    render() {

        const datas = (this.props.parkingBoys).map((boy, index) => {
            const {id, name, email, phone, status, role} = boy;
            return {key: index, id, name, email, phone, status, role, description: <Transfers/>}
        });
        return (
            <div>
                <Row>
                    <Col span={4} style={{textAlign: "left"}}><Button type="primary"> 新 建 </Button></Col>
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
                                onSearch={value => this.selectedByConditions(value,this.state.selected)} style={{width: 200}} enterButton="搜索"/>
                    </Col>
                </Row>
                <Table
                    bordered
                    columns={columns}
                    expandedRowRender={record => <p style={{textAlign: "center", margin: 0}}>{record.description}</p>}
                    dataSource={datas}
                />
            </div>
        );
    }
    selectedByConditions(value,selected){
        if (value === "") {
            alert("请输入文本");
        } else {
            this.props.selectedParkingBoysByValue(value, selected);
        }
    }
}