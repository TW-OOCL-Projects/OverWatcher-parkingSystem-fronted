import React, { Component } from 'react';
import { Table, Divider,Button,Input, Select,Row, Col,Icon} from 'antd';

const Option = Select.Option;

const Search = Input.Search;

const columns = [{
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: text => <a >{text}</a>,
}, {
    title: '车牌号',
    dataIndex: 'number',
    key: 'number',
}, {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
}, {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
},{
    title: '操作',
    key: 'command',
    render: (text, record) => (
        <span>
        <a  className="ant-dropdown-link">指派 </a>
        <Divider type="vertical" />
        <a >关闭</a>
        <Divider type="vertical" />
        </span>
    ),
}];

const data = [{
    key: '1',
    id:'',
    number: '000000',
    type: '取车',
    status: '存取中',
},{
    key: '2',
    id:'',
    number: '000000',
    type: '存车',
    status: '无人指派',
}];

export default class Orders extends Component{
    render(){
        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        return(
            <div>
                <Row>
                    <Col></Col>
                    {/* <Col span={8}></Col> */}
                    <Col span={16} offset={4} style={{textAlign:"right"}}>
                        <Select defaultValue="name" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="email">Email</Option>
                            <Option value="name">Name</Option>
                            <Option value="phone">Phone</Option>
                        </Select>&nbsp;&nbsp;
                        <Search prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                onSearch={value => console.log(value)} style={{ width: 200 }} enterButton="搜索"/>
                    </Col>
                </Row>
                <Table bordered columns={columns} dataSource={data} style={{marginTop:"20px"}}/>
            </div>
        );
    }
}