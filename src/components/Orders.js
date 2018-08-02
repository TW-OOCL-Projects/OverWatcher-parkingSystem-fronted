import React, {Component} from 'react';
import {Table, Input, Select, Col, Icon} from 'antd';

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
        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        const datas = (this.props.orders).map((order, index) => {
            const {id, carId, type, status} = order;
            return {key: index, id, carId, type, status, command: status}
            // if(status==="无人处理"){
            //     return {key:index ,id,carId,type,status,command:status}
            // }else{
            //     return {key:index ,id,carId,type,status,command:status}
            // }
        });

        return (
            <div>
                <Col span={204} style={{textAlign: "right"}}>
                    <Select defaultValue="name" style={{width: 120}} onChange={handleChange}>
                        <Option value="email">Email</Option>
                        <Option value="name">Name</Option>
                        <Option value="phone">Phone</Option>
                    </Select>&nbsp;&nbsp;
                    <Search prefix={<Icon type="search" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            onSearch={value => console.log(value)} style={{width: 200}} enterButton="搜索"/>
                </Col>
                <Table bordered columns={columns} dataSource={datas} style={{marginTop: "20px"}}/>
            </div>
        );
    }
}