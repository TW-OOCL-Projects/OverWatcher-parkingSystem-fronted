import React, {Component} from 'react';
import {Table, Input, Select, Col, Icon,message} from 'antd';

const Option = Select.Option;
const Search = Input.Search;

const columns = [{
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>,
}, {
    title: '车牌号',
    dataIndex: 'carId',
    key: 'carId',
}, {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
}, {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
}, {
    title: '操作',
    key: 'command',
    render: (text, record) => {
        if (record.command === "无人处理") {
            return (
                <span>
        <a className="ant-dropdown-link">指派</a>
        </span>
            )
        }
    },
}];


export default class Orders extends Component {
    render() {
        const datas = (this.props.orders).map((order, index) => {
            const {id, carId, type, status} = order;
            return {key: index, id, carId, type, status, command: status}
        });
        let selected = "type";
        return (
            <div>
                <Col span={204} style={{textAlign: "right"}}>
                    <Select defaultValue="类型" style={{width: 120}} onChange={value=>selected=value}>
                        <Option value="type">类型</Option>
                        <Option value="status">状态</Option>
                        {/*<Option value="id">Id</Option>*/}
                    </Select>&nbsp;&nbsp;
                    <Search prefix={<Icon type="search" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            onSearch={value => this.selectedByConditions(value,selected)} style={{width: 200}} enterButton="搜索"/>
                </Col>
                <Table bordered columns={columns} dataSource={datas} style={{marginTop: "20px"}}/>
            </div>
        );
    }

    selectedByConditions(value, selected) {
        if(value===""){
            message.error('请输入搜索条件！',2);
        }else{
            this.props.selectedByValue(value,selected);
        }
    }
}